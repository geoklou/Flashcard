var Cloze = function (cloze, partial, fullText){
    this.cloze = cloze;
    this.partial = partial;
    this.fullText = fullText;
    return this.Cloze;
};

var ClozeCard = function(text, cloze){
    this.text = text;
    this.cloze = [];
    this.addClozeCard = function(c, p, f){
        this.cloze.push(new Cloze(c, p, f));
        // this.c = f.split(' ').slice(0,2).join(' ');
        // this.p = f.split(' ').slice(2).join(' ');
        // this.f = text;
    };
    return this.ClozeCard;
    };

module.exports = ClozeCard;
