module.exports = {
  name: 'clear',
  description: 'Command untuk melakukan clear messages',
  execute(client, message, args) {
    const admin = r => r.name === "Admin";
    const papa = r => r.name === "Papa VigiBot";
    const role = message.member.roles.cache.find(admin || papa);

    if (role) {
      if (!args[1] || isNaN(args[1])) {
        message.channel.bulkDelete(1);
        message.reply("harap masukan jumlah pesan yang ingin dihapus! `(mis. &clear 5)`");
        setTimeout(() => {
          message.channel.bulkDelete(1);
        }, 1000 * 5);
      } else if (parseInt(args[1]) > 50) {
        message.channel.bulkDelete(1);
        message.reply("Anda maksimal hanya dapat menghapus **50** pesan dalam satu waktu!");
        setTimeout(() => {
          message.channel.bulkDelete(1);
        }, 1000 * 5);
      } else {
        let jumlah;

        message.channel.bulkDelete(1);
        message.channel.bulkDelete(args[1]);
        jumlah = parseInt(args[1]);
        message.channel.send(`Berhasil menghapus **${jumlah}** pesan!`);
        setTimeout(() => {
          message.channel.bulkDelete(1);
        }, 1000 * 3);
      }
    } else {
      message.reply("Anda tidak memiliki Permissions untuk mengakses fitur ini.");
      setTimeout(() => {
        message.channel.bulkDelete(1);
      }, 1000 * 5);
    }
  }
}