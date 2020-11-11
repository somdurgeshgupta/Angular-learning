import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './shared/routing.module'

@NgModule({
  imports: [AppRouteModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
