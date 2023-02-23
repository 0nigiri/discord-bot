module.exports = {
    deleted:true,
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    // deleted: Boolean,

    callback: (client, interaction) => {

        interaction.reply({
            content: `Pong! ${client.ws.ping}ms`,
            ephemeral: true,
        });
        
    },
};