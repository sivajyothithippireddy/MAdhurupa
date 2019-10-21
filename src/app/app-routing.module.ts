import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { TabelComponent } from './tabel/tabel.component';
import { AdminComponent } from './admin/admin.component';
import { GolGuard } from './gol.guard';

const routes: Routes = [
  {
    path:'client' ,
    component:ClientComponent
},
{
  path:'tabel' ,
  component:TabelComponent
},
{
  path:'admin' ,
  component:AdminComponent,
  canActivate:[GolGuard] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
