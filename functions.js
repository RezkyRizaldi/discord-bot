const { Integration } = require("discord.js");

module.exports = {
    formatDate: function(date) {
        return new Intl.DateTimeFormat("id").format(date)
    }
}