import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationType, NavigationModel } from "./navigation.model";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  menu: NavigationModel[] = [
    {
      title: 'Dashboard',
      type: NavigationType.MODULE,
      route: '/modules/clasification',
      icon: 'dashboard'
    },
    {
      title: 'General',
      type: NavigationType.MODULE,
      route: '',
      icon: 'check_box'
    },
    {
      title: 'Profile',
      type: NavigationType.MODULE,
      route: '',
      icon: 'person'
    },
    {
      title: 'Notification',
      type: NavigationType.MODULE,
      route: '',
      icon: 'notification_important'
    },
    {
      title: 'Con sub',
      type: NavigationType.SUBMODULE,
      route: '',
      icon: 'notification_important',
      children: [
        {
          title: 'sub 1',
          type: NavigationType.SUBMODULE,
          route: '',
          icon: 'notification_important',
        },
        {
          title: 'sub 2',
          type: NavigationType.SUBMODULE,
          route: '',
          icon: 'notification_important',
        }
      ]
    },
  ];

  /** Convert the enum to accesible from HTML template */
  get NavigationType(): typeof NavigationType {
    return NavigationType;
  }

}
