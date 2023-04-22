import { Component } from '@angular/core';
import { whatAppSvg } from 'src/app/data/svgIcons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','../header/header.component.scss']
})
export class FooterComponent {
whatAppSvg:string=whatAppSvg;
}
