import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"





global.owner = [
  ["919539901834", "𝒇𝒂𝒍𝒔𝒆 𝒆𝒚𝒆", false],
  [''], 
  [''] 
]
//💌------------------------------------------💌


//💌global.pairingNumber = "" //put your bot number here💌
global.mods = ['919539901834'] 
global.prems = ['919539901834']
global.allowed = ['']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
//💌------------------------------------------💌



// APIS
global.APIs = { // API Prefix
  // name: 'https://website'
  CFROSAPI: 'https://api.cafirexos.com',
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
// 💌------------------------------------------💌




//APIKEYS
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}
//💌------------------------------------------💌



// Bot Images 
global.imagen1 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen2 = fs.readFileSync("./Assets/menus/Menu1.jpg")
global.imagen3 = fs.readFileSync("./Assets/menus/Menu2.jpg")
global.imagen4 = fs.readFileSync("./Assets/menus/Menu3.jpg")
global.imagen5 = fs.readFileSync("./Assets/menus/img2.jpg")
global.imagen6 = fs.readFileSync("./Assets/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./Assets/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./Assets/menus/img8.jpg")
global.imagen9 = fs.readFileSync("./Assets/menus/img9.jpg")
global.imagen10 = fs.readFileSync("./Assets/menus/img11.jpg")
global.imagen11 = fs.readFileSync("./Assets/menus/img12.jpg")
//💌------------------------------------------💌



global.img = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img2 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img3 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg' 
global.img4 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg' 
global.img5 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img6 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img7 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img8 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img9 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img10 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img11 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img12 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img13 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img14 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img15 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img16 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
global.img17 = 'https://telegra.ph/file/81557b0cd9531411346f3.jpg'
//💌------------------------------------------💌


//Chatgpt
global.gpt1 = fs.readFileSync("./Assets/GPT/gpt1.jpg")
global.gpt2 = fs.readFileSync("./Assets/GPT/gpt2.png")
global.gpt3 = fs.readFileSync("./Assets/GPT/gpt3.png")
global.gpt4 = fs.readFileSync("./Assets/GPT/gpt4.png")
global.gpt5 = fs.readFileSync("./Assets/GPT/gpt5.png")
global.gpt6 = fs.readFileSync("./Assets/GPT/gpt6.png")
//💌------------------------------------------💌


// Randome
global.princeMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img16, img17]
global.princeImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11]
global.princegpt = [gpt1, gpt2, gpt3, gpt4, gpt5, gpt6]
//💌------------------------------------------💌



// Moderator 
global.developer = 'https://wa.me/919539901834' //contact
//💌------------------------------------------💌



//Sticker WM
global.botname = '9ine.x3'
global.princebot = '9ine.x3'
global.packname = '9ine.x3' 
global.author = '@false_eye' 
global.princeig = 'https://www.instagram.com/false_eye' 
global.princegp = 'https://t.me/sarca_stics'
global.menuvid = 'https://telegra.ph/file/d062f39327b707e27ea91.mp4'
global.Princesc = 'https://github.com/false-eye/THE-PRINCE-BOT' 
global.princeyt = 'https://youtube.com/'
global.Princelog = 'https://telegra.ph/file/35a8070434cf5dfaeed28.jpg'
global.thumb = fs.readFileSync('./Assets/Prince.png')
//💌------------------------------------------💌



//Reactions
global.wait = '*♻️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
global.multiplier = 69 
global.maxwarn = '2' 
//💌------------------------------------------💌






let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
