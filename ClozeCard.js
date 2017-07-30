module.exports = ClozeCard;

function ClozeCard(text, cloze)
    {
    
    this.text = text;
    // this.cloze = [];
    //cloze object has 3 properties
    this.cloze = {
        fullText:"", 
        cloze:"",
        partial:""
    };
    return this.ClozeCard;
    };
