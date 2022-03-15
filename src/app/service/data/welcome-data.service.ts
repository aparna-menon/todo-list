import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class HelloWorldBean{
  constructor(public message: String){

  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(name: String){
    return this.http.get<HelloWorldBean>(`http://localhost:8082/hello-world/${name}`);
  }

}
