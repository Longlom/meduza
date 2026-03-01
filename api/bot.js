import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN || ""); // Token from env var for security

// Handler for incoming messages
bot.on('text', (ctx) => {
  ctx.reply('Hey! Want to check out our cafe menu?', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Menu App',
            web_app: { url: 'https://meduza-hazel.vercel.app/' } // Your Mini App URL
          }
        ]
      ]
    }
  });
});

// Vercel serverless function export
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  } else {
    res.status(200).send('Bot is running!');
  }
};