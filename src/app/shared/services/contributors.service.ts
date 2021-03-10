import { Injectable } from '@angular/core';
import { Contributor } from '../models/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  contributorsList: Contributor[] = [
    {
      name: "Contributor 1",
      entries: 55
    },
    {
      name: "Contributor 2",
      entries: 25
    },
    {
      name: "Contributor 3",
      entries: 11
    },
    {
      name: "Contributor 4",
      entries: 2
    },
  ];

  constructor() { }

  getContributors(): Contributor[]{
    return this.contributorsList;
  }

}
