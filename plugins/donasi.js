let handler = async m => m.reply(`
╭─「 Donasi • Terimakasi 」
│ • DANA : 082350496532
│ • OVO  : 082252285143
│ • Gopay : 082252285143
│ • Pulsa : 082252285143/082350496532
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
