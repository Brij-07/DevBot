const chatBox=document.getElementById("chat-box");
const input=document.getElementById("user-input");
const button=document.getElementById("send-btn");

function addMessage(text,sender){
const msg=document.createElement("div");
msg.className="message "+sender;
msg.innerHTML=formatResponse(text);
chatBox.appendChild(msg);
chatBox.scrollTop=chatBox.scrollHeight;
}

function formatResponse(text){
if(text.includes("```")){
return text.replace(/```(.*?)```/gs,"<pre><code>$1</code></pre>");
}
return text;
}

/* KNOWLEDGE BASE */
const responses={

"hello":"Hello 👋 I am DevBot.\nAsk me coding questions.",

"html":"Basic HTML:\n```html\n<h1>Hello World</h1>\n<p>This is HTML</p>\n```",

"html page":"Basic webpage:\n```html\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page</title>\n</head>\n<body>\nHello\n</body>\n</html>\n```",

"css":"Basic CSS:\n```css\nbody{\n background:black;\n color:white;\n}\n```",

"center div":"Center div:\n```css\n.container{\n display:flex;\n justify-content:center;\n align-items:center;\n height:100vh;\n}\n```",

"flexbox":"Flexbox example:\n```css\n.container{\n display:flex;\n gap:10px;\n}\n```",

"grid":"CSS grid:\n```css\n.container{\n display:grid;\n grid-template-columns:1fr 1fr;\n}\n```",

"javascript":"Basic JS:\n```javascript\nconsole.log('Hello World');\n```",

"variable":"Variables:\n```javascript\nlet name='DevBot';\nconst age=2;\n```",

"function":"Function:\n```javascript\nfunction greet(){\n return 'Hello';\n}\n```",

"arrow function":"Arrow function:\n```javascript\nconst greet=()=> 'Hello';\n```",

"if":"If condition:\n```javascript\nif(x>10){\n console.log('Big');\n}\n```",

"loop":"For loop:\n```javascript\nfor(let i=0;i<5;i++){\n console.log(i);\n}\n```",

"while loop":"While loop:\n```javascript\nlet i=0;\nwhile(i<5){\n i++;\n}\n```",

"array":"Array:\n```javascript\nconst arr=[1,2,3];\nconsole.log(arr[0]);\n```",

"object":"Object:\n```javascript\nconst user={\n name:'John',\n age:20\n};\n```",

"map":"Array map:\n```javascript\narr.map(x=>x*2);\n```",

"filter":"Array filter:\n```javascript\narr.filter(x=>x>5);\n```",

"event listener":"Event listener:\n```javascript\nbutton.addEventListener('click',()=>{\n alert('Clicked');\n});\n```",

"fetch":"Fetch API:\n```javascript\nfetch(url)\n.then(r=>r.json())\n.then(data=>console.log(data));\n```",

"promise":"Promise:\n```javascript\nnew Promise(resolve=>resolve('done'));\n```",

"async":"Async function:\n```javascript\nasync function load(){\n return 5;\n}\n```",

"dom":"DOM select:\n```javascript\ndocument.getElementById('id');\n```",

"python":"Python basic:\n```python\nprint('Hello')\n```",

"python function":"Python function:\n```python\ndef greet():\n return 'Hello'\n```",

"python loop":"Python loop:\n```python\nfor i in range(5):\n print(i)\n```",

"list":"Python list:\n```python\nnums=[1,2,3]\n```",

"dictionary":"Python dictionary:\n```python\nuser={'name':'john'}\n```",

"git":"Git init:\n```bash\ngit init\n```",

"git commit":"Git commit:\n```bash\ngit add .\ngit commit -m 'update'\n```",

"git push":"Git push:\n```bash\ngit push origin main\n```",

"debug":"Debug tip:\nUse console.log() to inspect values.",

"error":"Common fix:\nCheck spelling and console errors.",

"responsive":"Responsive meta:\n```html\n<meta name='viewport' content='width=device-width, initial-scale=1'>\n```",

"api":"API call:\n```javascript\nfetch('/api/data');\n```",

"json":"JSON example:\n```json\n{\n \"name\":\"John\"\n}\n```",

"react":"React component:\n```javascript\nfunction App(){\n return <h1>Hello</h1>;\n}\n```",

"node":"Node server:\n```javascript\nconst http=require('http');\n```",

"express":"Express server:\n```javascript\napp.get('/',(req,res)=>res.send('Hi'));\n```",

"algorithm":"Algorithm example:\n```javascript\narr.sort((a,b)=>a-b);\n```",

"binary search":"Binary search:\n```javascript\nfunction search(arr,x){\n let l=0,r=arr.length-1;\n}\n```"

};
function getBotReply(question){
const q=question.toLowerCase();
for(let key in responses){
if(q.includes(key)){
return responses[key];
}
}
return "I don't know that yet 🤖\nTry asking about:\nhtml, css, javascript, python, git, react, api";
}
function handleChat(){
const text=input.value.trim();
if(!text) return;
addMessage(text,"user");
input.value="";
const loading=document.createElement("div");
loading.className="message bot";
loading.innerText="Typing...";
chatBox.appendChild(loading);
setTimeout(()=>{
loading.innerHTML=formatResponse(getBotReply(text));
},400);
}
button.onclick=handleChat;
input.addEventListener("keydown",e=>{
if(e.key==="Enter"&&!e.shiftKey){
e.preventDefault();
handleChat();
}
});
