---
id: set-menu-item-style
title: SET MENU ITEM STYLE
slug: /commands/set-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM STYLE.Syntax-->**SET MENU ITEM STYLE** ( *menu* ; *menuItem* ; *itemEstilo* {; *processo*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM STYLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para último item adicionado |
| itemEstilo | Integer | &#8594;  | Novo estilo de item de menu |
| processo | Integer | &#8594;  | Número de referência de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM STYLE.Summary-->O comando SET MENU ITEM STYLE cambia o estilo da fonte da linha de menu cujo número ou referência de menu se passa em *menu* e cujo número de elemento se passa em *menuItem* de acordo ao estilo de fonte passado em *itemEstilo*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu*.

Se omite o parâmetro *processo*, SET MENU ITEM STYLE se aplica a barra de menus do processo atual. Do contrário, SET MENU ITEM STYLE se aplica a barra de menus do processo atual cujo número de referência se passa em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e se ignorará. 

No parâmetro *itemEstilo* pode definir o estilo do elemento. Passe uma combinação (um ou uma soma) das seguintes constantes predefinidas:

| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| Plain     | Inteiro longo | 0     |
| Bold      | Inteiro longo | 1     |
| Italic    | Inteiro longo | 2     |
| Underline | Inteiro longo | 4     |

  

#### Ver também 

[Get menu item style](get-menu-item-style.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 425 |
| Thread-seguro | &check; |
| Proibido no servidor ||


