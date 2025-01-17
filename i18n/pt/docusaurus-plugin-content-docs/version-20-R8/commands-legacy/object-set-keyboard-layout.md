---
id: object-set-keyboard-layout
title: OBJECT SET KEYBOARD LAYOUT
slug: /commands/object-set-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Syntax-->**OBJECT SET KEYBOARD LAYOUT** ( {* ;} *objeto* ; *codigoLing* )<!-- END REF-->
<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável ou um campo |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável ou campo (se omitido *) |
| codigoLing | Text | &#8594;  | Código de lenguaje RFC3066 ISO639 e ISO3166,"" = não muda |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Summary-->O comando **OBJECT SET KEYBOARD LAYOUT** permite definir ou modificar dinamicamente a configuração de teclado associada ao objeto ou aos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->  
  
Passa-se o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável ou um campo. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
Em *codigoLing*, passe uma cadeia indicando o código de linguagem a utilizar, baseado em RFC3066, ISO639 e ISO3166\. Para maior informação, consulte a descrição do comando [SET DATABASE LOCALIZATION](set-database-localization.md). 

#### Ver também 

[OBJECT Get keyboard layout](object-get-keyboard-layout.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1179 |
| Thread-seguro | &cross; |


