import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Admin } from '../admin/admin';
import { Toto } from '../toto/toto';

//pour crée des routes
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'admin', component: Admin,
        //ça c'est un enfant de admin, il faut mettre le router outlet dans admin.html et faire l'import dans l'admin.ts
        children: [
            { path: 'toto', component: Toto }
        ]
    }
];
