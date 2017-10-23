import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';


const RouterComponent = () => {
  return(
    <Router sceneStyle={{backgroundColor:'white'}}>
      <Scene key="root" hideNavBar>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
