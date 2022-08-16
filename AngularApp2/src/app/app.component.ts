import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp2';
  newAthleteName = "";
  newAthleteSport = "";
  newAthleteIsActive = false;
  athleteArray : Athlete[]=[
    {
      name: "Bill Russell",
      sport: "NBA Basketball",
      isActive: false
    },
    {
      name: "Gabriela Sabatini",
      sport: "WTA Tennis",
      isActive: false
    },
    {
      name: "Simone Biles",
      sport: "Olympic Gymnast",
      isActive: true
    }
  ];



  // constructor() {
  //   console.log("Iniating angular AppComponent class");
  //   setTimeout(() => {
  //     this.disableNewMessage = !this.disableNewMessage;
  //   }
  //   , 2000)
  // }

  // getDisableNewMessage() {
  //   return this.disableNewMessage;
  // }

  onCreateAthlete() {
    let athlete : Athlete = {
      name: this.newAthleteName,
      sport: this.newAthleteSport,
      isActive: this.newAthleteIsActive
    }
    this.athleteArray.push(athlete);
  }
}
interface Athlete{
  name : string;
  sport: string;
  isActive: boolean;
}

