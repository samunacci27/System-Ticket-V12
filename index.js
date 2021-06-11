// System Ticket

bot.on('message', message => {

    //    let args = message.content.substring(line.length).split(" ");
    
        const Embed4 = new MessageEmbed()
            .setColor("") //Color 
            .setTitle("") // title you ticket
            .setDescription("") //description 
            .setThumbnail("") // thi is image 
            .addFields(
                { name: 'Ticket is', value: `${message.author}` },
                { name: 'Reason for opening', value: 'Motive' },
                { name: 'Opening day', value: `${message.createdAt}` },
            )
        
    
    
    
        if (message.channel.type === "dm") {
    
        } else {
                if (message.channel.id === "ID CHANNEL") { // chat id on which you can write the command
                    if (message.content === "NAME COMMAD") { // NAME COMMAND + PREFIX example = (-ticketassistent)
                        if (message.author.bot) {
    
                    } else {
                        if (message.member.roles.cache.find(r => r.name === "ROLE OF PEOPLE")) {
                               message.channel.bulkDelete(1);
                               
                               message.guild.channels.create(`ticket-${message.author.username}`, {
                                   type: "text",
                                   parent: "ID CATEGORY", // the category must create the tickets for you
                                   permissionOverwrites: [
                                       {
                                           id:message.author.id,
                                           allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                                           deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES']
                                       },
                                       {
                                           id:'ID ROLE', // role id that the channel sees
                                           deny: ['VIEW_CHANNEL'],
                                       },
                                       {
                                           id:'ID ROLE STAFF', // staff role id
                                           allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'MANAGE_CHANNELS', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                                           deny: ['CREATE_INSTANT_INVITE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'SEND_TTS_MESSAGES']
                                       },
                                   ]
                               }).then(channel => channel.send(Embed4))
    
    
    
    
                        } else {
                            message.channel.bulkDelete(1); // if you change the number it will eliminate more things
                            message.author.send("You must be verified before opening tickets"); // If users do not have a certain role they cannot open the ticket
                        }
                        }
    
                    }
    }
    }
    
    
});
