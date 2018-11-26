import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { AuthService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-side-navlist',
  templateUrl: './side-navlist.component.html',
  styleUrls: ['./side-navlist.component.scss']
})
export class SideNavlistComponent implements OnInit {
   Authed=false;
  @Output('closesideNav') closesideNav=new EventEmitter();
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.authservice.isAuthed.subscribe((isAuthed)=>{
      this.Authed=isAuthed;
    })
  }

  closeSideNav(){
    this.closesideNav.emit();
  }

  logout(){
    this.closeSideNav();
    this.authservice.loggedOut();
  }
}
