const { Client, GatewayIntentBits } = require('discord.js');
const { InteractionType, InteractionResponseType, InteractionResponseFlags, MessageComponentTypes, ButtonStyleTypes } = require('discord-interactions');
const { VerifyDiscordRequest } = require('../APIs/discordApi');
const { getMatchData } = require('../APIs/statboticsAPI');
const { getEventData, getEventMatches } = require('../APIs/TBAApi');
require('dotenv').config();

exports.interact = async (req, res) => {
    const type = req.body.type;

    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
      }

    if (type === InteractionType.APPLICATION_COMMAND) {
        const { name } = req.body.data;
        if (name === 'ping') {
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: 'Pong!'
                }
            });
        }

        if (name === 'match') {
            const { options } = req.body.data;
            const matchKey = options.find(option => option.name === 'match').value;
            const matchData = getMatchData({ matchKey });
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: `Match ${matchKey} data: ${JSON.stringify(matchData)}`
                }
            });
        }

        if (name == 'event') {
            const { options } = req.body.data;
            const eventKey = options.find(option => option.name === 'event').value;
            const eventData = getEventData({ eventKey });
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: `Event ${eventKey} data: ${JSON.stringify(eventData)}`
                }
            });
        }
    }
}