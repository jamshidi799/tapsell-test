import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TaskComponent } from "./components/task/task.component";
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
  { path: "", component: TaskComponent },
  { path: "list/:listId", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
