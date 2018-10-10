var app = new Vue({
    el: '#app' ,
    data: {
        input: {
            name: 'ハゲ親父',
            hp: 500
        },
        list: [
            {id: 1, name: 'スライム', hp: '100'},
            {id: 2, name: 'ゴブリン', hp: '300'},
            {id: 3, name: 'エラゴン', hp: '500'}
        ]
    } ,
    methods :{
        doAdd: function() {
            var max = this.list.reduce(function(a, b){
                return a > b.id ? a : b.id;
            }, 0);
            this.list.push({
                id: max + 1,
                name: this.input.name,
                hp: this.input.hp
            })
        },
        doRemove: function (index) {
            this.list.splice(index, 1);
        }
    }
})