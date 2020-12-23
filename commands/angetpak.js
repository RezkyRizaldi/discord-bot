module.exports = {
    name : 'angetpak',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/anget_pak.png');

        message.channel.send(attachment)
    }
}