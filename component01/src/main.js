const myComponent = {
    template: '<p>{{message}}</p>',
    data: function() {
        return {
            message: 'hello Vue Component'
        }
    }
}
new Vue({
    el: '#app' ,
    components: {
        'my-component': myComponent
    }
})