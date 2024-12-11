---
id: test-path-name
title: Test path name
slug: /commands/test-path-name
displayed_sidebar: docs
---

<!--REF #_command_.Test path name.Syntax-->**Test path name** ( *nombreRuta* ) : Integer<!-- END REF-->
<!--REF #_command_.Test path name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreRuta | Text | &#8594;  | Ruta de acceso a un directorio, carpeta o documento |
| Resultado | Integer | &#8592; | 1, rutaAcceso es un documento existente 0, rutaAcceso es un directorio o carpeta existente <0, ruta de acceso incorrecta, código de error del administrador de archivos del sistema |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Test path name.Summary-->La función Test path name verifica si un documento o carpeta cuyo nombre o ruta de acceso se pasa en *rutaAcceso* está presente en el disco.<!-- END REF--> Puede pasar una ruta de acceso relativa o absoluta, expresada en la sintaxis del sistema actual. 

Si se encuentra un documento, Test path name devuelve 1\. Si se encuentra una carpeta, Test path name devuelve 0.

4D ofrece las siguientes constantes predefinidas:

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is a document | Entero largo | 1     |
| Is a folder   | Entero largo | 0     |

  
Si no se encuentra ningún documento o carpeta, Test path name devuelve un valor negativo (por ejemplo -43 para "Archivo no encontrado").

#### Ejemplo 

El siguiente ejemplo prueba la presencia del documento “Diario” en la carpeta de la base, si no lo encuentra lo crea:

```4d
 If(Test path name("Diario")#Is a document)
    $vhDocRef:=Create document("Diario")
    If(OK=1)
       CLOSE DOCUMENT($vhDocRef)
    End if
 End if
```

#### Ver también 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Create document](create-document.md)  
[CREATE FOLDER](create-folder.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 476 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


