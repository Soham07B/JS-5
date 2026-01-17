function whosPaying(names) {
    
    var len=names.length;
    var select=names[Math.floor(Math.random()*len)+1];
    console.log(select+"is buying lunch today !");
    
}
var names=["A","B","C","D","E"];
whosPaying(names);