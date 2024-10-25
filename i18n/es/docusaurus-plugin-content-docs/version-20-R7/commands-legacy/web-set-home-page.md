---
id: web-set-home-page
title: WEB SET HOME PAGE
slug: /commands/web-set-home-page
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HOME PAGE.Syntax-->**WEB SET HOME PAGE** ( *pagInicio* )<!-- END REF-->
<!--REF #_command_.WEB SET HOME PAGE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| pagInicio | Text | &#8594;  | Nombre de la página o ruta de acceso HTML a la página o "" para no enviar la página de inicio personalizada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SET HOME PAGE.Summary-->El comando **WEB SET HOME PAGE** permite modificar la página de inicio personalizada para el proceso web actual.<!-- END REF--> 

La página definida está asociada al proceso web, por lo tanto usted puede definir diferentes páginas de inicio dependiendo, por ejemplo, del usuario que esté conectado. Esta página puede ser estática o semidinámica. 

Pase en el parámetro *pagInicio* el nombre de la página HTML o de la ruta de acceso HTML a la página. 

**Nota:** si la página especificada en el parámetro *pagInicio* no existe cuando el proceso web accede a ella por primera vez, el servidor web crea y asigna el contenido de la página de inicio predeterminada (ver ). 

Para no enviar *pagInicio* como página de inicio para el proceso web actual, ejecute de nuevo el comando WEB SET HOME PAGE con una cadena vacía ("") pasada en *pagInicio*.

**Nota:** la página de bienvenida por defecto del servidor web se define en las Propiedades de la base. 
