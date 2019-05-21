function judge() {
    ans = getElementById("text-id");
    if(ans == "Cookies and Cream"){
        return "Acceptable";
    } else {
        var random = Math.floor(Math.random() * 4);
        if (random >= 3){
            return "MEDIOCRE.";
        } else if (random >= 2) {
            return "Bad. Quite Bad.";
        } else if (ramdom >= 1) {
            return "Horrible flavour.";
        } else {
            return "lol.";        
        }
    }
}