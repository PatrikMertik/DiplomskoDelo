import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  searchChanged() { 
    this.results = this.recipeService.searchData(this.searchTerm);
  }  
}
