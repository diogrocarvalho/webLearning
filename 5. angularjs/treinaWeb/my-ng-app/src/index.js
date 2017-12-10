import angular from 'angular';

import {hello} from './app/hello';
import {myComponent} from './app/components/myComponent';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', [hello, myComponent]);
