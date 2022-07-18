import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { Searchroutes } from '../routing/searchroutes';


@NgModule({
  declarations: [ 
        SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Searchroutes)
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchModule
 { }