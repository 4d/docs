---
id: get-menu-bar-reference
title: Get menu bar reference
slug: /commands/get-menu-bar-reference
displayed_sidebar: docs
---

<!--REF #_command_.Get menu bar reference.Syntax-->**Get menu bar reference** {( *proceso* )} : Text<!-- END REF-->
<!--REF #_command_.Get menu bar reference.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de referencia del proceso |
| Resultado | Text | &#8592; | Identificador de la barra de menús |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu bar reference.Summary-->El comando **Get menu bar reference** devuelve la identificación única de la barra de menús actual o de la barra de menús de un proceso específico.<!-- END REF-->

Si la barra de menús fue creada por el comando [Create menu](create-menu.md), este identificación corresponde a la referencia única del menú creado. De lo contrario, el comando devuelve una identificación(\*). interna específica. En todos los casos, esta identificación, MenuRef puede utilizarse para referenciar la barra de menús par todos los otros comandos del tema.

(\*) Este ID específico es temporal y deja de ser válido tan pronto como se llame a otra barra de menú con [SET MENU BAR](set-menu-bar.md). Si desea conservar la referencia de un menú creado en el editor de menú, debe copiarlo en la memoria utilizando [Create menu](create-menu.md). Por ejemplo:  

```4d
 $vEditorRef:=Get menu bar reference(Frontmost process) //menú del editor de barras de menú
 $vMenuRef:=Create menu($vEditorRef) //copia el menú en memoria
 SET MENU BAR(2) //instala otra barra de menú
 ... // execute code
 SET MENU BAR($vMenuRef) //regresa a la barra de menú inicial
```

El parámetro *proceso* puede utilizarse para designar el proceso del que quiere obtener la identificación de la barra de menús actual. Si omite este parámetro, el comando devuelve la identificación de la barra de menús del proceso actual.

#### Ejemplo 

Consulte el ejemplo del comando [GET MENU ITEMS](get-menu-items.md "GET MENU ITEMS").

#### Ver también 

[SET MENU BAR](set-menu-bar.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 979 |
| Hilo seguro | &cross; |


