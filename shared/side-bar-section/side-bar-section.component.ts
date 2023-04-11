import { Component, Input } from "@angular/core";

@Component({
  selector: "app-side-bar-section",
  templateUrl: "./side-bar-section.component.html",
  styleUrls: [
    "./side-bar-section.component.css",
    "../header/header.component.scss",
  ],
})
export class SideBarSectionComponent {
 @Input() menuItems!: any[];
 @Input() title!: string;
}
