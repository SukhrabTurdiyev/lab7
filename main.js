// Select the first h1 element in the document
const firstHeading = document.querySelector("h1");

// Remove the text content from the element
firstHeading.textContent = "";

// create <h1> element
var h1 = document.createElement("h1");
h1.innerHTML = "Lab7 Assignment";
h1.style.color = "blue";
document.body.appendChild(h1);
  
// create <hr> element
var hr = document.createElement("hr");
document.body.appendChild(hr);
      
// create <h2> element
var h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);
      
// create <p> element
var p = document.createElement("p");
p.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p);
      
// create <ul> element
var ul = document.createElement("ul");
      
// create <li> elements
var li1 = document.createElement("li");
li1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
li1.style.color = "green";
ul.appendChild(li1);
  
var li2 = document.createElement("li");
li2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
li2.style.color = "purple";
ul.appendChild(li2);
    
var li3 = document.createElement("li");
li3.innerHTML = "change content of the elements (<b>5 points</b>);";
li3.style.color = "green";
ul.appendChild(li3);
  
var li4 = document.createElement("li");
li4.innerHTML = "change styles of the elements (<b>5 points</b>);";
li4.style.color = "purple";
ul.appendChild(li4);
    
var li5 = document.createElement("li");
li5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
li5.style.color = "green";
ul.appendChild(li5);
      
var li6 = document.createElement("li");
li6.innerHTML = "change classes of the elements (<b>5 points</b>).";
li6.style.color = "purple";
ul.appendChild(li6);

document.body.appendChild(ul);
    
// create another <p> element
var p2 = document.createElement("p");
document.body.appendChild(p2);
    
// create another <hr> element
var hr2 = document.createElement("hr");
document.body.appendChild(hr2);
    
// create another <h2> element
var h2_2 = document.createElement("h2");
h2_2.innerHTML = "Submission";
h2_2.style.color = "red";
document.body.appendChild(h2_2);
      
// create another <p> element
var p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

// create another <ul> element
var ul2 = document.createElement("ul");
  
// create more <li> elements
var li7 = document.createElement("li");
li7.innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
li7.style.color = "green";
ul2.appendChild(li7);

var li8 = document.createElement("li");
li8.innerHTML = "Clone this repository to your local machine and work inside it.";
li8.style.color = "purple";
ul2.appendChild(li8);

var li9 = document.createElement("li");
li9.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).";
li9.style.color = "green";
ul2.appendChild(li9);

var li10 = document.createElement("li");
li10.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
li10.style.color = "purple";
ul2.appendChild(li10);

var li11 = document.createElement("li");
li11.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
li11.style.color = "green";
ul2.appendChild(li11);

var li12 = document.createElement("li");
li12.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
li12.style.color = "purple";
ul2.appendChild(li12);

var li13 = document.createElement("li");
li13.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
li13.style.color = "green";
ul2.appendChild(li13);

document.body.appendChild(ul2);

// create another <hr> element
var hr3 = document.createElement("hr");
document.body.appendChild(hr3);