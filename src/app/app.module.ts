import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./components/task/task.component";
import { ListComponent } from "./components/list/list.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { HeaderComponent } from "./components//header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ListComponent,
    TaskItemComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
