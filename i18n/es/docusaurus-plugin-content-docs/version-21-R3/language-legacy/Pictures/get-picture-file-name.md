---
id: get-picture-file-name
title: Get picture file name
slug: /commands/get-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.Get picture file name.Syntax-->**Get picture file name** ( *imagen* : Picture ) : Text<!-- END REF-->
<!--REF #_command_.Get picture file name.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594; | Imagen para la cual obtener el nombre por defecto |
| Resultado | Text | &#8592; | Nombre por defecto del archivo imagen |
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

<!--REF #_command_.Get picture file name.Summary-->El comando **Get picture file name** devuelve el nombre por defecto actual de la imagen pasada como parámetro.<!-- END REF-->

El nombre por defecto se utiliza durante la exportación de la imagen en un archivo disco. Puede definirse automáticamente basado en el nombre original del archivo imagen importado en el campo o la variable imagen, o utilizando el comando [SET PICTURE FILE NAME](../commands/set-picture-file-name). Para mayor información, consulte el manual de *Diseño*. 

Si la imagen no tienen un nombre por defecto, el comando devuelve una cadena vacía.

## Ver también 

[SET PICTURE FILE NAME](../commands/set-picture-file-name)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1171 |
| Hilo seguro | yes |


