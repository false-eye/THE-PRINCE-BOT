let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "Mention whose you want to check character"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "Sigma",
      "Retarded",
      "Cunt",
      "Twat",
      "Drake's Snake",
      "Stephen Hawkins",
      "Polayaadi Mwon",
      "Autistic",
      "Bisexual",
      "Hitler",
      "Mewed Up",
      "Lookmaxxer",
      "Gay",
      "MF",
      "Nigga",
      "Chigga",
      "Brainwashed North Indian",
      "Meat Rider",
      "Disabled One",
      "Man With No Bitches",
      "Girl who don't get man",
      "Israeli",
      "Attitude King",
      "Chapri",
      "Generous",
      "Grumpy",
      "Overconfident",
      "Obedient",
      "Good",
      "Simp",
      "Kind",
      "Patient",
      "Pervert",
      "Cool",
      "Helpful",
      "Brilliant",
      "Sexy",
      "Hot",
      "Gorgeous",
      "Cute",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `Character of @${mentionedUser.split("@")[0]}  is *${userCharacterSeletion}* 🔥⚡`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(character)/i

export default handler 
