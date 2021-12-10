/*jshint esversion: 6 */
// js for vue
Vue.component('modal', {
    template: '#modal-component'
});

new Vue({
    el: '#app',
    data: {
        showModal: [false, false, false, false],
        portfolioURL: ["https://academ.us/", "https://www.realtychecklist.com/",
            "https://grace303303.github.io/budget/budget/index.html", "https://grace303303.github.io/editorialcreation/"],
        portfolioTitle: ["Academus.com", "realtychecklist.com",
            "Budget Calculator", "Email Code Generator"],
        portfolioContent: ["I led the front-end development from design to implementation including graphics, responsive CSS styling, and interactive Javascript features. Launched this website within a month.",
            "I developed and launched this website to help first-time homebuyers do property research.",
            "This is a project I did when learning web development online on my own. By entering income and cost, the user can automatically get budgets.",
            "This tool will auto-generate email codes for a specific type of email at my work, which highly increased our work efficiency."]
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