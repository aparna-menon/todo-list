import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessage: any;
  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
   this.service.executeHelloWorldBeanService(this.name).subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleError(error)
   );
    
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessage = response.message;
  }

  handleError(error: HelloWorldBean){
    this.welcomeMessage = error.message;
  }

}
