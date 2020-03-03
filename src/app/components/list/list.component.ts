import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { List } from "../../models/List";
import { ListService } from "../../services/list.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  list: List;
  listId: string;
  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get("listId");
    this.listService.getList(this.listId).subscribe(list => (this.list = list));
  }

  editListTitle() {}
}
