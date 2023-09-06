const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(bodyParser.json());

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(telegramBotToken, { polling: false });

// Обработка POST запроса с данными формы
app.post('/submit-form', async (req, res) => {
  try {
    const { name, phone, city, email, message } = req.body;

    // Отправить данные в Telegram канал
    let text = `Ім'я: ${name}\nТелефон: ${phone}`;
    if (city) {
        text = text + `\nМісто: ${city}`
    }
    if (email) {
        text = text +`\nEmail: ${email}`
    }
    if (message) {
        text = text +`\nПовідомлення: ${message}`
    }

    await bot.sendMessage(telegramChatId , text);

    // Вернуть успешный ответ
    res.status(200).json({ message: 'Данные успешно отправлены в Telegram' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Произошла ошибка при отправке данных в Telegram' });
  }
});

module.exports = app;