import { Component, OnInit, Input } from "@angular/core";
import { Heroine } from "../Heroine";

@Component({
  selector: "app-heroine-detail",
  templateUrl: "./heroine-detail.component.html",
  styleUrls: ["./heroine-detail.component.scss"],
})
export class HeroineDetailComponent implements OnInit {
  @Input() heroine: Heroine;

  constructor() {}

  ngOnInit() {}
}
