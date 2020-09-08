function levenshteinDistance(w1, w2) {
    let m = initialiseTable(w1, w2);

    for(let k = 1; k < w1.length + 1; k++) {
        for(let i = 1; i < w2.length + 1; i++) {
            let replace = m[i-1][k-1] + (w1.charAt(k-1) === w2.charAt(i-1) ? 0 : 1);
            let del = m[i-1][k] + 1;
            let insert = m[i][k-1] + 1;

            m[i][k] = Math.min(replace, del, insert);
        }
    }


    /*let table = document.createElement("table");
    table.id = "hammingDistanceTable";
    document.getElementById("innerContent").appendChild(table);

    let tr1 = document.createElement("tr");
    table.append(tr1);

    for(let i = 0; i < w1.length +1; i++) {

    }*/

    console.log(m);
}

function initialiseTable(w1, w2) {
    let m = [];
    m[0] = [0];

    for(let k = 1; k < w1.length+1; k++) {
        m[0][k] = k;
    }
    for(let i = 1; i < w2.length+1; i++) {
        m[i] = [i];
    }

    return m;
}