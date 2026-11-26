const chatInput =
    document.querySelector('.chat-input textarea');
const sendChatBtn =
    document.querySelector('.chat-input button');
const chatbox = document.querySelector(".chatbox");
let conv = [];


function sendBtn() {

    chatInput.append("");

    const myHeaders = new Headers();
   
    conv.push({
        role: "user",
        content: msgEnt
    })
    const raw = JSON.stringify({
        "model": "openai/gpt-oss-20b",
        "input": conv
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    let myLast = document.getElementById("msgEnt").value;
    chatbox.innerHTML += `<h5>${msgEnt}</h5>`



    fetch("https://api.groq.com/openai/v1/responses", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            let aiAns = result.output[1].content[0].text;

            conv.push({
                role: "assistant",
                content: aiAns
            })
            chatbox.innerHTML += marked.parse(`<p>${aiAns}</p>`);
        })
}