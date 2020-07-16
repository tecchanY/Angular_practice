import { Component, OnInit } from "@angular/core";
import { Heroine } from "../Heroine";
import { HEROINES } from "../mock-heroines";
import { HeroineService } from "../heroine.service";

@Component({
  selector: "app-heroines",
  templateUrl: "./heroines.component.html",
  styleUrls: ["./heroines.component.scss"],
})
export class HeroinesComponent implements OnInit {
  // heroine = "シータ";

  // heroine: Heroine = {
  //   id: 1,
  //   name: "シータ"
  // };
  // heroines = HEROINES;
  heroines: Heroine[];
  selectedHeroine: Heroine;

  constructor(private heroineService: HeroineService) {}
  ngOnInit(): void {
    this.getHeroines();
  }

  onSelect(heroine: Heroine): void {
    this.selectedHeroine = heroine;
    console.log(heroine); //確認用
  }

  getHeroines(): void {
    // this.heroines = this.heroineService.getHeroines();
    this.heroineService
      .getHeroines()
      .subscribe((heroines) => (this.heroines = heroines));
  }
}
