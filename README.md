## BOOYAH.JS
Usage:
```
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