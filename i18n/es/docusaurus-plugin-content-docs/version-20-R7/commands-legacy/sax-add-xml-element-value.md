---
id: sax-add-xml-element-value
title: SAX ADD XML ELEMENT VALUE
slug: /commands/sax-add-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Syntax-->**SAX ADD XML ELEMENT VALUE** ( *documento* ; *datos* {; *} )<!-- END REF-->
<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| datos | Text, Variable | &#8594;  | Texto o variable a insertar en el documento |
| * | Operador | &#8594;  | Si se pasa: codificar los caracteres especiales Si se omite: no codificación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Summary-->El comando **SAX ADD XML ELEMENT VALUE** añade directamente en el documento XML referenciado por *documento* los *datos* sin convertirlos.<!-- END REF--> Este comando es equivalente, por ejemplo, a insertar un archivo adjunto en el cuerpo de un e-mail.

En *datos*, puede pasar directamente una cadena de caracteres, o una variable 4D. El contenido de la variable se convertirá en texto antes de incluirse en el documento XML. Si *datos* se evalúa como *indefinido*, 4D utiliza una cadena vacía. Si quiere codificar el contenido de *datos*, debe utilizar el comando [BASE64 ENCODE](base64-encode.md). En este caso, por su puesto, debe pasar un BLOB en *datos*.

Por defecto, el comando codifica los caracteres especiales (< > ” ’...) contenidos en los parámetros *datos* a menos que usted haya desactivado este mecanismo para el proceso actual utilizando el comando [XML SET OPTIONS](xml-set-options.md) pasando el valor XML Raw data a la opción XML String encoding. Por ejemplo:  

```4d
 XML SET OPTIONS($docRef;XML string encoding;XML raw data)
```

  
En este contexto, para forzar la codificación de parámetros especiales durante la llamada de **SAX ADD XML ELEMENT VALUE**, debe pasar el parámetro opcional *\**. 

Para que este comando funcione correctamente, debe estar abierto un elemento. De lo contrario, se generará un error.

#### Ejemplo 

Este ejemplo inserta el archivo *whitepaper.pdf* en el elemento XML abierto:

```4d
 var vBMiBLOB : Blob
 DOCUMENT TO BLOB("c:\\libroblanco.pdf";vBMiBLOB)
 SAX ADD XML ELEMENT VALUE($DocRef;vBMiBLOB)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error.

#### Ver también 

[SAX GET XML ELEMENT VALUE](sax-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 855 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


