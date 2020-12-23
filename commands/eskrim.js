module.exports = {
    name : 'eskrim',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730712761914491140/Screenshot_20200704-214651.png');

        message.channel.send(attachment)
    }
}