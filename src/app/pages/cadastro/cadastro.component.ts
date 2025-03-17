import { Component } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao= "Create";
  descTitulo = "Create Contact";

  constructor(private contactService: ContactService, private router: Router){}

  createContact(contact : Contact){
    this.contactService.CreateContact(contact).subscribe(response => {
      this.router.navigate(['/'])
    })
  }

}
