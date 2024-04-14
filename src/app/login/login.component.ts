import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isRegister: boolean
  input1: string
  input2: string
  labelSubmit: string

  constructor(
    private authService: AuthService
  ){
    this.isRegister = false
    
    this.input1 = "Nome" 
    this.input2 =  "E-mail" 
    this.labelSubmit = "Login"
  }

  changeLabels(){
    this.isRegister = !this.isRegister
    this.input1 = this.isRegister ? "Nome" : "Usuário"
    this.input2 = this.isRegister ? "E-mail" : "Senha"
    this.labelSubmit = this.isRegister ? "Registar" : "Login"
  }
  submite(): void{

    this.authService.getUsers().subscribe(data => {
      
    })

    // this.authService.getLogout('teste').subscribe(data => {
    //   console.log(data)
    // })
  
    if(this.isRegister){

    }

  }

}
