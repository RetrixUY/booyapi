![Booyah.js](https://i.imgur.com/SCFGLcL.png)

Booyah! Rest Api and Chat Client

Usage:
```javascript
    import {ChatClient} from './ChatClient';
    const botId = 123456789;
    const channelId = 987654321;
    const sessionKey = "INSERT_SESSION_KEY";

    const chatClient = new ChatClient(sessionKey,botId);
    chatClient.on('message',async (chatMessage)=>{
        if(chatMessage.text == "!ping"){
            chatClient.sendMessage("Pong!")
        }
    });

    chatClient.connect(channelId).then(
        async () => console.log(`BOT Connected to ${chatClient.channelName}(${chatClient.channelId})\n`)
    );
```
## License
This code (everything in the repository) is provided under the GNU General Public License v3.0. This means that you're free to take the code in this repository and modify it in whatever way you like and distribute this code for any purpose. However, if you release it then it must be under this same license, make it open source, and provide documentation of changes made. All versions must have copyright credit pointing back to this source.

**Anything using this code must be under the GNU Public License, and a copyright credit must point back here.**
