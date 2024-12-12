---
id: menu-selected
title: Menu selected
slug: /commands/menu-selected
displayed_sidebar: docs
---

<!--REF #_command_.Menu selected.Syntax-->**Menu selected** {( *subMenu* )} : Integer<!-- END REF-->
<!--REF #_command_.Menu selected.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| subMenu | Text | &#8592; | Referência de menu contendo o item selecionado |
| Resultado | Integer | &#8592; | Comando de menu selecionado "Palavra Superior": número de menu Palavra inferior: Número de comando de menu |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Menu selected.Summary-->Menu selected é utilizado só quando são mostrados formulários.<!-- END REF--> Esta função detecta o comando de menu escolhido no menu no caso de um submenu hierárquico, retorna a referência do submenu. 

**Dica:** sempre que seja possível, utilize métodos associados com comandos de menu em uma barra associada (com um número de barra negativo) ao invés de utilizar Menu selected. As barras de menus associadas são mais fáceis de administrar, já que não é necessário provar sua seleção. Entretanto, se são utilizados os comandos [APPEND MENU ITEM](append-menu-item.md "APPEND MENU ITEM") ou [INSERT MENU ITEM](insert-menu-item.md "INSERT MENU ITEM"), deve utilizar Menu selected porque as linhas de menus adicionadas por esses comandos não têm métodos associados. 

O comando Menu selected pode ser utilizado para trabalhar com submenus hierárquicos. Quando se seleciona uma linha de um menu hierárquico mais além do primeiro nível, o comando devolve, no parâmetro opcional submenu, a referência (tipo [MenuRef](# "Unique ID (16-character alphanumeric) of a menu"), cadeia de 16 caracteres) do submenu ao qual pertence a linha selecionada. Se o comando de menu não conter um submenu hierárquico, este parâmetro recebe uma cadeia vazia. 

Menu selected devolve o número do menu selecionado, um inteiro longo. Para encontrar o número de menu, divida Menu selected por 65,536 e converta o resultado em um inteiro. Para obter o número do comando de menu, calcule o módulo de Menu selected com o coeficiente 65,536\. Utilize as seguintes fórmulas para calcular o número de menu e do comando de menu:

```4d
 Menu:=Menu selected\ 65536
 comando de menu:=Menu selected% 65536
```

Da mesma forma pode extrair estes valores utilizando os Operadores bitwise como no exemplo a seguir:

```4d
 Menu:=(Menu selected & 0xFFFF0000)>>16
 comando de menu:=Menu selected & 0xFFFF
```

Se nenhum comando de menu estiver selecionado, Menu selected devolve 0.

[ ](http://3.bp.blogspot.com/%5F6kVfdO0K8wI/TCLapBtKciI/AAAAAAAAAZs/hwb4zRkSFMs/s1600/hand.gif)

#### Exemplo 

O método a seguir de formulário utiliza Menu selected para proporcionar os argumentos menu e linha de menu a [SET MENU ITEM MARK](set-menu-item-mark.md "SET MENU ITEM MARK"): 

```4d
 Case of
    :(FORM Event=On Menu Selected)
       C_STRING(16;$MenuRefIncludingItem)
       var $ref;$MenuNum;$MenuItemNum : Integer
       $ref:=Menu selected($MenuRefIncludingItem)
       $MenuNum:=$ref\65536
       $MenuItemNum:=$ref%65536
       SET MENU ITEM MARK(MenuRefIncludingItem;$MenuItemNum;Char(18))
 End case
```

**Nota:** o evento de formulário On Menu Selected não é ativado se nenhuma linha estiver selecionada, *$MenuRefIncludingItem* sempre é dado e *$MenuNum* vale 0 se o menu não é um dos menus da barra.

#### Ver também 

*Gestão de Menus*  