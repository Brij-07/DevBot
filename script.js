const chatBox = document.getElementById("chat-box");

const responses = {


// HTML
"what is html":
"HTML (HyperText Markup Language) is the standard language used to create webpages. It provides the structure of a webpage using elements such as headings, paragraphs, images, links, tables, and forms. Web browsers read HTML and display the content visually to users.",

"html tags list":
"Important HTML tags:\n\n<html> – root element of webpage\n<head> – metadata container\n<title> – webpage title\n<body> – visible content\n<h1> to <h6> – headings\n<p> – paragraph\n<a> – hyperlink\n<img> – image\n<div> – block container\n<span> – inline container\n<form> – input form\n<input> – input field\n<button> – clickable button\n<ul> – unordered list\n<ol> – ordered list\n<li> – list item\n<table> – table structure\n<tr> – table row\n<td> – table data\n\nHTML tags define webpage structure.",


// CSS
"what is css":
"CSS (Cascading Style Sheets) is used to style HTML elements. It controls colors, fonts, spacing, layout, positioning, animations, and responsiveness. CSS helps make webpages visually appealing and mobile-friendly.",

"css center div":
"To center a div horizontally and vertically using Flexbox:\n\n.container {\n display:flex;\n justify-content:center; /* horizontal center */\n align-items:center; /* vertical center */\n height:100vh;\n}\n\nFlexbox is widely used because it works well on modern layouts.",


// JavaScript
"what is javascript":
"JavaScript is a programming language used to add interactivity to websites. It allows developers to create dynamic features such as form validation, dropdown menus, animations, popups, real-time updates, and communication with servers using APIs.",

"javascript for loop":
"A for loop is used to repeat a block of code multiple times.\n\nSyntax:\nfor(initialization; condition; update){\n code\n}\n\nExample:\nfor(let i=0;i<5;i++){\n console.log(i);\n}\n\nThe loop runs until the condition becomes false.",

"let vs var vs const":
"var: old variable declaration method, function scoped, can be redeclared.\n\nlet: modern variable declaration, block scoped, value can be changed.\n\nconst: block scoped variable that cannot be reassigned after declaration.\n\nBest practice: use const by default, use let when value must change.",

"what is dom":
"DOM (Document Object Model) represents a webpage as a structured tree of objects. JavaScript can access and modify these objects to change content, style, or structure dynamically. Example: changing text, hiding elements, updating styles.",


// Python
"python for loop":
"A Python for loop is used to iterate over a sequence such as a list, string, or range of numbers.\n\nExample:\nfor i in range(5):\n print(i)\n\nThis prints numbers from 0 to 4.\nPython loops are commonly used for automation and repetitive tasks.",

"python function":
"A function is a reusable block of code that performs a specific task. Functions help reduce repetition and make programs easier to manage.\n\nExample:\ndef greet():\n print('hello')\n\nFunctions can also accept parameters and return values.",

"python list":
"A list is an ordered collection of items stored in a single variable. Lists can contain numbers, strings, or other objects.\n\nExample:\nmyList=[1,2,3]\n\nLists are mutable, meaning elements can be changed, added, or removed.",

"python dictionary":
"A dictionary stores data as key-value pairs. Each key is unique and maps to a value.\n\nExample:\nperson={'name':'John','age':20}\n\nDictionaries are useful for structured data like user information.",


// Git
"what is git":
"Git is a distributed version control system used to track changes in code. It allows multiple developers to collaborate on projects, revert changes, and maintain version history.",

"git push":
"git push uploads local repository commits to a remote repository such as GitHub.\n\nCommand:\ngit push origin main\n\nThis sends your changes to the main branch online.",

"git pull":
"git pull downloads the latest changes from a remote repository and merges them into your local project.\n\nCommand:\ngit pull origin main\n\nUsed to keep your code updated.",


// Concepts
"what is api":
"API (Application Programming Interface) allows communication between different software systems. It defines how requests and responses should be made so applications can exchange data.\n\nExample: weather app fetching temperature from server.",

"what is json":
"JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data.\n\nExample:\n{\n \"name\":\"John\",\n \"age\":25\n}\n\nJSON is widely used in APIs because it is easy to read and parse.",

"difference between frontend and backend":
"Frontend refers to the visual part of a website that users interact with. It is built using HTML, CSS, and JavaScript.\n\nBackend refers to the server-side logic that handles databases, authentication, APIs, and application processing.",

"what is database":
"A database is an organized collection of data stored electronically. Databases allow efficient storage, searching, updating, and management of information.\n\nExamples include MySQL, MongoDB, PostgreSQL.",

"what is algorithm":
"An algorithm is a step-by-step set of instructions used to solve a problem or perform a task. Algorithms are essential in programming for solving logical problems efficiently.",

"what is debugging":
"Debugging is the process of identifying, analyzing, and fixing errors (bugs) in a program. Developers use debugging to ensure code runs correctly and produces expected output."

};



// display message in chat
function addMessage(text, sender){

const msg=document.createElement("div");

msg.className="message "+sender;

msg.innerText=text;

chatBox.appendChild(msg);

chatBox.scrollTop=chatBox.scrollHeight;

}



// send message
function sendMessage(){

const input=document.getElementById("user-input");

const question=input.value.toLowerCase().trim();

if(input.value==="") return;


addMessage(input.value,"user");


if(responses[question]){

addMessage(responses[question],"bot");

}
else{

addMessage(

"❌ Please ask a question from the question bank.\nDevBot only answers predefined questions.",

"bot"

);

}

input.value="";

}



// quick buttons
function quickAsk(q){

document.getElementById("user-input").value=q;

sendMessage();

}



// enter key support
document.getElementById("user-input").addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});
