const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VacW1OYVdVa1Bkd1hTZ1QySkp0anVWK3oyUHEzUlc4ZWt5dXA2NFQyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVZIYzRrNTJmQ0RGNG9hZEVmSHlMZmU3d1ZYeS83Z0Z4eXFBVUg3TXhCST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQndscEZUbXNYcHZUeTIvb0VOeUNyUHNndTcxK3Rlc3NiMUk0cnhwdjBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUVTdEQ2FVa0dSWGlyZlZTeXBIQ3JUVkxNcGMwRTBHQW9tK2RnU2ZvV0ZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJWU02Nm0wMnNES3BkMDA0RDlGblFCdFJxdHd2M09rQ085VTFUaGRKVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLOWU5WXNQT0Zua3B1VWsrdVdpdENaYnU0c1BIVFJ4ZjUxOU8vbkRQMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZwWG4yRk5ibE50d2xHZWc3bExRbnFlay9VWXRNSHJMdy9EWjlPTEtYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWFOa0lSNllFdjZIcHFkT2plSDUxUGxZVit1MWNZMWtwWlEzYWpkOHcyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR6QkhPaTJyZEZKUXhucTJIRTJSS0dsaFdmSmVYa3ZpcGJYK05GclB6UG9acHcvdE9ZdmZrTDlSZFBDN1ZVRmRnOWIwWURRWjFCRmlGbGRFa0h0YUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiJ0dGN3N2k0VTZXbGg0YzVxTGlGQWNvQ2duNkowcEU3V1BkSWRqQXlHRFVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMTc2MTYzNDU4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTA0M0I4NTdGMTE3MDI1RjUyNEU4NjJFMzIzRTU0NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYyNDg4NTU4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBREVFTDVNRCIsIm1lIjp7ImlkIjoiMjIxNzYxNjM0NTg1OjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ItmF2LrZitix2Yog2KjZhNmI2oYiLCJsaWQiOiI5NzAyOTY4NjU2MDY0OjIxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkhocE5rRkVOL2h0Y2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWEpZSHdVbkMrOXB2RG5pc3B6eWx2SjNDWmxFN1djeitwOW9CRWwwcWUwQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNmIwQkU5K0R2UnlZUTMwWUc5eitLRGFFaHFWa0NhR0Y1MUZ0VlFlSnovajVjbVFrVzhzaU1NdkVFVk04TCtWbXF3OGFFYW9VSXE4TER6cEQrUWJSQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InNKZDBHOWVuM1lObGtZOUhSZ3p4OHEzUWd1Y3hScEhlSVZUanRGcXB0M1YvZ09vdzdod1hObkw3UUx6TUthQURGNjVYb09zdVhGUW1yOGVjeVdmcURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzYxNjM0NTg1OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ5V0I4Rkp3dnZhYnc1NHJLYzhwYnlkd21aUk8xbk0vcWZhQVJKZEtudEEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjQ4ODU1NSwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOTDcifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
