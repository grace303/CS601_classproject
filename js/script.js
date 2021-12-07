// js for vue

Vue.component('modal', {
    template: '#modal-component'
});

new Vue({
    el: '#app',
    data: {
        showModal: false
    }
});