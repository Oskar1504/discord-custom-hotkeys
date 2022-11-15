import asyncio
import websockets
import json

CLIENTS = set()


async def echo(websocket):
    async for message in websocket:
        msg = json.loads(message)
        if msg["type"] == "login":
            CLIENTS.add(websocket)
        websockets.broadcast(CLIENTS, message)

async def main():
    async with websockets.serve(echo, "localhost", 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())