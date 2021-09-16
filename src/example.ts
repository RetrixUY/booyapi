import {ChatClient} from './ChatClient';
const botId = 123456789; //ID OF THE BOT ACCOUNT (extract from bot profile url, example: https://booyah.live/studio/123456789)
const channelId = 987654321; //ID OF THE TARGET CHANNEL (extract from channel url, example: https://booyah.live/channels/123456789)
const sessionKey = "INSERT_SESSION_KEY"; //BOOYAH SESSION KEY (login to the bot account and extract from the browser cookies)

const chatClient = new ChatClient(sessionKey,botId);
chatClient.on('message',async (chatMessage)=>{
if(chatMessage.text == "!ping"){
    chatClient.sendMessage("Pong!")
    }
});

chatClient.connect(channelId).then(
    async () => console.log(`BOT Connected to ${chatClient.channelName}(${chatClient.channelId})\n`)
);
