// BasicCard constructor, with scope safe constructor
function BasicCard(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    }
    else {
        return new BasicCard(front, back);
    }
}

// ClozeCard constructor, with scope safe constructor
function ClozeCard(fullText, cloze){
    
    // Checks if cloze is in fullText
    if(fullText.indexOf(cloze) === -1){
        console.log("Sorry - that cloze deletion is not part of your text. Please try again.");
        return;
    }
    else if (this instanceof ClozeCard){
        this.fullText = fullText;
        this.cloze = cloze;
        this.partial = fullText.replace(cloze, "...");
    }
    else{
        return new ClozeCard(fullText, cloze);
    }
}

// ClozeCard.prototype.partial = function(){

// };

// Constructs a new BasicCard
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Checking if "cloze" is in "fullText"
var secondPresidentCloze = new ClozeCard(
    "John Adams was the second president of the United States.", "Thomas Jefferson");

// Test for without new keyword
var thirdPresidentCloze = ClozeCard(
    "Thomas Jefferson was the third president of the United States.", "Thomas Jefferson");

// "Thomas Jefferson" will print if Test for without new keyword works
console.log(thirdPresidentCloze.cloze);

// " ... was the third president of the United States." will print if Test for without new keyword works
console.log(thirdPresidentCloze.partial); 

// "Thomas Jefferson was the third president of the United States." will print if Test for without new keyword works
console.log(thirdPresidentCloze.fullText); 