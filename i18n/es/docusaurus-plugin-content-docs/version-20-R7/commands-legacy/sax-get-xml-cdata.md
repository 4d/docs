---
id: sax-get-xml-cdata
title: SAX GET XML CDATA
slug: /commands/sax-get-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML CDATA.Syntax-->**SAX GET XML CDATA** ( *documento* ; *valor* )<!-- END REF-->
<!--REF #_command_.SAX GET XML CDATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| valor | Text, Blob | &#8592; | Valor del elemento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX GET XML CDATA.Summary-->El comando **SAX GET XML CDATA**permite recuperar el *valor* CDATA de un elemento XML existente en el documento XML referenciado por *documento*.<!-- END REF--> Este comando debe llamarse con el evento SAX XML CDATA. Para mayor información sobre eventos SAX, consulte la descripción del comando [SAX Get XML node](sax-get-xml-node.md). 

Pase una variable *valor* de tipo Texto si quiere recuperar los datos de tamaño superior a 32 KB (la base debe funcionar en modo Unicode). 

**Nota de compatibildad:** a partir de 4D v12, los contenidos CDATA codificados en base64 son decodificados automáticamente por el comando **SAX GET XML CDATA**, de manera que no es necesario llamar al comando [BASE64 DECODE](base64-decode.md). 

#### Ejemplo 

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

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error.

#### Ver también 

[SAX ADD XML CDATA](sax-add-xml-cdata.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 878 |
| Hilo seguro | &check; |
| Modifica variables | OK |


