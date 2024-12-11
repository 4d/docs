---
id: object-set-minimum-value
title: OBJECT SET MINIMUM VALUE
slug: /commands/object-set-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Syntax-->**OBJECT SET MINIMUM VALUE** ( {* ;} *objeto* ; *valorMinimo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MINIMUM VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omite, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| valorMinimo | Date, Time, Number | &#8594;  | Valor mínimo para o objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Summary-->O comando **OBJECT SET MINIMUM VALUE** modifica o valor mínimo do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->  
  
A propriedade "valorMinimo" pode ser aplicada a dados de tipo número, data ou hora. Para mais informação, consulte *Valores máximos e mínimos* no manual de *Desenho*.  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
Em *valorMinimo*, passe o novo valor mínimo a atribuir ao objeto para o processo atual. Este valor deve coincidir com o tipo de objeto, caso contrário é mostrada a mensagem erro 18 "Os tipos de campo são incompatíveis".

#### Ver também 

[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1242 |
| Thread-seguro | &check; |
| Proibido no servidor ||


