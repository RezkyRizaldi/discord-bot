module.exports = {
    name : 'sesuatu',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_2020-08-04-22-10-00-59.jpg');

        message.channel.send(attachment)
    }
}