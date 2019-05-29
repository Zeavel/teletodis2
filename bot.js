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

client.setInterval(function play()
    {
console.log(“Jekyll”)
},2500)

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
       
      var ch = g.map(f=>f.channelID)
      
           var co = ch.indexOf(chl)
           var token = g.map(s=>s.token)[co]
           var ide = g.map(s=>s.id)[co]
           
          
           const cons = new Discord.WebhookClient(ide, token);//cons
           client2.fetchWebhook(cons.id, cons.token)
  .then(webhook =>{

           
           const chatId = msg.chat.id;
           
           var ava = "https://cdn.discordapp.com/avatars/"+cons.ide+"/"+webhook.avatar+".webp?size=128"
           
           
  if(msg.photo != undefined)
{
 var id = msg.photo[msg.photo.length - 1].file_id
bot2.getFile(id).then(sf=>{
   console.log(sf.file_path)
})

   bot2.getFileLink(id).then(sd=>  {
  
       if(msg.caption == undefined)
       {
         
           var embeds = new Discord.RichEmbed()
           .setTitle(webhook.name)
           .setThumbnail(ava)
           .setImage(sd)
          cons.send(embeds)
       }
     else
     {
         
         if(msg.caption_entities == undefined)
         {
            var embeds = new Discord.RichEmbed()
            .setTitle(webhook.name)
            .setThumbnail(ava)
            .setImage(sd)
            .setDescription(msg.caption)
            cons.send(embeds)
         }
         if(!msg.caption_entities.map(g=>g.type).includes("bold"))
         {
            var embeds = new Discord.RichEmbed()
            .setTitle(webhook.name)
            .setThumbnail(ava)
            .setImage(sd)
            .setDescription(msg.caption)
            cons.send(embeds)
         }
       else{ 
        var text = "";
        var tes = []
        var tet = []
      
        text = msg.caption
        var cr = text
            for(i=0;i<msg.caption_entities.length;i++)
            {
              
           if(msg.caption_entities[i].type == "bold")
           {
    
    var newt = text.substring(msg.caption_entities[i].offset)
    var sub;
    if(newt.substring(msg.caption_entities[i].length) == "")
    {
       
        var chet = newt
    }
    else
    {
        sub = newt.substring(msg.caption_entities[i].length)
        var chet = newt.split(sub)[0]
    }

tes.push(chet)
tet.push("**"+chet+"**")

           }
            }
        
       

           for(i=0;i<tes.length;i++)
           {
            
              cr = cr.replace(tes[i],tet[i])
          
           }
           
           var embeds = new Discord.RichEmbed()
           .setTitle(webhook.name)
           .setThumbnail(ava)
           .setImage(sd)
           .setDescription(cr)
           cons.send(embeds)
       
    }
       
     }
     })
}
else
{
    var text = "";
    var tes = []
    var tet = []
  console.log(msg.entities)
    text = msg.text
    var cr = text
        for(i=0;i<msg.entities.length;i++)
        {
          
       if(msg.entities[i].type == "bold")
       {

var newt = text.substring(msg.entities[i].offset)
var sub;
if(newt.substring(msg.entities[i].length) == "")
{
   
    var chet = newt
}
else
{
    sub = newt.substring(msg.entities[i].length)
    var chet = newt.split(sub)[0]
}

tes.push(chet)
tet.push("**"+chet+"**")
console.log(tes.length + " " + msg.entities.length)
       }
        }
    
 

       for(i=0;i<tes.length;i++)
       {
        
          cr = cr.replace(tes[i],tet[i])
      console.log(cr)
       }
       
       var embeds = new Discord.RichEmbed()
       .setTitle(webhook.name)
       .setThumbnail(ava)
      
       .setDescription(cr)
       cons.send(embeds)
   
   
}
})       
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
