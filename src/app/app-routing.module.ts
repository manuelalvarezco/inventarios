import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'auth' },
      {
        path: 'auth', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products', 
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'statistics', 
        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: 'documents', 
        loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)
      },
      {
        path: 'settings', 
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
