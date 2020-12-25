module.exports = {
    name : 'loli',
    description : '',
    execute(message, args){
        const axios = require ('axios');
        const {Client, MessageAttachment} = require('discord.js');
        function getRandomLoli() {
            return axios.get(`https://api.vhtear.com/randomnekonime&apikey=HHadat2Kooo90hyh`);
        };
        getRandomLoli().then(function(response){
            const loly = response.data.result;
            let attachment = new MessageAttachment
            (loly['result']);
            message.channel.send(attachment)
        });
    }
}