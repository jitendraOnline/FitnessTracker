import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { AuthService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  @Output('opensideNav') opensideNav=new EventEmitter();

   Authed:boolean=false;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.authservice.isAuthed.subscribe((isAuthed)=>{
      this.Authed=isAuthed;
    })
  }

  openSideNav(){
    this.opensideNav.emit();
  }

  logout(){
    this.authservice.loggedOut();
  }
}
