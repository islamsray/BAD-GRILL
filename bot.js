const Discord = require('discord.js');
const client = new Discord.Client();
console.log("3bker");
client.on("message", message => {
OTEzMDA0NjMxMjg0NjU4MjI2.G0LECi.PoEyjH4W4J7r4T5_hwjupewCcCp4o7Kl7VE6os
            if (message.content.startsWith("!bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : darkxx`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : black ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.BOT_TOKEN);
