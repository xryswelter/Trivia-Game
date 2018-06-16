// Global Variables
let win = 0;
let loss = 0;
let notClicked = 0;
let resultArray = [];
let correctArray = ['B: git push', 'C: Random Access Memory', 'A: The shortest distance between two items observed'];
let answer1 = null;
let answer2 = null;
let answer3 = null;

$(document).ready(function () {
    // time();
    //onclick functions for our answers
    $('.answer1').on('click', function () {
        answer1 = null;
        answer1 = $(this).text();
        console.log(answer1);
    });
    $('.answer2').on('click', function () {
        answer2 = null;
        answer2 = $(this).text();
        console.log(answer2);
    });
    $('.answer3').on('click', function () {
        answer3 = null;
        answer3 = $(this).text();
        console.log(answer3);
    });
    $('.results').css('display', 'none');

    //onclick for the Finished button
    $('.finale').on('click', function () {
        //Making array to compare to real answers
        resultArray.push(answer1, answer2, answer3);
        //doublecheck ^_^    
        console.log(resultArray);
        endGame();
    });

    function endGame() {
        //now comparing resultArray to correctArray
        for (let i = 0; i < correctArray.length; i++) {
            if (resultArray[i] === null) {
                notClicked++;
                console.log('they did not answer question ' + i)
                console.log('NC' + notClicked);
            } else if (resultArray[i] === correctArray[i]) {
                win++;
                console.log('wins' + win)
            } else if (resultArray[i] !== correctArray[i]) {
                loss++;
                console.log('losses' + loss)
            }
        }

        // Updating results
        $('.result').text('You got ' + win + ' answers of 3 questions correct');
        $('.wins').text('Wins: ' + win);
        $('.loss').text('Losses: ' + loss);
        $('.notClicked').text('Not Clicked: ' + notClicked);
        //Functions to show results
        discapear();
    }

    function discapear() {
        console.log('stop')
        //switch quiz from showing to invisible
        let disappear = $('.quiz');
        disappear.css('display', 'none');
        // if (disappear.data() === 'show') {
        //     disappear.css('display', "none");
        // } else {
        //     disappear.css('display', "block");
        // }
        //switch result from invisible to showing
        let appear = $('.results');
        appear.css('display', 'block');
        clearInterval(timer);
    }
    // document.getElementById('timer').innerHTML(0 + ':' + 10)
    //Time Function
    let time = 11;
    let timing = function () {
        console.log("foo");
        
        time--;
        $('#timer').html('Time remaining is: ' + time);
        console.log(time);
        if (time ===0) {
            resultArray.push(answer1, answer2, answer3);
            //doublecheck ^_^    
            console.log(resultArray);
            console.log('time is zero')
            endGame();
            clearInterval(timer);
            return;
        }
    }
    let timer = setInterval(timing, 1000);
    
    console.log(timer);
    


    // function decriment(t) {
    //     $('.timer').html('Time remaining is: ' + t);
    //     if (t === 0) {
    //         endGame();
    //     }
    // // }
});