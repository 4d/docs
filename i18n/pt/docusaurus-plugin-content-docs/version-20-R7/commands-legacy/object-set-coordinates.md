---
id: object-set-coordinates
title: OBJECT SET COORDINATES
slug: /commands/object-set-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET COORDINATES.Syntax-->**OBJECT SET COORDINATES** ( {* ;} *object* ; *esquerda* ; *superior* {; *direita* ; *bottom*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET COORDINATES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificar, objeto é um nome de objeto (cadeia) Se omite, objeto é um campo ou uma variável |
| object | Integer | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| esquerda | Integer | &#8594;  | Coordenada esquerda do objeto em pixels |
| superior | Integer | &#8594;  | Coordenada superior do objeto em pixels |
| direita | Integer | &#8594;  | Coordenada direita do objeto em pixels |
| bottom | Integer | &#8594;  | Coordenada inferior do objeto em pixels |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT SET COORDINATES.Summary-->The **OBJECT SET COORDINATES** command modifies the location and, optionally, the size of the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

**Note:** This command is the equivalent of using the [OBJECT MOVE](object-move.md) command and passing its 2nd *\** parameter. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *left* and *top* parameters, pass the new absolute coordinates of the object in the form. These coordinates must be expressed in pixels with respect to the top left corner of the form. 

You can also pass absolute coordinate values in the *right* and *bottom* parameters, indicating the bottom right corner of the object. If this corner does not correspond to the corner of the object after application of the *left* and *top* parameters, the object is resized accordingly. 

**Note:** If you want to move an object relative to its initial position, we recommend using the existing [OBJECT MOVE](object-move.md) command.

This command only functions in the following contexts:

* Input forms in entry mode,
* Forms displayed using the [DIALOG](dialog.md) command,
* Headers and footers of output forms displayed by the [MODIFY SELECTION](modify-selection.md) or [DISPLAY SELECTION](display-selection.md) command,
* Forms being printed.

#### Exemplo 

A seguinte declaração localiza oi objeto "button\_1" nas coordenadas (10,20) (30,40):

```4d
 OBJECT SET COORDINATES(*;"button_1";10;20;30;40)
```

![](../assets/en/commands/pict1207497.fr.png)

#### Ver também 

[CONVERT COORDINATES](convert-coordinates.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT MOVE](object-move.md)  