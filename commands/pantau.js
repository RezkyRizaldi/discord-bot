module.exports = {
    name : 'pantau',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/20200716_205049.jpg');

        message.channel.send(attachment)
    }
}