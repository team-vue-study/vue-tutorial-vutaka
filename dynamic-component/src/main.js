const myComponentA = {
    template: '<p>componentA</p>'
}
const myComponentB = {
    template: '<div>componentB</div>'
}
const myComponentC = {
    template: '<span>componentC</span>'
}
new Vue({
    el: '#app' ,
    data: {
        componenTypes:['my-component-a', 'my-component-b', 'my-component-c'],
        current: 0,
    },
    components: {
        'my-component-a': myComponentA,
        'my-component-b': myComponentB,
        'my-component-c': myComponentC
    },
    computed: {
        component: function() {
            return this.componenTypes[this.current]
        }
    },
    methods: {
        toggleCompo: function() {
            this.current = (this.current + 1) % this.componenTypes.length
        }
    }
})