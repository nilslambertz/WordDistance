let algorithm = 0;
let currentButton = document.getElementById("hammingDistanceButton");

document.getElementById("word1").addEventListener("input", () => {
    updateContent(false);
})

document.getElementById("word2").addEventListener("input", () => {
    updateContent(false);
})

document.getElementById("hammingDistanceButton").addEventListener("click", () => {
    algorithm = 0;
    currentButton.classList.remove("current");
    currentButton = document.getElementById("hammingDistanceButton");
    currentButton.classList.add("current");
    updateContent(true);
});

document.getElementById("longestCommonSubsequenceButton").addEventListener("click", () => {
    algorithm = 1;
    currentButton.classList.remove("current");
    currentButton = document.getElementById("longestCommonSubsequenceButton");
    currentButton.classList.add("current");
    updateContent(true);
});

document.getElementById("levenshteinDistanceButton").addEventListener("click", () => {
    algorithm = 2;
    currentButton.classList.remove("current");
    currentButton = document.getElementById("levenshteinDistanceButton");
    currentButton.classList.add("current");
    updateContent(true);
});


function updateContent(click) {
    let firstWordInput = document.getElementById("word1");
    let secondWordInput = document.getElementById("word2");

    let firstWord = firstWordInput.value.trim();
    let secondWord = secondWordInput.value.trim();

    firstWordInput.value = firstWord;
    secondWordInput.value = secondWord;

    if(!firstWord || !secondWord) {
        if(!click) {
            document.getElementById("innerContent").innerHTML = "";
            document.getElementById("contentHeader").innerHTML = "Please enter two words and select an algorithm!";
            return;
        }

        if(!firstWord) {
            firstWordInput.classList.add("error");
            setTimeout(() => {
                firstWordInput.classList.remove("error");
            }, 500);
        }
        if(!secondWord) {
            secondWordInput.classList.add("error");
            setTimeout(() => {
                secondWordInput.classList.remove("error");
            }, 500);
        }
        return;
    }

    document.getElementById("innerContent").innerHTML = "";

    switch (algorithm) {
        case 0: {
            hammingDistance(firstWord, secondWord);
            break;
        }
        case 1: {
            longestCommonSubsequence(firstWord, secondWord);
            break;
        }
    }
}