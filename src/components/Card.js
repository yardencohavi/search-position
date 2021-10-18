import React from 'react'

const Card = (props) => {
    const {name, sanskrit, img} = props;
    return (
        <div className=" gray bg-washed-green br5 grow shadow-5 w-25 pa3 ma2">
            <img alt='' className="db mb2 mw-100"  src={img}/>
            <div>
                <h1 className="f5">{name}</h1>
                <p className="b mb1">Sanskrit:</p>
                <span>{sanskrit}</span>
            </div>
        </div>
    )
}

export default Card
