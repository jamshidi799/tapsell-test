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
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./components/task/task.component";
import { ListComponent } from "./components/list/list.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./components/home/home.component";
import { AddListComponent } from "./components/add-list/add-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CompletedTaskComponent } from "./components/completed-task/completed-task.component";
import { EditTaskComponent } from "./components/edit-task/edit-task.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ListComponent,
    TaskItemComponent,
    AddTaskComponent,
    SidebarComponent,
    HomeComponent,
    AddListComponent,
    NavbarComponent,
    CompletedTaskComponent,
    EditTaskComponent,
    NotFoundComponent
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
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
