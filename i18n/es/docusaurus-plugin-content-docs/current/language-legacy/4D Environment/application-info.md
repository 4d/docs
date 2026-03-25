---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->
<!--REF #_command_.Application info.Params-->
<div class="no-index">

| Parámetro | Tipo   |                             | Descripción                                            |
| ---------- | ------ | --------------------------- | ------------------------------------------------------ |
| Resultado  | Object | &#8592; | Información sobre la actividad de la aplicación activa |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                              |
| ----------- | ----------------------------------------------------------- |
| 21 R2       | Soporte de las propiedades "useFluentUI" y "canUseFluentUI" |

</details>
</div>


## Descripción

<!--REF #_command_.Application info.Summary-->El comando **Application info** devuelve un objeto que brinda información detallada sobre la actividad de la aplicación activa y la configuración de red.<!-- END REF-->

El comando puede ejecutarse en aplicaciones que funcionen tanto en entornos autónomos como cliente/servidor. La información devuelta depende de dónde se ejecute **Application info**. Por ejemplo, si se ejecuta desde un 4D remoto, la información sólo se aplica a la estación de trabajo remota. Si el comando se llama en un método que se ejecuta en el servidor, la información devuelta se aplica al servidor.

El objeto devuelto contiene las siguientes propiedades:

| **Propiedad** | **Tipo**    | **Description**  | **Ejemplo** |                                                                   
| --------------------------- | ---------- | --- | ---------- |
| canUseFluentUI|boolean|True si la configuración en ejecución (aplicación y sistema) [permite a la aplicación utilizar Fluent UI en Windows](../../FormEditor/forms.md#requirements) (inútil en macOS). Valores posibles: true, false.|true|                                                                                                                                      
| cpuUsage(\*)| number |Porcentaje de procesador utilizado por 4D. Tenga en cuenta que, en el caso de los Mac, el número que se muestra corresponde al núcleo 1 y representa una media para el procesador.| 10.03 |
| headless | boolean | True si la aplicación se ejecuta en modo sin interfaz. Valores posibles: true, false. Para obtener más información, ver [Interfaz de línea de comando](../../Admin/cli.md).   | false                            
| IPAddressesAllowDeny | collection | Sólo 4D Server. Devuelve una colección de direcciones IP autorizadas o denegadas en los parámetros de la base de datos. Para más información, consulte [Configuración IP](../../settings/client-server.md#ip-configuration-page). | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode | string     | Propiedad que describe si la dirección IP está permitida o no. Valores posibles: "allow" o "deny" | "allow"|
| \[ \].ip   | string     | Dirección IP | "192.167.1.2"  |
| IPAddressesToListen | collection | Sólo 4D Server. Devuelve las direcciones IP que 4D Server escucha. Para más información, consulte [Configuración IP](../../settings/client-server.md#ip-configuration-page). | \["192.168.18.12","192.168.18.10"\] |
| launchedAsService | boolean | True si la aplicación se lanza como un servicio. Valores posibles: true, false. Para más información, consulte *Registrar una base de datos como servicio*. | false |
| networkInputThroughput(\*) | number | La velocidad de transmisión de datos (bytes/segundos) para la entrada de red de la máquina que ejecuta la aplicación. En modo remoto, se devuelve la tasa de la máquina remota. Para más información, consulte [Página Monitor](../../ServerWindow/monitor.md). | 37311495 |
| networkOutputThroughput(\*) | number | La velocidad de transmisión de datos (bytes/segundos) para la salida de red de la máquina que ejecuta la aplicación. En modo remoto, se devuelve la tasa de la máquina remota. Para más información, consulte [Página Monitor](../../ServerWindow/monitor.md). | 88058023 |
| newConnectionsAllowed                                                            | boolean    | Sólo 4D Server. True si se permiten nuevas conexiones. Valores posibles: true, false. Para más información, consulte [Botón Aceptar/Rechazar de nuevas conexiones](../../ServerWindow/application-server.md#acceptreject-new-connections).| true |
| pid | number | ID del proceso de instancia de la aplicación 4D (suministrado por el SO) -- permite identificar cada instancia 4D en ejecución, por ejemplo desde un script externo | 16600|
| portID | number |4D Server: puerto para escucha activa, 4D remoto: puerto para conexiones remotas. No se devuelve en un entorno autónomo. Mínimo: 1\. Para más información, consulte [Número de puerto](../../settings/client-server.md#port-number). | 19814 |
| remoteDebuggerSessionID | text       | ID de sesión de la aplicación remota a la que está conectado el depurador del servidor. Este ID también es devuelto por [Process activity](../commands/process-activity). | "A838A40BJN3NJKH..." |
| SDIMode | boolean | True si la aplicación se ejecuta en modo SDI en Windows (inútil en macOS). Valores posibles: true, false. Para más información, consulte [Modo SDI](../../Menus/sdi.md) | true |
| TLSEnabled | boolean | True si TLS está habilitado para las comunicaciones cliente/servidor. No se devuelve en un entorno autónomo. Valores posibles: true, false. Para más información, ver [Encriptar comunicaciones cliente-servidor](../../settings/client-server.md#encrypt-client-server-communications). |
| uptime | number | Tiempo transcurrido (en segundos) desde que se abrió la base 4D local. Para conexiones remotas, devuelve el tiempo transcurrido desde que se estableció la conexión. | 143 |
| useFluentUI | boolean | True si la aplicación está [ejecutándose en Fluent UI](../../FormEditor/forms.md#fluent-ui-rendering) en Windows (inútil en macOS). Valores posibles: true, false. | true |
| useLegacyNetworkLayer | boolean | *Obsoleto*, siempre False. | false |
| useQUICNetworkLayer | boolean | True si se utiliza la [capa de red QUIC](../../settings/client-server.md#network-layer) para el servidor de aplicaciones y el servidor db4d. No se devuelve en un entorno autónomo. Valores posibles: true, false. Para más información, consulte [esta entrada de blog](https://blog.4d.com/quic-network/). | false |
| volumeShadowCopyStatus  | string  | Devuelve el estado del Servicio Volume Shadow Copy. Sólo Windows. Para más información, consulte *Uso de Volume Shadow Copy Service en Windows*.  Valores posibles: <table> <thead> <tr> <td>Constante</td> <td>Valor</td> <td>Comentario</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>disponible</td> <td>El servicio está disponible.</td> </tr><tr> <td>error vss</td> <td>error</td> <td>El servicio ha experimentado un error.</td> </tr><tr> <td>vss no disponible</td> <td>noDisponible</td> <td>El servicio no está disponible.</td> </tr><tr> <td>vss actualización requerida</td> <td>updateRequired</td> <td>Es necesario actualizar el servicio.</td> </tr> </tbody> </table> | "disponible" |

(\*) En Windows, es necesario obtener este contador previamente inicializado, por ejemplo mediante una llamada al comando **Application info** en el método [On Startup database method](../commands/on-startup-database-method).

## Ejemplo

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

Si el código se ejecuta desde un cliente remoto 4D, el objeto contiene (por ejemplo):

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

## Ver también

[Execute on server](../commands/execute-on-server)  
[Get database parameter](../commands/get-database-parameter)  
[System info](../commands/system-info)  
[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1599                        |
| Hilo seguro       | &check; |
