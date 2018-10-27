const myComponent = {
    template: '<section>'
        + '<header><slot name="header">デフォルトタイトル</slot></header>'
        + '<div class="content"><slot>デフォルトコンテンツ</slot></div>'
        + '<footer><slot name="footer">デフォルトフッタ</slot></footer>'
        + '</section>',
}
const myListComponent = {
    template: '<ul>'
        + '<slot v-for="item in list" v-bind:item="item">デフォルトアイテム</slot>'
        + '</ul>',
    props: {
        list: Array
    }
}

new Vue({
    el: '#app' ,
    data: {
        list:['ハート','ダイヤ','スペード']
    },
    components: {
        'my-component': myComponent,
        'my-list': myListComponent
    }
})