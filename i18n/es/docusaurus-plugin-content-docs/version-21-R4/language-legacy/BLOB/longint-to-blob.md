---
id: longint-to-blob
title: LONGINT TO BLOB
slug: /commands/longint-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT TO BLOB.Syntax-->**LONGINT TO BLOB** ( *enteroLargo* : Integer ; *BLOB* : Blob ; *byteOrden* : Integer {; offset | *} )<!-- END REF-->
<!--REF #_command_.LONGINT TO BLOB.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| enteroLargo | Integer | &#8594; | Valor de tipo Entero largo a escribir en el BLOB |
| Blob | Blob | &#8594; | BLOB a recibir el valor Entero largo |
| byteOrden | Integer | &#8594; | 0 Orden de bytes nativo 1 Orden de bytes Macintosh 2 Orden de bytes PC |
| offset &#124; * | Variable, Operador | &#8596; | Offset en el BLOB (expresado en bytes) o * para añadir el valor |
|  |  |  | Nuevo offset después de la escritura si se omite * |
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

<!--REF #_command_.LONGINT TO BLOB.Summary-->El comando LONGINT TO BLOB escribe el valor de tipo Entero largo (4 bytes) *enteroLargo* en el BLOB *blob*.<!-- END REF-->

El parámetro *byteOrder* fija el orden de los bytes ("byte ordering") del valor Entero largo (4 bytes) a escribir. Se pasa una de las siguientes constantes predefinidas de 4D:

| Constante               | Tipo         | Valor |
| ----------------------- | ------------ | ----- |
| Native byte ordering    | Entero largo | 0     |
| Macintosh byte ordering | Entero largo | 1     |
| PC byte ordering        | Entero largo | 2     |

**Nota sobre la independencia de plataforma:** si intercambia BLOBs entre las plataformas Macintosh y PC, es su decisión administrar los temas de byte swapping cuando utilice este comando.

Si especifica el parámetro opcional \*, el valor entero largo (4 bytes) se añade al BLOB y el tamaño del BLOB se extiende en consecuencia. Utilizando el parámetro opcional \*, puede almacenar secuencialmente cualquier número de valores de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Entero largo](# "Entre -2 millardos y +2 millardos"), Real o [Texto](# "A character string that may contain from 0 to 2 GB of text") (ver otros comandos de BLOB) en un BLOB, siempre y cuando haya memoria disponible. 

Si no especifica el parámetro opcional *\** ni la variable del parámetro *offset*, el valor entero largo (4 bytes) se almacena al inicio del BLOB, reemplazando su contenido anterior; el tamaño del BLOB se ajusta en consecuencia. 

Si pasa una variable en el parámetro *offset*, el valor entero largo (4 byte) se escribe a partir del offset (comenzando desde cero) en el BLOB. Sin importar donde escriba el valor entero largo (4 bytes), el tamaño del BLOB se incrementa de acuerdo a la ubicación que pase (más hasta 4 bytes, si es necesario). Los bytes redefinidos, diferentes de los que está escribiendo, se inicializan en cero. 

Después de llamar el comando, se devuelve la variable del parámetro *offset*, incrementada en el número de bytes que hayan sido escritos. Por lo tanto, puede reutilizar esa misma variable con otro comando de escritura de BLOB para escribir otro valor. 

### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.
