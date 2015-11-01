var img = 0;

var ghost = setInterval(function(){
    switch (img)
    {
        case 0:
            document.getElementById('ghost').src = "assets/images/ghost2.png";
            img = 1;
            break;
        case 1:
            document.getElementById('ghost').src = "assets/images/ghost.png";
            img = 2;
            break;
        case 2:
            document.getElementById('ghost').src = "assets/images/ghost3.png";
            img = 0;
            break;
    }
}, 700);