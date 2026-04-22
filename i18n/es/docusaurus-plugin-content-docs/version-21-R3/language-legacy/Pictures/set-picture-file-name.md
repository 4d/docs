---
id: set-picture-file-name
title: SET PICTURE FILE NAME
slug: /commands/set-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE FILE NAME.Syntax-->**SET PICTURE FILE NAME** ( *imagen* : Picture ; *nomArchivo* : Text )<!-- END REF-->
<!--REF #_command_.SET PICTURE FILE NAME.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594; | Imagen para la cual definir el nombre por defecto |
| nomArchivo | Text | &#8594; | Nombre de la imagen por defecto |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SET PICTURE FILE NAME.Summary-->El comando **SET PICTURE FILE NAME** define o modifica el nombre del archivo por defecto de la imagen pasada como parámetro.<!-- END REF-->  
  
Este nombre se puede definir automáticamente a partir del nombre de origen del archivo imagen importado en el campo o variable imagen o durante una llamada previa a **SET PICTURE FILE NAME**.  
  
El nombre por defecto se utiliza como nombre de archivo cuando la imagen se exporta en un archivo disco. Si el contenido del campo se copia en una variable o en otro campo, el nombre por defecto también se copia. Para mayor información, consulte el Manual de *Diseño*.

## Ver también 

[Get picture file name](../commands/get-picture-file-name)  
[WRITE PICTURE FILE](../commands/write-picture-file)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1172 |
| Hilo seguro | yes |


