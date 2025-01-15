---
id: sax-add-xml-cdata
title: SAX ADD XML CDATA
slug: /commands/sax-add-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML CDATA.Syntax-->**SAX ADD XML CDATA** ( *documento* ; *datos* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML CDATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| datos | Blob, Text | &#8594;  | Texto o BLOB a insertar en el documento entre etiquetas CData |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX ADD XML CDATA.Summary-->El comando SAX ADD XML CDATA añade en el documento XML referenciado por *documento*, los *datos* de tipo texto o BLOB.<!-- END REF--> Estos datos se enmarcarán automáticamente con las etiquetas *<!\[CDATA\[* y *\]\]>*  
El texto incluido en una sección CData es ignorado por el intérprete XML. 

Si quiere codificar los contenidos de datos, debe utilizar el comando [BASE64 ENCODE](base64-encode.md). En este caso, por supuesto, debe pasar un BLOB en *datos*. 

Para que este comando funcione correctamente, debe estar abierto un elemento. De lo contrario, se generará un error. 

#### Ejemplo 

Si quiere insertar las siguientes líneas en su documento XML: 

```XML
function matchwo(a,b)
{
if (a < b && a < 0) then
      {
      return 1
      }
else
      {
      return 0
      }
}
```

Para hacer esto, necesita ejecutar el siguiente código:

```4d
 var vtMitexto : Text
 ... // coloque acá el texto en la variable vtMitexto
 SAX ADD XML CDATAL($DocRef;vtMitexto)
```

El resultado será:

```XML
<![CDATA[
function matchwo(a,b)
{
if (a < b && a < 0) then
   {
   return 1
   }
else
   {
   return 0
   }
}
]]>
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0.

#### Ver también 

[SAX GET XML CDATA](sax-get-xml-cdata.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 856 |
| Hilo seguro | &check; |
| Modifica variables | OK |


