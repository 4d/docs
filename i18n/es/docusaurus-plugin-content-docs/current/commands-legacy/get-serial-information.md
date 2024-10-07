---
id: get-serial-information
title: GET SERIAL INFORMATION
slug: /commands/get-serial-information
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL INFORMATION.Syntax-->**GET SERIAL INFORMATION** ( *criterio* ; *usuario* ; *empresa* ; *conectados* ; *maxUsuarios* )<!-- END REF-->
<!--REF #_command_.GET SERIAL INFORMATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| criterio | Integer | &#x1F858; | Llave única del producto (encriptada) |
| usuario | Text | &#x1F858; | Nombre registrado |
| empresa | Text | &#x1F858; | Organización registrada |
| conectados | Integer | &#x1F858; | Número de usuarios conectados |
| maxUsuarios | Integer | &#x1F858; | Número máximo de usuarios conectados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET SERIAL INFORMATION.Summary-->El comando GET SERIAL INFORMATION devuelve información sobre la serialización de la aplicación 4D.<!-- END REF-->

* *llave*: identificación única del producto instalado. Un número único está asociado a una aplicación 4D (tal como 4D Server, 4D en modo local, 4D Desktop, etc.) instalada en un equipo. Desde luego, este número está encriptado.
* *usuario*: nombre de usuario de la aplicación como se definió al momento de la instalación.
* *empresa*: nombre de la empresa u organización como se definió durante la instalación.
* *conectados*: número de usuarios conectados al momento de la ejecución del comando.
* *maxUsuarios*: número máximo de usuarios conectados simultáneamente.

**Nota:** los dos últimos parámetros siempre devuelven 1 para las versiones monousuario de 4D, excepto en versiones de demostración (devuelven 0).

GET SERIAL INFORMATION es parte del esquema general de protección de los componentes implementado en 4D. Los desarrolladores de componentes pueden asociar una copia de su producto a una aplicación 4D instalada, con el fin de evitar copias ilegales.

La serialización funciona de la siguiente manera: un usuario que desea adquirir un componente envía al desarrollador su llave única generada por el comando GET SERIAL INFORMATION. Esta operación puede realizarse por intermedio de un formulario de Orden incluido en una versión de demostración del componente. La llave generada es única y está asociada a una aplicación 4D específica. 

El desarrollador del componente puede entonces generar su propio número de serial combinando la llave y un código. El componente entregado ofrecerá una función de verificación si la información devuelta por GET SERIAL INFORMATION corresponde a este número de serial. De lo contrario, el usuario no podrá utilizar el componente. 

**Nota:** los desarrolladores de plug-ins también pueden utilizar este esquema de protección. Para mayor información, consulte la documentación de [4D Plugin API Reference](http://sources.4d.com/trac/4d%5F4dpluginapi#no1). 
