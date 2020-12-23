module.exports = {
    name : 'slurp',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/20200716_205631.jpg');

        message.channel.send(attachment)
    }
}