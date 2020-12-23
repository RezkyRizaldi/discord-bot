module.exports = {
    name : 'tusuk',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730797364943650926/o10juWe0QTdf3YqcErgKKXJNwNcsWAO88sKibc1kWhvJhXtQrEtTJ8M3g5gGEGSDR3YKRtfXgAxroCMbqMGZaZMwE09FGpvbOT6l.png');

        message.channel.send(attachment)
    }
}