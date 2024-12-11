---
id: get-registered-clients
title: GET REGISTERED CLIENTS
slug: /commands/get-registered-clients
displayed_sidebar: docs
---

<!--REF #_command_.GET REGISTERED CLIENTS.Syntax-->**GET REGISTERED CLIENTS** ( *listaClientes* ; *metodos* )<!-- END REF-->
<!--REF #_command_.GET REGISTERED CLIENTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| listaClientes | Text array | &#8592; | Lista de 4D Clients registrados |
| metodos | Integer array | &#8592; | Lista de los métodos a ejecutar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET REGISTERED CLIENTS.Summary-->El comando GET REGISTERED CLIENTS llena dos arrays:

* *listaClients* contiene la lista de los clientes “registrados” utilizando el comando [REGISTER CLIENT](register-client.md "REGISTER CLIENT").<!-- END REF-->
* *metodos* proporciona la lista de “cargas de trabajo” de cada cliente. La carga de trabajo es el número de métodos que un cliente 4D debe ejecutar llamando el comando [EXECUTE ON CLIENT](execute-on-client.md "EXECUTE ON CLIENT") (para mayor información, por favor consulte la descripción del comando [EXECUTE ON CLIENT](execute-on-client.md "EXECUTE ON CLIENT")).

**Nota:** si la operación fue exitosa, la variable sistema OK es igual a 1.

#### Ejemplo 1 

Asumamos que quiere obtener una lista de todos los clientes registrados y los métodos que falta ejecutar: 

```4d
 ARRAY TEXT($clientes;0)
 ARRAY LONGINT($metodos;0)
 GET REGISTERED CLIENTS($clientes;$metodos)
```

#### Ejemplo 2 

Consulte el ejemplo del comando [REGISTER CLIENT](register-client.md "REGISTER CLIENT").

#### Variables y conjuntos del sistema 

Si la operación se realiza correctemente, la variable sistema OK toma el valor 1.

#### Ver también 

[EXECUTE ON CLIENT](execute-on-client.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 650 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


