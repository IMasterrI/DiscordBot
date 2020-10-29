module.exports = {
	name: 'nowplaying',
	description: 'Prend le sons qui joue',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Il y a aucune musique à jouer !');
		return message.channel.send(`Je joue: ${serverQueue.songs[0].title}`);
	},
};