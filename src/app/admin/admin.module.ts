// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Proyect
import { DogsComponent } from './components/dogs/dogs.component';
import { WhitespaceDirective } from '../shared/directives/whitespace.directive';



@NgModule({
  declarations: [
    DogsComponent, 
    WhitespaceDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class AdminModule { }
