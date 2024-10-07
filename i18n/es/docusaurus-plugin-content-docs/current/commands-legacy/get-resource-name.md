---
id: get-resource-name
title: Get resource name
slug: /commands/get-resource-name
displayed_sidebar: docs
---

<!--REF #_command_.Get resource name.Syntax-->**Get resource name** ( *resTipo* ; *resNum* {; *resArchivo*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get resource name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resTipo | Cadena | &#x1F852; | Tipo de recurso (4 caracteres) |
| resNum | Entero largo | &#x1F852; | Número de referencia del recurso |
| resArchivo | DocRef | &#x1F852; | Número de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite |
| Resultado | Cadena | &#x1F850; | Nombre del recurso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get resource name.Summary-->El comando Get resource name devuelve el nombre del recurso cuyo tipo se pasa en *resTipo* y cuyo número de referencia (ID) en *resNum*.<!-- END REF--> 

 Si pasa un número de referencia de archivo de recursos en el parámetro *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, el archivo se busca en los archivos de recursos abiertos.

Si el recurso no existe, Get resource name devuelve una cadena vacía.
