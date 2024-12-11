---
id: soap-get-info
title: SOAP get info
slug: /commands/soap-get-info
displayed_sidebar: docs
---

<!--REF #_command_.SOAP get info.Syntax-->**SOAP get info** ( *numInfo* ) : Text<!-- END REF-->
<!--REF #_command_.SOAP get info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numInfo | Integer | &#8594;  | Número de tipo de información SOAP a obtener |
| Resultado | Text | &#8592; | Información SOAP |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SOAP get info.Summary-->El comando **SOAP get info** permite recuperar bajo la forma de cadena de caracteres diferentes tipos de información relacionada con una petición SOAP.<!-- END REF--> 

Cuando procesa una petición SOAP, puede ser útil obtener información adicional, diferente a los valores de los parámetros RPC, sobre la petición. Por ejemplo, por razones de seguridad, puede utilizar este comando en el *Método base On Web Authentication* para conocer el nombre del método Web service solicitado. 

Pase en el parámetro *numInfo* el número del tipo de información SOAP que quiere conocer. Puede utilizar las siguientes constantes predefinidas, ubicadas en el tema *Servicios Web (Servidor)*:

| Constante         | Tipo         | Valor | Comentario                                                         |
| ----------------- | ------------ | ----- | ------------------------------------------------------------------ |
| SOAP method name  | Entero largo | 1     | Nombre del método ofrecido como servicio web a punto de ejecutarse |
| SOAP service name | Entero largo | 2     | Nombre del servicio web al que pertenece el método                 |

**Nota:** por razones de seguridad, es posible obtener el tamaño máximo de las peticiones de servicios web enviadas a 4D. Esta configuración se lleva a cabo utilizando el comando [SET DATABASE PARAMETER](set-database-parameter.md) (Tema “Definición estructura”).

#### Ver también 

[SET DATABASE PARAMETER](set-database-parameter.md)  
[SOAP SEND FAULT](soap-send-fault.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 784 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


