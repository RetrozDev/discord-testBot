export const latencyCommand = {
	name: "latence",
	description: "Vérifie la latence du bot",
};

export const executeLatencyCommand = async (interaction) => {
	const botLatency = Date.now() - interaction.createdTimestamp;
	await interaction.reply(`Latence du bot: ${botLatency} ms`);
};
