---
id: license-usage
title: License usage
slug: /commands/license-usage
displayed_sidebar: docs
---

<!--REF #_command_.License usage.Syntax-->**License usage** : Collection<!-- END REF-->
<!--REF #_command_.License usage.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; | Una colección de objetos con información sobre las licencias retenidas. |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.License usage.Summary-->El comando **License usage** devuelve una colección de objetos que contienen información sobre las licencias retenidas.<!-- END REF-->

Cada objeto de la colección devuelta tiene los siguientes atributos:

| **Nombre de la propiedad** | **Tipo** | **Descripción**                                                                                             |
| -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| productId                  | Número   | ID del tipo de licencia                                                                                     |
| productName                | Texto    | Nombre del tipo de licencia                                                                                 |
| productUsedCount           | Número   | Número de licencias retenidas (incluida ésta) cuando se retuvo la licencia                                  |
| productBalance             | Número   | Número de licencias restantes para el producto (justo después de la acción)                                 |
| globalProductUsedCount     | Número   | Cuando hay varios servidores funcionando en la misma máquina, muestra el recuento retenido para todos ellos |
| token                      | Número   | ID único de la operación                                                                                    |
| time                       | Texto    | Marca de tiempo que indica cuándo se retuvo la licencia, en formato ISO 8601                                |
| reason                     | Texto    | El motivo/la causa de este uso de la licencia                                                               |
| session                    | Objeto   | Contiene información específica sobre la sesión de la licencia retenida                                     |

Dependiendo del tipo de sesión (cliente 4D o REST, por ejemplo), el contenido del objeto de sesión en la tabla anterior variará. Ver más abajo para más detalles.

#### objeto de sesión para sesiones de clientes 4D 

Dentro de la colección devuelta para las sesiones 4D, cada elemento contiene un objeto de sesión idéntico al devuelto por el comando [Process activity](../commands/process-activity.md):

| **Nombre de la propiedad** | **Tipo**       | **Descripción**                                                              |
| -------------------------- | -------------- | ---------------------------------------------------------------------------- |
| type                       | Texto (enum)   | Tipo de sesión. Valores posibles: "remote", "storedProcedure", "web", "rest" |
| userName                   | Texto          | Nombre de usuario                                                            |
| machineName                | Texto          | Nombre de la máquina remota                                                  |
| systemUserName             | Texto          | Nombre de la sesión del sistema abierta en la máquina remota                 |
| IPAddress                  | Texto          | Dirección IP de la máquina remota                                            |
| hostType                   | Texto (enum)   | Tipo de host. Valores posibles: "windows", "mac", "browser"                  |
| creationDateTime           | Fecha ISO 8601 | Fecha y hora de conexión de la máquina remota                                |
| state                      | Texto (enum)   | Estado de la sesión. Valores posibles: "activa", "pospuesta", "dormida"      |
| ID                         | Texto          | UUID de la sesión                                                            |
| persistentID               | Texto          | ID persistente de la sesión                                                  |

#### objeto sesión para sesiones SQL 

Esta tabla detalla el contenido del objeto de sesión para las sesiones SQL:

| **Nombre de la propiedad** | **Tipo** | **Descripción**           |
| -------------------------- | -------- | ------------------------- |
| IPAddress                  | Texto    | Dirección IP de la sesión |
| userAgent                  | Texto    | Agente de usuario         |
| userName                   | Texto    | Nombre de usuario         |
| userId                     | Número   | ID de usuario             |

#### objeto sesión para sesiones REST 

Esta tabla detalla el contenido del objeto de sesión para las sesiones REST:

| **Nombre de la propiedad** | **Tipo** | **Descripción**                                    |
| -------------------------- | -------- | -------------------------------------------------- |
| userName                   | Texto    | Nombre de usuario                                  |
| sessionID                  | Texto    | ID de la sesión REST                               |
| IPAddress                  | Texto    | ID del cliente que inició la sesión REST           |
| isDatastore                | Boolean  | True si la solicitud REST proviene de un datastore |


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1782 |
| Hilo seguro | &cross; |


