import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user.model';
import { error } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        if (params.get('userId') !== null) {
          this.userService.getUserById(params.get('userId'))
            .subscribe(data => this.currentUser = data);
        } else {
          this.userService.getCurrentProfile()
            .subscribe(data => this.currentUser = data);
        }
      }
    );
  }
}
