module.exports = {
    name : 'kaoru',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730712862724718643/Screenshot_20200706-005702.png');

        message.channel.send(attachment)
    }
}