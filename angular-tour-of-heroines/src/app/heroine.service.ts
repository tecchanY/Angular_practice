import { Injectable } from "@angular/core";
import { Heroine } from "./heroine";
import { HEROINES } from "./mock-heroines";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root",
})
export class HeroineService {
  constructor(private messageService: MessageService) {}

  // getHeroines(): Heroine[] {
  //   return HEROINES;
  // }
  getHeroines(): Observable<Heroine[]> {
    this.messageService.add("HeroineService: データを取得");
    console.log(this.messageService);
    return of(HEROINES);
  }
}
