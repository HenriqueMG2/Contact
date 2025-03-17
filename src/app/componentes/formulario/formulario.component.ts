import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Contact } from '../../models/Contact';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() contactData : Contact | null = null
  @Output() onSubmit = new EventEmitter<Contact>();

  contactForm!:FormGroup;
  
  ngOnInit(): void {
    
    console.log(3)

    this.contactForm = new FormGroup({
        id: new FormControl(this.contactData ? this.contactData.id : 0),
        name: new FormControl(this.contactData ? this.contactData.name :''),
        email: new FormControl(this.contactData ? this.contactData.email :''),
        phoneNumber: new FormControl(this.contactData ? this.contactData.phoneNumber :''),
    });
  }


  submit(){
    this.onSubmit.emit(this.contactForm.value);
  }

}
