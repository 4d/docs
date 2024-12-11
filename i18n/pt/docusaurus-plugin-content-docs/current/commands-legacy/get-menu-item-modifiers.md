---
id: get-menu-item-modifiers
title: Get menu item modifiers
slug: /commands/get-menu-item-modifiers
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item modifiers.Syntax-->**Get menu item modifiers** ( *menu* ; *menuItem* {; *processo*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item modifiers.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de referência ou Número de Menu |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado ao menu |
| processo | Integer | &#8594;  | Número de processo |
| Resultado | Integer | &#8592; | Chave de modificação associada com o item de menu |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get menu item modifiers.Summary-->O comando Get menu item modifiers devolve os modificadores adicionais associados aos atalhos de teclado padrão da linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF-->

O atalho padrão está composto pela tecla **Comando** (Mac OS) ou **Ctrl** (Windows) e de uma tecla personalizada. O atalho padrão é administrado utilizando os comandos [SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md "SET MENU ITEM SHORTCUT") e [Get menu item key](get-menu-item-key.md "Get menu item key").

Os modificadores adicionais são a tecla **Shift** e a tecla Opção (Mac OS) /Alt (Windows). Estes modificadores só podem ser utilizados quando um atalho padrão foi definido antecipadamente.

O valor do número devolvido pelo comando corresponde ao código das teclas de modificação adicionais. Os códigos das teclas são os seguintes:

* **Shift** \= 512
* **Opção** (Mac OS) ou **Alt** (Windows) = 2048

Se são utilizadas ambas teclas, seus valores são combinadas.

**Nota:** pode avaliar o valor devolvido utilizando as constantes Shift key mask e Option key mask do tema “*Eventos (Modificadores)*”.

Se a linha de menu não tem uma tecla de modificação associada, o comando devolve 0.

Pode passar -1 em *menuItem* com o fim de especificar o último elemento adicionado a *menu*.

Em *menu*, pode passar uma referência de menu ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) ou um número.

Se passa uma referência de menu, o parâmetro *processo* é inútil e será ignorado se for passado.

Se passa um número de menu, o comando tomará o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu número no parâmetro opcional *processo*.

#### Exemplo 

Consulte o exemplo do comando [Get menu item key](get-menu-item-key.md "Get menu item key"). 

#### Ver também 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 980 |
| Thread-seguro | &check; |
| Proibido no servidor ||


