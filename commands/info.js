const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'info',
    description: 'Info VigiBot',
    execute(client, message, args) {       
        if (!args[1]) {
            const list = new MessageEmbed()
            .setTitle("Command List")
            .setDescription('Gunakan Prefix "&" untuk menggunakan Command.')
            .setColor(0xffed2a)
            .addField('aib', 'Kumpulan dosa makhluk tak berdosa.', true)
            .addField('music', 'Dengerin musik', true)
            .addField('info', 'Sedia onderdil pesawat tempur dan jasa vermak keliling' + '\n' + 'info bot: semua tentang VigiBot' + '\n' + 'info server: data Server' + '\n' + 'info command: daftar Command yang bisa digunakan.')
            .addField('avatar', 'Cek Avatarmu serta avatar bapakmu', true)
            .addField('profil', 'Cek data dirimu di server ini', true)
            .addField('clear', 'Menghapus pesan dalam jumlah tertentu', true)
            .setFooter('VigiBot | 1.1.3', client.user.displayAvatarURL());
            message.channel.send(list);
            // message.reply('Naon?');
        }
        else {
            if (args[1] === 'bot') {
                const botInfo = new MessageEmbed()
                .setTitle('Tentang Bot ini')
                .setDescription('Anda gabut? Coba ngobrol sini ^-^')
                .setColor(0xffed2a)
                .setThumbnail(client.user.displayAvatarURL())
                .addField('Developer', 'Vesera & SiNahwey', true)
                .addField('Prefix', '&', true)
                .setFooter('VigiBot | 1.1.3', client.user.displayAvatarURL());
                message.channel.send(botInfo);
            } else if (args[1] === 'server') {
                const serverInfo = new MessageEmbed()
                .setTitle("Server Information")
                .setDescription("Don't be shy, let's baku hantam." + "\n" + "Jangan lupa cek YouTube kita: https://bit.ly/IndoVtuber")
                .setColor(0xffed2a)
                .setThumbnail(message.guild.iconURL())
                .addField('Server Name', `${message.guild.name}`, true)
                .addField('Member Count', `${message.guild.memberCount}`, true)
                .addField('Server Region', `${message.guild.region}`, true)
                .setFooter('VigiBot | 1.1.3', client.user.displayAvatarURL());
                message.channel.send(serverInfo);
            }
            else {
            message.channel.bulkDelete(1);
            message.reply("Command yang Anda masukan tidak tersedia.");
            setTimeout(() => {
                message.channel.bulkDelete(1);
                }, 1000 * 5);
            }   
        }
    }
}