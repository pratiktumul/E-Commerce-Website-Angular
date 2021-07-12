import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountServices } from 'src/app/_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

    constructor(private accountService: AccountServices) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }

  ngOnInit(): void {
  }

}
