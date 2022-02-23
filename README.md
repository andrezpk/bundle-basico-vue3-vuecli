# Bundle Básico de Vue3 com vue-cli

## Criar a pasta com o nome do projeto

## Colocar o conteudo dentro da pasta

## Trocar o nome do projeto no arquivo package.json
```
"name": "bundle_basico", para "name": "nome_do_projeto"
```

## Instalar dependências
```
npm install
```
## Trocar o path no arquivo vue.config.js 
```
 publicPath:'/nome_do_projeto/dist/'
```

## Trocar o path no arquivo router/index.js
```
 linha 60:
 history: createWebHashHistory('/nome_do_projeto/dist/'),
```

## Compilando para desenvolvimento
```
npm run serve
```

## Compilando e minificando para distribuição
```
npm run build
```

# OBSERVAÇÃO ANTES DE COMPILAR PARA COLOCAR NO WEBSERVER:

## 1- Caso os arquivos de dist fiquem na raiz do servidor:
   - no arquivo vue.config.js : APAGAR ALINHA DO  publicPath:'/nome_do_projeto/dist/' 
   -- no arquivo router/index.js : RETIRAR O PATH  history: createWebHashHistory(),

## 2- Caso os arquivos de dist fiquem algum dietório do servidor:
   - no arquivo vue.config.js : ALTERAR O PATH  publicPath:'/diretorio_do_servidor/' 
   -- no arquivo router/index.js : ALTERAR O PATH  history: createWebHashHistory('/diretorio_do_servidor/'),