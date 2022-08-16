import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const { name } = useParams();
  //   const url = `https://restcountries.com/v2/name/${name}`;

  const fetchedCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`);
    const data = await res.json();
    setCountry(data);
  };
  setIsLoading(false);
  useEffect(() => {
    fetchedCountryData();
  }, [name]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <Link to="/">&larr; Back</Link>
          {country.map(({ name, capital, region, topLevelDomain }) => (
            <article key={name}>
              <h2>
                {name}, <span>{capital}</span>
              </h2>
              <ul>
                <li>
                  Region: <span>{region}</span>
                </li>
                <li>
                  Top Level Domain: <span>{topLevelDomain}</span>
                </li>
              </ul>
            </article>
          ))}
        </section>
      )}
    </>
  );
};

export default SingleCountry;
