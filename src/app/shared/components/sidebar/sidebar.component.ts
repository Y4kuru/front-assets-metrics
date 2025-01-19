import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input()  isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter();

  ngOnInit(): void {
    
  }

  toggle() {
    this.toggleSidebar.emit();
  }

}
