import { REST, Routes } from "discord.js";
import client from "./client.js";
import { botToken, clientId } from "./config.js";
import interactionCreate from "./events/interactionCreate.js";
import onReady from "./events/onReady.js";
import { latencyCommand } from "./commands/latency.js";

// Register commands using the REST API
const commands = [latencyCommand];
const rest = new REST({ version: "10" }).setToken(botToken);

(async () => {
	try {
		console.log(
			"Démarrage du rafraîchissement des commandes de l'application (/)...",
		);

		await rest.put(Routes.applicationCommands(clientId), { body: commands });

		console.log(
			"Les commandes de l'application (/) ont été rechargées avec succès.",
		);
	} catch (error) {
		console.error(
			"Échec du rechargement des commandes de l'application (/):",
			error,
		);
	}
})();

// Listening for events
client.on("interactionCreate", interactionCreate);
client.on("ready", () => onReady(client));

// Log in to Discord
client.login(botToken);
