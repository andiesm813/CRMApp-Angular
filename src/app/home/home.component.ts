import { Component, OnInit } from '@angular/core';
import { ECommerceService } from '../services/ecommerce.service';
import { NorthwindService } from '../services/northwind.service';
import { CRMAppService } from '../services/crmapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public eCommerceRevenue: any = null;
  public northwindCustomers: any = null;
  public cRMAppMeetingsTasks: any = null;

  constructor(
    private eCommerceService: ECommerceService,
    private northwindService: NorthwindService,
    private cRMAppService: CRMAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.eCommerceService.getRevenue().subscribe(data => this.eCommerceRevenue = data);
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.cRMAppService.getMeetingsTasks().subscribe(data => this.cRMAppMeetingsTasks = data);
  }
}
