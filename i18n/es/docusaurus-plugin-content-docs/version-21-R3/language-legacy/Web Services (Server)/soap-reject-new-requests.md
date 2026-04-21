---
id: soap-reject-new-requests
title: SOAP REJECT NEW REQUESTS
slug: /commands/soap-reject-new-requests
displayed_sidebar: docs
---

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Syntax-->**SOAP REJECT NEW REQUESTS** ( *estadoRechazar* : Boolean )<!-- END REF-->
<!--REF #_command_.SOAP REJECT NEW REQUESTS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| estadoRechazar | Boolean | &#8594; | True si se rechazan las nuevas solicitudes, de lo contrario false |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|17 R4|Creado por|

</details>
</div>

#### Descripción 

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Summary-->El comando **SOAP REJECT NEW REQUESTS** especifica si el servidor de servicios web acepta o no nuevas solicitudes SOAP.<!-- END REF--> 

En *estadoRechazar*, pase **True** para rechazar las nuevas solicitudes SOAP. Al pasar **False** se especifica que se permiten nuevas solicitudes SOAP.

**Nota**: este comando solo puede ejecutarse en 4D Server. Si el método que llama al comando se ejecuta localmente en un cliente remoto o en un solo usuario 4D, **SOAP REJECT NEW REQUESTS** no hace nada.

#### Ejemplo 

Desea rechazar cualquier solicitud nueva a su servidor de servicios web:

```4d
  //método a ejecutar en el servidor
 If(WEB Get server info.SOAPServerStarted)
    SOAP REJECT NEW REQUESTS(True)
 End if
```

  

#### Ver también 

[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)  
[WEB Get server info](../commands/web-get-server-info)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1636 |
| Hilo seguro | yes |


