const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'recalibrar',
    description: 'Calcular Valor da recalibracao',
    options: [
        {
            name: 'medalha-antes-do-reset',
            description: 'Selecione a medalha que voce tinha antes da recalibracao',
            type: ApplicationCommandOptionType.Number,
            required: true,
            choices: [
                {
                    name: 'Herald/Arauto',
                    value: 5,
                },
                {
                    name: 'Guardian/Guardião',
                    value: 5.5,
                },
                {
                    name: 'Cruzader/Cruzado',
                    value: 6,
                },
                {
                    name: 'Archon/Arconte',
                    value: 6.8,
                },
                {
                    name: 'Legend/Lenda',
                    value: 7.8,
                },
                {
                    name: 'Ancient/Ancestral',
                    value: 9,
                },
                {
                    name: 'Divine/Divino',
                    value: 14,
                },

            ],
        },
        {
            name: 'numero-de-jogos',
            description: 'Digite o mmr que voce deseja, entre os valores 300-6000',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 6,
            maxValue: 10,

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
                    value: 1.8,
                },
            ],
        }
    ],
    callback: async (client, interaction) => {
        const beforeRecalibration = interaction.options.get('medalha-antes-do-reset').value;
        const numberGames = interaction.options.get('numero-de-jogos').value;
        const soloPt = interaction.options.get('tipo').value;


        valor = Math.ceil(beforeRecalibration * numberGames * soloPt);


        await interaction.reply({
            content: `O valor da recalibracao sera  ${valor}`,
            ephemeral: true,
        });
    }
}
