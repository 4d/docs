---
id: get-menu-item-icon
title: GET MENU ITEM ICON
slug: /commands/get-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM ICON.Syntax-->**GET MENU ITEM ICON** ( *menu* ; *menuItem* ; *refIcone* {; *processo*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM ICON.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de menu de item ou -1 para o último item adicionado ao menu |
| refIcone | Text, Integer | &#8592; | Nome ou número da imagem associada com o item de menu |
| processo | Integer | &#8594;  | Número de processo |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET MENU ITEM ICON.Summary-->O comando GET MENU ITEM ICON devolve, na variável *refIcone*, a referencia do ícone associado a linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF--> Esta referência é o nome ou número da imagem na biblioteca de imagens.

Pode passar -1 em *linhaMenu* para especificar a última linha añadida a *menu*.

Em *menu*, pode passar uma referência de menu ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) ou um número de menu. Se passa uma referência de menu, o parâmetro *processo* não será necessário e se for passada é ignorada. Se passa um número de menu, o comando terá em conta o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu número no parâmetro opcional *processo*.

* Se o ícone foi especificado usando um arquivo de imagem, o comando retorna em *iconRef* o nome de rota usando o padrão **path:<filesystem path>**.
* Se o ícone foi especificado usando uma biblioteca de imagem (apenas em bancos de dados binários), o comando retorna ou o número ou o nome da imagem, dependendo do tipo de variável passado neste parâmetro. O padrão a seguir é usado para um nome: **pictlib:<name>**.  
Se não atriburi um tipo especifico para a varíavel *iconRef*, como padrão, o nome da imagem é retornado (tipo texto).

Se nenhum ícone está associado a linha de menu, o comando devolve uma imagem vazia.

#### Ver também 

[SET MENU ITEM ICON](set-menu-item-icon.md)  