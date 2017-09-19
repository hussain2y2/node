import $ from 'jquery';
class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header--menu-icon");
        this.menuContent = $(".site-header--menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
        console.log(this);
    }

    toggleMenu() {
        this.menuContent.toggleClass("site-header--menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--expanded");
        this.menuIcon.toggleClass("site-header--menu-icon--close");
    }
}

export default MobileMenu;