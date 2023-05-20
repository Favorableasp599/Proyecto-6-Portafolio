import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <section className='about'>
      <div className='container flex'>
        {about.map((val, index) => (
          <React.Fragment key={index}>
            <div className='left' data-aos='fade-down-right'>
              <img src={val.cover} alt='' />
            </div>
            <div className='right' data-aos='fade-down-left'>
              <Heading title='Acerca de mí' />
              <p>{val.desc}</p>
              <p>{val.desc1}</p>
              <button>Descargar currículum</button>
              <button className='primaryBtn'>Descargar currículum</button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
