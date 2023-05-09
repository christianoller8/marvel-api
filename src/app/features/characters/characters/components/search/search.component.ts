import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  @Output() searchDone = new EventEmitter<string>();
  search = "";

  constructor(private fb: FormBuilder) {}

  searchForm = this.fb.group({
    search: [""],
  });

  onSearch() {
    if (this.searchForm.value.search === "") {
      return;
    }
    this.searchDone.emit(this.searchForm.value.search as string);
    console.log(this.searchForm.value.search);
  }
}
