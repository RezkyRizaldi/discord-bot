module.exports = {
    name : 'hamil',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/istri_yuri_gw_hamil.png');

        message.channel.send(attachment)
    }
}