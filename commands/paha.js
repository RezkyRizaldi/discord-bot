module.exports = {
    name : 'paha',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730809118855790592/Screenshot_2020-07-05-21-31-35-00.jpg');

        message.channel.send(attachment)
    }
}