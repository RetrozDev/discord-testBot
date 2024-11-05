import { executeLatencyCommand, latencyCommand } from "../commands/latency.js";

const interactionCreate = async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === latencyCommand.name) {
		await executeLatencyCommand(interaction);
	}
};

export default interactionCreate;
