import React, { useEffect, useState } from "react";
import ArtTile from "./ArtTile";

function Form(props) {
  const [searchTerm, setSearchTerm] = useState(""); //What is searched for
  const [firstFetch, setFirstFetch] = useState([]);
  const [secondFetch, setSecondFetch] = useState([]); // An object made from the second fetch call with important details for each object

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm("");
    firstCall(searchTerm);
  };

  const firstCall = (url) => {
    const baseUrl = "https://api.artic.edu/api/v1/artworks/search?q=";
    fetch(baseUrl + url)
      .then((res) => res.json())
      .then((data) => {
        let copy = [];
        for (let i = 0; i < 10; i++) {
          copy.push(data.data[i].id);
        }
        console.log(copy);
        secondCall(copy);
      });

  };

  const secondCall = (results) => {
    let secondCopy = [...firstFetch];
    Promise.all(results.map(entry => {
        return fetch(`https://api.artic.edu/api/v1/artworks/` + entry)
          .then((res) => res.json())
          .then((data) => {
            secondCopy.push(data);
          });
      })
    ).then(() => {
        setSecondFetch(secondCopy)
        console.log(secondCopy)
    })
  };

  const secondDisplay = secondFetch.map((item) => {
    return <ArtTile art={item} />
})

  return (
    <div className="Form">
      <main>
        <h3>Form</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={updateSearchTerm}
            value={searchTerm}
            type="text"
            placeholer="Search"
          />
          <input type="submit" value="Find Art" />
        </form>
        {secondDisplay}
      </main>
    </div>
  );
}

export default Form;
