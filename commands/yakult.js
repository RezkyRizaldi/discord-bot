module.exports = {
    name : 'yakult',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730712762174537778/Screenshot_20200704-214341.png');

        message.channel.send(attachment)
    }
}