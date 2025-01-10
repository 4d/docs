---
id: web-server
title: WEB Server
displayed_sidebar: docs
---

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!--REF #_command_.WEB Server.Params-->

| Parámetros | Tipo                         |   | Descripción                                                                                 |
| ---------- | ---------------------------- | - | ------------------------------------------------------------------------------------------- |
| option     | Integer                      | → | Servidor web a obtener (por defecto si se omite = `Web server database`) |
| Resultado  | 4D.WebServer | ← | Objeto servidor web                                                                         |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                    |
| ----------- | ------------------------------------------------- |
| 18 R3       | Añadidos                                          |
| 19          | soporte de .sessionCookieSameSite |

</details>

#### Descripción

El comando `WEB Server` <!-- REF #_command_.WEB Server.Summary -->devuelve el objeto del servidor web predeterminado, o el objeto del servidor web definido a través del parámetro *option*<!-- END REF -->.

Por defecto, si se omite el parámetro *option*, el comando devuelve una referencia al servidor web de la base de datos, es decir, al servidor web por defecto. Para designar el servidor web a devolver, puede pasar una de las siguientes constantes en el parámetro *option*:

| Constante                      | Valor | Comentario                                                                           |
| ------------------------------ | ----- | ------------------------------------------------------------------------------------ |
| `Web server database`          | 1     | Servidor web de la base actual (por defecto si se omite)          |
| `Web server host database`     | 2     | Servidor web de la base local de un componente                                       |
| `Web server receiving request` | 3     | Servidor web que ha recibido la solicitud (servidor web objetivo) |

El **objeto servidor web devuelto** contiene los valores actuales de las [propiedades del servidor web](../API/WebServerClass.md).

#### Ejemplo

El objeto servidor web devuelto contiene los valores actuales de las propiedades del servidor web.

```4d
  // Método de un componente
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### Ver también

[Lista servidor WEB](web-server-list.md)\
[webServer.stop()](../API/WebServerClass.md#stop)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1674                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;cross; |
