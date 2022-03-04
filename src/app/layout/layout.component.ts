import { Component, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

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
