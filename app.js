//thejsway - move red blocks


// (function () {
    let app = new Vue({
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
                this.interval = setInterval(() => {//use fat arrow so 'this.' keyword is not redefined to THIS function only
                    this.progressPlayers()
                }, 50);
            },
            progressPlayers() {
                this.tick++
                //if Math.random > 0.5 this.player += 1
                this.playerA += Math.random()
                this.playerB += Math.random()
                this.checkVictory()
            },
            checkVictory(){
                if (this.playerA == this.playerB) return//exit loop

                if (this.playerA >= 80){
                    //playerA wins~
                    playerA.winner=true;
                    playerB.winner=false;
                    this.callVictory()
                }
                if (this.playerB >= 80) {
                    //playerB wins~
                    this.callVictory()
                    playerA.winner=false;
                    playerB.winner=true;
                }
            },
            callVictory(){
                clearInterval(this.interval);
            }
        }
    })
// })