---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6.5|Creado por|

</details>
</div>

#### Descripción 

<!--REF #_command_.UNREGISTER CLIENT.Summary-->El comando UNREGISTER CLIENT da de baja un registro de un equipo 4D Client.<!-- END REF--> El cliente debe haber sido registrado por el comando REGISTER CLIENT. 

**Nota:** un cliente 4D se saca del registro automáticamente cuando el usuario sale de la aplicación. 

Si el equipo cliente no fue registrado previamente o si el comando se ejecutó en 4D en modo local, el comando no hace nada. 

Si el cliente salió del registro correctamente, la variable sistema OK es igual a 1\. Si el cliente no fue registrado, OK es igual a 0.

#### Ejemplo 

Consulte el ejemplo del comando [REGISTER CLIENT](register-client.md "REGISTER CLIENT").

#### Variables y conjuntos del sistema 

Si el cliente es dado de baja correctamente, la variable sistema OK toma el valor 1, de lo contrario toma el valor 0.

#### Ver también 

[EXECUTE ON CLIENT](../commands/execute-on-client)  
[GET REGISTERED CLIENTS](../commands/get-registered-clients)  
[REGISTER CLIENT](../commands/register-client)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 649 |
| Hilo seguro | no |
| Modifica variables | OK |


