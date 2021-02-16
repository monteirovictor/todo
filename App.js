
import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

console.disableYellowBox=true;
import Home from './src/views/Home';
import Task from './src/views/Task';
//import styles from './src/views/Home/styles';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);
export default function App() {
  return <Routes/>
}

