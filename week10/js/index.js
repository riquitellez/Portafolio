import {getJSON,getLocation} from './utilities.js';
import QuakesController from './QuakesController.js';

const myQuakeController = new QuakesController('#quakeList');
myQuakeController.init();

