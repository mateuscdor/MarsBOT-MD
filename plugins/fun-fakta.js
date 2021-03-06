let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('amel', '/fakta', {}, 'apikey'))

    let json = res.data
    conn.sendButton(m.chat, json.result, wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta)$/i

module.exports = handler