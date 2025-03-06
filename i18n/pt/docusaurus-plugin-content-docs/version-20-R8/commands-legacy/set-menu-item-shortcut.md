---
id: set-menu-item-shortcut
title: SET MENU ITEM SHORTCUT
slug: /commands/set-menu-item-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM SHORTCUT.Syntax-->**SET MENU ITEM SHORTCUT** ( *menu* ; *menuItem* ; *itemKey* ; *modificadores* {; *processo*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM SHORTCUT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado |
| itemKey | Text, Integer | &#8594;  | Letra de atalho do teclado ou código do Caractere do atalho de teclado (sintaxe antiga) |
| modificadores | Integer | &#8594;  | Modificador(es) para associar com atalho (ignorado se código de tecla for passado) |
| processo | Integer | &#8594;  | Número de referência de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM SHORTCUT.Summary-->O comando  SET MENU ITEM SHORTCUT  modifica o atalho Ctrl (Windows) ou comando (Macintosh) para o comando de menu cujos números de menu e de elemento são passados em *menu* e *menuItem,* pelo caracter cujo caractere de código ou texto se passa em *itemKey*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado ao menu. Esta tecla se combinará automaticamente com a tecla **Ctrl** (Windows) ou **Comando** (Macintosh) para definir o novo atalho de teclado.

Pode passar diretamente o nome da tecla como texto (uma letra) no parâmetro *itemKey*, por exemplo "U" para especificar o atalho **Ctrl+U** (Windows) ou **Comando+U** (Mac OS). Quando utilize esta sintaxe, também pode passar o parâmetro opcional modificadores para associar os modificadores adicionais ao atalho. Desta forma pode definir os atalhos de tipo **Ctrl+Alt+Shift+Z** (Windows) ou **Cmd+Opção+Shift+Z** (Mac OS).

Nota: Pode designar uma tecla F passando "\[Fx\]" ao itemChave, por exemplo "\[F4\]". Nesse caso, o padrão é nenhum modificador ser adicionado.

Em modificadores, pode passar modificadores adicionais ao atalho, tais como a tecla Shift. Dessa forma, pode definir atalhos como Ctrl+Alt+Shift+Z (Windows) ou Cmd+Option+Shift+Z (macOS). Passe 0 se não quiser adicionar modificadores. As constantes abaixo estão disponíveis

Para fazer isto, passe em modificadores os seguintes valores:

* Command key mask para a tecla **Comando** (Mac OS) ou **Ctrl** (Windows)
* Shift key mask para a tecla **Shift**
* Option key mask para a tecla **Opção** (Mac OS) ou **Alt** (Windows)

Para estabelecer um atalho para vários modificadores, apenas combine as constantes acima.

Se omitir o parâmetro processo, SET MENU ITEM SHORTCUT se aplica ao processo atual. Senão, o comando se aplica a barra de menu para o processo cujo número de referência for passado no processo.

**Nota**: Se passar um MenuRef em menu, o parâmetro de processo não serve nenhum propósito e é ignorado.

##### Compatibilidade 

Por razões de compatibilidade, o comando também aceita o código de caractere no parâmetro *itemKey* (sintaxe antiga). Nesse caso, o atalho automaticamente inclui as teclas **Ctrl** (Windows) ou **Cmd** (macOS) e os parâmetros *modificadores* não é levado em consideração. 

Se passar 0 (zero) em *itemKey*, qualquer atalho é removido do item menu.

#### Exemplo 1 

Definição do atalho Ctrl+Shift+U (Windows) e Cmd+Shift+U (Mac OS) para a linha "Sublinhado": 

```4d
 SET MENU ITEM(MenuRef;1;"Sublinhado")
 SET MENU ITEM SHORTCUT(MenuRef;1;"U";Shift key mask)
```

#### Exemplo 2 

Definição do atalho Ctrl+R (Windows) e Cmd+R (Mac OS) para o elemento de menu "Reiniciar":

```4d
 INSERT MENU ITEM(FileMenu;-1;"Reiniciar")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"R";Command key mask)
```

#### Exemplo 3 

Definição do atalho\\shortcut para o item de menu "Close:

```4d
 INSERT MENU ITEM(FileMenu;-1;"Close")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"[F4]";0)
```

#### Ver também 

[Get menu item key](get-menu-item-key.md)  
[Get menu item modifiers](get-menu-item-modifiers.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 423 |
| Thread-seguro | &cross; |
| Proibido no servidor ||


