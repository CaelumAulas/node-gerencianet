
## Apresentação
- Nome: Mario Souto - 
- XP 
    - 11 anos
    - OT Server
    - Script 
    - 14 - Infonet 
    - <title>
    - 17 
        - IBM 
        - Agencia 
- Hobbie
    - Curto código
    - filme
    - sair em roles aleatorios
    - palestrar


## Expectativas do Curso
- Revisão de JavaScripts
    - ES6
- Coisas de boas práticas no Node
    - Conhecer o meu conhecimento
- Testes unitários
    - Conceitos de Testes
    - Como testar até um wordpress
- Não focaremos em Banco de Dados 
    - "Aplicações são CRUDs que variam
        de grandes a pequenos"
- De callback até async await
- Padrões para a criação de APIs
- 


## Dicas de livros
- https://www.amazon.com.br/Refactoring-Improving-Design-Existing-Code/dp/0134757599?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_1157433115_58530734048_257324212232_aud-519888259198:pla-491298282199_c_
- Arquitetura em Camadas 

## Exercicio 00 
- Criar uma pasta js35 no desktop
- Abrir a pasta no VsCode
- 

## Eventos Globais
- https://hacktoberfest.digitalocean.com/

## Bases gerais
- Ryan Dahl
    - TCC 
    - Plataforma Node: 
        - "JS rodando fora do browser"
        - V8
        - https://github.com/libuv/libuv
        - Instalar

    - Criando sites!
    - Sistema de gerenciar livros
    - Core baseado no motor do chrome
    - linguagem universal: Back e Front com JS
    - Aguenta muita requisição
    - Async
    - API Rest

- Linguagem JavaScript
    - dec
- Application Programming Interface do Browser 
- API do Node


 
## Regra dos Status HTTP
- 20x (Algo que deu certo)
- 30x (Algo na rede )
- 40x (Algum ruim)
- 50x (Algum ruim muito forte desconhecido talvez)


## Coisas de variaveis

// 1 - baixem o Nodemon "npm install -g nodemon"
// 2 - subam o servidor com "nodemon ./server.js"
// 3 - troquem todos os vars por const

// let var e const

// let o escopo é... coméquie é... local?
// let e var é igual
// const que muda 
// programação funcional

// Legibilidade <------------> Performance
{/* <script src=""></script> */}

## Arrays e suas funções

```js
// Polyfill
[1,2,3,4,5,6].forEach(function(produto) {
    console.log(produto)
	return produto
})

Array.prototype.forEach = function(funcao) {
    const arrayAtual = this
    for(item of arrayAtual) {
        funcao(item)
    }
}


[1,2,3,4,5,6].map(function(produto) {
    console.log(produto)
	return produto
})

Array.prototype.map = function(funcao) {
    const arrayAtual = this
    const novaLista = []
    for(item of arrayAtual) {
        novaLista.push(funcao(item))
    }

    return novaLista
}


Array.prototype.filter = function(funcao) {
    const arrayAtual = this
    const novaLista = []
    for(item of arrayAtual) {
        if(funcao(item)) {
            novaLista.push(funcao(item))
        }
    }

    return novaLista
}
```

## Dicas que podem ti dar ideias pra fazer códigos

- https://www.amazon.com.br/Domain-Driven-Design-Eric-Evans/dp/8550800651?tag=goog0ef-20&smid=A1X6I9A8LS2X8V&ascsubtag=go_1494986073_58431735035_285514469186_aud-519888259198:pla-566080525912_c_
- https://www.amazon.com.br/Implementando-Domain-Driven-design-Vernon/dp/8576089521?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_726685122_54292137521_242594579893_aud-519888259198:pla-432734982426_c_
- https://martinfowler.com/articles/201803-refactoring-2nd-ed.html