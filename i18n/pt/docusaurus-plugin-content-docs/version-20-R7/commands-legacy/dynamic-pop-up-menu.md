---
id: dynamic-pop-up-menu
title: Dynamic pop up menu
slug: /commands/dynamic-pop-up-menu
displayed_sidebar: docs
---

<!--REF #_command_.Dynamic pop up menu.Syntax-->**Dynamic pop up menu** ( *menu* {; *porpadrao* {; *coordX* ; *coordY*}} )  : Text<!-- END REF-->
<!--REF #_command_.Dynamic pop up menu.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Referência de menu |
| porpadrao | Text | &#8594;  | Parâmetro de itens selecionado por padrão |
| coordX | Integer | &#8594;  | Coordenada X do canto esquerdo superior |
| coordY | Integer | &#8594;  | Coordenada Y do canto esquerdo superior |
| Resultado | Text | &#8592; | Parâmetro do menu de item selecionado |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Dynamic pop up menu.Summary-->O comando Dynamic pop up menu faz aparecer um menu suspenso hierárquico na localização atual do mouse ou na localização definida pelos parâmetros opcionais *Coordx* e *Coordy*.<!-- END REF-->

O menu hierárquico utilizado deve ter sido criado com o comando [Create menu](create-menu.md). A referência devolvida por [Create menu](create-menu.md) deve ser passada no parâmetro *menu*.

**Nota:** o comando [Pop up menu](pop-up-menu.md) (tema “Interface de usuário”) pode ser utilizada para criar menus pop-up menus baseados em texto.

De acordo com as regras padrão da interface, este comando geralmente deve ser chamado em resposta a um clique direito, ou quando o botão é mantido pressionado por um certo período de tempo (menu contextual por exemplo).

O parâmetro opcional *porpadrao* pode ser utilizado para definir um elemento do menu suspenso selecionado automaticamente quando aparece o menu. Neste parâmetro, passe uma cadeia personalizada associada a referência do elemento de menu. Esta cadeia deve ter sido definida anteriormente com a ajuda do comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md). Se não passar este parâmetro, o primeiro elemento do menu será selecionado automaticamente.

**Nota:** Por padrão apenas um item de menu de nível superior pode ser selecionado.

Os parâmetros opcionais *CoordX* e *CoordY* podem ser utilizados para especificar a localização do menu suspenso a mostrar. Nos parâmetros *CoordX* e *CoordY*, passe as coordenadas horizontal e vertical respectivamente, da esquina superior esquerda do menu. Estas coordenadas devem ser expressas em píxels no sistema de coordenadas local do formulário atual. Estes dois parâmetros devem ser passados juntos; se é passado só um deles, o outro será ignorado.

Se quer mostrar um menu suspenso associado a um botão 3D, não passe os parâmetros opcionais *CoordX* e *CoordY*. Neste caso, 4D calcula automaticamente a localização do menu relativo ao botão de acordo aos padrões de interface da plataforma atual. (the 3D button must have the "With pop-up menu/Linked" or "With pop-up menu/Separated" property).

Se um elemento de menu for selecionado, o comando devolve sua cadeia de caracteres personalizada associada (tal como foi definido utilizando o comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md)). Do contrario, o comando devolve uma cadeia vazia.

**A partir de 4D v16 R3:** Se uma ação padrão for associada a um item menu, é levado em consideração pelo comando **Dynamic pop up menu** em vários níveis:

* se uma ação padrão associada não for ativada (ou seja, não puder ser chamada) no contexto do menu pop up, o item é automaticamente escondido. Pode saber se a ação foi ativada usando o comando [Action info](action-info.md).
* Itens com uma ação toggle associada são automaticamente marcados, desmarcados ou "mixed" dependendo da seleção.
* Se o título da ação foi estabelecido ao item usando a constante ak standard action title, o nome localizado é exibido no menu.
* Quando o item for selecionado, a ação padrão associada é chamada (execução é assíncrona).

#### Exemplo 

Este código permite criar um menu emergente dinâmico hierárquico baseado em ações padrão:

```4d
 var $refMainContextMenu;$refMenuEdit : Text
 $refMainContextMenu:=Create menu
 APPEND MENU ITEM($refMainContextMenu;"-")
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak select all)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak clear)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak copy)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak cut)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak paste)
 APPEND MENU ITEM($refMainContextMenu;"-")
  //sub menu text edit
 $refMenuEdit:=Create menu
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font bold)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("B"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font italic)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("I"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font linethrough)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("L"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font underline)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("U"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font show dialog)
 APPEND MENU ITEM($refMainContextMenu;"Edit";$refMenuEdit)
 
 paramRef:=Dynamic pop up menu($refMainContextMenu)
```

#### Ver também 

[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[Pop up menu](pop-up-menu.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  
[SET MENU ITEM PROPERTY](set-menu-item-property.md)  