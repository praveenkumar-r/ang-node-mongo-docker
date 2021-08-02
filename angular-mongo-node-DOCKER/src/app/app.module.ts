import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { FlatpickrModule } from "angularx-flatpickr";
import "flatpickr/dist/flatpickr.css";

import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { TodoListingComponent } from "./todo-listing/todo-listing.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "todo/create",
    component: CreateTodoComponent,
  },
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full",
  },
  {
    path: "todo",
    component: TodoListingComponent,
  },
];
@NgModule({
  declarations: [AppComponent, CreateTodoComponent, TodoListingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
