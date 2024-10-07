---
id: get-menu-item-style
title: Get menu item style
slug: /commands/get-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item style.Syntax-->**Get menu item style** ( *menu* ; *menuItem* {; *processo*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get menu item style.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Inteiro longo, MenuRef | &#x1F852; | Número de menu ou menu de referência |
| menuItem | Inteiro longo | &#x1F852; | Número de item de menu ou -1 para o último item adicionado |
| processo | Inteiro longo | &#x1F852; | Número de referência de processo |
| Resultado | Inteiro longo | &#x1F850; | Estilo do item de menu atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get menu item style.Summary-->O comando Get menu item style devolve o estilo de fonte da linha de menu cujo número ou referência se passa em *menu* e cujo número de elemento é passado em *menuItem*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu.*

Se omite o parâmetro processo, Get menu item style é aplicado à barra de menus do processo atual. Do contrário, Get menu item style é aplicado à barra de menus do processo atual cujo número de referência é passada em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e é ignorado. 

Get menu item style devolve uma combinação (um ou uma soma) das seguintes constantes pré-definidas:

| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| Plain     | Inteiro longo | 0     |
| Bold      | Inteiro longo | 1     |
| Italic    | Inteiro longo | 2     |
| Underline | Inteiro longo | 4     |

#### Exemplo 

Para provar se um elemento de menu é mostrado em negrito, escreve:

```4d
 If((Get menu item style($vlMenu;$vlItem) & Bold)#0)
  //...
 End if
```

#### Ver também 

[SET MENU ITEM STYLE](set-menu-item-style.md)  