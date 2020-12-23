const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../functions.js");

module.exports = {
    name: "profil",
    description: "Menampilkan profil user",
    execute(client, message, args) {
        const profileEmbed = new MessageEmbed();
        let roles = [];
        if (!message.mentions.users.first()) {
            // message.channel.send(JSON.stringify(message.author))
            message.member.roles.cache.forEach((role) => {
                if(role.name !== '@everyone'){
                    roles.push(role.name)
                }
                else{
                    if(roles.length === 0){
                        roles.push('none');
                    }
                }
            });
            profileEmbed.setTitle(`‹${message.author.username}›'s profile`);
            console.log(`${message.member.joinedAt}`);
            profileEmbed.setDescription(
                `Tanggal Join: ${formatDate(message.member.joinedAt)}\nNickname: ${
          message.author.username
        }` +
                "#" +
                `${message.author.discriminator}\nRoles: ${roles}`
            );
            profileEmbed.setThumbnail(message.author.displayAvatarURL());
            profileEmbed.setColor(0xffed2a);
            profileEmbed.addField("Presence Status:", message.author.presence.status, true);
            profileEmbed.setFooter('VigiBot | 1.1.3', client.user.displayAvatarURL());

            return message.channel.send(profileEmbed);
        } else {
            let User = message.mentions.members.first();
            User.roles.cache.forEach((role) => {
                if(role.name !== '@everyone'){
                    roles.push(role.name)
                }
                else{
                    if(roles.length === 0){
                        roles.push('none');
                    }
                }
            });
            profileEmbed.setTitle(`‹${client.users.cache.get(User.id).tag}›'s profil`);
            profileEmbed.setDescription(`Tanggal Join: ${formatDate(User.joinedAt)}\nNickname: ${client.users.cache.get(User.id).tag}\nRoles: ${roles}`);
            profileEmbed.setThumbnail(client.users.cache.get(User.id).displayAvatarURL());
            profileEmbed.setColor(0xffed2a);
            profileEmbed.addField("Presence Status:", User.presence.status, true);
            profileEmbed.setFooter('VigiBot | 1.1.3', client.user.displayAvatarURL());

            return message.channel.send(profileEmbed);
        }
    },
};