score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');


audiogameover = new Audio('mario_dies.mp3');
audiostart = new Audio('mario_play.mp3');
audiojump = new Audio('mario_jump.mp3');



setTimeout(() => {
audiostart.play();
},1200);


// setTimeout(() => {
//     audio.play()
// }, 1000);



// using this we can => koi bhi button dabe agar to :-
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    // isse hoga kya jb me console me jake koi bhi key dabaunga tab ek keycode ayega, usi ko daabe rkhu to wo same code no of times ayyega

    // code for up arrow key
    if (e.keyCode == 38) {


audiojump.play();
setTimeout(() => {
    audiojump.pause(); 
}, 1000);

        dino = document.querySelector('.dino'); // jo pehla dino class wala element hai wo de dega
        dino.classList.add('animateDino');  // hamne ye class abhi bnai hai phle nhi thi, isse hm dino ko animate krnge , pr hm ye bhi nhi chahenge ki ye animation hmesha rhe dino ke pass
        // hm ye chahte hai ki jaise hi dino kud ke aae ye class hat jae wrna agar wo ek bar kud gaya to fr baad me ye class ka kya kaam 
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
        // iska mtlb is kam ko 700 millisec ke bad kro
        // agar me htau na na is class ko to fr mere key dbane pe ye kudega nhi
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    // dino ki x value nikal rhe
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left')); // parseint is used to convert to int, by default ye pixel me hota hai
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);  //absolute value of dx-ox
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        // gameOver.style.visibility = 'visible';
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni') // jaise hi game khtm ho iska animation ruk jae
        
         
        audiogameover.play();
        setTimeout(() => {
        audiogameover.pause();
        },3000)
        audiostart.pause();
        

        dino = document.querySelector('.dino');
        dino.classList.add('Gameov');
        setTimeout(() => {
            dino.classList.remove('Gameov')
        }, 700);



        // audiogo.play();
        // setTimeout(() => {
        //     audiogo.pause();
        //     audio.pause();
        // }, 500);

    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';  // s = seconds , hm likhte hai na 5s n all
            
            // isme ek dikkat ho rhi hai => (bina set time out kr lagai) => jb animation ho rha hai to mera obstacle ek jhatka kha rha hai jo ki mai nhi chahta to iske liye hmne is pure ko set time out me rkha hai
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}