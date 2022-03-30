import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    // { path: '', component: HomepageComponent, pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: HomepageComponent },
        { path: 'new', component: RecipeEditComponent }, // va prima, senno ang pensa che dopo :id sono tutti quelli
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}