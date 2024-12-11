---
id: method-set-access-mode
title: METHOD SET ACCESS MODE
slug: /commands/method-set-access-mode
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ACCESS MODE.Syntax-->**METHOD SET ACCESS MODE** ( *modo* )<!-- END REF-->
<!--REF #_command_.METHOD SET ACCESS MODE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| modo | Integer | &#8594;  | Modo de acceso a los objetos bloqueados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD SET ACCESS MODE.Summary-->El comando **METHOD SET ACCESS MODE** permite definir el comportamiento de 4D cuando intenta acceder en escritura a un objeto ya cargado en modificación por otro usuario o proceso.<!-- END REF--> El alcance de este comando es la sesión actual.

En *modo*, pase una de las siguientes constantes del tema *Acceso objetos diseño*:

| Constante                | Tipo         | Valor | Comentario                                                                                                                                                  |
| ------------------------ | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On object locked abort   | Entero largo | 0     | La carga del objeto se aborta (funcionamiento por defecto)                                                                                                  |
| On object locked confirm | Entero largo | 2     | 4D muestra una caja de diálogo permitiéndole elegir entre intentar nuevamente o abortar. En modo remoto, esta opción no es soportada (la carga se abandona) |
| On object locked retry   | Entero largo | 1     | 4D intenta cargar el objeto hasta que sea liberado                                                                                                          |


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1191 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


