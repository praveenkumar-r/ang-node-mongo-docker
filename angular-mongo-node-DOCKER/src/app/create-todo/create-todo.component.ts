import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.scss"],
})
export class CreateTodoComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  submitted;

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      startDateTime: new FormControl("", Validators.required),
      endDateTime: new FormControl("", Validators.required),
      location: new FormControl(""),
      calendar: new FormControl(""),
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.todoForm.invalid) return;
    console.log(this.todoForm.value);
  }
}
