import {
  Component
} from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  displayMessage = this.displayMessage;
  gameImage = this.gameImage;


    onSubmit(userInput)
      {

    let gameImage = '';
    let displayMessage = '';
    var myRPSarray = ['rock','paper','scissors'];

    var randomRPS = myRPSarray[Math.floor(Math.random() * myRPSarray.length)].toString();

    switch(randomRPS)
        {
        case 'rock':
          gameImage = '../assets/images/marioRock.png';
        (
          userInput === randomRPS ? displayMessage = 'draw!'
          :
          userInput === 'paper' ? displayMessage = 'You Win!'
          :
         displayMessage = 'You Lose!'
        )
        break;
        case 'paper':
         gameImage = '../assets/images/marioPaper.png';
        (
          userInput === randomRPS ? displayMessage = 'draw!'
          :
          userInput === 'rock' ? displayMessage = 'You Lose!'
          :
          displayMessage = 'You Win!'
        )
        break;
        case 'scissors':
        gameImage = '../assets/images/marioscissors.png';
        (
          userInput === randomRPS ? displayMessage = 'draw!'
          :
          userInput === 'rock' ? displayMessage = 'You Win!'
          :
          displayMessage = 'You Lose!'
        )
        break;
      }
      this.gameImage = gameImage;
      this.displayMessage = displayMessage;
      console.log(userInput)
      console.log(displayMessage)
      console.log(gameImage)
}

}






