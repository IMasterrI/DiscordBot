module.exports = {
	name: 'skip',
	description: 'Skip un sons!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Tu dois être dans un channel vocal pour écouter de la musique!');
		if (!serverQueue) return message.channel.send('Il y a pas de sons a skip !');
		serverQueue.connection.dispatcher.end();
	},
};