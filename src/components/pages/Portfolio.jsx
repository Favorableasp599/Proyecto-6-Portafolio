import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory)

  const filterItems = (selectedCategory) => {
    if (selectedCategory === "all") {
      setList(portfolio);
    } else {
      const filteredItems = portfolio.filter((item) => item.category === selectedCategory);
      setList(filteredItems);
    }
  };

  return (
    <article>
      <div className='container'>
        <Heading title='Portafolio' />
        <div className='catButton'>
          {category.map((cat, index) => (
            <button className='primaryBtn' onClick={() => filterItems(cat)} data-aos='zoom-out-down' key={index}>
              {cat}
            </button>
          ))}
        </div>
        <div className='content grid3'>
          {list.map((item, index) => (
            <div className='box' data-aos='fade-up' key={index}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='overlay'>
                <h3>{item.title}</h3>
                <br></br>
                <span>{item.name}</span>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" >
                  <button>
                    Ver en GitHub
                  </button>
                </a>
                <a href={item.link} target="_blank" rel="noopener noreferrer" >
                  <button>
                   Live demo 
                  </button>
                </a>
                <VisibilityOutlinedIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
