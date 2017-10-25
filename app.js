//thejsway - move red blocks


// (function () {
    var app = new Vue({
        el: '#app',
        data: {
            racing: false,
            winner: null,
            playerA: 0,
            playerB: 0,
            tick: 0,
            interval: null,            
        },
        computed: {
            winning: function () {
                return this.playerA > this.playerB ? this.playerA : this.playerB
            },            
            // all v-bind
            playerAClass() {

            },
            playerBClass() {

            },
            playerAStyle() {
                //this is where you add random to the LEFT css prop
                return {
                    left: `${this.playerA}vw`
                }              
            },
            playerBStyle() {
                return {
                    left: `${this.playerB}vw`
                }
            }
        },
        methods: {
            startRace() {
                this.racing = true
                this.setInterval(function() {
                    this.progressPlayers()
                }, 50);
            },
            progressPlayers() {
                this.tick++
                this.playerA += Math.random()
                this.playerB += Math.random()
                this.checkVictory()
            },
            checkVictory(){
                if (this.playerA == this.playerB) return//exit loop

                if (this.playerA >= 90){
                    //playerA wins~
                    this.callVictory()
                }
                if (this.playerB >= 90) {
                    //playerB wins~
                    this.callVictory()
                }
            },
            callVictory(){
                this.winning
            }
        }
    })
// })