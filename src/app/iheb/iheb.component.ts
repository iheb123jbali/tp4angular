import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iheb',
  templateUrl: './iheb.component.html',
  styleUrls: ['./iheb.component.css']
})
export class IhebComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
   
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    // Vous pouvez laisser ngOnInit vide ou y ajouter d'autres initialisations
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      // Le formulaire n'est pas valide, vous pouvez gérer cela ici
    }
  }
}
