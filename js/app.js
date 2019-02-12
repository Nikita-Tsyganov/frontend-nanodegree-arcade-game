/* Basic Character superclass.
 */
class Character {

    /* Create a default character.
     */
    constructor() {

        this.sprite = '';
        this.x = 0;
        this.y = 0;

    }

    /* Render the character.
     */
    render() {

        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }

}

/* Enemy – specific subclass of Character superclass.
 */
class Enemy extends Character {

    /* Create and spawn an enemy.
     */
    constructor() {

        super();
        this.sprite = 'images/enemy-bug.png';
        this.spawn();

    }

    /* Spawn an enemy at the start of one of the
     * three lanes randomly with a random speed.
     */
    spawn() {

        this.x = 0;

        switch (this.y = Math.floor(Math.random() * 3) + 1) {

            case 1:
                this.y = 60;
                break;

            case 2:
                this.y = 143;
                break;

            case 3:
                this.y = 226;
                break;  

        }

        this.speed = Math.floor(Math.random() * 300) + 300;

    }

    /* Update the enemy's position.
     * Respawn if reached the end of the lane.
     */
    update(dt) {

        let distance = this.speed * dt;
        this.x += distance;

        if (this.x >= 606) {

            this.spawn();

        }

    }

}

/* Player – specific subclass of Character superclass.
 */
class Player extends Character {

    /* Create and spawn the player.
     */
    constructor() {

        super();
        this.sprite = 'images/char-boy.png';
        this.spawn();

    }

    /* Spawn the player at the spawn point.
     */
    spawn() {

        this.x = 202;
        this.y = 392;

    }

    /* Update the player's position.
     * Alert victory if reached the end
     * of the screen and respawn.
     */
    update() {

        if (this.y <= 0) {

            alert("You won");
            this.spawn();

        }

    }

    /* Handle the player's controls input.
     * Move the character accordingly.
     */
    handleInput(direction) {

        switch(direction) {

            case "up":
                if (this.y >= 0) this.y -= 83;
                break;

            case "down":
                if (this.y <= 391.9) this.y += 83;
                break;

            case "left":
                if (this.x >= 0.1) this.x -= 101;
                break;

            case "right":
                if (this.x <= 403.9) this.x += 101;
                break;

        }

    }

}


// Initial code provided with the project
/*// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.*/


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [new Enemy(), new Enemy(), new Enemy()];
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {

    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});