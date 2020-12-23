module.exports = {
    name: 'server',
    description: 'Info Server VTuber Sub Indo',
    execute(message, args) {
        message.channel.send(
                `Nama Server : ${message.guild.name} 
                \nJumlah Member : ${message.guild.memberCount} 
                \nRegion Server Saat Ini : ${message.guild.region}
            `);
    }
}