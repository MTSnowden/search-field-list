import React from "react";
import ListToggleContainer from "../containers/ListToggleContainer";

function Item(props) {
  
  let name = "";
  let backDrop = "http://image.tmdb.org/t/p/original" + props.movie.backdrop_path;
  if(!props.movie.name) {
    name = props.movie.original_title;
  } else {
    name = props.movie.name;
  }

  return (
    <div className="item" alt="List item" style={{backgroundImage: 'url(' + backDrop + ')', height: '300px'}} >
      <div className="overlay" alt="overlay" style={{color: 'white'}}>
        <div className="title" alt="title" style={{color: 'red'}}>{name}</div>
        <div className="rating" alt="rating">{props.movie.vote_average} / 10</div>
        <div className="plot" alt="plot">{props.movie.overview}</div>
        <ListToggleContainer movie={props.movie}/>
      </div>
    </div>
  );
}

export default Item;