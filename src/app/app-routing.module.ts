import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { FamilyListComponent } from "./views/family-list/family-list.component";
import { SessionGuard } from "./guards/session.guard";
import { FamilyProfileComponent } from "./views/family-profile/family-profile.component";
import { FamilyUserAddComponent } from "./views/family-user-add/family-user-add.component";

const routes: Routes = [
  { path: 'families/list', component: FamilyListComponent, canActivate: [ SessionGuard ]},
  { path: 'families/:id', component: FamilyProfileComponent, canActivate: [ SessionGuard ]},
  { path: 'families/add/:id', component: FamilyUserAddComponent, canActivate: [ SessionGuard ]},
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
