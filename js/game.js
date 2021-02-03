class Game {
    constructor() {

    }

    getState() {
        var ref = database.ref("gameState")
        ref.on("value", function (data) {
            gs = data.val()
        })
    }
    start() {
        if (gs === 0) {
            player = new Player()
            player.getCount();

            form = new Form()
            form.display()
        }

        car1 = createSprite(0, 0);
        car2 = createSprite(0, 0);
        car3 = createSprite(0, 0);
        car4 = createSprite(0, 0);

        car1.addImage(car_image1)
        car2.addImage(car_image2)
        car3.addImage(car_image3)
        car4.addImage(car_image4)

        cars = [car1, car2, car3, car4]
        passedFinished = false
    }
    update(state) {
        var ref = database.ref("/")
        ref.update({
            gameState: state

        })
    }

    play() {
        form.hide();                    
        background(0)
        if (keyDown(UP_ARROW) && player.index !== null) {
            player.y = player.y - 1
            player.update();
        }
        if (keyDown(DOWN_ARROW) && player.index !== null) {
            player.y = player.y + 1
            player.update();
        }
        if (keyDown(LEFT_ARROW) && player.index !== null) {
            player.x = player.x - 1
            player.update();
        }
        if (keyDown(RIGHT_ARROW) && player.index !== null) {
            player.x = player.x + 1
            player.update();
        }

        // image(trackImage, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
        
        // var x = 200
        var y,x;
        var index = 0

        Player.getPlayerInfo();
        // player.getFinishedPlayers();
        if (allPlayers !== undefined) {
            for (var i in allPlayers) {
                x = allPlayers[i].x
                y = allPlayers[i].y
                cars[index].y = y
                cars[index].x = x
                if (index + 1 === player.index) {
                    fill("red")
                    ellipse(x, y, 60, 60)

                    // camera.position.x = cars[index].x
                    // camera.position.y = cars[index].y

                }
                index = index + 1
            }
        }

        // 
        // if (player.distance > 3000 && passedFinished === false) {
        //     Player.updateFinishedPlayers();
        //     player.rank = finishedPlayers
        //     player.update();
        //     passedFinished = true
        // }

        drawSprites();
    }
    displayRanks() {
        console.log("gamehasreset")
        camera.position.x = 0;
        camera.position.y = 0;

        imageMode(CENTER);
        Player.getPlayerInfo();
        image(goldImage, 10, -100)
        image(silverImage, displayWidth / 4, -100 + displayHeight / 10, 200, 250)
        image(bronzeImage, displayWidth / -4, -100 + displayHeight / 9, 200, 250)


        for (var i in allPlayers) {
            textSize(35)
            fill("white")
            if (allPlayers[i].rank == 1) {
                text(allPlayers[i].name, 0, 50)
            }
            else if (allPlayers[i].rank === 2) {
                text(allPlayers[i].name, displayWidth / 4, displayHeight / 9 + 73)
            }
            else if (allPlayers[i].rank === 3) {
                text(allPlayers[i].name, displayWidth / -4, -100 + displayHeight / 9 + 150)

            }
        }
    }

}