---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* : Integer, Text ; *menuItem* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594; | Número de menu ou menu de referência |
| menuItem | Integer | &#8594; | Número de item de menu ou -1 para o último item adicionado ao menu |
| Resultado | Text | &#8592; | Parâmetro personalizado do item de menu |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 4|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.Get menu item parameter.Summary-->O comando Get menu item parameter devolve a cadeia de caracteres personalizada associada a linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF--> Esta cadeia deve ter sido definida previamente utilizando o comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER").

## Ver também 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get selected menu item parameter](../commands/get-selected-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1003 |
| Thread-seguro | no |


