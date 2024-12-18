---
id: dom-parse-xml-source
title: DOM Parse XML source
slug: /commands/dom-parse-xml-source
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML source.Syntax-->**DOM Parse XML source** ( *doc* {; *validacion* {; dtd | esquema}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML source.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594;  | Ruta de acceso del documento |
| validacion | Boolean | &#8594;  | True = Validación False = No validación |
| dtd &#124; esquema | Cadena | &#8594;  | Ubicación de la DTD o del esquema XML |
| Resultado | Text | &#8592; | Referencia del elemento XML |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Parse XML source.Summary-->El comando DOM Parse XML source analiza un documento que contiene una estructura XML y devuelve una referencia para este documento.<!-- END REF--> El comando puede validar o no el documento vía una DTD o un esquema XML (documento XSD, XML Schema Definition). 

El documento puede estar en el disco o en Internet/Intranet. 

**Nota:** la ejecución del comando **DOM Parse XML source** es síncrona.

En el parámetro *documento* puede pasar:

* una ruta de acceso completa estándar (del tipo C:\\\\Carpeta\\\\Archivo\\\\... bajo Windows y MacintoshHD:Carpeta:Archivo bajo Mac OS),
* o una ruta Unix bajo Mac OS (la cual debe comenzar por /).
* o una ruta red de tipo http://www.sitio.com/Archivo o ftp://publico.ftp.com...

El parámetro booleano *validacion* permite indicar si validar o no la estructura. 

* Si *validacion* es igual a True, la estructura se validará. En este caso, el analizador intentará validar la estructura XML del documento basado en la referencia DTD o el esquema XML incluida en el documento, o vía la DTD o el esquema XML designado por el tercer parámetro, si se pasa.
* Si *validacion* es igual a False, la estructura no se validará.

Si pasa True en *validacion* y omite el tercer parámetro, el comando intentará validar la estructura XML vía una referencia DTD o XSD que se encuentra en la estructura misma. La validación puede ser indirecta: si la estructura contiene una referencia a un archivo DTD que contiene una referencia a un archivo XSD, el comando intentará efectuar las dos validaciones.  
El tercer parámetro permite designar una DTD específica o un esquema XML para el análisis del documento. Si utiliza este parámetro, el comando no tendrá en cuenta la DTD referenciada en el documento XML. 

**Validación por DTD**

Hay dos formas de especificar una DTD:

* Como una referencia. Para hacerlo, pase la ruta de acceso completa de la nueva DTD (extensión “dtd”) en el parámetro *dtd*. Si el documento indicado no contiene una DTD válida, el parámetro *dtd* se ignora y se genera un error.
* Directamente en un texto. En este caso, si los contenidos del parámetro comienzan por “<?xml”, 4D considerará que esa es la DTD; de lo contrario, 4D lo considerará como una ruta de acceso.

**Validación por esquema**  
Para validar el documento vía un esquema XML, sólo necesita pasar en el tercer parámetro un archivo o un URL de extensión “xsd” en lugar de un “dtd”. La validación por esquema XML se considera más flexible y poderosa que la validación por DTD. El lenguaje de los documentos XSD está basado en el lenguaje XML. Más particularmente, los esquemas XML soportan tipos de datos. Para mayor información sobre los esquemas XML, por favor consulte la siguiente dirección: *http://www.w3.org/XML/Schema*.

Si la validación no se puede efectuar (no DTD o XSD, URL incorrecto, etc.), se genera un error. La variable sistema Error indica el número del error. Puede interceptar este error utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md).

El comando devuelve una cadena de 16 caracteres (RefElement) constituyendo la referencia en memoria de la estructura virtual del documento. Esta referencia debe utilizarse con los otros comandos de análisis XML. 

**Importante:** una vez no lo necesite, recuerde llamar al comando [DOM CLOSE XML](dom-close-xml.md) con esta referencia con el fin de liberar memoria. 

#### Ejemplo 1 

Apertura sin validación de un documento XML en disco:

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("C:\\importar.xml")
```

#### Ejemplo 2 

Apertura sin validación de un documento XML ubicado junto al archivo de estructura de la base:

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("importar.xml")
```

#### Ejemplo 3 

Apertura de un documento XML ubicado en el disco y validación utilizando un DTD ubicado en el disco:

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("C:\\importar.xml";True;"C:\\importar_dtd.xml")
```

#### Ejemplo 4 

Apertura sin validación de un documento XML ubicado en un URL específico:

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("http://www.4DHispano.com/xml/importar.xml")
```

#### Variables y conjuntos del sistema 

Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

#### Ver también 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 719 |
| Hilo seguro | &check; |
| Modifica variables | OK |


