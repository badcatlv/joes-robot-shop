import { Component, OnInit } from '@angular/core';
import { IUser } from '_course-resources/user/user.model';
import { UserService } from '_course-resources/user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => {
      this.user = user}
    })
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
