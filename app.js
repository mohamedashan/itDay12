const chatInput = 
    document.querySelector('.chat-input textarea');
const sendChatBtn = 
    document.querySelector('.chat-input button');
const chatbox = document.querySelector(".chatbox");


function sendBtn() {

    chatInput.append("");

    const myHeaders = new Headers();
   
    const raw = JSON.stringify({
        "model": "openai/gpt-oss-20b",
        "input": document.getElementById("msgEnt").value
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    let myLast = document.getElementById("msgEnt").value;
    chatbox.innerHTML+=`<h5>${myLast}</h5>`

    

    fetch("https://api.groq.com/openai/v1/responses", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            chatbox.innerHTML+=marked.parse(`<p>${result.output[1].content[0].text}</p>`);
    })
}