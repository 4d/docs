---
id: insert-menu-item
title: INSERT MENU ITEM
slug: /commands/insert-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.INSERT MENU ITEM.Syntax-->**INSERT MENU ITEM** ( *menu* ; *depoisItem* ; *textoElem* {; *subMenu* {; *processo*}}{; *} )<!-- END REF-->
<!--REF #_command_.INSERT MENU ITEM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Número de menu ou menu de referência |
| depoisItem | Integer | &#8594;  | Número de item de menu |
| textoElem | Text | &#8594;  | Texto para o item de menu a ser inserido |
| subMenu | Text | &#8594;  | Referência do submenu associado com o item |
| processo | Integer | &#8594;  | Número de referência de processo |
| * | Operador | &#8594;  | Se passado: considerar metacaracteres como caracteres comuns |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.INSERT MENU ITEM.Summary-->O comandoINSERT MENU ITEM insere novas linhas no menu cujo número ou referência é passada em *menu* e as localiza depois da linha de menu cujo número se passa em *depoisItem*.<!-- END REF-->

Se omite o parâmetro *processo*, INSERT MENU ITEM se aplica a barra de menus do processo atual. Do contrario, INSERT MENU ITEM é aplicada a barra de menus do processo atual cujo número de referência se passa em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e é ignorada.

Se não passa o parâmetro \* *, INSERT MENU ITEM* lhe permite inserir um ou vários comandos de menu em uma só chamada.

INSERT MENU ITEM funciona como [APPEND MENU ITEM](append-menu-item.md), exceto que lhe permite inserir os comandos em qualquer parte do menu, enquanto que [APPEND MENU ITEM](append-menu-item.md) sempre os adiciona ao final do menu.

Consulte a descrição do comando [APPEND MENU ITEM](append-menu-item.md) para mais informação sobre a definição dos comandos de menus passados em *textoElem*.

Nota: a constante ak standard action title é compatível com o parâmetro itemText (4D v16 R3 e superior).

O parâmetro opcional *submenu* permite designar um menu como linha inserida e definir um submenu hierárquico. Deve passar este parâmetro uma referência de menu (cadeia de tipo MenuRef) especificando um menu criado, por exemplo, utilizando o comando de menu [Create menu](create-menu.md). Se o comando adiciona mais de uma linha de menu, o submenu é associado com a primeira linha. 

**Importante:** as novas linhas não tem métodos ou ações associados. Devem ser associados utilizando os comandos [SET MENU ITEM PROPERTY](set-menu-item-property.md) ou [SET MENU ITEM METHOD](set-menu-item-method.md), ou os elementos também podem ser administrados desde um método de formulário utilizando o comando [Menu selected](menu-selected.md).

#### Exemplo 

O exemplo a seguir cria um menu que consiste em dois comandos os quais atribuem um método:

```4d
 MenuRef:=Criar menu
 APPEND MENU ITEM(MenuRef;"Caracteres")
 SET MENU ITEM METHOD(MenuRef;1;"CarMgmtDial")
 INSERT MENU ITEM(MenuRef;1;"Paragrafos")
 SET MENU ITEM METHOD(MenuRef;2;"ParaMgmtDial")
```

#### Ver também 

[APPEND MENU ITEM](append-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 412 |
| Thread-seguro | &check; |
| Proibido no servidor ||


