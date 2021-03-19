import { Component, Input, OnInit } from '@angular/core';
import { Contributor } from 'src/app/shared/models/contributor';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.scss']
})
export class ContributorComponent implements OnInit {

  @Input() contributor: Contributor;
  @Input() isOdd: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
