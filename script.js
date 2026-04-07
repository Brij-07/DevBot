const chatBox=document.getElementById("chat-box");

const responses={


// HTML
"what is html":
"HTML (HyperText Markup Language) creates webpage structure using elements like headings, paragraphs, links, images and forms.",

"html tags list":
"<html>\n<head>\n<title>\n<body>\n<h1>\n<p>\n<a>\n<img>\n<div>\n<span>\n<form>\n<input>\n<button>\n<ul>\n<ol>\n<li>\n<table>\n<tr>\n<td>",


// CSS
"what is css":
"CSS (Cascading Style Sheets) styles webpages. It controls layout, colors, fonts, spacing and responsiveness.",

"center div css":
"Use flexbox:\n\n.container{\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nheight:100vh;\n}",


// JavaScript
"what is javascript":
"JavaScript makes webpages interactive by allowing dynamic updates, animations, form validation and API communication.",

"js for loop":
"For loop repeats code multiple times:\n\nfor(let i=0;i<5;i++){\nconsole.log(i);\n}",

"let vs const vs var":
"var = old function scoped variable\nlet = block scoped variable\nconst = block scoped constant (cannot change)",

"what is dom":
"DOM allows JavaScript to access and modify HTML elements dynamically.",


// Python
"python for loop":
"For loop repeats code:\n\nfor i in range(5):\n print(i)",

"python function":
"Function is reusable block of code:\n\ndef greet():\n print('hello')",

"python list":
"List stores multiple values:\n\nmyList=[1,2,3]",

"python dictionary":
"Dictionary stores key value pairs:\n\nperson={'name':'John'}",


// Git
"what is git":
"Git tracks changes in code and allows collaboration.",

"git push":
"Uploads local commits to GitHub:\n\ngit push origin main",

"git pull":
"Downloads latest changes:\n\ngit pull origin main",


// Concepts
"what is api":
"API allows software applications to communicate with each other.",

"what is json":
"JSON is data format used to exchange information:\n\n{\"name\":\"John\"}",

"frontend vs backend":
"Frontend = user interface\nBackend = server logic and database",

"what is database":
"Database stores structured information electronically.",

"what is algorithm":
"Algorithm is step-by-step solution to a problem.",

"what is debugging":
"Debugging is finding and fixing code errors."

};



function addMessage(text,sender){

const msg=document.createElement("div");

msg.className="message "+sender;

msg.innerText=text;

chatBox.appendChild(msg);

chatBox.scrollTop=chatBox.scrollHeight;

}



function sendMessage(){

const input=document.getElementById("user-input");

const question=input.value.toLowerCase().trim();

if(!question) return;


addMessage(input.value,"user");


if(responses[question]){

addMessage(responses[question],"bot");

}
else{

addMessage("❌ Ask question from question bank.","bot");

}


input.value="";

}



function quickAsk(q){

document.getElementById("user-input").value=q;

sendMessage();

}



document.getElementById("user-input")

.addEventListener("keypress",function(e){

if(e.key==="Enter") sendMessage();

});
