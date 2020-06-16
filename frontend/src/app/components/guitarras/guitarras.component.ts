import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {GuitarraService} from '../../services/guitarra.service';
import { Guitarra } from 'src/app/models/guitarra';

declare var M: any;

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.css'],
  providers: [GuitarraService]
})
export class GuitarrasComponent implements OnInit {
  public guitarras: Array<any>;
  constructor(public guitarraService: GuitarraService) {
    this.guitarras=[{id:16,modelo:"casiox99",marca:"casio",color:"negro",largo:16,
    ancho:45,peso:45,tipo:"acustica",numCuerdas:6,imagen:"https://m.media-amazon.com/images/I/81fzKTcDNEL._AC_SS350_.jpg"}];
   }
    
  ngOnInit(): void {
    this.getGuitarras();
  }

  
  addGuitarra(form: NgForm){
    this.guitarraService.postGuitarra(form.value).subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'guardado'});
    })
  }
  getGuitarras(){
    this.guitarraService.getGuitarras()
    .subscribe(res =>{
      this.guitarraService.guitarras = res as Guitarra[];
      console.log(res);
    })

  }

  resetForm(form?: NgForm){
      if(form){
      form.reset();
      this.guitarraService.selectedGuitarra = new Guitarra();
  }


}
}
