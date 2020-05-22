import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = ''
    
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'https://api.spoonacular.com/recipes/search/';
  url2 = 'https://api.spoonacular.com/recipes/';
  key = '2bddc6b7da1f4fd4b0a2da4a2bead05c';
  instructions = '/analyzedInstructions'
  
  constructor(private http: HttpClient) {}
  
  searchData(title: string): Observable<any> {
    return this.http.get(`https://api.spoonacular.com/recipes/search?query=${encodeURI(title)}&apiKey=2bddc6b7da1f4fd4b0a2da4a2bead05c`).pipe(
      map(results =>{
        console.log('RAW: ', results);
        return results['Search'];
      })
    
    );
  }
  getDetails(ide){
    const url3='https://api.spoonacular.com/recipes/?id=${ide}/analyzedInstructions&apiKey=2bddc6b7da1f4fd4b0a2da4a2bead05c';
    return this.http.get(url3);
  }
}
