---
id: pasteboard-data-size
title: Pasteboard data size
slug: /commands/pasteboard-data-size
displayed_sidebar: docs
---

<!--REF #_command_.Pasteboard data size.Syntax-->**Pasteboard data size** ( *tipoDatos* ) : Integer<!-- END REF-->
<!--REF #_command_.Pasteboard data size.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoDatos | Text | &#8594;  | Tipo de datos (4 caracteres) |
| Resultado | Integer | &#8592; | Tamaño (en bytes) de datos almacenados en el portapapeles o código de error |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Pasteboard data size.Summary-->El comando Pasteboard data size permite probar si hay datos del tipo *tipoDatos* en el portapapeles.<!-- END REF--> 

**Nota**: en el caso de las operaciones copiar/pegar, el contenedor de datos corresponde al Portapapeles

Si el portapapeles está vacío o no contiene datos de tipo especifico, el comando devuelve un error -102 (ver la tabla de constantes predefinidas). Si el portapapeles contiene datos del tipo especificado, el comando devuelve el tamaño en bytes de estos datos. 

Pase en *tipodatos* un valor que defina el tipo de datos a extraer. Puede pasar una firma 4D, un tipo UTI (Mac OS), un nombre/número de formato (Windows), o un tipo de 4 caracteres (compatibilidad). Para mayor información sobre estos tipos, consulte la sección *Gestión de portapapeles*.

Después de verificar que el portapapeles contiene datos del tipo que quiere, puede extraer esa información del portapapeles utilizando uno de los siguientes comandos:

* Si el portapapeles contiene datos de tipo TEXT, puede obtener esa información utilizando el comando Get text from pasteboard, el cual devuelve un valor texto, o el comando GET PASTEBOARD DATA, que devuelve el texto en un BLOB.
* Si el portapapeles contiene datos de tipo PICT, puede obtener esos datos utilizando el comando GET PICTURE FROM PASTEBOARD, que devuelve la imagen en un campo o una variable o el comando GET PASTEBOARD DATA, que devuelve la imagen en un BLOB.
* Si el contenedor contiene una ruta de acceso al archivo, puede extraerla utilizando el comando pasteboard, que devuelve la ruta de acceso del archivo.
* Para cualquier otro tipo de datos, utilice el comando GET PASTEBOARD DATA, el cual devuelve los datos en un BLOB.

#### Ejemplo 1 

El siguiente código prueba si el portapapeles contiene una imagen y si es así, copia la imagen en una variable 4D:

```4d
 If(Pasteboard data size(Picture data)=1) //¿Hay una imagen en el portapapeles?
    GET PICTURE FROM PASTEBOARD($vPicVariable) //Si es así, extraer la imagen del portapapeles
 Else
    ALERT("No hay imagen en el portapapeles.")
 End if
```

#### Ejemplo 2 

Generalmente, las aplicaciones cortan y copian datos de tipo TEXT o PICT en el portapapeles, porque la mayoría de las aplicaciones reconocen estos dos tipos de datos estándar. Sin embargo, una aplicación puede colocar en el portapapeles varias instancias de los mismos datos en formatos diferentes. Por ejemplo, cada vez que corta o copia parte de una hoja de cálculo, la aplicación de la hoja de cálculo puede colocar los datos en un formato hipotético ‘SPSH’, como también en los formatos SYLK y TEXT. La instancia ‘SPSH’ contiene los datos estructurados en el formato utilizado por la aplicación. La copia SYLK contiene los mismos datos, pero en el formato SYLK, reconocido por la mayoría de los otros programas de hojas de cálculo. Por último, el formato TEXT contiene los mismos datos, sin la información extra incluída en el formato SYLK o en el formato hipotético ‘SPSH’. En este punto, cuando escriba rutinas de Cortar/Copiar/Pegar entre 4D y una aplicación de hoja de cálculo hipotética, asumiendo que conoce la descripción del formato ‘SPSH’ y que está listo para analizar los datos SYLK, puede escribir el siguiente código:

```4d
 Case of
  // Primero, verificar si el portapapeles contiene los datos de la aplicación de la hoja de cálculo hipotética.
    :(Pasteboard data size('SPSH')>0)
  // ...
  // Segundo, verificar si el portapapeles contiene datos en formato Sylk
    :(Pasteboard data size('SYLK')>0)
  // ...
  // Por último, verificar si el portapapeles contiene datos en formato Text
    :(Pasteboard data size('TEXT')>0)
  // ...
 End case
```

En otras palabras, usted trata de extraer del portapapeles la instancia de datos que tenga más información original.

#### Ejemplo 3 

Usted desea arrastrar algunos datos privados de diferentes objetos en su formulario. Puedes escribir:

```4d
  //objeto origen
 If(FORM Event=On Begin Drag Over)
    APPEND DATA TO PASTEBOARD("some.private.data";$data)
 End if
```

```4d
  //objeto destino
 If(FORM Event=On Drag Over)
    $0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)
 End if
```

#### Ejemplo 4 

Ver el ejemplo del comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Ver también 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  
*Portapapeles*  