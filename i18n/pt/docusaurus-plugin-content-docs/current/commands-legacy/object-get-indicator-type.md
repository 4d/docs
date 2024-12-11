---
id: object-get-indicator-type
title: OBJECT Get indicator type
slug: /commands/object-get-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get indicator type.Syntax-->**OBJECT Get indicator type** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get indicator type.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Variável (se * é omitido) |
| Resultado | Integer | &#8592; | Tipo de indicador |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get indicator type.Summary-->O comando **OBJECT Get indicator type** devolve o tipo do indicador atual atribuído ao termômetro(s) designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Pode definir o tipo de indicador utilizando a lista de propriedades em modo de desenho ou utilizando o comando [OBJECT SET INDICATOR TYPE](object-set-indicator-type.md).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável do objeto unicamente).

Pode comparar o valor devolvido pelo comando com as seguintes constantes, que se encontram no tema "*Propriedades dos objetos* ":

| Constante                 | Tipo          | Valor | Comentário                                      |
| ------------------------- | ------------- | ----- | ----------------------------------------------- |
| Asynchronous progress bar | Inteiro longo | 3     | Indicador circular mostra uma animação contínua |
| Barber shop               | Inteiro longo | 2     | Barra que mostra uma animação contínua          |
| Progress bar              | Inteiro longo | 1     | Barra de progresso estandarte                   |

#### Ver também 

[OBJECT SET INDICATOR TYPE](object-set-indicator-type.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1247 |
| Thread-seguro | &check; |
| Proibido no servidor ||


