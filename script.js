const API_KEY = "AIzaSyDjvDDP-uJlRuEdh9BlYtkLhnnaP1dLpf0";

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const button = document.getElementById("send-btn");

function addMessage(text, sender) {

    const msg = document.createElement("div");

    msg.className = "message " + sender;

    msg.innerText = text;

    chatBox.appendChild(msg);

    chatBox.scrollTop = chatBox.scrollHeight;
}

async function askAI(prompt) {

const url =
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY;
    try {

        const response = await fetch(url, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                contents: [

                    {

                        role: "user",

                        parts: [

                            {

                                text: prompt

                            }

                        ]

                    }

                ]

            })

        });

        const data = await response.json();

        console.log("API RESPONSE:", data);

        if (data.error) {

            return "Error: " + data.error.message;

        }

        if (!data.candidates) {

            return "No response";

        }

        return data.candidates[0].content.parts[0].text;

    } catch (error) {

        console.log(error);

        return "Connection error";

    }

}

async function handleChat() {

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    const loading = document.createElement("div");

    loading.className = "message bot";

    loading.innerText = "Thinking...";

    chatBox.appendChild(loading);

    const reply = await askAI(text);

    loading.innerText = reply;
}

button.onclick = handleChat;

input.addEventListener("keydown", function(e) {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        handleChat();

    }

});