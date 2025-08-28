import dotenv from "dotenv"
import TelegramBot from "node-telegram-bot-api"
dotenv.config()
const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot (TOKEN, {
    baseApiUrl: "https://tapi.bale.ai",
    polling: true,
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, msg.text)

})