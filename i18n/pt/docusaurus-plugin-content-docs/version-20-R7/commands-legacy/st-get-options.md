---
id: st-get-options
title: ST GET OPTIONS
slug: /commands/st-get-options
displayed_sidebar: docs
---

<!--REF #_command_.ST GET OPTIONS.Syntax-->**ST GET OPTIONS** ( {* ;} *objeto* ; *opcao* ; *valor* {; *opcao2* ; *valor2* ; ... ; *opcaoN* ; *valorN*} )<!-- END REF-->
<!--REF #_command_.ST GET OPTIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| opcao | Integer | &#8594;  | Opção a ler |
| valor | Integer | &#8592; | Valor atual da opção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST GET OPTIONS.Summary-->O comando **ST GET OPTIONS** obtém o valor atual de uma ou várias opções de funcionamento do campo ou da variável de texto com estilo designada pelo parâmetro *objeto*.<!-- END REF-->

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução, se o objeto tem o foco, o comando devolve a informação do objeto que se está editando, e se o objeto não tem o foco, o comando devolve a informação da fonte de dados do objeto (variável ou campo).  
Se omitir o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia. Durante a execução, o comando devolve a informação da variável ou do campo.

Passe o código da opção a ler no parâmetro *opcao*. O comando devolve em *valor* o atual da opção. Para ambos parâmetros, pode utilizar as seguintes constantes, que se encontram no tema "*Texto multi estilo*":

| Constante                   | Tipo          | Valor | Comentário                                                 |
| --------------------------- | ------------- | ----- | ---------------------------------------------------------- |
| ST Expressions display mode | Inteiro longo | 1     | O parâmetro *valor* pode conter ST Values ou ST References |
| ST References               | Inteiro longo | 1     | Mostra as cadeias fonte das expressões                     |
| ST Values                   | Inteiro longo | 0     | Mostra os valores calculados das expressões                |

#### Ver também 

[ST SET OPTIONS](st-set-options.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1290 |
| Thread-seguro | &cross; |


