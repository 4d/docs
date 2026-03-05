---
id: get-text-from-pasteboard
title: Get text from pasteboard
slug: /commands/get-text-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get text from pasteboard.Syntax-->**Get text from pasteboard**  : Text<!-- END REF-->
<!--REF #_command_.Get text from pasteboard.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Devuelve el texto (si lo hay) en el Portapapeles |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Get text from pasteboard.Summary-->Get text from pasteboard devuelve el texto en el portapapeles.<!-- END REF--> 

**Nota**: en el caso de las operaciones copiar/pegar, el contenedor de datos corresponde al Portapapeles.

Si el contenedor de datos contiene texto enriquecido (por ejemplo en formato RTF), el texto conserva sus atributos al soltar o pegar, si el área de destino es compatible.

Note que los campos y variables de tipo texto de 4D pueden contener hasta 2 GB de texto.

## Variables y conjuntos del sistema 

Si el texto se extrae correctamente, OK toma el valor 1; de lo contrario OK toma el valor 0 y se genera un error.

## Ver también 

[GET PASTEBOARD DATA](../commands/get-pasteboard-data)  
[GET PICTURE FROM PASTEBOARD](../commands/get-picture-from-pasteboard)  
[Pasteboard data size](../commands/pasteboard-data-size)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 524 |
| Hilo seguro | no |
| Modifica variables | OK |


