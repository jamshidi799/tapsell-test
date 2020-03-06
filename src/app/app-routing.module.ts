import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./components/list/list.component";
import { HomeComponent } from "./components/home/home.component";
import { CompletedTaskComponent } from "./components/completed-task/completed-task.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "list/:listId", component: ListComponent, data: { isMain: false } },
  { path: "completed", component: CompletedTaskComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
