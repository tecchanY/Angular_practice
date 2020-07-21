import { Component, OnInit } from "@angular/core";
import { Heroine } from "../heroine";
import { HeroineService } from "../heroine.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  heroines: Heroine[] = [];
  // constructor() { }
  constructor(private heroineService: HeroineService) {}

  ngOnInit() {
    this.getHeroines();
  }

  getHeroines(): void {
    this.heroineService
      .getHeroines()
      .subscribe((heroines) => (this.heroines = heroines.slice(0, 4)));
  }
}
