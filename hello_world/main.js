var app = new Vue({
    el: '#app' ,
    data: {
        message: 'hogehoge'
        , list: ['玉ねぎ', '長ネギ', '九条ネギ']
        , show: true
    } ,
    methods :{
        handleClick: function(event) {
            alert(event.target)
        }
    }

})