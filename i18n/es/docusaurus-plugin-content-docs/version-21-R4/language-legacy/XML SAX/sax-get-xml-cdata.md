---
id: sax-get-xml-cdata
title: SAX GET XML CDATA
slug: /commands/sax-get-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML CDATA.Syntax-->**SAX GET XML CDATA** ( *documento* : Time ; *valor* : Text, Blob )<!-- END REF-->
<!--REF #_command_.SAX GET XML CDATA.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594; | Referencia del documento abierto |
| valor | Text, Blob | &#8592; | Valor del elemento |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL Release 3|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.SAX GET XML CDATA.Summary-->El comando **SAX GET XML CDATA**permite recuperar el *valor* CDATA de un elemento XML existente en el documento XML referenciado por *documento*.<!-- END REF--> Este comando debe llamarse con el evento SAX XML CDATA. Para mayor información sobre eventos SAX, consulte la descripción del comando [SAX Get XML node](../commands/sax-get-xml-node). 

Pase una variable *valor* de tipo Texto si quiere recuperar los datos de tamaño superior a 32 KB (la base debe funcionar en modo Unicode). 

**Nota de compatibildad:** a partir de 4D v12, los contenidos CDATA codificados en base64 son decodificados automáticamente por el comando **SAX GET XML CDATA**, de manera que no es necesario llamar al comando [BASE64 DECODE](../commands/base64-decode). 

## Ejemplo 

Miremos el siguiente código XML: 

```XML
<ElementoRaiz>
   <Hijo>Mi Texto<![CDATA[MyCData]]</Hijo>
</ElementoRaiz>
```

El siguiente código 4D devolverá “MiCData” en *vDatosTexto*: 

```4d
 var vDator : Blob
 var vDatosTexto : Text
 SAX GET XML CDATA(DocRef;vDatos)
 vDatosTexto:=BLOB to text(vData;UTF8 C string)
```

## Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error.

## Ver también 

[SAX ADD XML CDATA](../commands/sax-add-xml-cdata)  
[SAX Get XML node](../commands/sax-get-xml-node)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 878 |
| Hilo seguro | yes |
| Modifica variables | OK |


