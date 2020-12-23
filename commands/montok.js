module.exports = {
    name : 'montok',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_20200711-202816.png');

        message.channel.send(attachment)
    }
}