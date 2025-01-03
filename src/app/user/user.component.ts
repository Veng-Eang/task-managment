import { Component, EventEmitter, Input , Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../share/card/card.component";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Decoration
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  get imagePath(){
    return 'images/users/'+this.user.avatar;
  }
  
  onSelectUser(){
    this.select.emit(this.user.id);
  }
  // Signal
  // =======
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=>{
  //   return 'images/users/'+this.avatar();
  // });

}
