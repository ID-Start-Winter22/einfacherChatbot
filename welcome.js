async function sendWelcome() {
    console.log("Send dummy message to Rasa server...")
    const data = {
        sender: "test", 
        message: "ich bin michi"
    }
    try {
        const res = await fetch("http://localhost:5005/webhooks/rest/webhook", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            Accept: "*/*",
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }); 
        console.log(res)
    } catch(err) {
        console.log(err)
    }    
}