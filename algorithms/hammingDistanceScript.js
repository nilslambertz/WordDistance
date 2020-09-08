function hammingDistance(w1, w2) {
    let table = document.createElement("table");
    table.id = "hammingDistanceTable";
    document.getElementById("innerContent").appendChild(table);

    let distance = 0;
    let len = w1.length > w2.length ? w1.length : w2.length;
    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    table.append(tr1, tr2);

    for(let i = 0; i < len; i++) {
        let c1 = w1.charAt(i);
        let c2 = w2.charAt(i);

        let td1 = document.createElement("td");
        td1.innerText = c1;
        tr1.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerText = c2;
        tr2.appendChild(td2);

        if(c1 === c2) {
            td1.classList.add("similar");
            td2.classList.add("similar");
        } else {
            td1.classList.add("different");
            td2.classList.add("different");
            distance++;
        }
    }

    document.getElementById("contentHeader").innerText = "hamming distance: " + distance;
}