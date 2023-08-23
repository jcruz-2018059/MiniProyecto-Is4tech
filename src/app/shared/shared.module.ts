import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhitespaceDirective } from './directives/whitespace.directive';



@NgModule({
  declarations: [
    WhitespaceDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
