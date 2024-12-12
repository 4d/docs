---
id: locked-by
title: LOCKED BY
slug: /commands/locked-by
displayed_sidebar: docs
---

<!--REF #_command_.LOCKED BY.Syntax-->**LOCKED BY** ( {*tabla* ;} *proceso* ; *usuario4D* ; *sesionUsuario* ; *nombreProceso* )<!-- END REF-->
<!--REF #_command_.LOCKED BY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a verificar si el registro está bloqueado o Tabla por defecto, si se omite |
| proceso | Integer | &#8592; | Número de referencia del proceso |
| usuario4D | Text | &#8592; | Nombre del usuario 4D |
| sesionUsuario | Text | &#8592; | Nombre del usuario que inició la sesion de trabajo |
| nombreProceso | Text | &#8592; | Nombre del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LOCKED BY.Summary-->LOCKED BY devuelve la información sobre el usuario y el proceso que tiene bloqueado un registro.<!-- END REF--> El número del proceso (\*), el nombre de usuario en la aplicación 4D y en el sistema así como el nombre del proceso son devueltos en las variables *proceso*, *usuario4D*, *sesionUsuario*, y *nombreProceso*. Puede utilizar esta información en una caja de diálogo personalizada para advertir al usuario cuando un registro está bloqueado.

(\*) Este es el número del proceso en la máquina donde se ejecuta el código que origina el bloqueo del registro. En el caso de un trigger o un método que se ejecuta en el servidor, se devuelve el número del proceso "gemelo" en la máquina servidor. En el caso de un método que se ejecuta en una aplicación remota, se devuelve el número del proceso en la máquina remota.

Si el registro no está bloqueado, *proceso* devuelve 0 y *usuario*, *equipo*, y *nombreProceso* devuelven cadenas vacías. Si trata de cargar en modo lectura/escritura un registro que ha sido borrado, *proceso* devuelve -1 y *usuario*, *equipo*, y *nombreProceso* devuelven cadenas vacías.

El parámetro *usuario4D*  devuelto corresponde al nombre del usuario definido en el editor de contraseñas de 4D o el alias de usuario definido con [SET USER ALIAS](set-user-alias.md) (si lo hay). Si no hay sistema de contraseñas, devuelve “Diseñador”.

El parámetro *sesionUsuario* devuelto corresponde al nombre del usuario que abrió la sesión en el equipo cliente (este nombre aparece en la ventana de administración de 4D Server para cada proceso abierto).

Si el registro ha sido bloqueado por una *petición $lock REST*:

* *proceso* devuelve -2
* *usuario4D* devuelve ""
* *sesionUsuario* devuelve ""
* *nombreProceso* devuelve la dirección IP del locker, p. ej. "127.0.0.1"

#### Ver también 

[Locked](locked.md)  
*Record Locking*  