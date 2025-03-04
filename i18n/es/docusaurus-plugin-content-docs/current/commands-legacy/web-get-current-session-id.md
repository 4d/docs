---
id: web-get-current-session-id
title: WEB Get current session ID
slug: /commands/web-get-current-session-id
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get current session ID.Syntax-->**WEB Get current session ID**  : Text<!-- END REF-->
<!--REF #_command_.WEB Get current session ID.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | UUID de la sesión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB Get current session ID.Summary-->El comando **WEB Get current session ID** devuelve el ID de la sesión abierta para la petición web.<!-- END REF--> Esta identificación es generada automáticamente por 4D como un UUID.  
  
Si este comando se llama fuera del contexto de una sesión web, devuelve una cadena vacía "".

#### Ver también 

*Gestión de las sesiones web (heredado)*  
[WEB LEGACY GET SESSION EXPIRATION](web-legacy-get-session-expiration.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1162 |
| Hilo seguro | &check; |


