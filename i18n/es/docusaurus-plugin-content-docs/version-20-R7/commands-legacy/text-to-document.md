---
id: text-to-document
title: TEXT TO DOCUMENT
slug: /commands/text-to-document
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO DOCUMENT.Syntax-->**TEXT TO DOCUMENT** ( *nomArchivo* ; *texto* {; *conjCaract* {; *ModoRetorno*}} )<!-- END REF-->
<!--REF #_command_.TEXT TO DOCUMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArchivo | Text | &#8594;  | Nombre del documento o ruta de acceso al documento |
| texto | Text | &#8594;  | Texto a almacenar en el documento |
| conjCaract | Text, Integer | &#8594;  | Nombre o número del conjunto de caracteres |
| ModoRetorno | Integer | &#8594;  | Modo de procesamiento para los retornos de línea |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.TEXT TO DOCUMENT.Summary-->El comando **TEXT TO DOCUMENT** le permite escribir el *texto* directamente en el archivo de disco.<!-- END REF-->

En *nomArchivo*, pase el nombre o ruta de acceso del archivo a escribir. Si el archivo no existe, se crea. Cuando el archivo ya existe en el disco, su contenido anterior se borrará, excepto si ya está abierto, en cuyo caso, su contenido se bloquea y se genera un error. En *nomArchivo*, que puede pasar:

* sólo el nombre del archivo, por ejemplo "miArchivo.txt": en este caso, el archivo se coloca junto al archivo de estructura de la aplicación.
* una ruta de acceso relativa al archivo de estructura de la aplicación, por ejemplo, "\\\\docs\\\\miArchivo.txt" en Windows o ""/docs/miArchivo.txt" en macOS.
* una ruta de acceso absoluta, por ejemplo, "c:\\\\app\\\\docs\\\\miArchivo.txt" en Windows o "MacHD/docs/miArchivo.txt" en macOS.

Si desea que el usuario sea capaz de indicar el nombre o la ubicación del documento, utilice los comandos [Open document](open-document.md) o [Create document](create-document.md) , así como la variable del sistema *Document*.

**Nota:** por defecto, los documentos generados por este comando no tienen una extensión. Debe pasar una extensión en *nomArchivo*.   
  
En *texto*, pase el texto a escribir en el disco. Puede ser una constante literal ("mi texto"), o un campo o variable texto 4D.  
  
En *conjCaract*, pase el conjunto de caracteres a utilizar para la escritura del documento. Puede pasar una cadena con el nombre estándar del conjunto (por ejemplo, "ISO-8859-1" o "UTF-8") o su ID MIBEnum (entero largo). Para más información sobre la lista de conjuntos de caracteres soportados por 4D, consulte la descripción del comando [CONVERT FROM TEXT](convert-from-text.md). Si un Byte Order Mark (BOM) existe para el conjunto de caracteres, 4D lo inserta en el documento, a menos que el conjunto de caracteres utilizado contenga el sufijo "-no-bom" (por ejemplo, "UTF-8-no-bom"). Si no se especifica un conjunto de caracteres, por defecto 4D utiliza por defecto el conjunto de caracteres "UTF-8" sin BOM (excepto en modo compatibilidad, ver *Página Compatibilidad*).  
  
En *modoRetorno*, puede pasar un entero largo que indica el proceso a aplicar a los caracteres de fin de línea antes de guardarlos en el archivo. Puede pasar una de las siguientes constantes, ubicadas en el tema "*Documentos sistema*":

| Constante                   | Tipo         | Valor | Comentario                                                                                                                                                                  |
| --------------------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Entero largo | 0     | Ningún proceso                                                                                                                                                              |
| Document with CR            | Entero largo | 3     | Los saltos de líneas se convierten en CR (*retorno de carro*), el formato Classic Mac OS por defecto.                                                                       |
| Document with CRLF          | Entero largo | 2     | Los saltos de línea se convierten en CRLF (*carriage return + line feed*), al formato Windows por defecto.                                                                  |
| Document with LF            | Entero largo | 4     | Los saltos de línea se convierten en LF(*line feed*), al formato Unix y macOS por defecto.                                                                                  |
| Document with native format | Entero largo | 1     | (Por defecto) los saltos de línea se convierten al formato nativo de la plataforma de ejecución: LF *(line feed)* en macOS, CRLF (*carriage return + line feed*) en Windows |

Por defecto, si omite el parámetro *modoRetorno*, los caracteres de fin de línea se procesan en modo nativo (1).

**Nota de compatibilidad:** hay opciones de compatibilidad disponibles para la gestión de EOL y BOM. Ver *Página Compatibilidad*.

**Nota:** este comando no modifica la variable OK. En caso de falla, se genera un error que puede interceptar utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md).

#### Ejemplo 1 

Estos son algunos ejemplos típicos de uso de este comando:

```4d
 TEXT TO DOCUMENT("myTest.txt";"Esta es una prueba")
 TEXT TO DOCUMENT("myTest.xml";"Esta es una prueba")
```

#### Ejemplo 2 

Ejemplo que permite al usuario indicar la ubicación del archivo a crear:

```4d
 $MyTextVar:="Esta es una prueba"
 ON ERR CALL("IO ERROR HANDLER")
 $vhDocRef :=Create document("")
  // Guardar documento con la extensión ".txt"
  // En este caso, la extensión .txt siempre se añade al nombre; no es posible cambiarla
 If(OK=1) // Si el documento se ha creado con éxito
    CLOSE DOCUMENT($vhDocRef) //Cerrar el documento
    TEXT TO DOCUMENT(Document;$MyTextVar )
  // Escribimos el documento
 Else
  // Gestión de error
 End if
```

#### Ver también 

[Document to text](document-to-text.md)  
*Documentos sistema*  