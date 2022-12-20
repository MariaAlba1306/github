import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  mockRepostoriesInfo = {
    login: '',
    location: '',
    email: '',
    blog: '',
    created_at: '',
    avatar_url:
      'https://www.saramusico.com/wp-content/uploads/2019/04/foto-de-perfil-en-linkedin.jpg',
    html_url: '',
  };
}
