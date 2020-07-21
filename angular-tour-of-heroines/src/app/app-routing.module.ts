import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroinesComponent } from "./heroines/heroines.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "heroines", component: HeroinesComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
