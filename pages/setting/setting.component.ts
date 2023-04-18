import { Component } from '@angular/core';
import { menuArray } from 'src/app/data/arrays';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css','../../shared/header/header.component.scss']
})
export class SettingComponent {
  menuArray=menuArray
}
