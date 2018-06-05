import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import WaterfallCard from './components/WaterfallCard'
import waterfall from './waterfall.json'
import './App.css';

// set state at 0 to start game
class App extends Component {
  state = {
    waterfall,
    clickedWf: [],
    score: 0
  }

  // imageClick takes waterfall out of array
  imageClick = event => {
    const currentWf = event.target.alt
    const WfAlreadyClicked =
      this.state.clickedWf.indexOf(currentWf) > -1

  // if user clicks on a picture that has been previously seleceted, the game restarts
  if (WfAlreadyClicked) {
    this.setState({
      waterfall: this.state.waterfall.sort(function (a, b) {
        return 0.5 - Math.random()
      }),
      clickedWf: [],
      score: 0
    })
    alert("Don't go chasing waterfalls!!!")
    // if you click an picture that hasn't been chosen, you score a point and the cards are restarted
  } else {
    this.setState({
      waterfall: this.state.waterfall.sort(function (a, b) {
        return 0.5 - Math.random()
      }),
      clickedWf: this.state.clickedWf.concat(
        currentWf
      ),
      score: this.state.score + 1
    },
  // if you get all 12 pictures correct, you win the game and it restarts
  () => {
    if (this.state.score === 12) {
      alert("You just won a MILLION dollars!!!")
      this.setState({
        waterfall: this.state.waterfall.sort(function(a,b){
          return 0.5 - Math.random()
        }),
        clickedWf: [],
        score: 0
      })
      }
      }
      )
      }
      }
  render() {
    return (
     <div>
        <Jumbotron />
        <Navbar
        score = {this.state.score}
        />
        <div className="wrapper">
        {this.state.waterfall.map(waterfall => (
         <WaterfallCard
         imageClick = {this.imageClick}
         id = {waterfall.id}
         key = {waterfall.id}
         image = {waterfall.image}
         /> 
        ))}
        </div>
        </div>
    );
  }
}

export default App;