const chatBox=document.getElementById("chat-box");


const responses={

// HTML
"what is html":
"HTML (HyperText Markup Language) is the standard language used to create webpages. It structures content using elements like headings, paragraphs, links, images, and forms. Browsers read HTML to display webpages correctly.\nLearn more:\nhttps://developer.mozilla.org/en-US/docs/Web/HTML",

"html tags list":
"Common HTML tags:\n<html> root element\n<head> metadata\n<title> page title\n<body> visible content\n<h1>-<h6> headings\n<p> paragraph\n<a> hyperlink\n<img> image\n<div> container\n<span> inline container\n<form> input form\n<input> user input\n<button> clickable button\n<ul> unordered list\n<ol> ordered list\n<li> list item",


// CSS
"what is css":
"CSS (Cascading Style Sheets) is used to style and layout webpages. It controls colors, fonts, spacing, positioning, and responsiveness so websites look visually appealing.\nLearn more:\nhttps://developer.mozilla.org/en-US/docs/Web/CSS",

"css center div":
"To center a div horizontally and vertically using Flexbox:\ndisplay:flex;\njustify-content:center; /* horizontal */\nalign-items:center; /* vertical */\nheight:100vh;\nFlexbox is the most modern and reliable way to center elements.",


// JavaScript
"what is javascript":
"JavaScript is a programming language used to make webpages interactive. It allows developers to create dynamic features like form validation, animations, popups, API requests, and real-time updates.",

"javascript for loop":
"A for loop repeats code a specific number of times. It is useful when performing repetitive tasks.\nExample:\nfor(let i=0;i<5;i++){\n console.log(i);\n}\nThis runs the code 5 times.",

"let vs var vs const":
"var: old way to declare variables, function-scoped.\nlet: modern variable, block-scoped, value can change.\nconst: block-scoped, value cannot be reassigned.\nUse let and const in modern JavaScript.",

"what is dom":
"DOM (Document Object Model) represents the webpage as objects that JavaScript can access and modify. It allows changing text, styles, structure, and content dynamically.",


// Python
"python for loop":
"A for loop in Python is used to iterate over sequences like lists or ranges.\nExample:\nfor i in range(5):\n print(i)\nThis prints numbers from 0 to 4.",

"python function":
"A function is a reusable block of code that performs a specific task.\nExample:\ndef greet():\n print('hello')\nFunctions help organize and reuse code efficiently.",

"python list":
"A list is a collection of items stored in order. Lists can contain different data types and are mutable (changeable).\nExample:\n[1,2,3]\nLists are commonly used to store multiple values.",

"python dictionary":
"A dictionary stores data in key-value pairs. Each key maps to a value.\nExample:\n{'name':'John'}\nDictionaries are useful for structured data.",


// Git
"what is git":
"Git is a version control system used to track changes in code. It allows developers to collaborate, manage versions, and revert changes when needed.",

"git push":
"git push uploads local repository changes to a remote repository like GitHub.\nExample:\ngit push origin main",

"git pull":
"git pull downloads the latest changes from a remote repository and merges them into the local project.\nExample:\ngit pull origin main",


// Concepts
"what is api":
"API (Application Programming Interface) allows different software applications to communicate with each other. APIs enable data exchange between services like websites, apps, and servers.",

"what is json":
"JSON (JavaScript Object Notation) is a lightweight format used to store and exchange data. It is easy for humans to read and machines to parse.\nExample:\n{\"name\":\"John\"}",

"difference between frontend and backend":
"Frontend is the part of a website users see and interact with (HTML, CSS, JavaScript).\nBackend handles server logic, databases, authentication, and processing (Python, Node.js, PHP, etc).",

"what is database":
"A database is an organized collection of data stored electronically. It allows easy retrieval, updating, and management of information.",

"what is algorithm":
"An algorithm is a step-by-step set of instructions used to solve a problem or perform a task efficiently in programming.",

"what is debugging":
"Debugging is the process of finding and fixing errors (bugs) in code to make the program work correctly."

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
