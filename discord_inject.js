let socket = new WebSocket("ws://127.0.0.1:8765");

socket.onopen = function(e) {
    Logger.log("[open] Connection established");
    Logger.log("Sending to server");
    socket.send(JSON.stringify({type:"login",content:"discord client"}));
};

socket.onmessage = function(event) {
    Logger.log(`[message] Data received from server: ${event.data}`);
    let message = JSON.parse(event.data)
    if(message.type == "hotkey"){
        if(hotkeyFunctions[message.content]){
            Logger.log("Executing hotkeyFunction")
            hotkeyFunctions[message.content]()
        }else{
            Logger.log("No function with this name specified")
        }
    }
};

socket.onclose = function(event) {
  if (event.wasClean) {
    Logger.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    Logger.log('[close] Connection died');
  }
};

socket.onerror = function(error) {
    Logger.log(`[error]`);
};

let Logger = {
    log(msg){
        console.log(`[LOCALHOST WS]${msg}`)
    }
}



let hotkeyFunctions = {
    leaveCall(){
        console.log("[BETTER_DICORD]: leaveCall hotkey function triggered.")
        try {
            document.querySelector("button[aria-label='Verbindung trennen'").click()
        } catch (error) {
            console.log("Leve call element not found")
        }
        
    },
    toggleCamera(){
        const cameraOnButton = document.querySelector("button[aria-label='Kamera anschalten']")
        const cameraOffButton = document.querySelector("button[aria-label='Kamera ausschalten']")
        console.log("[BETTER_DICORD]: toggleCamera hotkey function triggered.")
        if(cameraOnButton){
            cameraOnButton.click()
        }else{
            cameraOffButton.click()
        }

    }
}