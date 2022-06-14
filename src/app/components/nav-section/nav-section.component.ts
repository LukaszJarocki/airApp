import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent {

  navbarfixed:boolean = false;


  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true
    }else{
      this.navbarfixed = false
    }
  }
}
