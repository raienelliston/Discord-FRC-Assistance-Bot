const express = require('express');
const app = express();
const { VerifyDiscordRequest } = require('./APIs/discordApi');
const discordRoutes = require('./routes/discordRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.use(express.json({ verify: VerifyDiscordRequest(process.env.DISCORD_PUBLIC_KEY) }));

app.use('/discord', discordRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});