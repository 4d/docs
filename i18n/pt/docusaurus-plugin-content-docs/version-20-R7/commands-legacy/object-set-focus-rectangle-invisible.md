---
id: object-set-focus-rectangle-invisible
title: OBJECT SET FOCUS RECTANGLE INVISIBLE
slug: /commands/object-set-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Syntax-->**OBJECT SET FOCUS RECTANGLE INVISIBLE** ( {* ;} *objeto* ; *invisível*  )<!-- END REF-->
<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| invisível | Boolean | &#8594;  | True = retângulo de foco oculto, False = retângulo de foco invisível |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Summary-->O comando **OBJECT SET FOCUS RECTANGLE INVISIBLE** permite definir ou modificar dinamicamente a opção invisibilidade do retângulo de foco do objeto designado para os parâmetros *objeto* e *\** para o processo atual.<!-- END REF--> Esta configuração corresponde à opção **Ocultar retângulo de foco** disponível para os objetos editados na Lista de propriedades em modo Desenho.   
  
**Nota**: só pode utilizar esta opção sobre Mac OS. Não têm efeito sobre Windows.

  
Se passa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de *objeto* (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável ou em um campo. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.

Passe **True** no parâmetro *invisível* para ocultar o retângulo de foco e **False** para deixar-lo visível.

#### Ver também 

[OBJECT Get focus rectangle invisible](object-get-focus-rectangle-invisible.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1177 |
| Thread-seguro | &check; |
| Proibido no servidor ||


