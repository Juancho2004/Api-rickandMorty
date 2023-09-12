import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Personaje } from 'src/interfaces/personajes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img ='../assets/img/rick-and-morty-logo.png'

  data: Personaje [] | undefined;
  personajesCopy: Personaje [] | undefined;

  // data : any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
      this.personajesCopy = this.data;
    })

  }

  filter(e:any){
    const search: string = e.target.value;
    console.log(search)

    this.data = this.personajesCopy?.filter(({name}:Personaje)=> {
      return name.toLowerCase().includes(search.toLowerCase())
    })
  }
}
