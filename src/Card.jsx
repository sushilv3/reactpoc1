import React from 'react';
import Images from './images';
function Card(props){
    return (
      <>
  
      <div className="cards">
        <div className="card">
    {/*<img src={props.imgsrc} alt="moviePic" className="card__img" />*/}
           <Images imgsrc={props.imgsrc} />
          <div className="card__info">
            <span className="card__category">{props.title} </span>
            <h3 className="card__title">{props.sname}  </h3>
            <a href={props.link} target="_blank">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
   </>
    );
  }

  export default Card;