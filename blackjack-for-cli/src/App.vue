<template>
  <div>
        <h1>{{resultMessage}}</h1>
        <div>
            <!-- そのまま定義した内容を使える。リテラル入れたいならシングルクオートで囲う。 -->
            <button @click="hit(player)" :disabled="isStandPlayer">ヒット</button>
            <button @click="stand(player)" :disabled="isStandPlayer">スタンド</button>
        </div>
        <div>
            <p>あなた：{{viewPlayerSum}}</p>
            <PlayingCard v-for="pCard in player.cards" v-bind:card="pCard"/>
        </div>
        <div v-if="isStandDealer">
            <p>ディーラー：{{viewDealerSum}}</p>
            <PlayingCard v-for="dCard in dealer.cards" v-bind:card="dCard"/>
        </div>
  </div>
</template>

<script>
import {card} from '@/components/class/card.js'
import PlayingCard from "./components/PlayingCard";

export default {
  name: "App",
  components: {
    PlayingCard
  },
  data: function() {
    return {
      resultMessage: "",
      deck: new Array(),
      player: {
        cards: new Array(),
        stand: false,
        sum: 0
      },
      dealer: {
        cards: new Array(),
        stand: false,
        sum: 0
      }
    };
  },
  created: function() {
    // トランプの山を作成。
    const numArry = [...new Array(13).keys()].map(i => ++i);
    const markArry = ["&hearts;", "&spades;", "&diams;", "&clubs;"];
    numArry.forEach(num => {
      markArry.forEach(mark => {
        this.deck.push(new card(mark, num));
      });
    });
  },
  methods: {
    rand: function() {
      return Math.floor(Math.random() * this.deck.length);
    },
    hit: function(user) {
      const cards = user.cards;
      cards.push(...this.deck.splice(this.rand(), 1));
      this.$set(user, "cards", cards);
      this.toCalcSum(user);
    },
    toCalcSum: function(user) {
      let sum = 0,
        existAce = false;
      user.cards.forEach(card => {
        sum += card.num > 10 ? 10 : card.num;
        if (card.num == 1) existAce = true;
      });
      // Aがあればバーストしない範囲で11になるよう計算する
      if (existAce && !this.isBust(sum + 10)) {
        this.$set(user, "sum", sum + 10);
      } else {
        this.$set(user, "sum", sum);
      }
    },
    stand: function(user) {
      this.$set(user, "stand", true);
    },
    isStand: function(user) {
      return user.stand;
    },
    isBlackjack: function(value) {
      return value == 21;
    },
    isBust: function(value) {
      return value > 21;
    },
    viewBlackjack: function(value) {
      return this.isBlackjack(value)
        ? "Black Jack!"
        : this.isBust(value)
          ? "Bust!!!"
          : value;
    },
    checkResult: function() {
      if (this.isBust(this.player.sum)) {
        this.resultMessage = "You Lose...";
        return;
      }
      if (this.isBust(this.dealer.sum)) {
        this.resultMessage = "You Win!";
        return;
      }
      // バーストは先に判定するのであとは大きいほうが勝ち
      if (this.player.sum > this.dealer.sum) {
        this.resultMessage = "You Win!";
      } else {
        // 引き分けは負け
        this.resultMessage = "You Lose...";
      }
    }
  },
  computed: {
    // アロー関数使うとthisが束縛されないからfunctionとするっきゃない
    isStandPlayer: function() {
      return this.isStand(this.player);
    },
    isStandDealer: function() {
      return this.isStand(this.dealer);
    },
    // フィルターからmethodsへのアクセスができない？
    viewPlayerSum: function() {
      return this.viewBlackjack(this.player.sum);
    },
    viewDealerSum: function() {
      return this.viewBlackjack(this.dealer.sum);
    }
  },
  // ウォッチャが発火されるのは他のVueイベントがひと段落ついてから。
  // メソッド実行中には何もされない
  watch: {
    // オブジェクト のプロパティは文字列で書かないと反応しない
    "player.stand": function() {
      if (this.isBust(this.player.sum)) {
        this.stand(this.dealer);
        return;
      }
      while (this.dealer.sum < 17) {
        this.hit(this.dealer);
      }
      this.stand(this.dealer);
    },
    "dealer.stand": function() {
      this.checkResult();
    }
  },
  mounted: function() {
    this.hit(this.player);
    this.hit(this.player);
    this.hit(this.dealer);
    this.hit(this.dealer);
  }
};
</script>

<style>

</style>
