
    player1_name = localStorage.getItem("p1");
    player2_name = localStorage.getItem("p2");

    player1_score = 0;
    player2_score = 0;

document.getElementById("k9").innerHTML = player1_name + " : ";
document.getElementById("k6").innerHTML = player2_name + " : ";

document.getElementById("z6").innerHTML = player1_score ;
document.getElementById("z9").innerHTML = player2_score ;

document.getElementById("L0").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("Z0").innerHTML = "Answer Turn - " + player2_name ;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("Q1").innerHTML = row;
document.getElementById("word").value = "";
}
Q = "player1";
A = "player2";
function check(){
w = document.getElementById("input_check_box").value;
s = w.toLowerCase();
console.log("answerinlowercase"+ s);
if (s == word)
{
    if (A == "player1") 
    {
        player1_score = player1_score + 1;
        document.getElementById("z6").innerHTML = player1_score;
    }
    else
    {
        player2_score = player2_score + 1;
        document.getElementById("z9").innerHTML = player2_score;
    }
}
if (Q == "player1")
{
Q = "player2"
document.getElementById("L0").innerHTML = "Q turn -" + player2_name ;
}
else
{
    Q = "player1"
    document.getElementById("L0").innerHTML = "Q turn -" + player1_name ;
    }
    
if (A == "player1")
{
A = "player2"
document.getElementById("Z0").innerHTML = "A turn -" + player2_name ;
}
else
{
    A = "player1"
    document.getElementById("Z0").innerHTML = "A turn -" + player1_name ;
    }
document.getElementById("Q1").innerHTML = "";
}