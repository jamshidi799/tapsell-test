import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";

import { List } from "../../models/List";
import { ListService } from "../../services/list.service";
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
  panelOpenState: boolean = false;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    if (!this.isMain) {
      this.id = this.route.params.pipe(map(params => params.listId));
      this.id.subscribe(id => {
        this.listService.getList(id).subscribe(list => {
          this.list = list;
        });
      });
    } else
      this.listService.getMainList().subscribe(list => {
        this.list = list;
      });
  }

  onDelete() {
    this.listService
      .deleteList(this.list._id)
      .subscribe(val => this.listService.setMessage(""));
    this.router.navigate(["/"]);
  }

  editListTitle() {
    this.listService.editList(this.list).subscribe(list => {
      this.listService.setMessage("");
    });
    this.panelOpenState = false;
  }
}
