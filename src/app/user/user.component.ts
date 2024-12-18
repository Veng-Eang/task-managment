import { Component, EventEmitter, Input , Output } from '@angular/core';

interface User {
  id:string;
  avatar:string;
  name:string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Decoration
  @Input({required:true}) user!:User;
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
