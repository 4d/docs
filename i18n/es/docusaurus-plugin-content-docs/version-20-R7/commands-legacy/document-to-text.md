---
id: document-to-text
title: Document to text
slug: /commands/document-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Document to text.Syntax-->**Document to text** ( *nomArchivo* {; *conjCaracteres* {; *modoRetorno*}} ) : Text<!-- END REF-->
<!--REF #_command_.Document to text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArchivo | Text | &#8594;  | Nombre del documento o ruta al documento |
| conjCaracteres | Text, Integer | &#8594;  | Nombre o número del conjunto de caracteres |
| modoRetorno | Integer | &#8594;  | Modo de procesamiento para las líneas de ruptura |
| Resultado | Text | &#8592; | Texto del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Document to text.Summary-->El comando **Document to text** le permite recuperar el contenido de un archivo directamente en el disco en una variable texto 4D o campo texto.<!-- END REF-->

En *nomArchivo*, pase el nombre o ruta de acceso del archivo a leer. El archivo debe existir en el disco, de lo contrario se genera un error. Puede pasar:

* sólo el nombre del archivo, por ejemplo "miArchivo.txt": en este caso, el archivo debe estar ubicado junto al archivo de estructura de la aplicación.
* una ruta de acceso relativa al archivo de estructura de la aplicación, por ejemplo, "\\\\docs\\\\miArchivo.txt" en Windows o "/docs/miArchivo.txt" en macOS.
* una ruta de acceso absoluta, por ejemplo, "c:\\\\app\\\\docs\\\\miArchivo.txt" en Windows o "MacHD/docs/miArchivo.txt" en macOS.

En *conjCaracteres*, se pasa el conjunto de caracteres a utilizar para la lectura de los contenidos. Puede pasar una cadena con el nombre estándar del conjunto (por ejemplo, "ISO-8859-1" o "UTF-8") o su ID MIBEnum (entero largo). Para más información sobre la lista de conjuntos de caracteres soportados por 4D, consulte la descripción del comando [CONVERT FROM TEXT](convert-from-text.md).  
  
Si el documento contiene un Byte Order Mark (BOM), 4D utiliza el conjunto de caracteres que se ha definido en *conjCaracteres* (este parámetro entonces se ignora).  
  
Si el documento no contiene un BOM y si se omite el parámetro *conjCaracteres,* 4D utiliza por defecto los siguientes conjuntos de caracteres:

* bajo Windows: ANSI
* bajo OS X: MacRoman

En breakMode, puede pasar un entero largo que indica el proceso a efectuar en los caracteres de fin de línea presentes en el documento. Puede pasar una de las siguientes constantes, del tema "*Documentos sistema*":

| Constante                   | Tipo         | Valor | Comentario                                                                                                                                                                  |
| --------------------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Entero largo | 0     | Ningún proceso                                                                                                                                                              |
| Document with CR            | Entero largo | 3     | Los saltos de líneas se convierten en CR (*retorno de carro*), el formato Classic Mac OS por defecto.                                                                       |
| Document with CRLF          | Entero largo | 2     | Los saltos de línea se convierten en CRLF (*carriage return + line feed*), al formato Windows por defecto.                                                                  |
| Document with LF            | Entero largo | 4     | Los saltos de línea se convierten en LF(*line feed*), al formato Unix y macOS por defecto.                                                                                  |
| Document with native format | Entero largo | 1     | (Por defecto) los saltos de línea se convierten al formato nativo de la plataforma de ejecución: LF *(line feed)* en macOS, CRLF (*carriage return + line feed*) en Windows |

Por defecto, cuando se omite el parámetro *modoRetorno*, los saltos de línea se procesan en modo nativo (1).

**Nota de compatibilidad:** hay opciones de compatibilidad disponibles para la gestión de EOL y BOM. Ver *Página Compatibilidad*.

**Nota**: este comando no modifica la variable OK. En caso de fallo, se genera un error que puede interceptar utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md).

#### Ejemplo 

Dado el documento texto siguiente (los campos están separados por tabulaciones):

```RAW
id    name    price    vat3    4D Tags    99    19.6
```

Cuando ejecuta este código:

```4d
 $Text:=Document to text("products.txt")
```

... obtiene:

```4d
  // $Text = "id\tname\tprice\tvat\r\n3\t4D Tags\t99 \t19.6"
  // \t = tab
  // \r = CR
```

#### Ver también 

*Documentos sistema*  
[TEXT TO DOCUMENT](text-to-document.md)  