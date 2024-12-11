---
id: object-get-auto-spellcheck
title: OBJECT Get auto spellcheck
slug: /commands/object-get-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get auto spellcheck.Syntax-->**OBJECT Get auto spellcheck** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get auto spellcheck.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável ou campo |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável ou campo (se omitido *) |
| Resultado | Boolean | &#8592; | True = correção automática,False = não correção automática |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get auto spellcheck.Summary-->O comando **OBJECT Get auto spellcheck** devolve o estado da opção Correção ortográfica automática do ou dos objeto(s) designado(s) pelos parâmetros *objeto* e *\** para o processo atual .<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se este parâmetro não passar, indica que *objeto* é uma variável ou um campo. Neste caso, passe uma referencia no lugar de um nome.  
  
O comando devolve **True** quando a correção ortográfica automática está ativada para o *objeto* e **False** se não.

#### Ver também 

[OBJECT SET AUTO SPELLCHECK](object-set-auto-spellcheck.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1174 |
| Thread-seguro | &check; |
| Proibido no servidor ||


