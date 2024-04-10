// explore.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreService } from '../services/explore.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  placeId: string = '';
  placeDetails: any = {};

  constructor(private route: ActivatedRoute, private exploreService: ExploreService) { }

  ngOnInit(): void {
    this.placeId = this.route.snapshot.params['id'] || '';
    this.fetchPlaceDetails();
  }

  fetchPlaceDetails(): void {
    this.placeDetails = this.exploreService.getPlaceDetailsById(this.placeId);
  }
}
