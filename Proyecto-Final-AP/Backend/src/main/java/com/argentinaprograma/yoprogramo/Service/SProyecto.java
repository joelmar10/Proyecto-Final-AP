/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.argentinaprograma.yoprogramo.Service;

import com.argentinaprograma.yoprogramo.Entity.Proyecto;
import com.argentinaprograma.yoprogramo.Repository.RProyecto;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@Transactional
@CrossOrigin(origins = "https://portafolio-yp.web.app")
public class SProyecto {
     @Autowired
     RProyecto rProyecto;
     
     public List<Proyecto> list(){
         return rProyecto.findAll();
     }
     
     public Optional<Proyecto> getOne(int id){
         return rProyecto.findById(id);
     }
     
     public Optional<Proyecto> getByNombreE(String nombreE){
         return rProyecto.findByNombreE(nombreE);
     }
     
     public void save(Proyecto proyecto){
         rProyecto.save(proyecto);
     }
     
     public void delete(int id){
         rProyecto.deleteById(id);
     }
     
     public boolean existsById(int id){
         return rProyecto.existsById(id);
     }
     
     public boolean existsByNombreE(String nombreE){
         return rProyecto.existsByNombreE(nombreE);
     }
}
