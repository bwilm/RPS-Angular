import {
  Component
} from '@angular/core';
import { tick } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deImage: string;
  deMessage: string;
  userInput: '';

clearFields(){
  this.deImage = null;
  this.deMessage = null
  }


  onSubmit(userInput)
  {
   // this.clearFields()

    try{
    this.deMessage =   this.getAiResponse(userInput).display
    this.deImage =  this.getAiResponse(userInput).gameImage

    }
    catch(error){
      console.log(error)
    }

  }


  getAiResponse = function getAiResponse(userInput) {

    let gameElements = ['rock', 'paper', 'scissors']

    let displayElements = {
      gameImage: 'string',
      display: 'string'
    }

    let gameChoice = gameElements[Math.floor(Math.random() * gameElements.length)]

    switch (gameChoice) {

      case 'rock':
      {
        displayElements.gameImage = '../assets/images/rock.jpg';

        (gameChoice === userInput ? displayElements.display = 'draw!': userInput === 'paper' ? displayElements.display = 'You Win!' : displayElements.display = "You Lose!")
            break;
        }

      case 'paper':
      {
        displayElements.gameImage = '../assets/images/paper.png';

        (gameChoice === userInput ? displayElements.display = 'draw!': userInput === 'rock' ? displayElements.display = 'You Lose!' : displayElements.display = "You Win!")
        break;
      }

      case 'scissors':
      {
        displayElements.gameImage = '../assets/images/scissors.jpg';

        (gameChoice === userInput ? displayElements.display = 'draw!': userInput === 'rock' ? displayElements.display = 'You Win!' : displayElements.display = "You Lose!")

      break;
      }
    }
    return displayElements;
  };




}
