import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './components/category/category.component';
import { ContributorComponent } from './components/contributor/contributor.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryInfoComponent } from './components/category-info/category-info.component';
import { ImagesService } from './shared/services/images-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CategoriesComponent,
    CategoryComponent,
    ContributorComponent,
    CategoryInfoComponent
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
