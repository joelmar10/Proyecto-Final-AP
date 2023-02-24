import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ImageProyService } from 'src/app/service/image-proy.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  img: string = '';
  proy: Proyecto;
  isLogged = false;

  constructor(private Proyecto: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router,
    public Image: ImageProyService,
    private tokenService: TokenService) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.router.navigate(['']);
    }
    
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombreE, this.descripcionE, this.img);
    this.Proyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
