// Base de dados de receitas
let listaDeReceitas = [
    { nome: "Miojo", imagem: "/imagem/cards/miojo.webp", ingredientes: ["Pacote nissin miojo®", "300 ml de agua potavel", "Uma panela pequena"], modoPreparo: "Coloque a água na panela com o fogo ligado espere a água ferver e despeje o miojo na água (OBS: De preferência Inteiro)", complemento: "Feijão, ou qualquer proteina restante do almoço" },
    { nome: "Ovos Mexidos", imagem: "/imagem/cards/ovos mexidos.jpg", ingredientes: ["Dois ovos", "Uma colher de manteiga", "Sal a gosto"], modoPreparo: "Derreta a manteiga na frigideira, adicione os ovos, tempere e mexa até chegar no ponto desejado.", complemento: "Arroz, feijão, farinha temperada, Orégano a gosto, mistura tudo e pronto!!!" },
    { nome: "Arroz de Formo", imagem: "/imagem/cards/arrozDeForno.webp", ingredientes: ["Sobras de arroz do almoço", "Sobras de carne, frango ou linguiça (picados)", "Fatias de queijo", "Meio sachê de molho de tomate"], modoPreparo: "Em um recipiente que vá ao micro-ondas ou forno, misture o arroz, as carnes e o molho. Cubra tudo com o queijo e esquente até o queijo derreter completamente.", complemento: "Molho barbecue" },
    { nome: "Purê de batata simples e fácil", imagem: "/imagem/cards/pure.jpg", ingredientes: ["1 kg de batata", "1/2 xícara de leite", "2 colheres (sopa) de margarina", "1 dente de alho espremido", "sal a gosto"], modoPreparo: "Cozinhe as batatas até ficarem bem moles. Descasque-as ainda quentes e esprema as batatas no espremedor.Despeje as batatas em um recipiente e acrescente a margarina, o sal e o alho, e mexa até que a margarina derreta por completo.Acrescente o leite aos poucos e continue mexendo." },
    { nome: "Crepioca fit", imagem: "/imagem/cards/crepioca.jpg", ingredientes: ["1 colher de goma de tapioca", "1 ovo", "Para crepioca doce, adicione adoçante a gosto", "Para crepioca salgada, adicione uma pitada de sal a gosto"], modoPreparo: "Em um recipiente, bata bem o ovo. Adicione a goma de tapioca e bata novamente (pode bater com um garfo mesmo), até obter uma mistura homogênea. Coloque todo o conteúdo em uma frigideira antiaderente levemente quente e mantenha em fogo baixo. Deixe por alguns segundos e vire para dourar do outro lado. Não é necessário untar com óleo, azeite ou manteiga." },
    { nome: "Carne moída simples", imagem: "/imagem/cards/carnemoida.jpg", ingredientes: ["500 g de carne moída", "2 colheres (sopa) de óleo", "1 colher (sopa) rasa de extrato de tomate", "1 colher (sopa) rasa daqueles temperos completos que já vêm pronto", "1/2 cebola", "2 dentes de alho amassados", "coentro a gosto", "1/2 xícara de água"], modoPreparo: "Em uma panela coloque a carne com o óleo, 1 colher de tempero e o alho. Misture bem e deixe descansar por 5 minutos. Em seguida bata no liquidificador a cebola e o coentro com 1/2 xícara de água. Depois despeje tudo na panela da carne junto com o extrato de tomate. Deixe cozinhar até pegar gosto e a carne ficar no ponto." }
];
// Efetua a captura da div lá do HTML, onde ficara os cards. 
const containerReceitas = document.querySelector('#lista-receitas');
// Injetando o HTML usando a lógica de map()
containerReceitas.innerHTML = listaDeReceitas.map(receita => `
    <div class="card">
        <img src="${receita.imagem}" alt="Foto da receita de ${receita.nome}">
        
        <h1>${receita.nome}</h1>
        
        <b>Ingredientes:</b>
        <ul>
            ${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
        </ul>

        <b>Modo de preparo:</b>
        <p>${receita.modoPreparo}</p>

        ${receita.complemento ? `<b>Complemento:</b> <p>${receita.complemento}</p>` : ''}
        
    </div>
`).join('');
export {};
