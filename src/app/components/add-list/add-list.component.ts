import { Component, OnInit } from "@angular/core";
import { ListService } from "src/app/services/list.service";
import { List } from "src/app/models/List";

@Component({
  selector: "app-add-list",
  templateUrl: "./add-list.component.html",
  styleUrls: ["./add-list.component.css"]
})
export class AddListComponent implements OnInit {
  title: string;

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  onSubmit() {
    const list = {
      title: this.title,
      isMain: false
    };
    this.listService.addList(list).subscribe();
  }
}
