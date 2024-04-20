let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://github.com/false-eye/THE-PRINCE-BOT/raw/main/Assets/mp3/Audio5.mp3"
    let url = "https://t.me/sarca_stics"
    let murl = "https://t.me/sarca_stics"
    let img = "https://telegra.ph/file/81557b0cd9531411346f3.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "9ine.x3",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "BOT IS ALIVE",
          body: "9ine.x3",
          thumbnailUrl: img,
          sourceUrl: 'https://t.me/sarca_stics',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
