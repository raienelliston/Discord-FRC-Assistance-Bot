const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages
    ] 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);