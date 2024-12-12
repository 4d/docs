---
id: get-pasteboard-data
title: GET PASTEBOARD DATA
slug: /commands/get-pasteboard-data
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA.Syntax-->**GET PASTEBOARD DATA** ( *tipoDatos* ; *datos* )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoDatos | Text | &#8594;  | Tipo de datos a extraer del contenedor |
| datos | Blob | &#8592; | Datos extraídos del portapapeles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET PASTEBOARD DATA.Summary-->El comando GET PASTEBOARD DATA devuelve en el campo o variable de tipo BLOB *datos* que se encuentran en el portapapeles y cuyo tipo se pasa en *tipoDatos*.<!-- END REF--> (Si el portapapeles contiene texto copiado en 4D, entonces el conjunto de caracteres del BLOB será probablemente UTF-16.)

**Nota:** en el contexto de las operaciones de copiar/pegar, el contenedor corresponde al portapapeles.

Pase *tipoDatos*, pase un valor que defina el tipo de datos a extraer. Puede pasar una firma 4D, un tipo UTI (Mac OS), un nombre/número de formato (Windows), o un tipo de 4 caracteres (compatibilidad). Para mayor información sobre estos tipos, consulte la sección *Gestión de portapapeles*.

**Nota:** no puede leer datos de tipo archivo con este comando; para hacer esto, debe utilizar el comando [Get file from pasteboard](get-file-from-pasteboard.md).

#### Ejemplo 

Los métodos de objeto siguientes son los de dos botones que copian y pegan datos en el array *asOpciones* (menú pop-up, lista desplegable,...) ubicado en un formulario:

```4d
  // Método de objeto bCopiar_asOpciones
 If(Size of array(asOpciones)>0) // ¿Hay algo para copiar?
    VARIABLE TO BLOB(asOpciones;$vxClipData) // Acumular los elementos del array en un BLOB
    CLEAR PASTEBOARD // Vaciar el portapapeles
    APPEND DATA TO PASTEBOARD("artx";$vxClipData) // Note que el tipo de datos se elige arbitrariamente
 End if
 
  // Método de objeto bPegar_asOpciones
 If(Pasteboard data size("artx")>0) // Hay datos de tipo "artx" en el portapapeles?
    GET PASTEBOARD DATA("artx";$vxClipData) // Extraer los datos del portapapeles
    BLOB TO VARIABLE($vxClipData;asOpciones) // Llenar el array con los datos del BLOB
    asOpciones:=0 // Reinicializar el elemento seleccionado del array
 End if
```

#### Variables y conjuntos del sistema 

Si los datos se extraen correctamente, la variable OK toma el valor 1; de lo contrario OK toma el valor 0 y se genera un error.

#### Ver también 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 401 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


