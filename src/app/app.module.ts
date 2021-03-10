import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ImagesService } from './shared/services/images-service.service';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ContributorComponent } from './components/contributor/contributor.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CategoriesComponent,
    CategorieComponent,
    ContributorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
