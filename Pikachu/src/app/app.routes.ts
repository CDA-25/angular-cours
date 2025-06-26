import { Routes } from '@angular/router';
import {Home} from '../home/home';
import {Admin} from '../admin/admin';
import {Children} from '../children/children';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'admin', component: Admin, children:  [
      { path: 'children', component: Children },
    ] }
];