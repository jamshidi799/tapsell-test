import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

import { List } from "../../models/List";
import { ListService } from "../../services/list.service";
import { Task } from "src/app/models/Task";
import { TaskService } from "src/app/services/task.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() isMain: boolean;
  list: List;
  id: Observable<string>;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    if (!this.isMain) {
      this.id = this.route.params.pipe(map(params => params.listId));
      this.id.subscribe(id =>
        this.listService.getList(id).subscribe(list => (this.list = list))
      );
    } else
      this.listService.getMainList().subscribe(list => {
        this.list = list;
      });
  }

  editListTitle() {}
}
