# Mini Calculadora

## Requisitos básicos

- [ ] Conhecimento básico Git
- [ ] Conhecimento linguagem Javascript
- [ ] Conhecimento linguagem ReactJS
- [ ] Conhecimento HTML e CSS
- [ ] Conhecimento npm ou Yarn
- [ ] Conhecimento JSON
- [ ] Conhecimento REST API

## Requisitos diferenciais

- [ ] Conhecimento NodeJS
- [ ] Conhecimento Docker
- [ ] Conhecimento ExpressJS
- [ ] Conhecimento MongoDB
- [ ] Styled-component
- [ ] Redux

## Proposta do desafio

Este desafio foi criado para medir as skills e o nível do desenvolvedor Front-End, sendo assim, possibilitando que o desenvolvedor consiga mostrar todos os seus diferenciais e suas habilidades.

É importante que o desenvolvedor mostre também outras skills, como por exemplo, novas formas de solucionar problemas, sugerir melhorias na aplicação e aumento de performance.

O desenvolvedor ficará livre para desenvolver sua aplicação sem que precise seguir um roteiro fixo, deixando-o livre para traçar novas mecânicas, funcionalidade e interface. **MAS ATENÇÃO, o desafio deve ser finalizado tendo seus recursos principais.**

**_Good luck!_**

## Ferramentas obrigatórias no desafio

Para este desafio é **obrigatório** que o desenvolvedor utilize todos os recursos abaixo:

