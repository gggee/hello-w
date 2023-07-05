import { Component } from '@angular/core';
import { ItemService } from '../item.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemService]
})

export class HomeComponent {
  items: string[] = []
  name: string = ''

  constructor(private dataService: ItemService) {
  }

  addItem(name: string) {
    this.dataService.addData(name)
  }
  ngOnInit() {
    this.items = this.dataService.getData()
  }
}
