---
id: web-get-variables
title: WEB GET VARIABLES
slug: /commands/web-get-variables
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET VARIABLES.Syntax-->**WEB GET VARIABLES** ( *nomeArray* ; *valorArray* )<!-- END REF-->
<!--REF #_command_.WEB GET VARIABLES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Text array | &#8592; | Nomes de variáveis de webform |
| valorArray | Text array | &#8592; | Valor de variável de webform |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB GET VARIABLES.Summary-->O comando WEB GET VARIABLES preenche os arrays texto *arrayNoms e arrayValores* com os nomes e valores das variáveis contidas no formulário web “enviado” (ou seja enviado ao servidor web).<!-- END REF-->  

Este comando obtém o valor de todas as variáveis que podem ser incluídas em páginas HTML: áreas de entrada, botões, caixas de seleção, botões de opção, menus pop up, listas de opções...  
  
**Nota**: no caso das caixas de seleção, o nome da variável e seu valor só são retornados se a caixa de seleção tiver sido selecionada.

Este comando é valido sem importar o tipo de URL ou de formulário (método POST ou GET) enviado ao servidor web.  
  
Este comando pode ser chamado, se for necessário, no [QR SET DESTINATION](qr-set-destination.md) ou em qualquer outro método 4D que resulte do envio de um formulário.

##### Sobre formulários Web e suas ações associadas 

Um formulário contém áreas de entrada (áreas de texto, botões, caixas de seleção). Quando um formulário é enviado (uma petição é enviada ao servidor web), a petição contém, entre outros, a lista de áreas de entrada e seus valores respectivos.   
Há dois métodos para enviar um formulário (ambos podem ser utilizados indiferentemente com 4D):  

* POST, geralmente utilizado para adicionar dados no servidor web, a um banco de dados,
* GET, geralmente utilizado para a petição ao servidor web, dados que provem de um banco de dados.

#### Exemplo 

Um formulário contém dois campos, vNome e vCidade que recebem os valores “ROBERTO” e “PARIS”. A ação associada ao formulário é “/4DACTION/WEBFORM”.   

* Se o método de formulário for POST (o utilizado com mais frequência), os dados introduzidos não serão visíveis na URL (http://127.0.0.1/4DACTION/WEBFORM).
* Se o método de formulário for GET, os dados serão visíveis na URL (http://127.0.0.1/4DACTION/WEBFORM?vNOME=ROBERTO&vCIDADE=PARIS).

O método WEBFORM pode ser desta forma:

```4d
 ARRAY TEXT($anombres;0)
 ARRAY TEXT($avalores;0)
 WEB GET VARIABLES($anombres;$avalores)
```

O resultado será:

```4d
 $anomes{1}="vNOME"
 $anomes{2}="vCIDADE"
 $avalores{1}="ROBERTO"
 $avalores{2}="PARIS"
```

A variável vNOME contém ROBERTO e vCIDADE contém PARIS.

#### Ver também 

[WEB GET BODY PART](web-get-body-part.md)  