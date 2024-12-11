---
id: object-set-maximum-value
title: OBJECT SET MAXIMUM VALUE
slug: /commands/object-set-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Syntax-->**OBJECT SET MAXIMUM VALUE** ( {* ;} *objeto* ; *valorMax* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia) Se omitido, objeto é um campo ou variável |
| objeto | any | &#8594;  | Nome do objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| valorMax | Date, Time, Number | &#8594;  | Valor máximo para o objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Summary-->O comando **OBJECT SET MAXIMUM VALUE** modifica o valor máximo do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->  
  
A propriedade "Valor máximo" pode ser aplicada a dados de tipo número, data ou hora. Para mais informação, consulte *Valores máximos e mínimos* no manual de *Desenho*.  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
Em *valorMax*, passe o novo valor máximo que deseja atribuir ao objeto para o processo atual. Este valor deve coincidir com o tipo de objeto, caso contrário se devolve o erro 18 "Tipos incompatíveis".

#### Ver também 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1244 |
| Thread-seguro | &check; |
| Proibido no servidor ||


