import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./components/task/task.component";
import { ListComponent } from "./components/list/list.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { HeaderComponent } from "./components//header/header.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./components/home/home.component";
import { AddListComponent } from "./components/add-list/add-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ListComponent,
    TaskItemComponent,
    HeaderComponent,
    AddTaskComponent,
    SidebarComponent,
    HomeComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
