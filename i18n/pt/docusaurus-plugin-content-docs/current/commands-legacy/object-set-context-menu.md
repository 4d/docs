---
id: object-set-context-menu
title: OBJECT SET CONTEXT MENU
slug: /commands/object-set-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET CONTEXT MENU.Syntax-->**OBJECT SET CONTEXT MENU** ( {* ;} *objeto* ; *menuContext* )<!-- END REF-->
<!--REF #_command_.OBJECT SET CONTEXT MENU.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou<br/>Campo ou variável (se omitido *) |
| menuContext | Boolean | &#8594;  | True = ativar o menu contextual, False = desativar o menu contextual |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT SET CONTEXT MENU.Summary-->O comando **OBJECT SET CONTEXT MENU** ativa ou desativa, para o processo atual, a associação de um menu contextual por padrão ao objeto ou aos objetos designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
A opção "Menu contextual" está disponível para as áreas de texto de tipo de entrada, as áreas web e as imagens. Se pode utilizar para associar um menu de ação estandarte em função do tipo de objeto (por exemplo, copiar/colar para os objetos texto). Para obter mais informação, consulte o manual de *Desenho*.

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro objeto é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
Passe **True** no parâmetro *menuContext* para ativar o menu contextual, e **False** para desativar.

#### Ver também 

[OBJECT Get context menu](object-get-context-menu.md)  