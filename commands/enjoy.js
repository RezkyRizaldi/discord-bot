module.exports = {
    name : 'enjoy',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_20200630-174431.png');

        message.channel.send(attachment)
    }
}