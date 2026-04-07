const chatBox=document.getElementById("chat-box");


const responses={


// HTML
"what is html":
"HTML structures webpages using tags.\nLearn more:\nhttps://developer.mozilla.org/en-US/docs/Web/HTML",

"html tags list":
"<html>\n<head>\n<body>\n<div>\n<p>\n<a>\n<img>",


// CSS
"what is css":
"CSS styles webpages.\nLearn more:\nhttps://developer.mozilla.org/en-US/docs/Web/CSS",

"css center div":
"display:flex;\njustify-content:center;\nalign-items:center;",


// JavaScript
"what is javascript":
"JavaScript makes webpages interactive.",

"javascript for loop":
"for(let i=0;i<5;i++){\n console.log(i)\n}",

"let vs var vs const":
"let = changeable\nconst = fixed\nvar = old",

"what is dom":
"DOM lets JavaScript access HTML.",


// Python
"python for loop":
"for i in range(5):\n print(i)",

"python function":
"def greet():\n print('hello')",

"python list":
"[1,2,3]",

"python dictionary":
"{'name':'John'}",


// Git
"what is git":
"Git tracks code changes.",

"git push":
"git push origin main",

"git pull":
"git pull origin main",


// Concepts
"what is api":
"API allows software communication.",

"what is json":
"{name:'John'}",

"difference between frontend and backend":
"Frontend = UI\nBackend = logic",

"what is database":
"Database stores information.",

"what is algorithm":
"Step-by-step solution.",

"what is debugging":
"Fixing code errors."

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


addMessage(input.value,"user");


if(responses[question]){

addMessage(responses[question],"bot");

}
else{

addMessage(

"❌ Please ask a question from the question bank below.\nDevBot only answers predefined questions.",

"bot"

);

}


input.value="";

}



function quickAsk(q){

document.getElementById("user-input").value=q;

sendMessage();

}
