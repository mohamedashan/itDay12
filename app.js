
function reqSend(){
const myHeaders = new Headers();


const raw = JSON.stringify({
    "model": "openai/gpt-oss-20b",
    "input": document.getElementById("txtGet").value
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://api.groq.com/openai/v1/responses", requestOptions)
    .then((response) => response.json())
    .then((result) => {
    document.getElementById("rsp").innerText=result.output[1].content[0].text;
    console.log(result);
    
})
}