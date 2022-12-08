import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  name: string = 'María alba';
  userName: string = 'María';
  location: string = '';
  email: string = '';
  blogLink: string = '';
  year: number = 0;
  image: string =
    'https://www.saramusico.com/wp-content/uploads/2019/04/foto-de-perfil-en-linkedin.jpg';
}
