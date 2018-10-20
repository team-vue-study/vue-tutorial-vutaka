class Card {
    constructor(mark, num) {
        this.mark = mark;
        this.num = num;
    }
}

const plaingCard = {
    template: '<span>{{card.mark}} : {{card.num}}</span>',
    props: {
        card: Card
    }
}

new Vue({
    el: '#app' ,
    data: {
        deck: new Array(),
        playerCards: new Array(),
        dealerCards: new Array()
    },
    components: {
        'playing-card': plaingCard
    },
    created: function(){
        // トランプの山を作成。
        const numArry = [...new Array(13).keys()].map(i => ++i);
        const markArry = ['heart', 'spade', 'daia', 'clover'];
        numArry.forEach(num => {
            markArry.forEach(mark => {
                this.deck.push(new Card(mark, num));
            });
        });
    },
    methods:{
        rand: function() {
            return Math.floor(Math.random() * this.deck.length);
        },
        draw: function(cards) {
            cards.push(...(this.deck.splice(this.rand(), 1)));
        },
        toSumCards: function(cards){
            let sum = 0;
            cards.forEach(card => {
                sum += (card.num > 11 ? 10 : card.num);
            });
            return sum;
        }
    },
    computed: {
        sumPlayerCard: function() {return this.toSumCards(this.playerCards)},
        sumDealerCard: function() {return this.toSumCards(this.dealerCards)}
    },
    mounted: function() {
        this.draw(this.playerCards);
        this.draw(this.playerCards);
        this.draw(this.dealerCards);
        this.draw(this.dealerCards);
    }
})