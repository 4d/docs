---
id: get-menu-bar-reference
title: Get menu bar reference
slug: /commands/get-menu-bar-reference
displayed_sidebar: docs
---

<!--REF #_command_.Get menu bar reference.Syntax-->**Get menu bar reference** {( *processo* )} : Text<!-- END REF-->
<!--REF #_command_.Get menu bar reference.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de referência do processo |
| Resultado | Text | &#8592; | Referência de menu |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get menu bar reference.Summary-->O comando **Get menu bar reference** devolve a identificação única da barra de menus atual ou da barra de menus de um processo específico.<!-- END REF-->

Se a barra de menus foi criada pelo comando [Create menu](create-menu.md), esta identificação corresponde a referência única do menu criado. Do contrário, o comando devolve uma identificação interna específica. Em todos os casos, esta identificação, MenuRef pode ser utilizada para referenciar a barra de menus para todos os outros comandos do tema.

(\*) Este ID específico é temporário e deixa de ser válido logo que se chame a outra barra de menu com [SET MENU BAR](set-menu-bar.md). Se quiser conservar a referência de um menu criado no editor de menu, deve copiá-lo na memória utilizando [Create menu](create-menu.md). Por exemplo:  

```4d
 $vEditorRef:=Get menu bar reference(Frontmost process) //menu criado no editor de barras de menu
 $vMenuRef:=Create menu($vEditorRef) //copia o menu
 SET MENU BAR(2) //instala outra barra de menú
 ... // executar código
 SET MENU BAR($vMenuRef) //regressa à barra de menu inicial
```

O parâmetro *processo* pode ser utilizado para designar o processo do que quer obter a identificação da barra de menus atual. Se omite este parâmetro, o comando devolve a identificação da barra de menus do processo atual..i

#### Exemplo 

Consulte o exemplo do comando [GET MENU ITEMS](get-menu-items.md "GET MENU ITEMS").

#### Ver também 

[SET MENU BAR](set-menu-bar.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 979 |
| Thread-seguro | &check; |
| Proibido no servidor ||


