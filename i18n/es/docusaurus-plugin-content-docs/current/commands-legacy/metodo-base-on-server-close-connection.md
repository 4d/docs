---
id: metodo-base-on-server-close-connection
title: Metodo base On Server Close Connection
slug: /commands/metodo-base-on-server-close-connection
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Server Close Connection.Syntax-->$1, $2, $3 -> Método base On Server Close Connection<!-- END REF-->
<!--REF #_command_.Metodo base On Server Close Connection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| $1 | Entero largo | &#8592; | Número de usuario utilizado internamente por 4D Server para identificar los usuarios |
| $2 | Entero largo | &#8592; | Número de conexión utilizada internamente por 4D Server para identificar una conexión |
| $3 | Entero largo | &#8592; | Obsoleto: devuelve siempre 0 pero debe declararse |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Metodo base On Server Close Connection.Summary-->El **Método base On Server Close Connection** se llama en el equipo servidor cada vez que termina un proceso 4D Client.<!-- END REF--> 

Como para el [Método base On Server Open Connection](metodo-base-on-server-open-connection.md), 4D Server pasa tres parámetros de tipo entero largo al **Método base On Server Close Connection**. Por otra parte, 4D Server no espera un resultado en retorno.

El método debe contener la declaración explícita de tres parámetros Entero largo:

```4d
 var $1;$2;$3 : Integer
```

Esta tabla detalla la información ofrecida por los tres parámetros pasados al método base:

| **Parámetro** | **Descripción**                                                                        |
| ------------- | -------------------------------------------------------------------------------------- |
| $1            | Número de usuario utilizado internamente por 4D Server para identificar usuarios       |
| $2            | Número de conexión utilizado internamente por 4D Server para identificar una conexiónn |
| $3            | Obsoleto: devuelve siempre 0 pero debe declararse                                      |

El **Método base On Server Close Connection** es el inverso exacto del [Método base On Server Open Connection](metodo-base-on-server-open-connection.md). Para mayor información y una descripción de este método base, así como para la descripción de los **procesos 4D Client**, ver la descripción de este método base.

#### Ejemplo 

Ver el primer ejemplo para [Método base On Server Open Connection](metodo-base-on-server-open-connection.md).
