---
id: form-get-vertical-resizing
title: FORM GET VERTICAL RESIZING
slug: /commands/form-get-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET VERTICAL RESIZING.Syntax-->**FORM GET VERTICAL RESIZING** ( *redimension* {; *alturaMin* {; *alturaMax*}} )<!-- END REF-->
<!--REF #_command_.FORM GET VERTICAL RESIZING.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| redimension | Boolean | &#8592; | True: el formulario es redimensionable verticalmente<br/>False: el formulario no es redimensionable verticalmente |
| alturaMin | Integer | &#8592; | Altura mínima del formulario (píxeles) |
| alturaMax | Integer | &#8592; | Altura máxima del formulario (píxeles) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.FORM GET VERTICAL RESIZING.Summary-->El comando FORM GET VERTICAL RESIZING devuelve las propiedades de redimensionamiento vertical del formulario actual en las variables *redimension*, *alturaMin* y *alturaMax*.<!-- END REF--> Estas propiedades pueden haberse definido para el formulario en el editor de formularios en modo Diseño o para el proceso actual vía el comando [FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md "FORM SET VERTICAL RESIZING").

#### Ver también 

[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  