- Javascript ou typescript
- [ReactJS](https://legacy.reactjs.org/)
- [MUI](https://mui.com/)
- HTML e CSS
- npm ou yarn
- Custom Hook (Hook customizado)
- Axios

## Bibliotecas adicionais

Além das ferramentas obrigatórias, poderá ser adicionado outras ferramentas para que ajude e auxilie o desenvolvedor, para que assim consiga trazer mais riqueza e performance a aplicação. Mesmo não sendo obrigatório adicionar novas ferramentas ao desafio, caso o desenvolvedor tenha interesse basta adiconar-las na lista juntamente com o link de seu repositório.

**Exemplo:**

- [Animate css](https://animate.style/)

## O que deverá ser feito

Todo o roteiro do desafio da Mini Calculadora está disponibilizado no [Figma](<https://www.figma.com/file/wlET5cMQY14F2b4rzk1m4r/Teste-Postaqui-(Copy)?type=design&node-id=0%3A1&mode=design&t=M12ZmsZmE7O0H5nI-1>), sendo assim deverá ser seguido a essência da aplicação, apresentando suas cinco telas, funcionalidade e campos de entrada.

O fluxo da aplicação sempre deverá ser mantido.

### Passo a passo

##### Step 1

- Preenchimento das informações sobre o remetente da correspondência.
  - Todos os campos são obrigatórios. Exceto o campo **Complemento**.

##### Step 2

- Preenchimento de informações sobre o destinatária da correspondência.
  - Todos campos são obrigatórios. Exceto o campo **Complemento**.
  - Mostrar informações preenchidas no Step 1.
  - Ao clicar nas informações do STEP 1 deverá voltar para o preenchimento.

##### Step 3

- Preenchimento das informações da correspondência que será enviada.
  - Todos os campos são obrigatórios.
  - Adicionar limitador mínimo no componente **Descrição dos itens**. Exemplo: **Mínimo 10 caracteres**.
  - Ao clicar nas informações do STEP 1 ou 2 deverá voltar para preenchimento das suas respectivas telas.
  - Ao avançar para o step 4 deverá fazer uma requisição para a **API da Postaqui** para que assim consiga o retorno do valor do frete. **Aguardar retorno em loading.**

##### Step 4

- Mostrar resultado do frete para o usuário.
  - Ao fazer a postagem deverá fazer uma requisição para a **API postaqui** trazendo o código de rastreio que será retornado em resposta.
  - Ao clicar nas informações do STEP 1, 2 ou 3 deverá voltar para preenchimento de suas respectivas telas.

##### Step 5

- Mostrar código de rastreio para o usuário com o numero da etiqueta.
  - Botão de nova postagem deverá limpar toda a cache dos inputs para realizar nova postagem

É opcional seguir exatamente o design da aplicação, com isso fique livre para poder criar o seu próprio design, reorganizar os componentes e criar o seu próprio estilo de componentes.

### API

##### Header

**Base URL** `https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/`

**Header da requisição** `Content-Type: application/json`

**Parametros**

_CARRIER_

- **CORREIOS**
- **JADLOG**
- **AZUL_CARGO**

##### Calculo do valor do frete

URL `{{URL}}/shipping_calculate`

**_Request_**

```
{
    "sender": {
        "fullname": "",
        "cpf": "",
        "phone": "",
        "email": "",
        "address": {
            "cep": "",
            "state": "",
            "uf": "",
            "city": "",
            "neighborhood": "",
            "street": "",
            "number": "",
            "complement": ""
        }
    },
    "receiver": {
        "fullname": "",
        "cpf": "",
        "phone": "",
        "email": "",
        "address": {
            "cep": "",
            "state": "",
            "uf": "",
            "city": "",
            "neighborhood": "",
            "street": "",
            "number": "",
            "complement": ""
        }
    },
    "package": {
        "weight": "",
        "height": "",
        "width": "",
        "length": "",
        "reverse": false,
        "ar": false,
        "own_hands": false,
        "information": {
            "amount": "",
            "quantity": "",
            "description": ""
        }
    }
}
```

**_Response_**

```
{
    "shipment": [
        {
            "_id": "50b3b5b9-9dc5-49c0-b32b-09583581892e",
            "carrier": "Correios Pac",
            "price": 525.94,
            "discount": 311.30
        },
        {
            "_id": "d728eb44-278c-403f-a796-421121d3dbc0",
            "carrier": "Correios Sedex",
            "price": 797.73,
            "discount": 466.00
        },
        {
            "_id": "d23fb587-1c74-466c-858c-9352a4ad6e4b",
            "carrier": "Jadlog Express",
            "price": 256.42,
            "discount": 940.13
        },
        {
            "_id": "59f25e36-b46b-4c9e-8d8e-75e7bc24213f",
            "carrier": "Jadlog Package",
            "price": 381.55,
            "discount": 575.58
        },
        {
            "_id": "9edb8625-8503-45cc-bb24-6b87f7939b69",
            "carrier": "Azul Cargo", //Nome da transportadora
            "price": 394.91, //Preço em reais
            "discount": 696.22 //Preço em reais
        }
    ]
}
```

##### Código de rastreio

URL `{{URL}}/posting?carrier={{CARRIER}}`

**_Request_**

```
{
    "calculated_id": "{{ID_SHIPPING_CALCULATE}}" //Id que foi retornado na requisição anterior
}
```

**_Response_**

```
{
    "code": "AZUL88199037" //Código de rastreio
}
```

## O que será avaliado

- **Código**
  - Reutilização de código
  - Organização das funções
  - Complexidade de recursos
  - Abstração de código
  - Comentários em funcionalidades complexas
  - Arquitetura e organização de pastas
- **Utilização do Git**
  - Utilização correta das Branchs **_(Separar uma branch por Step)_**
  - Utilização de commits por funcionalidades **_(Separar um commit por componente ou funcionalidade)_**
  - Trabalhar em uma branch separada da Master ou Main
  - Realizar merge com a master
- **_Responsividade_**
  - Tela responsivas
  - Componentes responsivos
- **_Mascara e validação_**
  - Validação para numéricos e textos
  - Validação campos obrigatórios
  - Mascara para campos de entrada (CPF, Telefone e CEP)
  - Validação do CEP. **Retornar informações de endereço** [API CEP](https://viacep.com.br/)
  - Autocomplete
  - Validação de erro. **ERROS Codes: 400, 401, 404, 500 e 503**

## Como me destacar

- Seja criativo
- Seja organizado
- Seja ágil

**_Esperamos você aqui na Postaqui_**
