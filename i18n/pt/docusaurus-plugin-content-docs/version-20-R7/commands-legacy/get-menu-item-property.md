---
id: get-menu-item-property
title: GET MENU ITEM PROPERTY
slug: /commands/get-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM PROPERTY.Syntax-->**GET MENU ITEM PROPERTY** ( *menu* ; *menuItem* ; *propriedade* ; *valor* {; *processo*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM PROPERTY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado ao menu |
| propriedade | Text | &#8594;  | Tipo de propriedade |
| valor | any | &#8592; | Valor da propriedade |
| processo | Integer | &#8594;  | Número de processo |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET MENU ITEM PROPERTY.Summary-->O comandoGET MENU ITEM PROPERTY devolve, no parâmetro *valor*, o valor atual da linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF--> 

Pode passar -1 em *menuItem* para especificar o último elemento adicionado a *menu*.

Em *menu*, pode passar uma referência de menu ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) ou um número de menu. Se passa uma referência de menu, o parâmetro *processo* não é necessário e será ignorado se for passado. Se passa um número de menu, o comando considera o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu número no parâmetro opcional *processo*.

No parâmetro *propriedade*, passe a propriedade para a qual quer obter o valor. Pode utilizar uma das constantes do tema “*Propriedades de item de menu*” ou uma cadeia correspondente a uma propriedade personalizada. Para maior informação sobre as propriedades dos menus e seus valores, consulte a descrição do comando [SET MENU ITEM PROPERTY](set-menu-item-property.md)

Nota de compatibilidade: Como padrão, se o valor da variável não for digitado explicitamente, o comando não retorna um nome *Ação estandarte*. Se quiser obter um valor numérico definido no tema de constante (obsoleto) *Valores para ação padrão associada* precisa declarar a variável de valor como longint.  

#### Ver também 

[SET MENU ITEM PROPERTY](set-menu-item-property.md)  