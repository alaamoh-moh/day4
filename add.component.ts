import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
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
  
  people1:any[]=[];
  addtable(){
  this.people1.push(this.people);
  this.people =[
    {  number:'',
      name :'',
     username:'',
     phone:'',
    },
    
  ];
  };
  
  addform(){
    var from= document.getElementById('form');
    
  };

}
