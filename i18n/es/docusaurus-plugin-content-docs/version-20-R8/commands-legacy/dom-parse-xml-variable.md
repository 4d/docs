---
id: dom-parse-xml-variable
title: DOM Parse XML variable
slug: /commands/dom-parse-xml-variable
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML variable.Syntax-->**DOM Parse XML variable** ( *variable* {; *validacion* {; dtd | esquema}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML variable.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| variable | Blob, Text | &#8594;  | Nombre de la variable |
| validacion | Boolean | &#8594;  | True = Validación por la DTD, False = No validacion |
| dtd &#124; esquema | Cadena | &#8594;  | Ubicación de la DTD o del esquema XML |
| Resultado | Text | &#8592; | Referencia del elemento XML |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Parse XML variable.Summary-->El comando DOM Parse XML variable analiza una variable de tipo BLOB o Texto que contiene una estructura XML y devuelve una referencia para esta variable.<!-- END REF--> El comando puede validar o no la estructura vía un DTD o un esquema XML (XML Schema Definition (XSD) document). 

Pase en el parámetro *variable* el nombre de la variable BLOB o el Texto que contiene el objeto XML. 

El parámetro booleano *validacion* permite indicar si validar o no la estructura utilizando la DTD.

* Si *validacion* es igual a True, la estructura se validará. En este caso, el analizador intentará validar la estructura XML del documento basado en la referencia DTD o XSD incluida en el documento, o vía la DTD o el esquema XML designado por el tercer parámetro si se pasa.
* Si *validacion* es igual a False, la estructura no se validará.

Si pasa True en *validacion* y omite el tercer parámetro, el comando intentará validar la estructura XML vía una referencia DTD o XSD que se encuentra en la estructura misma. La validación puede ser indirecta: si la estructura contiene una referencia a un archivo DTD que contiene a su vez una referencia a un archivo XSD, el comando intentará efectuar ambas validaciones. 

El tercer parámetro *dtd*, permite indicar una DTD específica o un esquema XML para el análisis del documento. Si utiliza este parámetro, el comando no tendrá en cuenta la DTD referenciada en el documento XML. 

**Validación por DTD** 
Hay dos formas de especificar un DTD:

* como una referencia. Para hacer esto, pase la ruta de acceso completa de la nueva DTD (extensión "dtd) en el parámetro *dtd*. Si el documento indicado no contiene una DTD válida, el parámetro *dtd* se ignora y se genera un error.
* directamente en un texto. En este caso, si el contenido del parámetro comienza por “<?xml”, 4D lo considerará como la DTD; de lo contrario, 4D lo considerará como una ruta de acceso.
**Validación por esquema** 
Para validar el documento vía un esquema XML, sólo debe pasar un archivo o URL con una extensión "xsd" en lugar de una "dtd" en el tercer parámetro. La validación por esquema XML se considera más flexible y poderosa que la validación por DTD. El lenguaje de documentos XSD está basado en lenguaje XML. Los esquemas XML soportan particularmente tipos de datos. Para mayor información sobre los esquemas XML, consulte la siguiente dirección: *http://www.w3.org/XML/Schema*.

Si no se puede efectuar la validación (no DTD o XSD, URL incorrecto, etc.), se genera un error. La variable sistema Error indica el número del error. Puede interceptar este error con la ayuda de un método instalado por el comando [ON ERR CALL](on-err-call.md).

El comando devuelve una cadena de caracteres (RefElement) que constituye la referencia en memoria de la estructura virtual de la variable. Esta referencia debe utilizarse con otros comandos de análisis XML. 

**Importante:** una vez no lo necesite más, recuerde llamar al comando [DOM CLOSE XML](dom-close-xml.md) con esta referencia para liberar memoria.

#### Ejemplo 1 

Apertura sin validación de un objeto XML ubicado en una variable Texto 4D:   

```4d
 var myTextVar : Text
 var vDoc : Time
 var $xml_Struct_Ref : Text
 
 vDoc:=Open document("Document.xml")
 If(OK=1)
    RECEIVE PACKET(vDoc;myTextVar;32000)
    CLOSE DOCUMENT(vDoc)
    $xml_Struct_Ref:=DOM Parse XML variable(myTextVar)
 End if
```

#### Ejemplo 2 

Apertura sin validación de un documento XML ubicado en un BLOB 4D:

```4d
 var myBlobVar : Blob
 var $ref_XML_Struct : Text
 
 DOCUMENT TO BLOB(“c:\\import.xml”;myBlobVar)
 $xml_Struct_Ref:=DOM Parse XML variable(myBlobVar)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

#### Ver también 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML source](dom-parse-xml-source.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 720 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


