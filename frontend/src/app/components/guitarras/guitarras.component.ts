import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {GuitarraService} from '../../services/guitarra.service';
import { Guitarra } from 'src/app/models/guitarra';



@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.css'],
  providers: [GuitarraService]
})
export class GuitarrasComponent implements OnInit {

  constructor(private guitarraService: GuitarraService) { }
    
  ngOnInit(): void {
  }

  addGuitarra(form: NgForm){
    console.log(form.value);
  }
    resetForm(form?: NgForm){
      if(form){
      form.reset();
      this.guitarraService.selectedGuitarra = new Guitarra();
  }


}
}
