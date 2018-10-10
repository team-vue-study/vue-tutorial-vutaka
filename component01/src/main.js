const myComponent = {
    template: '<p>{{val}}</p>',
    props: ['val']
}
const myInputComponent = {
    template: '<div><input v-model="val"></div>',
    props: ['val']
}
new Vue({
    el: '#app' ,
    data: {
        hoge:'hoge'
    },
    components: {
        'my-component': myComponent,
        'my-input-component': myInputComponent
    }
})