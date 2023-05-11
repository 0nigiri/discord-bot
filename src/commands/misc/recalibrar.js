const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'recalibrar',
    deleted: true,
    description: 'Calcular Valor da recalibracao',
    options: [
        {
            name: 'medalha-antes-do-reset',
            deleted: true,
            description: 'Selecione a medalha que voce tinha antes da recalibracao',
            type: ApplicationCommandOptionType.Number,
            required: true,
            choices: [
                {
                    name: 'Herald/Arauto',
                    value: 6,
                },
                {
                    name: 'Guardian/Guardião',
                    value: 6,
                },
                {
                    name: 'Crusader/Cruzado',
                    value: 6.5,
                },
                {
                    name: 'Archon/Arconte',
                    value: 7,
                },
                {
                    name: 'Legend/Lenda',
                    value: 7,
                },
                {
                    name: 'Ancient/Ancestral',
                    value: 7.5,
                },
                {
                    name: 'Divine/Divino',
                    value: 8,
                },

            ],
        },
        {
            name: 'tipo',
            description: 'Preferencia entre solo ou party',
            type: ApplicationCommandOptionType.Number,
            required: true,
            choices: [
                {
                    name: 'solo',
                    value: 1,
                },
                {
                    name: 'party',
                    value: 1.6,
                },
            ],
        }
    ],
    callback: async (client, interaction) => {
        const beforeRecalibration = interaction.options.get('medalha-antes-do-reset').value;
       
        const soloPt = interaction.options.get('tipo').value;
        let tipo;
        if (soloPt === 1) {
            tipo = 'Solo';
        } else if (soloPt === 1.8) {
            tipo = 'Party';

        }

        const user = interaction.user.username;

        valor = Math.ceil(beforeRecalibration * soloPt);


        const channel = client.channels.cache.get('1077768053107982387');
        channel.send(`${user} voce selecionou a opcao em ${tipo}, o valor sera  ${valor}`);


        await interaction.reply({
            content: `O valor da recalibracao sera  ${valor}`,
            ephemeral: true,
        });
    }
}
