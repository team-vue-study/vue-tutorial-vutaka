const myComponent = {
    template: '<p>{{val}}</p>',
    props: ['val']
}
const myInputComponent = {
    template: '<div><input v-model="val" v-on:input="updateNotification"></div>',
    props: {
        val: String
    },
    methods: {
        updateNotification: function() {
            this.$emit('child-update', this.val)
        }
    }
}
new Vue({
    el: '#app' ,
    data: {
        hoge:'hoge'
    },
    components: {
        'my-component': myComponent,
        'my-input-component': myInputComponent
    },
    methods: {
        parentUpdate: function(val) {
            this.hoge = val;
        }
    }
})