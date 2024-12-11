---
id: object-get-context-menu
title: OBJECT Get context menu
slug: /commands/object-get-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get context menu.Syntax-->**OBJECT Get context menu** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get context menu.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou Campo ou variável (se * for omitido) |
| Resultado | Boolean | &#8592; | True = menu contextual ativo, False = menu contextual inativo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get context menu.Summary-->O comando **OBJECT Get context menu** devolve o estado atual da opção "Menú contextual" do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
Pode configurar a opção "Menu contextual" em modo Desenho utilizando a lista de propriedades ou utilizando o comando [OBJECT SET CONTEXT MENU](object-set-context-menu.md).  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
O comando devolve **True** se o menu contextual está ativo para o objeto e **False** em caso contrário.

#### Ver também 

[OBJECT SET CONTEXT MENU](object-set-context-menu.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1252 |
| Thread-seguro | &check; |
| Proibido no servidor ||


