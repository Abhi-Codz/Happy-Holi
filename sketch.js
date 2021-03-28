//Naming variables
var bg, bgImage;
var holi, holiImage;
var song;

function preload()
{
    bgImage = loadAnimation('Wing0.png', 'Wing0.png', 'Wing1.png', 'Wing1.png', 'Wing2.png', 'Wing2.png', 'Wing3.png', 'Wing3.png', 'Wing4.png', 'Wing4.png', 'Wing5.png', 'Wing6.png', 'Wing6.png', 'Wing7.png', 'Wing7.png', 'Wing8.png', 'Wing8.png', 'Wing9.png', 'Wing9.png', 'Wing9.png', 'Wing9.png', 'Wing9.png', 'Wing9.png');
    holiImage = loadAnimation('Flow0.png', 'Flow1.png', 'Flow2.png', 'Flow3.png', 'Flow4.png', 'Flow5.png', 'Flow5.png', 'Flow5.png', 'Flow5.png', 'Flow5.png', 'Flow6.png', 'Flow6.png', 'Flow6.png', 'Flow6.png', 'Flow6.png', 'Flow6.png');
    // song = loadSound('y2mate.com - Happy New Year 2020  Happy New Year Songs 2020  Top Happy New Year Songs Playlist 2020-[AudioTrimmer.com].mp3');
    // fireWorks = createImg('fireworks_gif.gif'); 
}


function setup()
{
    let canvas = createCanvas(560, 600);

    // song.loop();
    
    //Creating sprites
    bg = createSprite(300, 340);
    bg.addAnimation("wing", bgImage);
    bg.scale = 1.1;


    holi = createSprite(300, 270);
    holi.addAnimation("animation", holiImage);
}


function draw()
{
    background('skyblue');

    fill('white');
    textSize(15);
    text('BY-ABHINAV MISHRA', 200, 580)
    

    drawSprites();
}