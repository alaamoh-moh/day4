import { Block } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tablehead=['# ', 'Name' , 'Username','phone','#']
  btn=['details','delete','update']
people =[
  { number:'1',
    name :'Ayoub',
    username:'ghozi',
    phone:'010100'
  },
   { number:'2',
     name :'Ahmed',
    username:'ghozi',
    phone:'010100'
  },
  {  number:'3',
      name :'Ayoub',
     username:'ghozi',
     phone:'010100',
    },
    
] ;


}
