class Card {
    constructor(mark, num) {
        this.mark = mark;
        this.num = num;
    }
}

const plaingCard = {
    template: '<p>{{card.mark}} : {{card.num}}</p>',
    props: {
        card: Card
    }
}

new Vue({
    el: '#app' ,
    data: {
        deck: new Array()
    },
    components: {
        'playing-card': plaingCard
    },
    created: function(){
        const numArry = [...new Array(13).keys()].map(i => ++i);
        const markArry = ['heart', 'spade', 'daia', 'clover'];
        numArry.forEach(num => {
            markArry.forEach(mark => {
                this.deck.push(new Card(mark, num));
            });
        });
    }
})