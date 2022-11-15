from pynput import keyboard
import asyncio
from websockets import connect
import json

def getMessage(type, content):
    return json.dumps({
        "type":type,
        "content":content
    })


async def sendWebsocket(uri, type, content):
    print("sending message to ws")
    async with connect(uri) as websocket:
        await websocket.send(getMessage(type,content))
        await websocket.recv()



def on_activate_close():
    exit()
def on_activate_h():
    print('<ctrl>+<alt>+h pressed')
    asyncio.run(sendWebsocket("ws://localhost:8765", "hotkey", "leaveCall"))

def on_activate_i():
    print('<ctrl>+<alt>+i pressed')
    return False

asyncio.run(sendWebsocket("ws://localhost:8765", "login", "hotkeyScript"))

with keyboard.GlobalHotKeys({
        '<ctrl>+<alt>+c': on_activate_close,
        '<ctrl>+<alt>+h': on_activate_h,
        '<ctrl>+<alt>+i': on_activate_i}) as h:
    h.join()


