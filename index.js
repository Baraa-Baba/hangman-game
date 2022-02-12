var arrofwords = [ "for", "geeks","portal",'problem','result','snake','because', 'skill','guess','hangman','game', "learn", "can","be", "computer", "science", "zoom", "yup", "fire", "in", "be", "data", "geeks"]
var arrofwords=arrofwords.filter(word=>word.length>=4)
var r=Math.floor(Math.random() * arrofwords.length);
var word=arrofwords[r]
var win_count=0
var alphabet = ["a","b","c","d","e","f","h","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lose_count=0
var addaletter=false
var cont=document.getElementById('cont')
var usedp=document.getElementById("usedp")
var input=document.getElementById("input")
var body=document.querySelector("body")

for(let i=0;i<word.length;i++){
    //can't use foreach cause word is a string not an array
    var line=document.createElement("div")    
    line.setAttribute("class","line")
    line.setAttribute("id","line"+i)
    cont.append(line)
}
input.addEventListener("keyup", function(event) {
    //to check for enter
    if (event.keyCode === 13 ) {
        add();
    }
});
function add(){
    let subcount=0
    input.value = input.value.toLowerCase();
    
    for(var ii=0;ii<word.length;ii++){
        if(input.value==word[ii]){
            if (document.getElementById("text"+ii)==undefined){
            //to check if there is alreafy a letter in the line
            p=document.createElement('p')
            p.setAttribute("class","text")
            p.setAttribute("id","text"+ii)
            p.append(input.value)
            document.getElementById("line"+ii).append(p)
            win_count++
            if(win_count==word.length){
                window.location.replace('win.html')
            }
            }
        }
        else{
            subcount++
            if(subcount==word.length){
            alphabet.forEach(letter=>{if (input.value==letter) {
                //to check if the used wrong letter is already in so the user doesnt repeat the same mistake
                    addaletter=true
                }})
            if (addaletter==true){
                usedp.append(input.value+",")
                alphabet=alphabet.filter(letters=>input.value!=letters)
                lose_count++
                //to remove the previous image and put the next one
                whatever=lose_count-1
                document.getElementById("img"+whatever).style.display="none"
                //we cant just you lose count-1 it wil give an error
                document.getElementById("img"+lose_count).style.display="block"
                
            }
                if (lose_count==6){
                    window.location.replace("./lose.html");
                }
            }
        }
        
        if(document.getElementById("text"+ii)!=null){
            document.getElementById("line"+ii).style.borderColor="lightgreen"
        }
    }
        addaletter=false
        input.value=null
    }