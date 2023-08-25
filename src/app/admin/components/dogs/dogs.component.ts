// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { DogsService } from '../../services/dogs.service';

// Third Parties
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  data = '';
  inputText = '';
  trimmedText = '';

  constructor(
    private dogApiService: DogsService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.getDogImage();
  }

  getDogImage() {
    this.dogApiService.getImage().subscribe((data: any) => {
      this.data = data.message;
    });
  }

  saveTrimmedText() {
    this.trimmedText = this.inputText;
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
