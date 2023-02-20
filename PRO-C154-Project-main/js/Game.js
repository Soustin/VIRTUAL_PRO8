AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {type: "string", default: "#coin1"}
    },
    
    update: function(){
        this.isCollided(this.data.elementId)
    },

    isCollided: function (elementId) {
        var el = document.querySelector(elementId)
        el.addEventListener("collide", (e)=>{
            if (elementId.includes("#coin")) {
                element.setAttribute("visible", false);
                this.updateScore();
                this.updateTargets();
            }
            else {
                this.gameOver();
            }
            //     console.log("Collided with Coin element")
            // } else if (elementId.includes("#fish")) {
            //     console.log("Collided with Fish element")
            // }
        })
    },

    updateTargets: function () {
        const element = document.querySelector('#targets');
        var count = element.getAttribute("text").value
        let currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text", {
            value: currentTargets,
        });
    },

    updateTargets: function () {
        const element = document.querySelector('#score');
        var count = element.getAttribute("text").value
        let currentScore = parseInt(count);
        currentScore -= 1;
        element.setAttribute("text", {
            value: currentScore,
        });
    },

    gameOver: function () {
        var planeEl = document.querySelector("#plane_model");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
        planeEl.setAttribute("dynamic-body", {
            mass: 1
        })
    }
})