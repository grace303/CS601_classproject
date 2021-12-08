/*jshint esversion: 6 */

// js for vue

Vue.component('modal', {
    template: '#modal-component'
});

new Vue({
    el: '#app',
    data: {
        showModal: [false, false, false, false, false]
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