import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { List } from "../../models/List";
import { ListService } from "../../services/list.service";
import { Task } from "src/app/models/Task";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() isMain: boolean;
  list: List;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.isMain) {
      const listId = this.route.snapshot.paramMap.get("listId");
      this.listService.getList(listId).subscribe(list => (this.list = list));
    } else
      this.listService.getMainList().subscribe(list => {
        this.list = list;
      });
  }

  editListTitle() {}
}
