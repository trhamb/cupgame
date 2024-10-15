const config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 1920,
    backgroundColor: "#89A992",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

function preload() {
    // Load assets
}

function create() {
    /*************************/
    //   CHARACTER CREATION  //
    /*************************/

    // Size of the character placeholder
    const characterSize = 100;
    const movementButtonSize = [this.cameras.main.width / 2, 300];
    const movementSpeed = 10;

    // Calculate the position to center the character at the bottom
    const xPosition = this.cameras.main.width / 2; // Center horizontally
    const yPosition = this.cameras.main.height - characterSize / 2 - 400; // Position it at the bottom

    // Create a square to be a character placeholder
    this.character = this.add
        .rectangle(xPosition, yPosition, characterSize, characterSize, 0xffffff)
        .setOrigin(0.5, 0.5) // Set the origin to the center of the rectangle
        .setStrokeStyle(4, 0x000000);

    /*************************/
    //    BUTTON CREATION    //
    /*************************/

    this.leftButton = this.add
        .rectangle(
            movementButtonSize[0] / 2,
            this.cameras.main.height - movementButtonSize[1] / 2,
            movementButtonSize[0],
            movementButtonSize[1],
            0x1dcc4b
        )
        .setOrigin(0.5, 0.5)
        .setStrokeStyle(4, 0x000000)
        .setInteractive();

    this.rightButton = this.add
        .rectangle(
            this.cameras.main.width - movementButtonSize[0] / 2,
            this.cameras.main.height - movementButtonSize[1] / 2,
            movementButtonSize[0],
            movementButtonSize[1],
            0x1dcc4b
        )
        .setOrigin(0.5, 0.5)
        .setStrokeStyle(4, 0x000000)
        .setInteractive();

    // Buttons Text
    this.leftButtonText = this.add
        .text(
            movementButtonSize[0] / 2,
            this.cameras.main.height - movementButtonSize[1] / 2,
            "LEFT",
            {
                fontSize: "4rem",
                fill: "#000000",
                fontFamily: "Montserrat",
                align: "center",
            }
        )
        .setOrigin(0.5, 0.5);

    this.rightButtonText = this.add
        .text(
            movementButtonSize[0] + movementButtonSize[0] / 2,
            this.cameras.main.height - movementButtonSize[1] / 2,
            "RIGHT",
            {
                fontSize: "4rem",
                fill: "#000000",
                fontFamily: "Montserrat",
                align: "center",
            }
        )
        .setOrigin(0.5, 0.5);

    /******************************/
    //    BUTTON INTERACTIVITY    //
    /******************************/

    this.leftButton.on("pointerdown", () => {
        this.character.x -= movementSpeed;
        if (this.character.x - characterSize / 2 < 0) {
            this.character.x = characterSize / 2;
        }
    });
}

function update() {
    // Game loop
}

const game = new Phaser.Game(config);
