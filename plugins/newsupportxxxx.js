const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
      pattern: "support",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "🧬",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);



          // Status message to be sent


          let _0x2c3bd5 = `💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
          𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗-𝐌𝐃 𝐕5 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐂𝐞𝐧𝐭𝐞𝐫
┏━━━━━━━━━━━➤◍◉➤💙💚
┝*∘₊✧──────✧₊∘*
├ .✦ 👨‍💻𝐎𝐰𝐧𝐞𝐫: 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗
├ .✦ 💻𝐂𝐫𝐞𝐚𝐭𝐨𝐫: 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗
├ .✦ ☎𝐂𝐨𝐧𝐭𝐚𝐜𝐭: +94788240417
├ .✦ 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
├ .✦  *𝐂𝐨𝐧𝐚𝐭𝐜𝐭 𝐎𝐰𝐧𝐞𝐫 𝐚𝐧𝐝
├.     *𝐓𝐞𝐥𝐥 𝐲𝐨𝐮𝐫 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐬*
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━➤◍◉➤💚
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗* `





          // Sending the image with caption
          const vv = await conn.sendMessage(from, {


           'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x2c3bd5,
      'contextInfo': {
        'mentionedJid': [''],
        'groupMentions': [],
        'forwardingScore': 999,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363370611065764@newsletter',
          'newsletterName': "Avishka_X-MD",
          'serverMessageId': "76cb7f39"
        },
        'externalAdReply': {
          'title': "Avishka_X-MD",
          'body': 'Avishka_X-MD',
          'mediaType': 1,
          'sourceUrl': 'https://whatsapp.com/channel/0029Vb3CfgF9sBIAyRgWqv1k',
          'thumbnailUrl': "https://i.ibb.co/F4wSg1Z/894a0e96b73519d5.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': mek
    });

      } catch (e) {
          console.error(e);
          reply(`Error: ${e.message}`);
      }
    });
