---
id: set-picture-to-pasteboard
title: SET PICTURE TO PASTEBOARD
slug: /commands/set-picture-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Syntax-->**SET PICTURE TO PASTEBOARD** ( *imagen* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO PASTEBOARD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Imagen a copiar en el portapapeles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Summary-->SET PICTURE TO PASTEBOARD limpia el portapapeles y coloca una copia de la imagen que usted pasó en *imagen* en el portapapeles.<!-- END REF--> 

**Nota**: en el caso de las operaciones copiar/pegar, el contenedor de datos corresponde al Portapapeles

La imagen se pasa a su formato nativo (jpeg, tif, png, etc)

Después de colocar la imagen en el portapapeles, puede recuperarla utilizando el comando GET PICTURE FROM PASTEBOARD o llamando GET PASTEBOARD DATA("com.4d.picture.gif";...).

#### Ejemplo 

En una ventana flotante, usted visualiza un formulario que contiene el array *asEmpleadoNombre*, el cual lista los nombres de los empleados de una tabla \[Empleados\]. Cada vez que hace clic en un nombre, usted quiere copiar la imagen de un empleado en el portapapeles. En el método de objeto del Array, usted escribe:

```4d
 If(asEmpleadoNombre#0)
    QUERY([Empleados];[Empleado]Apellido=asEmpleadoNombre{asEmpleadoNombre})
    If(Picture size([Empleados]Foto)>0)
       SET PICTURE TO PASTEBOARD([Empleados]Foto) // Copiar la foto del empleado
    Else
       CLEAR PASTEBOARD // No se encontró ninguna foto o registro
    End if
 End if
```

#### Variables y conjuntos del sistema 

Si una copia de la imagen se coloca correctamente en el portapapeles, la variable OK toma el valor 1.

Si no hay suficiente memoria para colocar una copia de la imagen en el portapapeles, la variable OK toma el valor 0, pero no se genera un error.

#### Ver también 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 521 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


