module.exports = {
    name : 'bundir',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730712862959599716/Screenshot_20200706-005819.png');

        message.channel.send(attachment)
    }
}