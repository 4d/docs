---
id: listbox-get-hierarchy
title: LISTBOX GET HIERARCHY
slug: /commands/listbox-get-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET HIERARCHY.Syntax-->**LISTBOX GET HIERARCHY** ( {* ;} *objeto* ; *hierárquico* {; *hierarquia*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET HIERARCHY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nom de objeto (se * é especificado) ou Variável (se * for omitido) |
| hierárquico | Boolean | &#8592; | True = list box hierárquico False = list box não hierárquico |
| hierarquia | Pointer array | &#8592; | Array de ponteiros |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX GET HIERARCHY.Summary-->O comando LISTBOX GET HIERARCHY permite buscar as propriedades hierárquicas do objeto list box designado pelos parámetros *objeto* e *\** .<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* es um nome de objeto (cadena). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referência de variável ao invés de uma string.   
  
O parâmetro booleano hi*erarquico* indica se o listbox está ou não em modo hierárquico:

* Se o parâmetro devolve True, o list box está em modo hierárquico,
* Se o parâmetro devolve False, o list box se mostra em modo não hierárquico (modo de array padrão).

Se o list box está em modo hierárquico, o comando preenche o array *hierarquia* com os ponteiros aos arrays do list box utilizado para definir a hierarquia.

**Nota**: se o list box está em modo não hierárquico, o comando devolve, no primeiro elemento do array *hierarquia*, um ponteiro ao array da primeira coluna do listbox.

#### Ver também 

[LISTBOX SET HIERARCHY](listbox-set-hierarchy.md)  