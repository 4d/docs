---
id: listbox-set-hierarchy
title: LISTBOX SET HIERARCHY
slug: /commands/listbox-set-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HIERARCHY.Syntax-->**LISTBOX SET HIERARCHY** ( {* ;} *objeto* ; *hierárquico* {; *hierarquia*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HIERARCHY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string) se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou variável (se * for omitido) |
| hierárquico | Boolean | &#8594;  | True = list box hierárquico False = list box não hierárquico |
| hierarquia | Pointer array | &#8594;  | Array dos ponteiros |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SET HIERARCHY.Summary-->O comando LISTBOX SET HIERARCHY permite configurar o objeto list box designado pelos parâmetros objeto e *\** em modo hierárquico ou não hierárquico.<!-- END REF-->   
  
**Nota**: este comando só funciona com os list box baseados em arrays. Quando este comando é utilizado com um list box baseado nas seleções, não faz nada.  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto é* um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referência de variável ao invés de uma string.   
  
O parâmetro booleano hi*erarquico* lhe permite especificar o modo do list box:  
  
 \* Se passa True, o list box é mostrada em modo hierárquico,  
 \* Se passa False, o list box é mostrada em modo não hierárquico (modo array padrão).  
  
Quando se passa um list box em modo hierárquico, certas propriedades se restringem automaticamente. Para obter mais informação, consulte a seção .   
  
O parâmetro *hierarquia* é utilizada para designar os arrays do list box a utilizar para a construção da hierarquia (ver exemplo).   
Se mostra o list box em modo hierárquico e omite este parâmetro:  
  
* Se o list box já está em modo hierárquico, o comando não faz nada.
* Se o list box está em modo não hierárquico e nunca tenha sido declarado hierárquico, o primeiro array é utilizado como a hierarquia por padrão.
* Se o list box está em modo não hierárquico, mas previamente foi declarado hierárquico, a última hierarquia é reestabecida.

#### Exemplo 

Definição dos arrays aPais, aRegião e aCidade como hierarquia de um list box:

```4d
 ARRAY POINTER($ArrHierarch;3)
 $ArrHierarch{1}:=->aPais //Primeiro nível de quebra
 $ArrHierarch{2}:=->aRegião //Segundo nível de quebra
 $ArrHierarch{3}:=->aCidade //Terceiro nível de quebra
 LISTBOX SET HIERARCHY(*;"mylistbox";True;$ArrHierarch)
```

#### Ver também 

[LISTBOX GET HIERARCHY](listbox-get-hierarchy.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1098 |
| Thread-seguro | &cross; |


