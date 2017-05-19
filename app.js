function BasicCard(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    }
    else {
        return new BasicCard(front, back);
    }

    this.printInfo = function() {
        console.log("Front: " + this.front + "Back: " + this.back);
    };
}

function ClozeCard(fullText, cloze){
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

var secondPresidentCloze = new ClozeCard(
    "John Adams was the second president of the United States.", "Thomas Jefferson");

// Test for without new keyword
var thirdPresidentCloze = ClozeCard(
    "Thomas Jefferson was the third president of the United States.", "Thomas Jefferson");

// "Thomas Jefferson""
console.log(thirdPresidentCloze.cloze);

// " ... was the third president of the United States.
console.log(thirdPresidentCloze.partial); 

