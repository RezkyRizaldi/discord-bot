module.exports = {
    name : 'ngenes',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730797060902748200/IMG_20200619_022327.JPG');

        message.channel.send(attachment)
    }
}