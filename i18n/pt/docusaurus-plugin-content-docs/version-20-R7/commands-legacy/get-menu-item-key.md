---
id: get-menu-item-key
title: Get menu item key
slug: /commands/get-menu-item-key
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item key.Syntax-->**Get menu item key** ( *menu* ; *menuItem* {; *processo*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item key.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de Menu item ou -1 para o último item adicionado |
| processo | Integer | &#8594;  | Número de referência de processo |
| Resultado | Integer | &#8592; | Código de caractere da tecla de atalho padrão associada com o item de menu |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get menu item key.Summary-->O comando Get menu item key devolve o código do atalho **Ctrl** (Windows) ou **Comando** (Mac OS) para o comando de menu cujo número ou referência de menu se passa em *menu* e cujo número de comando se passa em *menuItem*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu.*

Se omite o parâmetro *processo*, Get menu item key é aplicado a barra de menus do processo atual. Do contrario, Get menu item key é aplicado a barra de menus do processo atual cujo número de referência é passado em *processo*. 

**Nota:** é passado um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, ou parâmetro *processo* é inútil e será ignorado. 

Se o comando de menu não tiver nenhum atalho associado ou se o parâmetro *menuItem* designa um submenu hierárquico, Get menu item key devolve *0* (zero).

#### Exemplo 

Para obter um atalho associado com um comando de menu, é útil implementar uma estrutura de programação do seguinte tipo: 

```4d
 If(Get menu item key(mimenu;1)#0)
    $modificadores:=Get menu item modifiers(mymenu;1)
    Case of
       :($modificadores=Option key mask)
          ...
       :($modificadores=Shift key mask)
          ...
       :($modificadores=Option key mask+Shift key mask)
          ...
    End caseEnd if
```

#### Ver também 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 424 |
| Thread-seguro | &check; |
| Proibido no servidor ||


