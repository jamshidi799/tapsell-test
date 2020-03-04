import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

import { List } from "../../models/List";
import { ListService } from "../../services/list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  lists: List[];
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.listService.getLists().subscribe(lists => {
      this.lists = lists;
    });
  }
}
