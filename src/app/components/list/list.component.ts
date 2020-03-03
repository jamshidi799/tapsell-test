import { Component, OnInit } from "@angular/core";

import { List } from "../../models/List";
import { ListService } from "../../services/list.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  list: List;
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getList(1).subscribe(list => (this.list = list));
  }

  editListTitle();
}
