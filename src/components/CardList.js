import React from "react";
import Card from './Card';

const CardList = ({poses}) => {
    return (
      <div className="flex flex-wrap justify-center">
        {
          poses.map((pose,i) => {
            return (
              <Card key={i} id={poses[i].id} name={poses[i].name} sanskrit={poses[i].sanskrit} img={poses[i].img}/>
            )
          })
        }
      </div>
        
    )
}
export default CardList