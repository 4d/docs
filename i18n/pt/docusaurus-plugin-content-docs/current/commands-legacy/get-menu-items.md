---
id: get-menu-items
title: GET MENU ITEMS
slug: /commands/get-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEMS.Syntax-->**GET MENU ITEMS** ( *menu* ; *arrayTitMenus* ; *arrayRefMenus* )<!-- END REF-->
<!--REF #_command_.GET MENU ITEMS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &rarr; | Número de menu ou menu de referência |
| arrayTitMenus | Text array | &larr; | Array de títulos de menu |
| arrayRefMenus | Text array | &larr; | Array de referências de menu |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET MENU ITEMS.Summary-->O comando GET MENU ITEMS devolve, nos arrays *arrayTitMenus* e *arraysRefMenus*, os títulos e identificadores de todas as linhas de menu ou da barra de menus designada pelo parâmetro *menu*.<!-- END REF--> 

No parâmetro *menu*, pode passar uma referência de menu (MenuRef), um número de barra de menus ou uma referência de barra de menu obtida utilizando o comando [Get menu bar reference](get-menu-bar-reference.md "Get menu bar reference").

Se nenhuma referência de menu está associada a um elemento, uma string vazia é retornada no elemento de array correspondente.

#### Exemplo 

Imagine que queira conhecer o conteúdo da barra de menu do processo atual: 

```4d
 ARRAY STRING(32;arrayTitMenus;0)
 ARRAY STRING(16;arraysRefMenus;0)
 RefBarMenu:=Get menu bar reference(Frontmost process)
 GET MENU ITEMS(RefBarMenu;arrayTitMenus;arraysRefMenus)
```
