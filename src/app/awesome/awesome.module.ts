import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeCreateComponent } from './awesome-create/awesome-create.component';
import { AwesomeEditComponent } from './awesome-edit/awesome-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {path: '', component: AwesomeListComponent},
  {path: 'create', component: AwesomeCreateComponent},
  {path: 'edit/:id', component: AwesomeEditComponent}
];
@NgModule({
  declarations: [AwesomeListComponent, AwesomeCreateComponent, AwesomeEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AwesomeModule { }
