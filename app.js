(function () {
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
                this.checkVictory()
            },
            checkVictory(){
                if (this.playerA == this.playerB) return//exit loop

                if (this.playerA >= 90){
                    //playerA wins~
                }
                if (this.playerB >= 90) {
                    //playerB wins~
                }
            }
        }
    })
})