import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

const routes: Routes = [{ path: '', component: ShoppingListComponent }];

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule.forChild(routes), FormsModule, SharedModule],
  exports: [ShoppingListComponent, ShoppingEditComponent],
  //   providers: [LoggingService], NON è LO STESSO USATO IN APP, NE CREA UN'ALTRO SEPARATO!!!!
})
export class ShoppingListModule {}
