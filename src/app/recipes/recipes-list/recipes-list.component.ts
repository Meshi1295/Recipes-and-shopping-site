import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe','simply test','https://st3.depositphotos.com/10654668/15316/i/1600/depositphotos_153165422-stock-photo-person-cooking-with-cookbook.jpg'),
    new Recipe('Test Recipe','simply test','https://st3.depositphotos.com/10654668/15316/i/1600/depositphotos_153165422-stock-photo-person-cooking-with-cookbook.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
