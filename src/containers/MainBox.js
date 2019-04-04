import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {


  state = {
    display: "profile"
  }

  switchState = (newState) => {
      document.querySelector('.item.active').className = "item";
      document.querySelector(`#${newState}`).className = "item active";
      this.setState({display:newState})
  }

  componentDidMount(){
    document.querySelector(`#${this.state.display}`).className = "item active";
  }

  chooseView () {
    if(this.state.display === "profile") {
      return <Profile />
    } else if(this.state.display === "photo") {
      return <Photos />
    } else if(this.state.display === "cocktail") {
      return <Cocktails />
    } else if(this.state.display === "pokemon") {
      return <Pokemon />
    }
  }

  render() {

    /*

      Replace the code below! Depending on what menu item is selected in the menu,
      I should render either a Profile, Photos, Cocktails, or Pokemon component.
      Think of a way to track which menu item was selected.
      Which component should have state? Which component should have methods to control state?
      Where should these methods be called?

    */
    let detailsToDisplay = this.chooseView();


    return (
      <div>
        <MenuBar selected={this.state.display} stateFunction={this.switchState} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
