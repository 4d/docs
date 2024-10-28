---
id: release-menu
title: RELEASE MENU
slug: /commands/release-menu
displayed_sidebar: docs
---

<!--REF #_command_.RELEASE MENU.Syntax-->**RELEASE MENU** ( *menu* )<!-- END REF-->
<!--REF #_command_.RELEASE MENU.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Referência de menu |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.RELEASE MENU.Summary-->O comando RELEASE MENU apaga da memória o menu cuja referência se passa em *menu*.<!-- END REF-->. A regra é a seguinte: a cada [Create menu](create-menu.md) deve corresponder um [RELEASE MENU](release-menu.md). 

O comando elimina todas as instâncias de *menu* em todas as barras de menu e todos os processos. Se o menu pertence a uma barra de menu em uso, continuará funcionando mas não poderá ser modificada. Só será apagado realmente da memória quando a última barra de menus na que apareça não esteja mais em uso.

Este comando pode ser utilizado com menus usados como barras de menus.

Os submenus utilizados por *menu* não são apagados se foram criados utilizando o comando [Create menu](create-menu.md). Neste caso, devem ser eliminados individualmente (ver a regra mencionada anteriormente). Entretanto, se os submenus vêm da duplicação de um menu existente, não chame [RELEASE MENU](release-menu.md) com suas instâncias porque 4D as apagará automaticamente.

#### Exemplo 

Este exemplo mostra as diferentes formas de utilizar este comando:

```4d
 newMenu:=Create menu
 APPEND MENU ITEM(newMenu;"Test1")
 subMenu:=Create menu
 APPEND MENU ITEM(subMenu;"SubTest1")
 APPEND MENU ITEM(subMenu;"SubTest2") // Criação de elementos no submenu
 
 APPEND MENU ITEM(newMenu;"Test2";subMenu) // Associar os submenus ao menu
 
  //Neste momento, o submenu se associa ao menu e se não o necessitamos mais adiante, este é o momento adequado para apagá-lo.
  //Ao apagá-lo não se apaga imediatamente se subMenu já que ainda está sendo utilizado por newMenu. subMenu só se apaga quando é apagada newMenu.
  //Apagar o submenu neste momento lhe permite poupar memória
 RELEASE MENU(subMenu)
 
 $result1:=Dynamic pop up menu(newMenu) //Uso de menu
 copyMenu:=Create menu(newMenu) // Criação de um menu por cópia de newMenu (e duplicação de subMenu)
 RELEASE MENU(newMenu) // Já não necessitamos a newMenu.
 
 $result2:=Dynamic pop up menu(copyMenu)
 RELEASE MENU(copyMenu)
  //Não deve se preocupar por apagar os submenus de copyMenu já que não se criou diretamente utilizando Create menu
  //A regra a seguir é: cada Create menu deve ter um RELEASE MENU correspondente
```

#### Ver também 

[Create menu](create-menu.md)  