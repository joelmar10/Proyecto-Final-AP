import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  lapsoE: string;
  private tokenService: TokenService;

  isLogged = false;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.router.navigate(['']);
    }
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.lapsoE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
