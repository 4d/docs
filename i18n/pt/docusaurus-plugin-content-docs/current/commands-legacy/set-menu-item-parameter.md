---
id: set-menu-item-parameter
title: SET MENU ITEM PARAMETER
slug: /commands/set-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PARAMETER.Syntax-->**SET MENU ITEM PARAMETER** ( *menu* ; *menuItem* ; *param* )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PARAMETER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado ao menu |
| param | Text | &#8594;  | String a ser associado como parâmetro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM PARAMETER.Summary-->O comando SET MENU ITEM PARAMETER permite associar uma cadeia de caracteres personalizada com uma linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF--> 

Este parâmetro é utilizado principalmente pelo comando [Dynamic pop up menu](dynamic-pop-up-menu.md "Dynamic pop up menu").

#### Exemplo 

Este código oferece um menu que inclui os nomes das janelas abertas e permite recuperar o número da janelas escolhida:

```4d
 WINDOW LIST($alWindow)
 $tMenuRef:=Create menu
 For($i;1;Size of array($alWindow))
    APPEND MENU ITEM($tMenuRef;Get window title($alWindow{$i})) // Título da linha do menu
    SET MENU ITEM PARAMETER($tMenuRef;-1;String($alWindow{$i})) // Valor devolvido pela linha do menu
 End for
 $tWindowRef:=Dynamic pop up menu($tMenuRef)
 RELEASE MENU($tMenuRef)
```

#### Ver também 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1004 |
| Thread-seguro | &check; |
| Proibido no servidor ||


