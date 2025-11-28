import { Component } from '@angular/core';
import { Header } from "../header/header";
import { MainThemes } from "../main-themes/main-themes";

@Component({
  selector: 'app-home',
  imports: [Header, MainThemes],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
