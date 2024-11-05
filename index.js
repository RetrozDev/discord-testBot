import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

// Configuration du bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const botToken = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

if (!botToken || !clientId) {
	console.error("Aucun clientId ou botToken trouvés \n Verifiez votre .env");
	process.exit(1);
}

client.on("ready", () => {
	console.log(` ${client.user.tag} connecté!`);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === "latence") {
		const botLatency = Date.now() - interaction.createdTimestamp;
		await interaction.reply(`Latence du bot: ${botLatency} ms`);
	}
});

// Define commands
const commands = [
	{
		name: "latence",
		description: "Verifier la latence du bot",
	},
];

// Enregistrement des commandes en utilisant  l'API REST
const rest = new REST({ version: "10" }).setToken(botToken);

(async () => {
	try {
		console.log(
			"Démarrage du rafraîchissement des commandes de l'application (/).",
		);

		await rest.put(Routes.applicationCommands(clientId), { body: commands });

		console.log(
			"Les commandes de l'application (/) ont été rechargées avec succès.",
		);
	} catch (error) {
		console.error(
			"Échec du rechargement des commandes de l'application (/) :",
			error,
		);
	}
})();

// Log in to Discord
client.login(botToken);