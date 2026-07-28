---
id: blob-to-longint
title: BLOB to longint
slug: /commands/blob-to-longint
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to longint.Syntax-->**BLOB to longint** ( *BLOB* : Blob ; *byteOrden* : Integer {; *offset* : Variable} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to longint.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594; | BLOB del cual obtener el valor entero largo |
| byteOrden | Integer | &#8594; | 0 Orden de bytes nativo 1 Orden de bytes Macintosh 2 Orden de bytes PC |
| offset | Variable | &#8596; | Offset en el BLOB (expresado en bytes) |
|  |  |  | Nuevo offset después de la lectura |
| Resultado | Integer | &#8592; | Valor entero largo (4 bytes) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.BLOB to longint.Summary-->El comando BLOB to longint devuelve un valor de tipo Entero largo (4 bytes) leído del BLOB *blob*.<!-- END REF-->

El parámetro *byteOrder* fija el orden de los bytes ("byte ordering") del valor Entero largo (4 bytes) a leer. Se pasa una de las siguientes constantes predefinidas de 4D:

| Constante               | Tipo         | Valor |
| ----------------------- | ------------ | ----- |
| Native byte ordering    | Entero largo | 0     |
| Macintosh byte ordering | Entero largo | 1     |
| PC byte ordering        | Entero largo | 2     |

**Nota sobre la independencia de plataforma:** si intercambia BLOBs entre las plataformas Macintosh y PC, es su decisión administrar los temas de byte swapping cuando utilice este comando.

Si especifica la variable del parámetro opcional *offset*, el entero largo (4 bytes) se lee en el offset (a partir de cero) del BLOB. Si no especifica la variable del parámetro opcional *offset*, se leen los cuatro primeros bytes del BLOB.

**Nota:** debe pasar un valor de offset entre *0* (cero) y el tamaño del BLOB menos 4\. Si no lo hace, se genera el error -111.

Después de llamar el comando, la variable se incrementa en el número de bytes leídos. Por lo tanto, puede reutilizar la misma variable con otro comando de lectura de BLOBs para leer otro valor.

## Ejemplo 

El siguiente ejemplo lee 20 valores de tipo entero largo de un BLOB, a partir del offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vlValor:=BLOB to longint(vxUnBlob;PC byte ordering;$vlOffset)
  // Hacer algo con $vlValor
 End for
```

## Ver también 

[BLOB to integer](../commands/blob-to-integer)  
[BLOB to real](../commands/blob-to-real)  
[BLOB to text](../commands/blob-to-text)  
[INTEGER TO BLOB](../commands/integer-to-blob)  
[LONGINT TO BLOB](../commands/longint-to-blob)  
[REAL TO BLOB](../commands/real-to-blob)  
[TEXT TO BLOB](../commands/text-to-blob)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 551 |
| Hilo seguro | yes |


