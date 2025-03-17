import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/Contact';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormularioComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  btnAcao = "Edit";
  descTitulo = "Edit Contact"
  contact!: Contact;

  constructor(private contactService:ContactService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
      console.log(1)
      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.contactService.GetContactById(id).subscribe(response => {
          this.contact = response;
      });

  }

  editContact(contact:Contact){
    console.log("chegou aqui")
    this.contactService.EditContact(contact.id, contact).subscribe(response => {
      this.router.navigate(['/']);
    })
  }

}
