class Form {

    constructor() {
        this.title = createElement("h1")
        this.button = createButton("play")
        this.name = createInput("Name")
        this.greeting = createElement("h3")

        this.reset = createButton("reset")
    }
    display() {

        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-50, 0);//-50 to let the text be in center 



        this.name.position(displayWidth/2-40,displayHeight/2-80);


        this.button.position(displayWidth/2-30, displayHeight/2);
        this.reset.position(300, 20);
        this.reset.mousePressed(() => {
            database.ref("players").remove();
            player.updateCount(0)
            game.update(0);
            database.ref("/").update({
                finishedPlayers:0,
            })
        })
        this.button.mousePressed(() => {
            this.name.hide();
            this.button.hide();

            player.name = this.name.value()
            pc = pc + 1
            player.index = pc
            player.updateCount(pc)
            if(rand === pc){
                player.imposter = true
                console.log("imposter:true")
            }
            else{
                player.imposter = false
                console.log("imposter:false")

            }
            player.update();
          

            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2-70, displayHeight/4);

        })



    }

    hide() {
        this.button.hide();
        this.name.hide();
        this.greeting.hide();
    }
}