# discord-custom-hotkeys
this project allows us to create custom global hotkeys and controll different discord features using it.
It uses a websocket to send hotkey triggers to injected .js script in discord to simulate key presses on discord html elements.

[youtube video](https://youtu.be/saLV7F3OsoA )

graphical overview
![image](https://user-images.githubusercontent.com/66569441/201928694-8bcf2a10-cdbd-4bfb-ad04-1aee0ba75670.png)


## Installation
Requirement
- python needs to be installed
  - https://www.python.org/downloads/ 
  
Installation steps
- go to folder where to locate project
- clone repository
  - `git clone https://github.com/Oskar1504/discord-custom-hotkeys.git`
- move inside folder
  - `cd .\discord-custom-hotkeys\`
- create pyhton virtual enviremont
  - `python -m venv .`
- activate virtual enviremont
  - `.\Scripts\activate`
- install packages
  - `pip install websockets`
  - `pip install pynput`
- run websocket server script
  - `python .\ws_server.py`
- run global hotkey listner script
  - `python .\app.py`
  
 - open discord
 - open developer console
 - paste content of `discord_inject.js` into console and press enter
 
 
 ### Discord enable Dev console
 - locate `C:\Users\<your_username>\AppData\Roaming\discord\settings.json` file
  - you need to replace <your_username> with the name of your pc
 - change `settings.json` from 
 ```json
 {
  "BACKGROUND_COLOR": "#202225",
  "IS_MAXIMIZED": true,
  "IS_MINIMIZED": false,
  "WINDOW_BOUNDS": {
    "x": 89,
    "y": -992,
    "width": 1416,
    "height": 814
  },
  "OPEN_ON_STARTUP": true,
  "START_MINIMIZED": false
}
 ```
 
 to
 
  ```json
{
  "BACKGROUND_COLOR": "#202225",
  "IS_MAXIMIZED": true,
  "IS_MINIMIZED": false,
  "WINDOW_BOUNDS": {
    "x": 89,
    "y": -992,
    "width": 1416,
    "height": 814
  },
  "OPEN_ON_STARTUP": true,
  "START_MINIMIZED": false,
  "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true
}
 ```
