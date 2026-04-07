const API_KEY="AIzaSyBXoJT8UkLDGEDFKDK46SumXDnE34xicfo";
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
return text
.replace(/```(.*?)```/gs,"<pre><code>$1</code></pre>");
}
return text;
}
async function askAI(prompt){
const url=
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+API_KEY;
const response=await fetch(url,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
role:"user",
parts:[
{ text:
"You are DevBot coding assistant. Format code inside ``` ``` blocks.\n"+prompt
}
]
}
]
})
});
const data=await response.json();
return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
}
async function handleChat(){
const text=input.value.trim();
if(!text) return;
addMessage(text,"user");
input.value="";
const loading=document.createElement("div");
loading.className="message bot";
loading.innerText="Typing...";
chatBox.appendChild(loading);
const reply=await askAI(text);
loading.innerHTML=formatResponse(reply);
}
button.onclick=handleChat;
input.addEventListener("keydown",e=>{
if(e.key==="Enter"&&!e.shiftKey){
e.preventDefault();
handleChat();
}
});
