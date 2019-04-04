import React from 'react'

const MenuBar = (props) => {

  const clickHandler = (e) => {
    if(e.target.tagName === "A")
    {
      props.stateFunction(e.target.id);
    }
  }

  return (
    <div onClick={(event) => clickHandler(event)} className="ui four item menu">
      <a  className="item" id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a className="item" id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )
}


export default MenuBar
