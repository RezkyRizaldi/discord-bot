module.exports = {
    name : 'basah',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_2020-07-07-14-44-46-56.png');

        message.channel.send(attachment)
    }
}