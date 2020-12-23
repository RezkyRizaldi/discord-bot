module.exports = {
    name : 'perkotak',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/diperkotak_angwy.png');

        message.channel.send(attachment)
    }
}