const input = document.querySelector('input');
const log = document.getElementById('values');
var suggestion1;
var suggestion2;
var suggestion3;
var suggestion4;
var suggestion5;



//split the words of the textbox into individual indexs
//check each word if it contains errors, if so append that index with tags.



input.addEventListener('input', updateValue);

function updateValue(e) {
    textContent = e.target.value;
 
    
    
    var selectionArr = textContent.split(" ");



for(let i=0;i< selectionArr.length; i++){
fetch('https://cast.boisestate.edu/test/splchk.php?word='+selectionArr[i]+'&max=5')
.then(res => res.text())// your cod
.then(res => res =res.split(','))// your code
   
.then(data => passer(data))
	}
    
console.clear();
}
function passer(arrVal){
//console.log(arrVal[0].substring(15,arrVal[0].length));//original value
//console.log(arrVal[1].substring(24,arrVal[1].length));
//console.log(arrVal[2].substring(5,arrVal[2].length));
//console.log(arrVal[3].substring(5,arrVal[3].length));
//console.log(arrVal[4].substring(5,arrVal[3].length));

//console.log(arrVal[5].substring(5,arrVal[5].length-6));//last suggestion	
//console.log('-------------------');
    
    

 suggestion1=arrVal[0].substring(16,arrVal[0].length);
suggestion2=arrVal[1].substring(24,arrVal[1].length);
suggestion3=arrVal[2].substring(5,arrVal[2].length);
suggestion4=arrVal[3].substring(5,arrVal[3].length);
suggestion5=arrVal[4].substring(5,arrVal[3].length);
    
    
document.getElementById("suggestion1").innerHTML=arrVal[0].substring(16,arrVal[0].length);
document.getElementById("suggestion2").innerHTML=arrVal[1].substring(24,arrVal[1].length);
document.getElementById("suggestion3").innerHTML=arrVal[2].substring(5,arrVal[2].length);
document.getElementById("suggestion4").innerHTML=arrVal[3].substring(5,arrVal[3].length);
document.getElementById("suggestion5").innerHTML=arrVal[4].substring(5,arrVal[3].length);

}


function showSuggestions(arrVal){
  var suggestions = document.getElementById("suggestion-popover-wrapper");
  suggestions.style.display = "block";
}

function hideSugesstions(){
  var suggestions = document.getElementById("suggestion-popover-wrapper");
  suggestions.style.display = "none";
}


$('#suggestion3').click(function(){
    var theInputs = document.getElementsByTagName('input');  
     for (var i = 0; i < theInputs.length; i++) {
    var node = theInputs [i];

    if (node.getAttribute('type') == 'text') {
        // either or
        //node.value = this.value.split(',').join('&#44;');
        //node.value= node.value.replace(/,/g,suggestion1);
        suggestion1=suggestion1.substring(1,suggestion1.length-1);
        suggestion3=suggestion3.substring(2,suggestion3.length-1);
        node.value= node.value.replace(suggestion1,suggestion3);
        hideSugesstions();
    }
} 
});

$('p').append('<span id="add_here">new-dynamic-text</span>');

