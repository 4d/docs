---
id: set-menu-item-method
title: SET MENU ITEM METHOD
slug: /commands/set-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM METHOD.Syntax-->**SET MENU ITEM METHOD** ( *menu* ; *menuItem* ; *nomeMetodo* {; *processo*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM METHOD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado ao menu |
| nomeMetodo | Text | &#8594;  | Nome do método |
| processo | Integer | &#8594;  | Número de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM METHOD.Summary-->O comando SET MENU ITEM METHOD pode ser utilizada para modificar o método de projeto 4D associado à linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF--> 

Pode passar -1 em *menuItem* para especificar a última linha a adicionar a *menu*.

Em *menu*, pode passar uma referência de menu ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) ou um número de menu. Se passa uma referência de menu, o comando se aplicará a todas as instâncias do menu em todos os processos Neste caso, se for passado, o parâmetro *processo* é ignorado. Se passa um número de menu, o comando é aplicado ao menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu número no parâmetro opcional *processo*.

Em *nomeMetodo*, passe o nome do método 4D como cadeia de caracteres (expressão).

**Nota:** se a linha de menu corresponde ao título de um submenu hierárquico, o método não será chamado quando a linha de menu seja selecionada.

#### Exemplo 

Consulte o exemplo do comando [SET MENU BAR](set-menu-bar.md "SET MENU BAR").

#### Ver também 

[Get menu item method](get-menu-item-method.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 982 |
| Thread-seguro | &check; |
| Proibido no servidor ||


