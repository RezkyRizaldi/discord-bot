// Load up the discord.js library
const Discord = require("discord.js");
const vhtearKey = "HHadat2Kooo90hyh";
 // API Key Hadat
// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client({
    disableEveryone: true
});
const {
    Client,
    MessageAttachment,
    MessageEmbed
} = require("discord.js");
const {
    prefix,
    token
} = require("./config.json");
const build = "1.1.3";
const ytdl = require("ytdl-core");
const axios = require ('axios');
const newMembers = new Discord.Collection();
client.commands = new Discord.Collection();
const fs = require("fs");
const Menu = require("./menu");
const queue = new Map();
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on("ready", () => {
    console.log(`${client.user.username} is online!`);
    console.log("Version: " + build);
    client.user.setActivity('Member Setan | [&info]', {
        type: "PLAYING"
    }).catch(console.error);
});
client.on('guildMemberAdd', member => {
    console.log("ada Orang masuk");
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ngobrol');
    if (!channel) return;
    const redirch = member.guild.channels.cache.find(ch => ch.name === "rules");
    var setRole = member.guild.roles.cache.find(role => role.name === "Member");
    member.roles.add(setRole);
    if (member.guild.name === "R3N OFFICIAL") {
        channel.send(`Lorem ipsum dolor sit amet, ${member}! consectetur adipiscing elit. ${redirch} Ut pulvinar, nibh sed imperdiet eleifend, nunc nibh vehicula mi, id consequat tellus enim et leo. Cras egestas convallis metus, a tempor justo iaculis non.`);
    }
});
client.on("message", async (message) => {
    var body = message.content;
    const serverQueue = queue.get(message.guild.id);
    var queueList = [];
    if (message.content.startsWith(`${prefix}`)) {
        let args = message.content.substring(prefix.length).split(/ +/)
        switch (args[0]) {
            case "igstalk":
            if (!args[1]) return message.reply("Command tidak benar!\nGunakan seperti contoh\n**!igstalk zx.skywalker**");
            const usernameQuery = args[1];
            try {
                const igStalk = await axios.get(`https://api.vhtear.com/igprofile?query=${usernameQuery}&apikey=${vhtearKey}`);
                const {
                    biography,
                    follow,
                    follower,
                    full_name,
                    is_private,
                    picture,
                    post_count,
                    username
                } = igStalk.data.result;
                const dataIgStalk = new MessageEmbed()
                .setTitle(`${username}`)
                .addField(`**${post_count}**`,`posts`, true)
                .addField(`**${follower}**`,`follower`, true)
                .addField(`**${follow}**`,` following`, true)
                .setThumbnail(picture)
                .setTitle(`${full_name}`)
                .setDescription(`${biography}`)
                .addField(`Link Profile`,`https://www.instagram.com/${username}`)
                .setFooter('Lorem Ipsum | 0.0.1', client.user.displayAvatarURL());
                message.channel.send(dataIgStalk);
            } catch (err) {
                console.error(err.message);
            }
            break
            case "resepmasakan":
            if (!args[1]) return message.reply("Command tidak benar!\nGunakan seperti contoh\n**!wiki Covid 19**");
                const queryMasakan = body.slice(14);
                try {
                    const responseMasakan = await axios.get(`https://api.vhtear.com/resepmasakan?query=${queryMasakan}&apikey=${vhtearKey}`);
                    const {
                        source,
                        title,
                        desc,
                        image,
                        bahan,
                        cara
                    } = responseMasakan.data.result;
                    const deskripsiMasakan = `\n\n**Bahan** : \n${bahan}\n\n**Cara** : \n${cara}`
                    const dataMasakan = new MessageEmbed()
                    .setTitle(`${title}`)
                    .setDescription(`${desc}` + `${deskripsiMasakan}`)
                    .setImage(`${image}`)
                    .addField('Sumber :',`${source}`,true)
                    .setFooter('Lorem Ipsum | 0.0.1', client.user.displayAvatarURL());
                    message.channel.send(dataMasakan);
                } catch (err) {
                    console.error(err.message);
                }
                break
            case "randomnhentai":
                try {
                    const nhResponse = await axios.get(`https://api.vhtear.com/nhentairandom&apikey=${vhtearKey}`)
                    const {
                        id,
                        title,
                        secondary_title,
                        tags,
                        artists,
                        categories,
                        pages,
                        images
                    } = nhResponse.data.result;
                    const countTags = tags.length;
                    const countartists = artists.length;
                    const countcategories = categories.length;
                    const countpages = pages.length;
                    var tagsData = ""
                    for (ind = 0; ind < countTags; ind++){
                        tagsData += `\n- ` + tags[ind];
                    }
                    var artistsData = ""
                    for (a = 0; a < countartists; a++){
                        artistsData += `\n- ${artists[a]}`;
                    }
                    var categoriesData = ""
                    for (u = 0; u < countcategories; u++){
                        categoriesData += `\n- ${categories[u]}`;
                    }
                    var pagesData = ""
                    for (o = 0; o < countpages; o++){
                        pagesData += `\n${pages[o]}`;
                    }
                    console.log(categoriesData)
                    setTimeout(function(){
                    const nhentaiEmbed = new MessageEmbed()
                    .setTitle(`${title}\n${secondary_title}`)
                    .addField(`Code`,`${id}`)
                    .addField(`Tags`,`${tagsData}`)
                    .addField(`Artists`,`${artistsData}`)
                    .addField(`Categories`,`${categoriesData}`)
                    .addField(`Pages`,`${pagesData}`)
                    .setImage(images[0])
                    .setFooter('Lorem Ipsum | 0.0.1', client.user.displayAvatarURL());
                    message.channel.send(nhentaiEmbed);
                    }, 3000);
                } catch (err) {
                    console.error(err.message);
                }
                break
            case "info":
                client.commands.get("info").execute(client, message, args);
                break;
            case "lorem":
                client.commands.get("avatar").execute(client, message, args);
                break;
            case 'profil':
                client.commands.get('profil').execute(client, message, args);
                break;
            case 'clear':
                client.commands.get('clear').execute(client, message, args);
                break;
                // This is for music functions and such
            case "play":
                const voiceChannel = message.member.voice.channel;
                if (!voiceChannel)
                    return message.channel.send(
                        "Masuk voice dulu dong, masa gw nyanyi sendiri"
                    );
                const perms = voiceChannel.permissionsFor(message.client.user);
                if (!args[1]) return message.channel.send("Please provide a link!");
                if (!args[1].match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/))
                    return message.channel.send("Link yutub dong :3");
                if (!perms.has("CONNECT"))
                    return message.channel.send(
                        "Gabisa join channel gw bro"
                    );
                if (!perms.has("SPEAK"))
                    return message.channel.send(
                        "Gabisa nyanyi bro... dimute gw"
                    );
                message.member.voice.channel.join();
                const songInfo = await ytdl.getInfo(args[1]);
                const song = {
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url,
                }
                if (!serverQueue) {
                    const queueConstruct = {
                        textChannel: message.channel,
                        voiceChannel: voiceChannel,
                        connection: null,
                        songs: [],
                        volume: 5,
                        playing: true
                    }
                    queue.set(message.guild.id, queueConstruct);
                    queueConstruct.songs.push(song);
                    message.channel.send(`${song.title} dah masuk ke list karaoke gw :josgandos:`);
                    try {
                        var connection = await voiceChannel.join();
                        queueConstruct.connection = connection;
                        message.channel.send('Lagi nyanyi ' + song.title);
                        play(message.guild, queueConstruct.songs[0])
                    } catch (error) {
                        console.log(
                            `Duh lagi konslet : ${error}`
                        );
                        return message.channel.send(
                            `Gabisa joing voice euy : ${error}`
                        );
                    }
                } else {
                    message.channel.send(`${song.title} dah masuk ke list karaoke gw :josgandos:`);
                    serverQueue.songs.push(song);
                    return;
                }
                break;
            case "q":
                // queueList = serverQueue;
                if (serverQueue == undefined) {
                    message.channel.send('Sorry bro gaada queue');
                    queueList = queueConstruct.songs;
                } else {
                    queueList = serverQueue.songs;
                }
                let i = 0;
                let queueString;
                while (i < queueList.length) {
                    if (i == 0) {
                        queueString = "List karaoke bersama vigi hari ini : \n" + (i + 1) + ". " + queueList[i].title + "\n";
                    } else {
                        queueString = queueString + (i + 1) + "." + queueList[i].title + "\n";
                    }
                    i++;
                }
                let listQueue = new MessageEmbed()
                    .setTitle("Queue List")
                    .setDescription(queueString);
                message.channel.send(listQueue);
                break;
            case "dc":
                if (!message.member.voice.channel)
                    return message.channel.send(
                        "Mau disconnect apaan kalo gw gaada di voice :hm:"
                    );
                if (!serverQueue)
                    return message.channel.send(
                        "Gaada lagu yang lagi gue mainin"
                    )
                message.member.voice.channel.leave();
                break;
            case "skip":
                if (!message.member.voice.channel)
                    return message.channel.send("Masuk voice dulu dong :wat:")
                if (!serverQueue)
                    return message.channel.send("Lagi ga main lagu mau skip apa coba :kekw:")
                serverQueue.connection.dispatcher.end();
                message.channel.send("Dah Skip yak")
                break;
                // 
                // 
                // Di Bawah ini adalah list aib yang sudah dimasukkan 
                //
                // 
                //
                // A
                //
            case "adventure":
                client.commands.get("adventure").execute(message, args);
                break;
            case "agama":
                client.commands.get("agama").execute(message, args);
                break;
            case "ajal":
                client.commands.get("ajal").execute(message, args);
                break;
            case "ajg":
                client.commands.get("ajg").execute(message, args);
                break;
            case "akhlak":
                client.commands.get("akhlak").execute(message, args);
                break;
            case "anget":
                client.commands.get("anget").execute(message, args);
                break;
            case "angetpak":
                client.commands.get("angetpak").execute(message, args);
                break;
            case "aru":
                client.commands.get("aru").execute(message, args);
                break;
                //
                // B
                //
            case "basah":
                client.commands.get("basah").execute(message, args);
                break;
            case "bdsm":
                client.commands.get("bdsm").execute(message, args);
                break;
            case "berak":
                client.commands.get("berak").execute(message, args);
                break;
            case "buka":
                client.commands.get("buka").execute(message, args);
                break;
            case "buli":
                client.commands.get("buli").execute(message, args);
                break;
            case "bundir":
                client.commands.get("bundir").execute(message, args);
                break;
                //
                // C
                //
            case "col":
                client.commands.get("col").execute(message, args);
                break;
            case "crod":
                client.commands.get("crod").execute(message, args);
                break;
            case "crot":
                client.commands.get("crot").execute(message, args);
                break;
                //
                // D
                //
            case "dajjal":
                client.commands.get("dajjal").execute(message, args);
                break;
            case "dalam":
                client.commands.get("dalam").execute(message, args);
                break;
            case "dalang":
                client.commands.get("dalang").execute(message, args);
                break;
            case "dance":
                client.commands.get("dance").execute(message, args);
                break;
            case "dika-kun":
                client.commands.get("dika-kun").execute(message, args);
                break;
            case "dolanan":
                client.commands.get("dolanan").execute(message, args);
                break;
                //
                // E
                //
            case "ecchi":
                client.commands.get("ecchi").execute(message, args);
                break;
            case "emosi":
                client.commands.get("emosi").execute(message, args);
                break;
            case "engas":
                client.commands.get("engas").execute(message, args);
                break;
            case "enjoy":
                client.commands.get("enjoy").execute(message, args);
                break;
            case "eskrim":
                client.commands.get("eskrim").execute(message, args);
                break;
                //
                // F
                //
            case "f":
                client.commands.get("f").execute(message, args);
                break;
                //
                // G
                //
            case "gay":
                client.commands.get("gay").execute(message, args);
                break;
                //
                // H
                //
            case "hamil":
                client.commands.get("hamil").execute(message, args);
                break;
            case "hemaprodit":
                client.commands.get("hemaprodit").execute(message, args);
                break;
            case "hikmah":
                client.commands.get("hikmah").execute(message, args);
                break;
                //
                // J
                //
            case "jessica":
                client.commands.get("jessica").execute(message, args);
                break;
                //
                // K
                //
            case "kamar":
                client.commands.get("kamar").execute(message, args);
                break;
            case "kaoru":
                client.commands.get("kaoru").execute(message, args);
                break;
            case "kucing":
                client.commands.get("kucing").execute(message, args);
                break;
                //
                // L
                //
            case "langkahi":
                client.commands.get("langkahi").execute(message, args);
                break;
            case "liat":
                client.commands.get("liat").execute(message, args);
                break;
            case "lubang":
                client.commands.get("lubang").execute(message, args);
                break;
            case "lupa":
                client.commands.get("lupa").execute(message, args);
                break;
            case "loli":
                client.commands.get("loli").execute(message, args);
                
                break;
                //
                // M
                //
            case "montok":
                client.commands.get("montok").execute(message, args);
                break;
            case "munafik":
                client.commands.get("munafik").execute(message, args);
                break;
                //
                // N
                //
            case "naik":
                client.commands.get("naik").execute(message, args);
                break;
            case "naon":
                client.commands.get("naon").execute(message, args);
                break;
            case "ngejendol":
                client.commands.get("ngejendol").execute(message, args);
                break;
            case "ngenes":
                client.commands.get("ngenes").execute(message, args);
                break;
            case "ngeri":
                client.commands.get("ngeri").execute(message, args);
                break;
            case "ntod":
                client.commands.get("ntod").execute(message, args);
                break;
                //
                // O
                //
            case "oneechan":
                client.commands.get("oneechan").execute(message, args);
                break;
            case "oniichan":
                client.commands.get("oniichan").execute(message, args);
                break;
                //
                // P
                //
            case "paha":
                client.commands.get("paha").execute(message, args);
                break;
            case "panas":
                client.commands.get("panas").execute(message, args);
                break;
            case "panjang":
                client.commands.get("panjang").execute(message, args);
                break;
            case "pantat":
                client.commands.get("pantat").execute(message, args);
                break;
            case "pantau":
                client.commands.get("pantau").execute(message, args);
                break;
            case "pap":
                client.commands.get("pap").execute(message, args);
                break;
            case "pencari":
                client.commands.get("pencari").execute(message, args);
                break;
            case "penikmat":
                client.commands.get("penikmat").execute(message, args);
                break;
            case "pentil":
                client.commands.get("pentil").execute(message, args);
                break;
            case "perkotak":
                client.commands.get("perkotak").execute(message, args);
                break;
            case "perut":
                client.commands.get("perut").execute(message, args);
                break;
            case "pika":
                client.commands.get("pika").execute(message, args);
                break;
                //
                // S
                //
            case "salah":
                client.commands.get("salah").execute(message, args);
                break;
            case "sange":
                client.commands.get("sange").execute(message, args);
                break;
            case "seksi":
                client.commands.get("seksi").execute(message, args);
                break;
            case "sesuatu":
                client.commands.get("sesuatu").execute(message, args);
                break;
            case "setan":
                client.commands.get("setan").execute(message, args);
                break;
            case "slurp":
                client.commands.get("slurp").execute(message, args);
                break;
            case "stocking":
                client.commands.get("stocking").execute(message, args);
                break;
            case "sugoi":
                client.commands.get("sugoi").execute(message, args);
                break;
                //
                // T
                //
            case "telor":
                client.commands.get("telor").execute(message, args);
                break;
            case "terobos":
                client.commands.get("terobos").execute(message, args);
                break;
            case "thicc":
                client.commands.get("thicc").execute(message, args);
                break;
            case "tusuk":
                client.commands.get("tusuk").execute(message, args);
                break;
                //
                // W
                //
            case "watame":
                client.commands.get("watame").execute(message, args);
                break;
                //
                // Y
                //
            case "yakult":
                client.commands.get("yakult").execute(message, args);
                break;
            case "yoi":
                client.commands.get("yoi").execute(message, args);
                break;
                // This is for creating list of commands available in the bot
            case "list":
                client.commands.get("list").execute(message, args);
                break;
            case "music":
                client.commands.get("music_list").execute(message, args);
                break;
            case "aib":
                client.commands.get("aib").execute(message, args, Menu);
                break;
        }
    } else {
        return;
    }
});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return
    }
    const dispatcher = serverQueue.connection
        .play(
            ytdl(song.url, {
                filter: "audioonly",
                highWaterMark: 1 << 25
            }), {
                bitrate: 64000
            }
        )
        .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
            // voiceChannel.leave();
        })
        .on("error", (error) => {
            console.log(error);
        });
    if (!serverQueue) {
        dispatcher.setVolumeLogarithmic(queueConstruct.volume / 5);
    } else {
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    }
}
client.login(token);