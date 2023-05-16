var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("name").focus();
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
};

function displayResults() {
    var average = 0;
    var totalResult = 0;
    var highestScore = 0;
    var highestScorer = "";

    for (var i = 0; i < scores.length; i++) {
        totalResult += scores[i];
        average = totalResult / (i + 1);
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestScorer = names[i];
        }
        
    }

    var resulttDiv = document.getElementById("results");
    resulttDiv.innerHTML = "<h2>Results</h2><br />" +
        "<p>Average score = " + average + "</p>" +
        "<p>High score = " + highestScorer + " with a score of " + highestScore + "</p>";
}

function addScore() {
    var name = $("name");
    var score = $("score");
    var name = name.value.trim();
    var score = parseInt(score.value);

    if (score < 0 || score > 100 || name === "" || isNaN(score) ) {
        alert("You must enter a name and a valid score.");
        name.value = "";
        score.value = "";
        name.focus();
        return;
    }

    names.push(name);
    scores.push(score);
    name.value = "";
    score.value = "";
    name.focus();
}
function displayScores() {
    var table = document.getElementById("scores_table");
    table.innerHTML = "<h2>Scores</h2><br />" +
        "<tr><th align='left'>Name</th><th align='left'>Score</th></tr>";

    for (var i = 0; i < names.length; i++) {
        var row = table.insertRow();
        var name = row.insertCell();
        var score = row.insertCell();

        name.textContent = names[i];
        score.textContent = scores[i];
    }
}

