const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://m.youtube.com/channel/UC0orfrdyEO6hPjUdTLco7-Q')
        .setState('Join Now')
        .setName('Joltz')
        .setDetails('Discord Bots Developer')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1206070092824059924/1206070141524254750/G78hRYJ.png?ex=65e3e5d9&is=65d170d9&hm=9d4f6a52854852d25b82b3bfa24a94065aaa7b46ad5d0f875f374675f6baed5e&')
        .setAssetsLargeText('Visit this')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1206070092824059924/1206070141524254750/G78hRYJ.png?ex=65e3e5d9&is=65d170d9&hm=9d4f6a52854852d25b82b3bfa24a94065aaa7b46ad5d0f875f374675f6baed5e&')
        .setAssetsSmallText('Verified')
        .addButton('Invite Joltz Uptime', 'https://discord.com/api/oauth2/authorize?client_id=1206069899424825444&permissions=8&scope=bot')
        .addButton('Discord Server', 'https://dsc.gg/Joltz');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
