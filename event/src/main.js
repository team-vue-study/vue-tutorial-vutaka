var app = new Vue({
    el: '#app',
    data:{
        url: 'index.html'
    },
    methods: {
        handler: function(comment) {
            console.log(comment);
        }
    }

})