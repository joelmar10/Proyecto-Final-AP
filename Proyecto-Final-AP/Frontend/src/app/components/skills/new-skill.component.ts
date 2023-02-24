import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  img: string = "https://firebasestorage.googleapis.com/v0/b/portafolio-yp.appspot.com/o/Assets%2Fgaler%C3%ADa.png?alt=media&token=3db78e12-4f3d-46fc-ae2f-4d4decae3a73";
  skill: Skill;
  isLogged = false;

  constructor(private skillS: SkillService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.router.navigate(['']);
    }
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.img);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}