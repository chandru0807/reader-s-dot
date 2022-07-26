var total = 0;
var points = 0;
var output2 = $('#pTag');
var output3 = $('#result');
var button = $('#myOpt');
var textEmpty = $('#text-empty');
var correct = "";
 console.log("ch", output2.text().trim().charAt(0));
var isPaused = false;

// Add question
function add_ques()
{
    let s = document.getElementById('add_qus').style.display="block";
    console.log("add ques");
}
// added question
function add(){
    let str=document.getElementById("ques_val").value;
    // console.log(str);
  document.querySelector("#pTag").textContent=str;
  
  }
var time = 0;
var t = window.setInterval(function() {
    var t;
    if (!isPaused) {
        time++;
        t = output2.text().charAt(0);
        output2.text(output2.text().slice(1));
        $("#result").append(t);
    }
    if (output2.text() == "") {
        $('#finish').show();
        $('#')
    }
    if (time > 70) {
        if (t === " ") {
            isPaused = true;
            var n = output3.text().length;
            o = n + 2;
            n = n - 2;

            var str = output3.text();
            var result = "";
            var result1 = "";
            var result2 = "";
            var result3 = "";
            for (n; n >= 0; n--) {
                var letter = str.charAt(n);
                if (letter != " ") {
                    result = result.concat(letter);
                } else {
                    break;
                }
            }

            for (n -= 1; n >= 0; n--) {
                var letter = str.charAt(n);
                if (letter != " ") {
                    result3 = result3.concat(letter);
                } else {
                    break;
                }
            }


            result = result.split("").reverse().join("");
            correct = result;
            result3 = result3.split("").reverse().join("");

            var str1 = output2.text();
            var i;
            for (i = 0; i >= 0; i++) {
                var letter = str1.charAt(i);
                if (letter != " ") {
                    result1 = result1.concat(letter);
                } else {
                    break;
                }
            }
            for (i += 1; i >= 0; i++) {
                var letter = str1.charAt(i);
                if (letter != " ") {
                    result2 = result2.concat(letter);
                } else {
                    break;
                }
            }
            const fruits = [result, result1, result2, result3];
            shuffle(fruits);
            document.getElementById("option1").innerHTML = fruits[0];
            document.getElementById("option2").innerHTML = fruits[1];
            document.getElementById("option3").innerHTML = fruits[2];
            document.getElementById("option4").innerHTML = fruits[3];


            button.click();
            
        }
    }
}, 100);

function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function check() {
    var element = $("#choose").find(".active");

    if (element.html()) {

        total += 1;
        if (correct === element.text()) {
        // if (correct === element.text()) {
        //     alert('Congratulations, You answered correctly!');
        // }   
            points += 1;
        }
        // else{
        //     alert('Answer is Wrong!');
        // }

        button.click();
        element.removeClass("active");
        isPaused = false;
        time = 0;
        textEmpty.hide();
    } else {
        textEmpty.show();
    }
    document.getElementById("score").innerHTML = points;
    document.getElementById("total").innerHTML = total;
}
const displayProgress = (points,total) => {
    const score = document.querySelector('.score');
    if(points!=0){
        const html = `\
        <progress value="${points}" max="${total}"></progress>
        `
        score.insertAdjacentHTML("afterend",html);
    }
}
function game(){
    let s = document.getElementById('m');
    if(points === total)
    {
        s.innerHTML="Very Good Performance";
    }
    else if(points > total/2)
    {
        s.innerHTML="Good Performance";
    }
    else if(points === total/2)
    {
        s.innerHTML="Moderate Performance";
    }
    else if(points==0){
        s.innerHTML="Very Bad Performance ";
    }
    displayProgress(points,total);
}


     



