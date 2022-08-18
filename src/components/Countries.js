import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v2/all";

const Country = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  const fetchedApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data);
    console.log(data);
  };

  useEffect(() => {
    fetchedApi();
  }, []);

  return (
    <>
      {" "}
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for Country "
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <section className="grid">
        {post
          .filter((item) => item.name.toLowerCase().includes(search))
          .map((item) => {
            const { name, population, region, capital, flag } = item;
            return (
              <article key={name}>
                <div>
                  <img src={flag} alt={name} />
                  <div className="details">
                    <h3>{name}</h3>
                    <p>
                      Population: <span className="boold">{population}</span>
                    </p>
                    <p>
                      Region: <span className="boold">{region}</span>
                    </p>
                    <p>
                      Capital: <span className="boold">{capital}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default Country;
