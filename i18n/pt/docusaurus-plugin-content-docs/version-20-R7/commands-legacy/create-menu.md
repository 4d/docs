---
id: create-menu
title: Create menu
slug: /commands/create-menu
displayed_sidebar: docs
---

<!--REF #_command_.Create menu.Syntax-->**Create menu** {( *menu* )} : Text<!-- END REF-->
<!--REF #_command_.Create menu.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Text, Integer, Text | &#8594;  | Referência de menu ou Número ou Nome da barra de menu |
| Resultado | Text | &#8592; | Referência de menu |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Create menu.Summary-->O comando **Create menu** permite criar um novo menu em memória.<!-- END REF--> Este menu só existirá em memória e não será adicionado ao editor de menu no ambiente Desenho. Toda modificação realizada a este menu durante a sessão repercutirá imediatamente em todas as instâncias deste menu e em todos os processos do banco. 

O comando devolve um identificador único de tipo MenuRef para o novo menu.

* Se no passa o parâmetro opcional *menu*, o menu será criado vazio. Deve construí-lo e administrá-lo utilizando os comandos [RELEASE MENU](release-menu.md), [SET MENU ITEM](set-menu-item.md), etc.
* Se passa o parâmetro *menu*, o menu criado será uma cópia exata do menu fonte designado por este parâmetro. Todas as propriedades do menu fonte, incluindo os submenus associados, serão aplicadas ao novo menu. Note que uma nova referência MenuRef é criado para o menu fonte e para cada submenu associado existente.

No parâmetro *menu*, pode passar uma referência de menu válida, ou o número ou nome de uma barra de menus definida no ambiente Desenho. Neste último caso, o novo menu estará constituído pelos menus e submenus da barra de menus fonte.

**Nota:** se passar um valor inválido em *menu*, se cria um menu vazio.

Um menu criado por este comando pode ser utilizado como barra de menus utilizando o comando [SET MENU BAR](set-menu-bar.md).

Quando já não necessite o menu criado por [Create menu](create-menu.md), lembre chamar o comando [RELEASE MENU](release-menu.md) para liberar a memória que está sendo utilizada

. 

#### Exemplo 

Consulte o exemplo do comando [SET MENU BAR](set-menu-bar.md "SET MENU BAR").

#### Ver também 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[SET MENU BAR](set-menu-bar.md)  