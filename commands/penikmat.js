module.exports = {
    name : 'penikmat',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_20200625-001801.png');

        message.channel.send(attachment)
    }
}