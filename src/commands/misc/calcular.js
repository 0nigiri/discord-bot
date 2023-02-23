const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'calcular',
    description: 'Calcular o preco do boost! Boost minimo de 300 mmr',
    options: [
        {
            name: 'mmr-atual',
            description: 'Digite seu mmr atual, entre os valores 1-5100',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: 5100,
        },
        {
            name: 'mmr-desejado',
            description: 'Digite o mmr que voce deseja, entre os valores 300-6000',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 400,
            maxValue: 6000,
        }
    ],
    callback: async (client, interaction) => {
        const mmrAtual = interaction.options.get('mmr-atual').value;
        const mmrDesejado = interaction.options.get('mmr-desejado').value;
        const numberGames = Math.ceil((mmrDesejado - mmrAtual) / 30)
        let mmr = mmrAtual;
        let valorSolo = 0;
        let valorParty = 0;

        // console.log(numberGames);

        if (mmrAtual > mmrDesejado) {
            await interaction.reply({
                content: 'MMR atual maior que o MMR desejado.',
                ephemeral: true,

            });

        } else if ((mmrDesejado - mmrAtual) < 300) {


            await interaction.reply({
                content: 'MMR desejado abaixo do valor minimo, o boost tem que ter no minimo 300 de mmr de diferença.',
                ephemeral: true,
            });
        } else {

            for (let i = 0; i < numberGames; i++) {
                mmr += 30;



                if (mmr < 800) {
                    valorSolo += 5;
                    valorParty += 8;
                    continue;
                }

                if (801 < mmr && mmr < 1500) {
                    valorSolo += 5.25;
                    valorParty += 9;
                    continue;
                }

                if (1501 < mmr && mmr < 2200) {
                    valorSolo += 5.5;
                    valorParty += 9;
                    continue;
                }
                if (2201 < mmr && mmr < 2750) {
                    valorSolo += 6;
                    valorParty += 10;
                    continue;
                }
                if (2751 < mmr && mmr < 3300) {
                    valorSolo += 6.85;
                    valorParty += 11;
                    continue;
                }
                if (3301 < mmr && mmr < 3800) {
                    valorSolo += 7.5;
                    valorParty += 13;
                    continue;
                }
                if (3801 < mmr && mmr < 4100) {
                    valorSolo += 9;
                    valorParty += 16;
                    continue;
                }
                if (4101 < mmr && mmr < 4500) {
                    valorSolo += 10.8;
                    valorParty += 19;
                    continue;
                }
                if (4501 < mmr && mmr < 5000) {
                    valorSolo += 13.5;
                    valorParty += 21;
                    continue;
                }
                if (5001 < mmr && mmr < 5400) {
                    valorSolo += 19;
                    valorParty += 22;
                    continue;
                }
                if (5401 < mmr && mmr < 6000) {
                    valorSolo += 32;
                    valorParty += 52;
                    continue;
                }
            }
            // console.log(valorSolo);
            // console.log(valorParty);

            valorSolo = Math.ceil(valorSolo);
            valorParty = Math.ceil(valorParty);

            await interaction.reply({
                content: `O valor do boost jogando em sua conta é R$ ${valorSolo} e o valor jogando em party é ${valorParty}`,
                ephemeral: true,
            });
        }
    }
}