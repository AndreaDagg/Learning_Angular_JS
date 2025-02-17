import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  //@Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;


  printUserInfo(){
    //console.log('User id:', this.id);
    console.log('User name:', this.name);
  }

}
