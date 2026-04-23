---
id: append-menu-item
title: APPEND MENU ITEM
slug: /commands/append-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.APPEND MENU ITEM.Syntax-->**APPEND MENU ITEM** ( *menu* : Integer ; *itemTexto* {; *subMenu* : Text {; *processo* : Integer {; *}}} )<!-- END REF-->
<!--REF #_command_.APPEND MENU ITEM.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer | &#8594; | Número de menu ou menu de referência |
| itemText | Text | &#8594; | Texto para os novos itens de menu |
| subMenu | Text | &#8594; | Referência do submenu associado com o item |
| processo | Integer | &#8594; | Número de referência de processo |
| * | Operador | &#8594; | Se passado: considerar metacaracteres como caracteres comuns |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16 R3|Modificado|
|11 SQL Release 4|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.APPEND MENU ITEM.Summary-->O comando APPEND MENU ITEM  adiciona nova linhas de menu ao menu cujo número ou referência se passa em *menu*.<!-- END REF-->

Se omite o parâmetro *processo*, APPEND MENU ITEM  se aplica a barra de menus do processo atual. Do contrário, APPEND MENU ITEM é aplicado a barra de menus do processo atual cujo número de referência se passa em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado.

Se não passar o parâmetro \*, APPEND MENU ITEM  lhe permite adicionar uma ou várias linhas de menu em uma só chamada.

As linhas a adicionar são definidas com o parâmetro *itemText* da seguinte maneira:

* Separe cada elemento da seguinte com um ponto e vírgula (*;*). Por exemplo,  
*"ItemText1;ItemText2;ItemText3".*
* Para desativar uma linha: Coloque um parênteses aberto (*(*) no texto da linha.
* Para definir uma linha de separação: Passe "-" ou "(-" como texto da linha.
* Para especificar um estilo de fonte para uma linha: no texto da linha, ponha um sinal menor que (*<*) seguido por um dos seguintes caracteres:

| <B | Negrito    |
| -- | ---------- |
| <I | Cursiva    |
| <U | Sublinhado |

* Para adicionar uma marca de seleção a uma linha: no texto da linha, ponha um sinal de exclamação (*!*) seguido pelo caractere que deseja como marca de seleção. Em Macintosh, o caractere é mostrado; em Windows, é mostrada uma marca de seleção sem importar que caractere passe.
* Para adicionar um ícone a uma linha: no texto da linha, ponha um acento circunflejo (^) seguido por um carácter cujo código mais 208 é o número do recurso do ícone Mac OS.
* Para adicionar um atalho a uma linha: no texto da linha, ponha uma barra obliqua (*/*) seguida pelo caractere de atalho para o elemento.
* (A partir de 4D v16 R3) se o elemento estiver associado com uma ação padrão, passe a constante ak standard action title em itemText para utilizar automaticamente o nome da ação localizada e a informação de contexto (se houver), por exemplo "Undo <previous action>".

**Nota:** utilize menus que tenham um número razoável de linhas. Por exemplo, se quer mostrar mais de 50 elementos, considere utilizar uma área de rolagem em um formulário em lugar de um menu.

Se passa o parâmetro *\**, os caracteres "especiais" (*; ( !*...) incluídos no texto do elemento serão considerados como caracteres padrão e não como meta caracteres. Isto permite criar elementos de menu tais como "Copiar (especial)..." ou "Pesquisar/Substituir...". Note que quando se passa o parâmetro *\**, não pode criar vários elementos em uma só chamada já que o caractere ";" é considerado como um caracter padrão.

**Nota:** os comandos [GET MENU ITEMS](../commands/get-menu-items) e [Get menu item](../commands/get-menu-item) devolverão ou não os meta caracteres no texto de um elemento de menu dependendo de como foi criado: se foi criado com a opção *\**, os meta caracteres serão devolvidos como caracteres padrão.  
  
O parâmetro opcional *subMenu* permite designar um menu como elemento adicionado e portanto definir um submenu hierárquico. Deve passar neste parâmetro uma referência de menu (cadeia de tipo [MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) especificando um menu criado por exemplo, utilizando o comando [Create menu](../commands/create-menu). Se o comando adiciona mais de um elemento de menu, o submenu é associado a primeira linha. 

**Importante:** as novas linhas não têm métodos ou ações associados. Estes devem ser associados com os elementos utilizando os comandos [SET MENU ITEM PROPERTY](../commands/set-menu-item-property) ou [SET MENU ITEM METHOD](../commands/set-menu-item-method), ou os elementos também podem ser administradas por um método de formulário utilizando o comando [Menu selected](../commands/menu-selected).

## Exemplo 

Este exemplo adiciona os nomes das fontes disponíveis num menu Fontes, o qual neste exemplo é o sexto menu da barra de menus atual:

```4d
  // No método base On Startup
  // A lista de fontes é carregada e o texto da linha de menu é construída
 FONT LIST(◊asFonteDisp)
 ◊atFonteMenuItens:=""
 For($vlFont;1;Size of array(◊asFonteDisp))
    ◊atFonteMenuItens:=◊atFonteMenuItens+";"+◊asFonteDisp{$vlFont}
 End for
```

Então, em todo método de formulário ou de projeto, pode escrever:

```4d
 APPEND MENU ITEM(6;◊atFonteMenuItens)
```

## Ver também 

[DELETE MENU ITEM](../commands/delete-menu-item)  
[INSERT MENU ITEM](../commands/insert-menu-item)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 411 |
| Thread-seguro | no |
| Proibido no servidor ||


