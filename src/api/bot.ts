import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN || ""); // Your bot token from Vercel env vars

bot.on('message', (ctx) => {
  ctx.reply('Hey! Check out our menu in the app 👇', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Mini App', // Button text
            web_app: { url: 'https://t.me/meduza_vn_bot/meduza' } // Replace with YOUR TMA URL
          }
        ]
      ]
    }
  });
});

import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}