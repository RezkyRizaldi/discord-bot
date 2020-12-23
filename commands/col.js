module.exports = {
    name : 'col',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730713170066276382/Screenshot_20200626-153405.png');

        message.channel.send(attachment)
    }
}