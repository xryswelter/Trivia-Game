// Global Variables
let win = 0;
let loss = 0;
let notClicked = 0;
let resultArray = [];
let correctArray = ['B: git push','C: Random Access Memory','A: The shortest distance between two items observed'];
let answer1 = null;
let answer2 = null;
let answer3 = null;

//onclick functions for our answers
$('.answer1').on('click', function() {
    answer1 = null;
    answer1 = $(this).text();
    console.log(answer1);
})
$('.answer2').on('click', function() {
    answer2 = null;
    answer2 = $(this).text();
    console.log(answer2);
})
$('.answer3').on('click', function() {
    answer3 = null;
    answer3 = $(this).text();
    console.log(answer3);
})

//onclick for the Finished button
$('.Finale').on('click', function () {
    //Making array to compare to real answers
    resultArray.push(answer1, answer2, answer3);
    //doublecheck ^_^    
    console.log(resultArray);

    //now comparing resultArray to correctArray
    for (let i = 0; i = correctArray.length; i++) {
        if (resultArray[i] === 0) {
            notClicked++;
            console.log('they did not answer question' + i + 1)
        } else if (resultArray[i] === correctArray[i]) {
            win++;
            console.log(i)
        } else {
            loss++;
        }
    }

    // Updating results
    $('.results').html('You got ' + win + ' answers of 3 questions correct');
    $('.wins').html('Wins: ' + win);
    $('.loss').html('Losses: ' + loss);
    $('.notClicked').html('Not Clicked: ' + notClicked);
    //Functions to show results
    discapear();

})

function discapear() {
    //switch quiz from showing to invisible
    let disappear = $('.quiz');
    if (disappear.style.display === "none") {
        disappear.style.display = "block";
    } else {
        disappear.style.display = "none";
    }
    //switch result from invisible to showing
    let appear= $('.result');
    if (appear.style.display === "none") {
        appear.style.display = "block";
    } else {
        appear.style.display = "none";
    } 
}