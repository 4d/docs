---
id: execute-on-client
title: EXECUTE ON CLIENT
slug: /commands/execute-on-client
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE ON CLIENT.Syntax-->**EXECUTE ON CLIENT** ( *nomCliente* ; *nomMetodo* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE ON CLIENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomCliente | Text | &#8594;  | Nombre registrado de 4D Client |
| nomMetodo | Text | &#8594;  | Nombre del método a ejecutar |
| param | &#8594;  | Parámetro(s) del método |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.EXECUTE ON CLIENT.Summary-->El comando EXECUTE ON CLIENT provoca la ejecución del método *nomMetodo*, con los parámetros *param1.<!-- END REF-->.. paramN*, si es necesario, en el cliente 4D registrado cuyo nombre es *nomCliente*. El nombre registrado del cliente 4D es definido por el comando [REGISTER CLIENT](register-client.md "REGISTER CLIENT").   
Este comando puede llamarse desde un cliente 4D o desde un procedimiento almacenado en 4D Server. 

Si el método requiere uno o más parámetros, páselos después del nombre del método.   
La ejecución del método en el cliente 4D se efectúa en un proceso creado automáticamente en el equipo cliente, y su nombre será el nombre de registro de 4D Client. 

Si este comando se llama muchas veces para un mismo 4D Client, las órdenes de ejecución serán apiladas. Por lo tanto, los métodos serán tratados uno después del otro en modo asincrónico. Entre más métodos estén apilados, mayor será la carga de trabajo para el 4D Client. Ahora usted puede conocer el estado de la carga de trabajo de cada cliente utilizando el comando [GET REGISTERED CLIENTS](get-registered-clients.md "GET REGISTERED CLIENTS").

**Nota:** el apilamiento de órdenes de ejecución no puede ser modificado o detenido, a menos que el cliente 4D se saque del registro con la ayuda del comando [UNREGISTER CLIENT](unregister-client.md "UNREGISTER CLIENT").

Puede ejecutar simultáneamente el mismo método en varios o en todos los 4D Clients registrados. Para hacerlo, utilice el carácter arroba (@) en el parámetro *nomCliente*.

#### Ejemplo 1 

Asumamos que quiere ejecutar el método “GenerarNums” en el equipo cliente “Client1”:

```4d
 EXECUTE ON CLIENT("Client1";"GenerarNums";12;$a;"Text")
```

#### Ejemplo 2 

Si quiere que todos los clientes ejecuten el método “VacioTiemp”:

```4d
 EXECUTE ON CLIENT("@";"EmptyTemp")
```

#### Ejemplo 3 

Consulte el ejemplo del comando [REGISTER CLIENT](register-client.md "REGISTER CLIENT").

#### Variables y conjuntos del sistema 

 La variable sistema OK es igual a 1 si 4D Server ha recibido correctamente petición de ejecución de un método; sin embargo, esto no garantiza que el método ha sido ejecutado correctamente por 4D Client.

#### Ver también 

[Execute on server](execute-on-server.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  