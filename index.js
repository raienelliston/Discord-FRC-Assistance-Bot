const express = require('express');
const app = express();
const { Client, GatewayIntentBits } = require('discord.js');
const { InteractionType, InteractionResponseType, InteractionResponseFlags, MessageComponentTypes, ButtonStyleTypes } = require('discord-interactions');
const { VerifyDiscordRequest } = require('./APIs/discordApi');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

app.post('/interactions', async (req, res) => {
    const { type } = req.body;

    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
      }
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});