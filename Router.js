import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';


const RouterComponent = () => {
  return(
    <Router sceneStyle={{backgroundColor:'white'}}>
      <Scene key="root" hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={} title='Login' initial={true}/>
        </Scene>
        <Scene key='main'>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
