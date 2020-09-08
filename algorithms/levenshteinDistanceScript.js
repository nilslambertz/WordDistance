function levenshteinDistance(w1, w2) {
    let m = initialiseTable(w1, w2);

    for(let k = 2; k < w1.length + 2; k++) {
        for(let i = 2; i < w2.length + 2; i++) {
            let replace = m[i-1][k-1] + (w1.charAt(k-2) === w2.charAt(i-2) ? 0 : 1);
            let del = m[i-1][k] + 1;
            let insert = m[i][k-1] + 1;

            m[i][k] = Math.min(replace, del, insert);
        }
    }


    let table = document.createElement("table");
    table.id = "levenshteinDistanceTable";
    document.getElementById("innerContent").appendChild(table);

    for(let i = 0; i < m.length; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let k = 0; k < m[i].length; k++) {
            let td = document.createElement("td");
            td.innerText = m[i][k];
            tr.appendChild(td);
        }
    }
}

function initialiseTable(w1, w2) {
    let m = [];
    m[0] = ["", "-"];
    m[1] = ["-", 0];

    for(let k = 0; k < w1.length; k++) {
        m[0][k+2] = w1.charAt(k);
        m[1][k+2] = k+1;
    }

    for(let i = 0; i < w2.length; i++) {
        m[i+2] = [w2.charAt(i), i+1];
    }

    return m;
}