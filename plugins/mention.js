let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://github.com/false-eye/THE-PRINCE-BOTraw/main/Assets/mp3/Audio5.mp3"
    let url = "https://t.me/sarca_stics"
    let murl = "https://instagram.com/false_eye"
    let hash = global.princebot
    let img = "https://telegra.ph/file/81557b0cd9531411346f3.jpg"
    let num = "919539901834"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "9ine.x3",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷| ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
