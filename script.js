function countWord(){
    let words = document.getElementById("tweet").value;
    let count = 0;
    let split = words.split(' ');
    for(let i=0; i<split.length; i++){
        if(split[i] != ""){
            count+=1;
        }
    }
    document.getElementById("show").innerHTML = count;
}

function pastTweets(){
    var x = document.getElementById("tweet").value;
    document.getElementById("posted").innerHTML = x;
}
