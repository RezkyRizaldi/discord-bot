module.exports = {
    name : 'dalang',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730807659221090435/Screenshot_20200702-123307.png');

        message.channel.send(attachment)
    }
}