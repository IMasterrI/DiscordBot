const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
    console.log(message.content);
    if (message.content === '!!abel') {
        message.channel.send('Une très belle photo de profile !');
       
    }


});

client.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'PP') {
        message.channel.send('Une vraie PP', {
            files: [
                "./Abel.jpg", "./Abel2.jpg", "./Abel3.jpg"
            ]
        });
    }
});



