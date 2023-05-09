import { Component, OnInit } from "@angular/core";
import { ListService } from "../../characters/services/list.service";
import { ActivatedRoute } from "@angular/router";
import { Series } from "../../characters/models/series.interfaces";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  id = "";
  serie: Series = {} as Series;
  tableForm!: FormGroup;

  tableData = {
    id: null,
    title: null,
    modified: null,
  };

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });

    this.listService.getCharacterById(this.id).subscribe((data) => {
      console.log(data);
      this.serie = data;

      this.tableForm = this.fb.group({
        id: [null, Validators.required],
        title: [null, Validators.required],
        modified: [null, Validators.required],
      });
    });
  }
}
