import { Component, OnInit } from "@angular/core";
import { ListService } from "../../characters/services/list.service";
import { ActivatedRoute } from "@angular/router";
import { Series } from "../../characters/models/series.interfaces";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  id = "";
  serie: Series = {} as Series;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.listService.getCharacterById(this.id).subscribe(data => {
      console.log(data);
      this.serie = data;
    });
  }
}
