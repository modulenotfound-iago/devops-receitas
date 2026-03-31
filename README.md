# devops
Site feito durante a aula de devops, testando git!

Esse projeto consiste em unas receitas, um site feito com html css


Tecnologias e Conceitos Aplicados

O estilo foi construída utilizando CSS Grid para criar um layout responsivo e fluido.
TypeScript: A lógica principal da aplicação.

Foi criada uma Interface para tipa e padronizar o formato dos dados de cada receita.

Utilização de manipulação do DOM e métodos de iteração de arrays (como o .map() ) para varrer a base de dados e injetar o código HTML dinamicamente na página.

Implementação de renderização condicional para exibir informações opcionais, como "Complementos", só aparecera quando existir. 

O formato feito não utilizo bundlers externos como o "Vite". Sendo a sim o ambiente foi configurado do zero utilizando o npm , coma criação manual do tsconfig.json 
para gerenciar a compilação direta do código TypeScript para módulos JavaScript(ES6) interpretáveis pelo navegador.