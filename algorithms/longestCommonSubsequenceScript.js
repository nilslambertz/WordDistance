function longestCommonSubsequence(w1, w2) {
    let sub1 = getSubsequences(w1);
    let sub2 = getSubsequences(w2);

    let sorted1 = Array.from(sub1).sort(function(a, b) {
        return a.length - b.length || w1.indexOf(a) - w1.indexOf(b);
    });
    let sorted2 = Array.from(sub2).sort(function(a, b) {
        return a.length - b.length || w2.indexOf(a) - w2.indexOf(b);
    });

    let cutSet = intersection(sub1, sub2);
    let cut = Array.from(cutSet);
    let max = 0;
    let longestSubsequence = "";
    for(let i = 0; i < cut.length; i++) {
        if(cut[i].length > max) {
            longestSubsequence = cut[i];
            max = longestSubsequence.length;
        }
    }

    let subsequenceSpan = document.createElement("span");
    subsequenceSpan.innerText = "(" + longestSubsequence + ")";
    subsequenceSpan.classList.add("greySpan");
    document.getElementById("contentHeader").innerHTML = "longest common subsequence: " + max + " ";
    if(max > 0) {
        document.getElementById("contentHeader").appendChild(subsequenceSpan);
    }

    printSubsequences(cutSet, w1, sorted1);
    printSubsequences(cutSet, w2, sorted2);
}

function printSubsequences(cutSet, word, arr) {
    let innerContent = document.getElementById("innerContent");
    let wordSubsequenceHeader = document.createElement("span");
    wordSubsequenceHeader.classList.add("wordHeader");

    let wordSpan = document.createElement("span");
    wordSpan.innerText = word;
    wordSpan.classList.add("wordSpan");
    wordSubsequenceHeader.innerText = "Subsequences of ";
    wordSubsequenceHeader.append(wordSpan);
    innerContent.append(wordSubsequenceHeader);
    let subsequencesDiv = document.createElement("div");
    subsequencesDiv.classList.add("subsequencesDiv");
    for(let i = 0; i < arr.length; i++) {
        let span = document.createElement("span");
        if(cutSet.has(arr[i])) {
            span.classList.add("highlightSpan");
        }
        span.innerText = arr[i];
        subsequencesDiv.appendChild(span);
        if(i !== arr.length - 1) {
            subsequencesDiv.append(", ");
        }
    }
    innerContent.append(subsequencesDiv);
}

function getSubsequences(word) {
    let set = new Set();

    for(let i = word.length-1; i >= 0; i--) {
        let c = word.charAt(i);
        let setArray = Array.from(set);
        for (let elem of setArray) {
            set.add(c + elem);
        }

        set.add(c);
    }

    return set;
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}
