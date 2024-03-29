/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from "@angular/core";
import { ListService } from "../../services/list.service";
import { Series } from "../../models/series.interfaces";
import { map, tap } from "rxjs";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  constructor(private listService: ListService) {}

  series: Series[] = [];

  length = 0;
  pageSize = 25;
  pageIndex = 0;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.listService.getAllCharacters(e.pageIndex * e.pageSize, e.pageSize).pipe(
      tap((data: any) => {
        this.length = data.data.total;

      }),
      map((data: any) => data.data.results)
    ).subscribe((data) => {
      this.series = data;
    }
    );
  }

  ngOnInit(): void {

    this.listService.getAllCharacters(0, 50).pipe(
      tap((data: any) => {
        this.length = data.data.total;
      }),
      map((data: any) => data.data.results)
    ).subscribe((data) => {

      this.series = data;
    }
    );
  }

  onSearch(search: string) {
    console.log(search);
    this.listService.getCharactersByNameStartsWith(search).pipe(
      map((data: any) => data.data.results)
    ).subscribe((data) => {
      console.log(data);
      if(data.length === 0){
        alert("No results found");
      } else {
        this.series = data;
      }

    }
    );
  }


}



