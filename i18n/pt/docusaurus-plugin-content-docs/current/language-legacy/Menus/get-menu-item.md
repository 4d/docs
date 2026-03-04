---
id: get-menu-item
title: Get menu item
slug: /commands/get-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item.Syntax-->**Get menu item** ( *menu* : Integer, Text ; *menuItem* : Integer {; *processo* : Integer} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594; | Número de menu ou menu de referência |
| menuItem | Integer | &#8594; | Número de item de menu ou -1 para o último item adicionado |
| processo | Integer | &#8594; | Número de referência de processo |
| Resultado | Text | &#8592; | Texto do item de menu |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.Get menu item.Summary-->O comando Get menu item devolve o texto do comando de menu cujos números de menu e de comando são passados em *menu* e *menuItem*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu*. 

Se omite o parâmetro *processo*, Get menu item é aplicado a barra de menus do processo atual. Do contrário, Get menu item é aplicado à barra de menus do processo atual cujo número de referência se passa em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado. 

## Ver também 

[Get menu item key](../commands/get-menu-item-key)  
[SET MENU ITEM](../commands/set-menu-item)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 422 |
| Thread-seguro | no |
| Proibido no servidor ||


