const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Menampilkan avatar user',
    execute(client, message, args) {
        const avatarEmbed = new MessageEmbed();
        if (!message.mentions.users.first()) {
            avatarEmbed.setTitle('Ini Avatarmu');
            avatarEmbed.setDescription(
                `Links: [png](${message.author.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${message.author.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${message.author.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${message.author.displayAvatarURL({format: "webp", size: 2048})})`
            );
            avatarEmbed.setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }));
            avatarEmbed.setColor(0xffed2a);
            avatarEmbed.setFooter(message.author.username + "#" + message.author.discriminator);

            return message.channel.send(avatarEmbed);
        } else {
            let User = message.mentions.members.first();
            avatarEmbed.setTitle(`Ini avatar milik ‹${client.users.cache.get(User.id).tag}›`);
            avatarEmbed.setDescription(
                `Links: [png](${client.users.cache.get(User.id).displayAvatarURL({format: "png", size: 2048})}) | [jpg](${client.users.cache.get(User.id).displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${client.users.cache.get(User.id).displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${client.users.cache.get(User.id).displayAvatarURL({format: "webp", size: 2048})})`
            );
            avatarEmbed.setImage(client.users.cache.get(User.id).displayAvatarURL({ size: 2048, dynamic: true }));
            avatarEmbed.setColor(0xffed2a);
            avatarEmbed.setFooter(`${client.users.cache.get(User.id).tag}`);

            return message.channel.send(avatarEmbed);
        }
    }
}