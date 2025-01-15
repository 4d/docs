---
id: web-legacy-get-session-expiration
title: WEB LEGACY GET SESSION EXPIRATION
slug: /commands/web-legacy-get-session-expiration
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Syntax-->**WEB LEGACY GET SESSION EXPIRATION** ( *idSesion* ; *fechaVenc* ; *horaVenc* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| idSesion | Text | &#8594;  | UUID de sesión |
| fechaVenc | Date | &#8592; | Fecha de vencimiento de la cookie |
| horaVenc | Time | &#8592; | Fecha de vencimiento de la cookie |

<!-- END REF-->

#### Nota de compatibilidad 

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Summary-->Este comando sólo puede utilizarse con **sesiones web heredadas**, disponibles en bases convertidas a partir de versiones anteriores a la 4D v18 R6\.<!-- END REF--> Devuelve valores nulos de fecha y hora cuando se habilita el modo **sesiones web escalables** (recomendado en 4D v18 R6 y superiores). Para más información, consulte la sección *Gestión de las sesiones web (heredado)*.

#### Descripción 

El comando **WEB LEGACY GET SESSION EXPIRATION** devuelve la información relativa al vencimiento de la cookie de la sesión cuyo UUID se pasó en *idSesion*.

El parámetro *fechaVenc* recibe la fecha de vencimiento y el parámetro *horaVenc* recibe la hora de vencimiento de la cookie. 

**Nota:** cada vez que se envía una petición web, la fecha y hora de vencimiento de la cookie se reinician en un valor correspondiente a la hora de la petición+el valor de la opción Web Inactive session timeout. Por ejemplo:   
*Primera petición, lunes a la 1:00*   
 \-> envía una cookie 4DSID xxxyyy vence I+24h = martes 01:00  
*Segunda* *petición, lunes a la* *1:10*   
 \-> envía una cookie 4DSID xxxyyy vence I+24h = martes 01:10  
*Tercera petición, martes a las 4:00: cookie vencida*  
 \-> envía una cookie 4DSID aaabbb vence I+24h = miércoles 01:00

#### Ver también 

*Gestión de las sesiones web (heredado)*  
[WEB Get Current Session ID](web-get-current-session-id.md)  
[WEB SET OPTION](web-set-option.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1207 |
| Hilo seguro | &check; |


