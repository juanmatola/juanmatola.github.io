import { mainAnimation } from './modules/mainAnimation.js';
import { AnimatedNavbar } from './modules/AnimatedNavbar.js';

window.onscroll = mainAnimation;

const nav = new AnimatedNavbar('myNav', 'openNav', '.menu__link');