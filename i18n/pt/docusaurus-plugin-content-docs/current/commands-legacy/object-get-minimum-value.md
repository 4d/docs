---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( {* ;} *objeto* ; *valorMin* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| valorMin | Date, Time, Number | &#8592; | Valor mínimo atual do objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->O comando **OBJECT GET MINIMUM VALUE** devolve, na variável *valorMin*, o valor mínimo atual do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\**.<!-- END REF-->

A propriedade "Valor mínimo" pode ser definida utilizando a Lista de propriedades em modo Desenho, ou utilizando o comando [OBJECT SET MINIMUM VALUE](object-set-minimum-value.md).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em lugar de uma cadeia (campo ou variável objeto unicamente).

#### Ver também 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1243 |
| Thread-seguro | &check; |
| Proibido no servidor ||


