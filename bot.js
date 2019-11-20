const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "-" // حط البرفكس الى تبيه
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
// لا  تسوي شيء عشان لا تنكب نفسك
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
// لا  تسوي شيء عشان لا تنكب نفسك
  let args = message.content.split(" ").slice(1);
// لا تسوي شيء عشان لا تنكب نفسك
  if (command == "say") {
  if (message.member.id !== "556849635335864371") return message.channel.send(' رسالة الي تبيها here ');// غير الرسالة الي تبيها تكون رد + الأيدي
   message.channel.send(args.join("  "))// 
   message.delete()// By ! Ln - BlùeWolf, انــســأن#5555
  }
 });
// كل زق 


client.login(process.env.BOT_TOKEN);
