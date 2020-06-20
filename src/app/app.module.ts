import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AliasComponent } from './alias/alias.component';
import { CarsComponent } from './cars/cars.component';
import { PersonComponent } from './person/person.component';
import { PetComponent } from './pet/pet.component';
import { CelularComponent } from './celular/celular.component';
import { CelItemComponent } from './cel-item/cel-item.component';
import { CamContainerComponent } from './cam-container/cam-container.component';
import { CamDetailComponent } from './cam-detail/cam-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AliasComponent,
    CarsComponent,
    PersonComponent,
    PetComponent,
    CelularComponent,
    CelItemComponent,
    CamContainerComponent,
    CamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
