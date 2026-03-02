import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN || ""); // Your bot token from Vercel env vars

bot.on("message", (ctx) => {
  ctx.reply("Hey! Check out our menu in the app 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Mini App", // Button text
            web_app: { url: "https://t.me/meduza_vn_bot/meduza" }, // Replace with YOUR TMA URL
          },
        ],
      ],
    },
  });
});

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send("OK");
    } catch (error) {
      console.error("Error handling update:", error);
      res.status(500).send("Error");
    }
  } else {
    res.status(200).send("Bot webhook is active!");
  }
}
