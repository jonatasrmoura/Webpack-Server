module.exports = {
    entry: './main.js', // fala qual que é o arquivo principal
    output: { // para qual arquivo eu devo enviar o código convertido para antes do EM6
        path: __dirname, // variável G que se refere ao diretorio webpack.config.js
        filename: 'bundle.js', // nome do arquivo
    },
    module: {
        // como o webpack deve se comportar quando o usuário estiver tentando importar novos arquivos JS
        rules: [
            /* toda vez que o usuário importar um arquivo JS o outros ele vai
            execultar o babel automaticamente na quele arquivo bundle.js 
            não vai precisar do bebal execultando em background */
            {
                test: /\.js$/,
                exclude: /node_modules/, // não execultar nenhum arquivo do node_modules
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};