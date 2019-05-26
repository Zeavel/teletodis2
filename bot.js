const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const TelegramBot = require('node-telegram-bot-api');
var fs = require("fs");
var shto = []
function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function getRandomInt(min, max)
{

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Create a bot that uses 'polling' to fetch new updates
const bot2 = new TelegramBot(process.env.BOT2, {polling: true} );
bot2.on('channel_post', (msg) => {
   var ph = msg.photo
   console.log(msg.photo)
   client2.channels.get("582186367413649419").fetchMessage("582187128960843786")
   .then(mes=>{
       var mc = mes.content
       if(mc.includes(msg.chat.id))
       {
        
   
       client2.channels.get("582186367413649419").fetchMessage("582187210342924289")
   .then(met=>{
       client2.guilds.get("525621262102298647").fetchWebhooks()
       .then(g=>{
       
       var cnt = mc.split(",").indexOf(msg.chat.id.toString())
      
       var chl = met.content.split(",")[cnt]
       console.log(chl)
      var ch = g.map(f=>f.channelID)
      
           var co = ch.indexOf(chl)
           var token = g.map(s=>s.token)[co]
           var id = g.map(s=>s.id)[co]
           console.log(token + " " + id)
           const cons = new Discord.WebhookClient(id, token);//cons
           const chatId = msg.chat.id;
           console.log(ph)
  if(msg.photo != undefined)
{
 var id = msg.photo[msg.photo.length - 1].file_id
bot2.getFile(id).then(sf=>{
   console.log(sf.file_path)
})
   bot2.getFileLink(id).then(sd=>  {
      console.log(msg.caption)
       if(msg.caption == undefined)
       {
           var embeds = new Discord.RichEmbed()
           .setImage(sd)
          cons.send(embeds)
       }
     else
     {
       var embeds = new Discord.RichEmbed()
       .setImage(sd)
       .setDescription(msg.caption)
       cons.send(embeds)
     }
     })
}
else
{
   cons.send(msg.text)
}
          
   })
   
     
   })
       }
   })
    if(msg.text.includes("/add"))
    {
        client2.channels.get("582186367413649419").fetchMessage("582187128960843786")
        .then(mes=>{
mes.edit(mes.content+","+msg.chat.id)
client2.channels.get("582186367413649419").fetchMessage("582187210342924289")
        .then(met=>{
            var chl = msg.text.substring(5)
        
met.edit(met.content+","+msg.text.substring(5))
client2.channels.get(chl).createWebhook(client2.channels.get(chl).name)
  .then(webhook => console.log(`Created webhook ${webhook}`))
  .catch(console.error)
        })
        })
       
    } 
    
      
    
    /*console.log(msg)
    console.log(2)
      */
    });




client2.login(process.env.BOTK)

