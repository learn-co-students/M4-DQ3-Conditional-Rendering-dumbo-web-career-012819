import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    isClicked : false,
    option :  ''
  };

  handleClick = (e) => {
    let id = e.target.id;
      this.setState({
          option : id
      })
  };

  render() {

      let detailsToDisplay;

      const id = this.state.option;
      if (id === 'profile') {
          detailsToDisplay = <Profile/>
      } else if (id === 'photo') {
          detailsToDisplay = <Photos/>
      } else if (id === "cocktail"){
        detailsToDisplay = <Cocktails/>
      } else (detailsToDisplay = <Pokemon/>);

      return (
          <div>
              <MenuBar handleClick={this.handleClick}/>
              {detailsToDisplay}
          </div>
      )
  }

}

export default MainBox;
