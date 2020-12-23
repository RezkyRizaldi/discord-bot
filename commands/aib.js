const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const { Client, Message, MessageEmbed } = require("discord.js");
client.commands = new Discord.Collection();
const Menu = require("../menu")

module.exports = {
    name : "aib",
    description : "",
    execute(message, args, Menu){
        new Menu(message.channel, message.author.id, [
            new MessageEmbed({
                title: "Page 1/10",
            }).setDescription([
                "adventure",
                "agama",
                "ajal",
                "ajg",
                "akhlak",
                "anget",
                "angetpak",
                "aru",
            ]),
            new MessageEmbed({
                title: "Page 2/10",
            }).setDescription([
                "basah",
                "bdsm",
                "berak",
                "buka",
                "buli",
                "bundir",
                "col",
                "crot",
            ]),
            new MessageEmbed({
                title: "Page 3/10",
            }).setDescription([
                "dajjal",
                "dalam",
                "dalang",
                "dance",
                "dika-kun",
                "dolanan",
                "ecchi",
                "emosi",
            ]),
            new MessageEmbed({
                title: "Page 4/10",
            }).setDescription([
                "engas",
                "enjoy",
                "eskrim",
                "f",
                "gay",
                "hamil",
                "hemaprodit",
                "hikmah",
            ]),
            new MessageEmbed({
                title: "Page 5/10",
            }).setDescription([
                "jessica",
                "kamar",
                "kaoru",
                "kucing",
                "langkahi",
                "liat",
                "loli",
                "lubang",
            ]),
            new MessageEmbed({
                title: "Page 6/10",
            }).setDescription([
                "lupa",
                "montok",
                "munafik",
                "naik",
                "naon",
                "ngejendol",
                "ngenes",
                "ngeri",
            ]),
            new MessageEmbed({
                title: "Page 7/10",
            }).setDescription([
                "ntod",
                "oneechan",
                "oniichan",
                "paha",
                "panas",
                "panjang",
                "pantat",
                "pantau",
            ]),
            new MessageEmbed({
                title: "Page 8/10",
            }).setDescription([
                "pap",
                "pencari",
                "penikmat",
                "pentil",
                "perkotak",
                "perut",
                "pika",
                "salah",
            ]),
            new MessageEmbed({
                title: "Page 9/10",
            }).setDescription([
                "sange",
                "seksi",
                "sesuatu",
                "setan",
                "slurp",
                "sugoi",
                "telor",
                "terobos",
            ]),
            new MessageEmbed({
                title: "Page 10/10",
            }).setDescription([
                "thicc",
                "tusuk",
                "watame", 
                "yakult", 
                "yoi"
            ]),
        ]);
    }
}