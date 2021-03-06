import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReinitializePasswordComponent } from './reinitialize-password/reinitialize-password.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ListeGroupComponent } from './liste-group/liste-group.component';

export const PATH_HOME: string = '';
export const PATH_GROUP: string = 'groups';
export const PATH_CONTACT: string = 'contacts';


export const routes: Routes = [
  { path: PATH_HOME, redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reinitialize-password', component: ReinitializePasswordComponent },
  { path: 'edit-user', component: EditUserComponent }, //TODO: pas accessible si pas token,
  { path: PATH_GROUP, component: ListeGroupComponent },

  {
    path: PATH_GROUP + '/:groupId',
    component : ListContactComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: PATH_CONTACT},
      { path: PATH_CONTACT + '/create-contact', component: CreateContactComponent },      
      { path: PATH_CONTACT + '/:contactId', component: ContactInfoComponent },
      { path: PATH_CONTACT + '/:contactId' + '/edit-contact', component: EditContactComponent }
      
    ]
  }
  
];
