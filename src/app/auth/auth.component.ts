import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Auth as AuthService } from '../services/auth/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class Auth implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe(params => {
        this.auth.setCode( params.get('code') );
        if(this.auth.checkState( params.get('state') ) ) {
          this.auth.authenticate().subscribe( auth => {
              this.router.navigateByUrl('/');
          });
        } else {
          this.router.navigateByUrl('/');
        }
      });
  }

}
