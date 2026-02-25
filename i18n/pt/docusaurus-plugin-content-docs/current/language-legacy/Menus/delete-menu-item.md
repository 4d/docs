---
id: delete-menu-item
title: DELETE MENU ITEM
slug: /commands/delete-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DELETE MENU ITEM.Syntax-->**DELETE MENU ITEM** ( *menu* : Integer, Text ; *menuItem* : Integer {; *processo* : Integer} )<!-- END REF-->
<!--REF #_command_.DELETE MENU ITEM.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594; | Número de menu ou menu de referência |
| menuItem | Integer | &#8594; | Número de item de menu ou -1 para o último item adicionado |
| processo | Integer | &#8594; | Número de referência do processo |
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

<!--REF #_command_.DELETE MENU ITEM.Summary-->O comando DELETE MENU ITEM elimina a linha de menu cujo número ou referência de menu e número de elemento você passou em *menu* e *menuItem*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu.*

Se a linha de menu especificada *menu* e *menuItem* é um menu administrado por referência e criado, por exemplo, utilizando o comando [Create menu](create-menu.md "Create menu"), DELETE MENU ITEM apagará unicamente a instância de *menuItem* em *menu.* O submenu referenciado por *menuItem* continuará existindo em memória. Deve utilizar o comando [RELEASE MENU](release-menu.md "RELEASE MENU") para apagar definitivamente um menu que é administrado por referência.   
  
Este comando também funciona com uma barra de menus criada com o comando [Create menu](create-menu.md "Create menu") e instalada com o comando [SET MENU BAR](set-menu-bar.md "SET MENU BAR").

Se omite o parâmetro *processo*, DELETE MENU ITEM é aplicado a barra de menus do processo atual. Do contrario, DELETE MENU ITEM é aplicado a barra de menus do processo atual cujo número de referencia é passado em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado.

**Nota:** por consistência na interface do usuário, não se conserva um menu que não tenha linhas.

## Ver também 

[APPEND MENU ITEM](../commands/append-menu-item)  
[INSERT MENU ITEM](../commands/insert-menu-item)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 413 |
| Thread-seguro | no |
| Proibido no servidor ||


