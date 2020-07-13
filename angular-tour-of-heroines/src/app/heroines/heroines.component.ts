import { Component, OnInit } from "@angular/core";
import { Heroine } from "../Heroine";
import { HEROINES } from "../mock-heroines";

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
  heroines = HEROINES;
  selectedHeroine: Heroine;

  constructor() {}
  ngOnInit() {}

  onSelect(heroine: Heroine): void {
    this.selectedHeroine = heroine;
    console.log(heroine); //確認用
  }
}
