/*jshint esversion: 6 */

// js for vue
Vue.component('modal', {
    template: '#modal-component'
});

new Vue({
    el: '#app',
    data: {
        showModal: [false, false, false, false, false],
        portfolioTitle: ["Academus - A research webite", "realtychecklist.com - A website used to do property research",
            "A budget calculator", "A project at work used to automate email codes"],
        portfolioURL: ["https://academ.us/", "https://www.realtychecklist.com/",
            "https://grace303303.github.io/budget/budget/index.html", "https://grace303303.github.io/editorialcreation/"]
    },
    methods: {
        getImgUrl(number) {
            return `assets/portfolio_${number}.png`;
        },
        showModalFunc(number) {
            Vue.set(this.showModal, number, true);
        },
        closeModalFunc(number) {
            Vue.set(this.showModal, number, false);
        }
    }
});