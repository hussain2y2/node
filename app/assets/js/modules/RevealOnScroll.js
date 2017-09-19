import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemToReveal = els;
        this.percentOffset = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        var that = this;
        this.itemToReveal.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: that.percentOffset
            });
        });
    }
}

export default RevealOnScroll;