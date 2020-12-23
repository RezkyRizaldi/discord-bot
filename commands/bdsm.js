module.exports = {
    name : 'bdsm',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_20200617-102758hjw.png');

        message.channel.send(attachment)
    }
}