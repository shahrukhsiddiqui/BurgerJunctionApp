import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-App';

  loadedFeature = 'recipe';

  constructor(){
    console.log(this.loadedFeature);
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;

    console.log(this.loadedFeature+'sjsjs');
  }
}
