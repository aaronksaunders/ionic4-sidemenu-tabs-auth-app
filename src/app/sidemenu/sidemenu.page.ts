import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.page.html",
  styleUrls: ["./sidemenu.page.scss"]
})
export class SidemenuPage implements OnInit {
  selectedPath = "";
  pages = [
    {
      title: "Home",
      url: "tabs/tabs/tab1",
      icon: "home"
    },
    {
      title: "Search",
      url: "search/search",
      icon: "home"
    },
    {
      title: "Login",
      url: "/auth/login",
      icon: "log-in"
    }
    // If you want to settings and about at menu remove comment. They will be shown without tabs.
    // {
    //   title: 'About',
    //   url: '/menu/about'
    // },
    // {
    //   title: 'Settings',
    //   url: '/menu/settings'
    // },
  ];
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log(event)
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}
}
