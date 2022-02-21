import { AfterViewInit, Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  title = 'app-clientes';

  ngAfterViewInit(): void {
    (function ($) {
      'use strict';

      var path = window.location.href;
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function () {
        if (window.location.href === path) {
          $(this).addClass('active');
        }
      });

      // Toggle the side navigation
      $('#sidebarToggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }
}
