import dotenv from "dotenv";

dotenv.config();

const botToken = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

// Verificartion des variables d'environnement
if (!botToken || !clientId) {
	console.error("Aucun clientId ou botToken trouvés. Veuillez vérifier votre fichier .env");
	process.exit(1);
}

export { botToken, clientId };
