---
id: object-get-focus-rectangle-invisible
title: OBJECT Get focus rectangle invisible
slug: /commands/object-get-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get focus rectangle invisible.Syntax-->**OBJECT Get focus rectangle invisible** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get focus rectangle invisible.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável ou um campo |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável ou campo (se omitido *) |
| Resultado | Boolean | &#8592; | True = retângulo de foco oculto, False = retângulo de foco visível |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get focus rectangle invisible.Summary-->O comando **OBJECT Get focus rectangle invisible** devolve o estado da opção de invisibilidade do retângulo de foco do objeto e dos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF--> Esta configuração corresponde à opção **Ocultar retângulo de foco** disponível para os objetos editados na Lista de propriedades em modo Desenho. Este comando devolve o estado atual da opção, como se definiu em modo Desenho ou utilizando o comando [OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md).

**Nota:** pode utilizar esta opção unicamente em Mac OS. Não têm efeito em Windows. 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável ou um campo. Neste caso, se passa uma referencia de variável no lugar de uma cadeia.

O comando devolve **True** se o retângulo de foco está oculto e **False** quando é visível.

#### Ver também 

[OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1178 |
| Thread-seguro | &cross; |


