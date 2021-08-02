import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
@Component({
  selector: "app-todo-listing",
  templateUrl: "./todo-listing.component.html",
  styleUrls: ["./todo-listing.component.scss"],
})
export class TodoListingComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "progress", "color"];
  dataSource: MatTableDataSource<UserData>;
  users;
  showSpinner = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {
    // Create 100 users
    this.users = [
      { id: "1", name: "Olivia A.", progress: "54", color: "green" },
      { id: "2", name: "Thomas L.", progress: "21", color: "aqua" },
      { id: "3", name: "Theodore A.", progress: "62", color: "lime" },
      { id: "4", name: "Violet A.", progress: "58", color: "lime" },
      { id: "5", name: "Jack A.", progress: "39", color: "yellow" },
      { id: "6", name: "Charlotte A.", progress: "4", color: "yellow" },
      { id: "7", name: "Thomas C.", progress: "79", color: "blue" },
      { id: "8", name: "Theodore L.", progress: "75", color: "blue" },
      { id: "9", name: "Oliver I.", progress: "91", color: "purple" },
      { id: "10", name: "Theodore J.", progress: "60", color: "teal" },
      { id: "11", name: "Arthur T.", progress: "45", color: "blue" },
      { id: "12", name: "Jack J.", progress: "41", color: "red" },
      { id: "13", name: "Jack C.", progress: "15", color: "red" },
      { id: "14", name: "Arthur T.", progress: "46", color: "blue" },
      { id: "15", name: "Arthur J.", progress: "3", color: "purple" },
      { id: "16", name: "Violet I.", progress: "44", color: "olive" },
      { id: "17", name: "Arthur E.", progress: "45", color: "purple" },
      { id: "18", name: "Jack M.", progress: "12", color: "blue" },
      { id: "19", name: "Levi C.", progress: "29", color: "aqua" },
      { id: "20", name: "Isla M.", progress: "100", color: "orange" },
      { id: "21", name: "Jack E.", progress: "67", color: "navy" },
      { id: "22", name: "Oliver O.", progress: "47", color: "navy" },
      { id: "23", name: "Atticus L.", progress: "85", color: "black" },
      { id: "24", name: "Charlotte O.", progress: "63", color: "olive" },
      { id: "25", name: "Mia L.", progress: "49", color: "purple" },
      { id: "26", name: "Amelia A.", progress: "70", color: "maroon" },
      { id: "27", name: "Theodore A.", progress: "98", color: "yellow" },
      { id: "28", name: "Thomas C.", progress: "13", color: "black" },
      { id: "29", name: "Isla A.", progress: "41", color: "yellow" },
      { id: "30", name: "Theodore I.", progress: "78", color: "purple" },
      { id: "31", name: "Amelia I.", progress: "81", color: "aqua" },
      { id: "32", name: "Charlotte M.", progress: "2", color: "red" },
      { id: "33", name: "Maia T.", progress: "59", color: "blue" },
      { id: "34", name: "Jack O.", progress: "78", color: "blue" },
      { id: "35", name: "Isabella T.", progress: "57", color: "fuchsia" },
      { id: "36", name: "Maia A.", progress: "74", color: "teal" },
      { id: "37", name: "Isla M.", progress: "86", color: "green" },
      { id: "38", name: "Mia C.", progress: "89", color: "teal" },
      { id: "39", name: "Cora C.", progress: "4", color: "black" },
      { id: "40", name: "Theodore M.", progress: "40", color: "lime" },
      { id: "41", name: "Cora A.", progress: "65", color: "purple" },
      { id: "42", name: "Asher T.", progress: "33", color: "orange" },
      { id: "43", name: "Violet E.", progress: "11", color: "aqua" },
      { id: "44", name: "Asher C.", progress: "63", color: "fuchsia" },
      { id: "45", name: "Charlotte C.", progress: "80", color: "red" },
      { id: "46", name: "Levi T.", progress: "52", color: "teal" },
      { id: "47", name: "Levi I.", progress: "7", color: "lime" },
      { id: "48", name: "Amelia C.", progress: "37", color: "blue" },
      { id: "49", name: "Atticus O.", progress: "67", color: "teal" },
      { id: "50", name: "Amelia I.", progress: "53", color: "lime" },
      { id: "51", name: "Isabella A.", progress: "58", color: "yellow" },
      { id: "52", name: "Maia A.", progress: "77", color: "red" },
      { id: "53", name: "Asher J.", progress: "35", color: "black" },
      { id: "54", name: "Atticus M.", progress: "67", color: "gray" },
      { id: "55", name: "Oliver A.", progress: "58", color: "purple" },
      { id: "56", name: "Cora A.", progress: "62", color: "red" },
      { id: "57", name: "Isabella A.", progress: "51", color: "maroon" },
      { id: "58", name: "Isabella I.", progress: "48", color: "maroon" },
      { id: "59", name: "Amelia L.", progress: "36", color: "green" },
      { id: "60", name: "Cora M.", progress: "92", color: "olive" },
      { id: "61", name: "Cora M.", progress: "90", color: "green" },
      { id: "62", name: "Arthur A.", progress: "20", color: "lime" },
      { id: "63", name: "Isabella J.", progress: "2", color: "lime" },
      { id: "64", name: "Cora M.", progress: "57", color: "blue" },
      { id: "65", name: "Mia A.", progress: "35", color: "navy" },
      { id: "66", name: "Levi L.", progress: "22", color: "purple" },
      { id: "67", name: "Olivia T.", progress: "67", color: "purple" },
      { id: "68", name: "Levi I.", progress: "81", color: "orange" },
      { id: "69", name: "Atticus M.", progress: "49", color: "gray" },
      { id: "70", name: "Oliver T.", progress: "3", color: "fuchsia" },
      { id: "71", name: "Atticus T.", progress: "56", color: "olive" },
      { id: "72", name: "Atticus I.", progress: "38", color: "navy" },
      { id: "73", name: "Atticus M.", progress: "63", color: "blue" },
      { id: "74", name: "Isla T.", progress: "47", color: "lime" },
      { id: "75", name: "Oliver T.", progress: "30", color: "maroon" },
      { id: "76", name: "Isla O.", progress: "43", color: "black" },
      { id: "77", name: "Cora T.", progress: "27", color: "lime" },
      { id: "78", name: "Isabella A.", progress: "35", color: "purple" },
      { id: "79", name: "Violet M.", progress: "72", color: "blue" },
      { id: "80", name: "Jasper O.", progress: "26", color: "olive" },
      { id: "81", name: "Asher L.", progress: "4", color: "green" },
      { id: "82", name: "Atticus M.", progress: "54", color: "green" },
      { id: "83", name: "Arthur A.", progress: "91", color: "yellow" },
      { id: "84", name: "Levi M.", progress: "98", color: "red" },
      { id: "85", name: "Jasper L.", progress: "57", color: "aqua" },
      { id: "86", name: "Thomas J.", progress: "65", color: "orange" },
      { id: "87", name: "Jasper I.", progress: "97", color: "purple" },
      { id: "88", name: "Violet E.", progress: "8", color: "blue" },
      { id: "89", name: "Jack A.", progress: "42", color: "lime" },
      { id: "90", name: "Thomas I.", progress: "53", color: "olive" },
      { id: "91", name: "Mia L.", progress: "58", color: "yellow" },
      { id: "92", name: "Violet I.", progress: "94", color: "navy" },
      { id: "93", name: "Jasper T.", progress: "69", color: "fuchsia" },
      { id: "94", name: "Violet O.", progress: "28", color: "navy" },
      { id: "95", name: "Oliver A.", progress: "91", color: "orange" },
      { id: "96", name: "Olivia C.", progress: "24", color: "navy" },
      { id: "97", name: "Atticus C.", progress: "64", color: "orange" },
      { id: "98", name: "Isabella M.", progress: "19", color: "red" },
      { id: "99", name: "Arthur C.", progress: "77", color: "black" },
      { id: "100", name: "Amelia M.", progress: "46", color: "navy" },
    ];

    // Assign the data to the data source for the table to render
  }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.showSpinner = false;
    }, 2000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
