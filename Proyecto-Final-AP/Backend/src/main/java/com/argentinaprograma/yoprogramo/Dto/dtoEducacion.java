/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.argentinaprograma.yoprogramo.Dto;

import javax.validation.constraints.NotBlank;

public class dtoEducacion {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String lapsoE;

    public dtoEducacion() {
    }

    public dtoEducacion(String nombreE, String descripcionE, String lapsoE) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.lapsoE = lapsoE;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }
    
    public String getLapsoE() {
        return lapsoE;
    }

    public void setLapsoE(String lapsoE) {
        this.lapsoE = lapsoE;
    }
    
    
}
