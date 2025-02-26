const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')
const si = require('systeminformation')

cmd({
      pattern: "ping",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "🧚🏻‍♀️",
      filename: __filename
    },

    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{

          // System and memory information
          const nima = require("@whiskeysockets/baileys")
         const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: 'AVISHKA_X_PINDING...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
          // Status message to be sent


          let desc = `💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚\n👋 𝐇𝐄𝐋𝐋𝐎 ${pushname}

📍️ *P𝐎𝐍𝐆 : ${ping}𝐌𝐒*
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> *𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝑨𝒗𝒊𝒔𝒉𝒌𝒂_𝑿-𝑴𝑫* `





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'Avishka_X-MD',
          newsletterJid: "120363370611065764@newsletter",
          },
          externalAdReply: {
              title: `*Avishka_X-MD pinging* ⚡`,
              body: `https://Avishka_X-MD-md-main-web.vercel.app/`,
              thumbnailUrl: `https://i.ibb.co/VD8FGDg/7754.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: false
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`Error: ${e.message}`);
      }
    });
