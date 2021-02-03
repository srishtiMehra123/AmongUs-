class Player {
    constructor() {
        this.name = null
        this.distance = 0
        this.x = 0
        this.y = 0
        this.index = null
        this.rank=0
        this.imposter = null
    }
    getCount() {
        var ref = database.ref("playerCount")
        ref.on("value", function (data) {
            pc = data.val();
        })

    }

    updateCount(count) {
        var ref = database.ref("/") //will check entire database 
        ref.update({
            playerCount: count
        })
    }

    update() {
        var index = "players/player" +this.index 
        var ref = database.ref(index)
        ref.set({   
            name: this.name ,
            distance:this.distance ,
             rank:this.rank,
             imposter : this.imposter,
             x : this.x,
             y: this.y
        })
    }

   static getPlayerInfo(){
      var ref=database .ref("players")
      ref.on("value",(data)=>{
          allPlayers=data.val();//will fetch all the values
        
      })
    }//static functions are functions that dont depend in objects but classes .

    getFinishedPlayers(){
        var ref = database.ref("finishedPlayers")
        ref.on("value",(data)=>{
            finishedPlayers=data.val();

        })
    }
    static updateFinishedPlayers(){
        var ref=database.ref("/")
        ref.update({
            finishedPlayers:finishedPlayers+1
        
        })
        this.rank=this.rank+1
    }
}