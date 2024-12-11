---
id: get-picture-from-pasteboard
title: GET PICTURE FROM PASTEBOARD
slug: /commands/get-picture-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Syntax-->**GET PICTURE FROM PASTEBOARD** ( *imagen* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8592; | Imagen extraída del Portapapeles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Summary-->GET PICTURE FROM PASTEBOARD devuelve la imagen presente en el portapapeles en el campo o variable imagen *imagen*.<!-- END REF-->

**Nota**: en el caso de una operación copiar/pegar, el contenedor de datos corresponde al Portapapeles.

#### Ejemplo 

El siguiente método de objeto de un botón asigna la imagen presente en el portapapeles (si hay) al campo \[Empleados\]Foto:

```4d
 If((Pasteboard data size("com.4d.imagen.jpeg")>0)|(Pasteboard data size("com.4d.imagen.gif")>0))
    GET PICTURE FROM PASTEBOARD([Empleados]Foto)
 Else
    ALERT("El portapapeles no contiene ninguna imagen.")
 End if
```

#### Variables y conjuntos del sistema 

Si la imagen se extrae correctamente, OK toma el valor 1; de lo contrario OK toma el valor 0 y se genera un error.

#### Ver también 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  
[Pasteboard data size](pasteboard-data-size.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 522 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


