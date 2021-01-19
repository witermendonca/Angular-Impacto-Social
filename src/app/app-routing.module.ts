import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KingDayComponent } from './king-day/king-day.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},

  {path: 'sobre', component: SobreComponent},

  {path: 'king-day', component: KingDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
