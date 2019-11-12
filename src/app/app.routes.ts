import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InformacionComponent } from './components/informacion/informacion.component';

const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Products', component: ProductosComponent },
    { path: 'Informacion/:id', component: InformacionComponent},
    { path: '**', pathMatch:'full', redirectTo: 'Home' },
    { path: '', pathMatch:'full', redirectTo: 'Home' }
];

export const appRouting = RouterModule.forRoot(routes);