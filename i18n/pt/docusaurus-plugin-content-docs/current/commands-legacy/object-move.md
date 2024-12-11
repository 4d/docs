---
id: object-move
title: OBJECT MOVE
slug: /commands/object-move
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT MOVE.Syntax-->**OBJECT MOVE** ( {* ;} *objeto* ; *moverH* ; *moverV* {; *redimH* {; *redimV* {; *}}} )<!-- END REF-->
<!--REF #_command_.OBJECT MOVE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um  uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado) ou Variável (se * é omitido) |
| moverH | Integer | &#8594;  | Valor do movimento horizontal do objeto (>0 - para a direita, <0 - para esquerda) |
| moverV | Integer | &#8594;  | Valor do movimento vertical do objeto (>0 - para baixo, <0 - para cima) |
| redimH | Integer | &#8594;  | Valor do redimensionamento horizontal do objeto |
| redimV | Integer | &#8594;  | Valor do redimensionamento vrtical do objeto |
| * | Operador | &#8594;  | se especificado = coordenadas absolutas e se omitido = coordenadas relativas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT MOVE.Summary-->O comando OBJECT MOVE permite mover os objetos no formulário atual, definido pelos parâmetros *\** e *objeto, moveH* píxels horizontalmente e *moveV* píxels verticalmente.<!-- END REF-->   
  
Também é possível (opcionalmente) redimensionar os objetos *redimH* píxels horizontalmente e *redimV* píxels verticalmente. 

A direção de movimento e redimensionamento depende dos valores passados nos parâmetros *moveH* e *moveV*:

* Se o valor es positivo, os objetos se movem e redimensionam para direita o para baixo, respectivamente.
* Se o valor es negativo, os objetos se movem e redimensionam para esquerda e para cima, respectivamente.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* designa o nome de um objeto (uma string). Se não passa o parâmetro \*, indica que o parâmetro *objeto* designa um campo ou uma variável. Neste caso, não passa uma string mas a referência de um campo ou de uma variável (campo ou variável de tipo objeto unicamente). 

Se passa um nome de objeto no parâmetro *objeto* e utiliza o carácter arroba (“@”) para selecionar mais de um objeto, todos os objetos selecionados são movidos ou redimensionados. 

**Nota:** desde a versão 6.5, é possível definir o modo de interpretação do caráctere arroba (“@”), quando se inclui em uma string de caracteres. Esta opção tem um impacto nos comandos “Propriedades dos objetos”. Por favor consulte o .

Automaticamente, os valores *moveH*, *moveV*, *redimH* e *redimV* modificam as coordenadas do objeto relativamente a sua posição anterior. Se quer que os parâmetros definam as coordenadas absolutas, passe o último parâmetro opcional *\**.

Este comando funciona nos seguintes contextos:

* Formulários de entrada em modo entrada de dados,
* Formulários mostrados utilizando o comando [DIALOG](../commands/dialog.md "DIALOG"),
* Cabeçalhos e rodapés de página de formulários de saída mostrados pelos comandos [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION") ou [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION"),
* Formulários em curso de impressão.

#### Exemplo 1 

A instrução a seguir move o botão “botão\_1” 10 pixels a direita, 20 píxels para cima e aumenta o botão 30 píxels de largura e 40 de altura: 

```4d
 OBJECT MOVE(*;"botão_1";10;-20;30;40)
```

#### Exemplo 2 

A seguinte instrução move o botão “botão\_1” as seguintes coordenadas (10;20) (30;40): 

```4d
 OBJECT MOVE(*;"botão_1";10;20;30;40;*)
```

#### Ver também 

[OBJECT DUPLICATE](object-duplicate.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 664 |
| Thread-seguro | &check; |
| Proibido no servidor ||


