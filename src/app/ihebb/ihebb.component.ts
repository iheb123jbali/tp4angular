// ihebb.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ihebb',
  template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit()">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" [(ngModel)]="model.username" required minlength="5">

      <label for="email">Email:</label>
      <input type="text" id="email" name="email" [(ngModel)]="model.email" required email>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" [(ngModel)]="model.password" required minlength="8">

      <button type="submit" [disabled]="myForm.invalid">Submit</button>
    </form>
  `,
  styleUrls: ['./ihebb.component.css']
})
export class IhebbComponent {
  model: any = {};

  onSubmit() {
    // Perform data manipulation before submitting
    this.model.username = this.model.username.toUpperCase();
    // You can perform other modifications as needed
    console.log(this.model);
    // Now you can submit the modified data to your backend or perform other actions
  }
}
