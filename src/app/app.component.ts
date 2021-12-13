import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPageChange = 'recipes';

  onNavigate(pageChange: string){
    this.loadedPageChange = pageChange
  }
  title = 'my-first-app';
}
