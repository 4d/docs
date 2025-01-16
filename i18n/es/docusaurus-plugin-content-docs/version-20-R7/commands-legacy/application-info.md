---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->
<!--REF #_command_.Application info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Información sobre la actividad de la aplicación activa |

<!-- END REF-->

#### Descripción

<!--REF #_command_.Application info.Summary-->El comando **Application info** devuelve un objeto que ofrece información detallada sobre la actividad de la aplicación activa y la configuración de la red.<!-- END REF-->

El comando se puede ejecutar en aplicaciones que se ejecutan en entornos independientes y cliente/servidor. La información devuelta depende de donde se ejecuta **Application info**. Por ejemplo, si se ejecuta desde un 4D remoto, la información solo se aplica a la estación de trabajo remota. Sin embargo, si se selecciona *Atributo Ejecutar en servidor*, la información devuelta se aplica al servidor.

El objeto devuelto contiene las siguientes propiedades:

| **Propiedad**               | **Tipo**  | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **Ejemplo**                                     |
| --------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| cpuUsage(\*)                | número    | Porcentaje de procesador utilizado por 4D. Nota, para Macs, el número mostrado es para 1 núcleo y representa un promedio para el procesador.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 10.03                                           |
| headless                    | booleano  | True si la aplicación se ejecuta en modo sin interfaz. Valores posibles: true, false. Para más información, consulte *Interfaz de línea de comando*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | false                                           |
| IPAddressesAllowDeny        | colección | Sólo 4D Server. Devuelve una colección de direcciones IP permitidas o denegadas en los parámetros de la base. Para más información, ver *Configuración IP* .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode                  | cadena    | Propiedad que describe si la dirección IP está permitida o no. Valores posibles: "allow" o "deny"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | "allow"                                         |
| \[ \].ip                    | cadena    | Dirección IP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | "192.167.1.2"                                   |
| IPAddressesToListen         | colección | Sólo 4D Server. Devuelve las direcciones IP que 4D Server escucha. Para más información, ver *Configuración IP* .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | \["192.168.18.12","192.168.18.10"\]             |
| launchedAsService           | booleano  | True si la aplicación se inició como un servicio. Valores posibles: true, false. Para más información, consulte *Registrar una base como servicio*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | false                                           |
| networkInputThroughput(\*)  | número    | La tasa de datos (bytes/segundos) para la entrada de red de la máquina que ejecuta la aplicación. En modo remoto, se devuelve la tasa de la máquina remota. Para más información, ver *Página Monitor*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 37311495                                        |
| networkOutputThroughput(\*) | número    | La tasa de datos (bytes/segundos) para la salida de red de la máquina que ejecuta la aplicación. En modo remoto, se devuelve la tasa de la máquina remota. Para más información, ver *Página Monitor*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 88058023                                        |
| newConnectionsAllowed       | booleano  | Sólo 4D Server. True si se permiten nuevas conexiones. Valores posibles: true, false. Para más información, ver .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | true                                            |
| pid                         | número    | ID del proceso de instancia de la aplicación 4D (suministrado por el SO) -- permite identificar cada instancia 4D en ejecución, por ejemplo desde un script externo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 16600                                           |
| portID                      | número    | 4D Server: puerto para escucha activa, 4D remoto: puerto para conexiones remotas. No devuelto en entorno autónomo. Mínimo: 1\. Para más información, consulte *Número de puerto*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 19814                                           |
| remoteDebuggerSessionID     | texto     | El ID de la sesión de la aplicación remota a la que está conectado el depurador del servidor. Este ID también es devuelto por [Process activity](../commands/process-activity.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | "A838A40BJN3NJKH..."                            |
| SDIMode                     | booleano  | True si la aplicación se ejecuta en modo SDI en Windows (inútil en macOS). Valores posibles: true, false. Para más información, consulte [modo SDI](https://developer.4d.com/docs/Menus/sdi) en *developer.4d.com*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | true                                            |
| TLSEnabled                  | booleano  | True si TLS está habilitado para las comunicaciones cliente/servidor. No devuelto en entorno autónomo. Valores posibles: true, false. Para más información, consulte *El protocolo TLS y las conexiones cliente/servidor*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | true                                            |
| uptime                      | número    | Tiempo transcurrido (en segundos) desde que se abrió la base de datos 4D local. Para conexiones remotas, devuelve el tiempo transcurrido desde que se realizó la conexión.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 143                                             |
| useLegacyNetworkLayer       | booleano  | True si la capa de red heredada se usa para el servidor de aplicaciones. No devuelto en entorno autónomo. Valores posibles: true, false. Para más información, consulte *Activar o desactivar la capa de red antigua*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | false                                           |
| useQUICNetworkLayer         | booleano  | True si la capa de red QUIC utilizada para el servidor de la aplicación y el servidor db4d (*beta* en 4D v20, ver *Página Compatibilidad*). No devuelto en entorno monopuesto. Valores posibles: true, false. Para más información ver [este blog post](https://blog.4d.com/quic-network/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | false                                           |
| volumeShadowCopyStatus      | cadena    | Devuelve el estado del Servicio Volume Shadow Copy. Sólo en Windows. Para más información, consulte *Utilizar Servicio Volume Shadow Copy en Windows*. Valores posibles: <table> <thead> <tr> <td>Constante</td> <td>Valor</td> <td>Comentario</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>available</td> <td>El servicio está disponible.</td> </tr><tr> <td>vss error</td> <td>error</td> <td>El servicio experimentó un error.</td> </tr><tr> <td>vss not available</td> <td>notAvailable</td> <td>El servicio no está disponible.</td> </tr><tr> <td>vss update required</td> <td>updateRequired</td> <td>El servicio necesita actualizarse.</td> </tr> </tbody> </table> | "available"                                     |

(\*) En Windows, debe inicializar previamente este contador, por ejemplo, mediante una llamada al comando **Application info** en el [Método base On Startup](metodo-base-on-startup.md).

#### Ejemplo

El siguiente código devuelve un objeto que contiene información sobre la aplicación en ejecución:

```4d
 var $appInfo : Object
 $appInfo:=Application info
```

Si el código se ejecuta desde un entorno autónomo, el objeto contiene (por ejemplo):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "uptime": 469,
  "headless": false,
  "pid": 16500,
  "networkInputThroughput": 377263157,
  "networkOutputThroughput": 12345242236
}
```

Si el código se ejecuta en un cliente 4D remoto, el objeto contiene (por ejemplo):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 143,
  "headless": false,
  "pid": 1550,
  "useLegacyNetworkLayer": true,
  "networkInputThroughput": 268047058,
  "networkOutputThroughput": 12207686274
}
```

Si el código se ejecuta en 4D Server, el objeto contiene (por ejemplo):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.016125,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 192,
  "headless": false,
  "pid": 9560,
  "useLegacyNetworkLayer": true,
  "useQUICNetworkLayer": false,
  "newConnectionsAllowed": true,
  "IPAddressesToListen": [
    "192.168.18.8",
    "192.168.18.7"
  ],
  "IPAddressesAllowDeny": [
    {
      "mode": "allow",
      "ip": "192.168.*"
    },
    {
      "mode": "deny",
      "ip": "192.167.15.3"
    },
    {
      "mode": "allow",
      "ip": "192.167.1.2"
    }
  ],
  "networkInputThroughput": 149014925,
  "networkOutputThroughput": 80238805
}
```

#### Ver también 

[Execute on server](execute-on-server.md)  
[Get database parameter](get-database-parameter.md)  
[System info](system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1599 |
| Hilo seguro | &check; |


