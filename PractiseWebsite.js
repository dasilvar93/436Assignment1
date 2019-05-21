jsonObj = {"iceCreams":["Vanilla", "Chocolate", "Banana"]}

function initList() {
    var initMes = jsonObj;
    var ul = document.getElementById("list");
    for (var i = 0; i < initMes.iceCreams.length; i++){
        var curr = initMes.iceCreams[i];
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(curr + judge(curr)));
        ul.appendChild(li);
    }
}

document.getElementById('list').appendChild(initList());

function addItem(){
    var ul = document.getElementById("list");
    var item = document.getElementById("text-id");
    var li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value + judge(item.value)));
    ul.appendChild(li);
}

function clearList(){
    let ul = document.getElementById("list");
    while (ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    }
    

function judge(ans) {
    if(acceptFlav(ans)){
        return ": Acceptable";
    } else {
        var random = Math.floor(Math.random() * 6);
        if (random >= 4){
            return ": I don't think you understand ice cream."
        } else if (random >= 3){
            return ": MEDIOCRE.";
        } else if (random >= 2) {
            return ": Bad. Quite Bad.";
        } else if (random >= 1) {
            return ": Horrible flavour.";
        } else {
            return ": lol.";        
        }
    }
}

function acceptFlav(input){
    if (input.toLowerCase() == "cookies and cream"){
        return true;
    }
    if (input.toLowerCase() == "rocky road"){
        return true;
    }
    if (input.toLowerCase() == "cookie dough"){
        return true;
    } else {
        return false;
    }
}

//window.onload.initList; 