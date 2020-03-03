import { Component, OnInit } from "@angular/core";
import { List } from "../../models/List";
import { ListService } from "../../services/list.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  lists: List[];
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getLists().subscribe(lists => (this.lists = lists));
  }
}
