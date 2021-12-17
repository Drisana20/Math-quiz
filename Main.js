function User(){
    p1 = document.getElementById("b9").value;
    p2 = document.getElementById("v9").value;
    localStorage.setItem("p1",p1);
    localStorage.setItem("p2",p2);
    window.location =("game.pg.html");
}
