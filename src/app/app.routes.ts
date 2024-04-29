import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then(x => x.HomeComponent)
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/contact.component").then(x => x.ContactComponent)
  },
  {
    path: "**",
    redirectTo: ""
  }
];
