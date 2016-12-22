import React, { Component } from 'react';
import './App.css';

class App extends Component {
      render() {
          const authurl = "https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D4648883%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522authFlowName%2522%253A%2522default%2522%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A5000%252Fauth%2522%252C%2522currentSubStage%2522%253A0%252C%2522appId%2522%253A0%252C%2522state%2522%253A%2522abcde12345%2522%252C%2522scope%2522%253A%2522r_basicprofile%2522%252C%2522creationTime%2522%253A1482137102675%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D4648883%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522authFlowName%2522%253A%2522default%2522%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A5000%252Fauth%2522%252C%2522currentSubStage%2522%253A0%252C%2522appId%2522%253A0%252C%2522state%2522%253A%2522abcde12345%2522%252C%2522scope%2522%253A%2522r_basicprofile%2522%252C%2522creationTime%2522%253A1482137102675%257D";

          return (
      <div className="App">

          <a href={authurl}>Login to Linkedin</a>
      </div>
    );
  }
}

export default App;
