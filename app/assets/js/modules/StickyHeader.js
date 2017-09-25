import $ from "jquery";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero--title");
        this.createHeaderWaypoint();
        this.pageSection = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.load(function () {
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function (direction) {
                if (direction === "down") {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSection.each( function () {
            var currentPageSec = this;
            new Waypoint({
               element: currentPageSec,
               handler: function (direction) {
                   if (direction === "down") {
                       var matchingLink = currentPageSec.getAttribute('data-matching-link');
                       that.headerLinks.removeClass('is-current-link');
                       $(matchingLink).addClass('is-current-link');
                   }
               },
               offset: "18%"
            });

            new Waypoint({
                element: currentPageSec,
                handler: function (direction) {
                    if (direction === "up") {
                        var matchingLink = currentPageSec.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;