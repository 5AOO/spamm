const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("634842854631538690")
setInterval(function() {
channel.send(`ياسر ياسر ياسر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
