---
id: web-get-server-info
title: WEB Get server info
slug: /commands/web-get-server-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get server info.Syntax-->**WEB Get server info** {( *withCache* )} : Object<!-- END REF-->
<!--REF #_command_.WEB Get server info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| withCache | Boolean | &#8594;  | True to return the Web cache description. Otherwise (default), the cache description is not returned. |
| Function result | Object | &#8592; | Information on the running Web server and SOAP server |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Get server info.Summary-->The **WEB Get server info** command returns an object containing detailed runtine information on the 4D Web server current session.<!-- END REF--> Returned information include the SOAP server.

**Note:** This command returns runtime information, *i.e.* actual parameters used by the Web server. These parameters can differ from those returned by the [WEB GET OPTION](web-get-option.md) command since they depend on system settings, available resources, etc. 

By default, the command does not return the "cache" property, since it can be a very large. However, if you want to know the cache contents, pass True in the *withCache* optional parameter.

The returned object contains the following properties (property names are case sensitive):

| **Property**                | **Value type** | **Description**                                                                                                                                                                                                    |
| --------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| started                     | Boolean        | True if the http server is started, False otherwise                                                                                                                                                                |
| uptime                      | Number         | Time elapsed since last startup of the http server                                                                                                                                                                 |
| httpRequestCount            | Number         | Number of http hits received by the server since it was started                                                                                                                                                    |
| startMode                   | Text         | "automatic" if “Launch Web Server at Startup" is checked, otherwise "manual".                                                                                                                                      |
| SOAPServerStarted           | Boolean        | True if the SOAP server is started, False otherwise                                                                                                                                                                |
| cache                       | Object         | *This property is included only if the* withCache *parameter is True*. Describes the contents of the web server cache (see *cache property* below)                                                                 |
| security                    | Object         | Current status of the various security options                                                                                                                                                                     |
| cipherSuite                 | Text         | Cipher list used by 4D for the secure protocol (corresponds to the SSL cipher list database parameter)                                                                                                             |
| HTTPEnabled                 | Boolean        | True if HTTP is enabled                                                                                                                                                                                            |
| HTTPSEnabled                | Boolean        | True if HTTPS is enabled                                                                                                                                                                                           |
| HSTSEnabled                 | Boolean        | True if HSTS is activated on the server                                                                                                                                                                            |
| HSTSMaxAge                  | Number         | Maximum age (in seconds) for HSTS. The default is 2 years (63,072,000 seconds).                                                                                                                                    |
| minTLSVersion               | Text         | Minimum TLS version accepted for connections (corresponds to the Min TLS version database parameter)                                                                                                               |
| openSSLVersion              | Text         | Version of the used OpenSSL library                                                                                                                                                                                |
| perfectForwardSecrecy       | Boolean        | True if PFS is available on the server, False otherwise                                                                                                                                                            |
| options                     | Object         | Current status of various standard web server options                                                                                                                                                              |
| CORSEnabled                 | Boolean        | True if the CORS service is enabled on the server, False otherwise (default)                                                                                                                                       |
| CORSSettings                | Collection     | Collection of CORS objects defining the list of allowed host(s) and method(s) (see Web CORS settings web option)                                                                                                   |
| webCharacterSet             | Text         | Character set name (corresponds to the Web character set web option)                                                                                                                                               |
| webHTTPCompressionLevel     | Number         | Compression level for compressed HTTP exchanges (corresponds to the Web HTTP compression level web option)                                                                                                         |
| webHTTPCompressionThreshold | Number         | Compression threshold (corresponds to the Web HTTP compression threshold web option)                                                                                                                               |
| webHTTPSPortID              | Number         | TCP port number used by the Web server for secure connections (corresponds to the Web HTTPS port ID web option)                                                                                                    |
| *webInactiveProcessTimeout* | Number         | **Not significant in scalable web sessions mode, see *Web Sessions Management (Legacy)***. Life duration of the inactive session processes (corresponds to the Web inactive process timeout web option)            |
| *webInactiveSessionTimeout* | Number         | **Not** **significant** **in** **scalable** **web sessions mode, see *Web Sessions Management (Legacy)***. Life duration of the inactive sessions (corresponds to the Web inactive session timeout web option)     |
| webIPAddressToListen        | Collection     | IP address(e) in the defined "format" on which the web server receives http requests (corresponds to the Web IP address to listen web option)                                                                      |
| *webMaxConcurrentProcesses* | Number         | **Not** **significant** **in** **scalable** **web sessions mode, see *Web Sessions Management (Legacy)***. Maximum number of concurrent web processes (corresponds to the Web max concurrent processes web option) |
| webPortID                   | Number         | TCP port used by the Web server (corresponds to the Web port ID web option)                                                                                                                                        |

**4D Server:** The command returns information about the local Web server. If you want to monitor the 4D Server web server from a remote 4D, you need to apply the "Execute on server" property to the method.

##### cache property 

If you pass **true** in the *withCache* parameter, the command returns the "cache" object property with the following contents:

| **Property name** | **Value type** | **Description**                                                                                                                               |
| ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| cacheUsage        | Number         | Cache usage rate                                                                                                                              |
| numOfLoads        | Number         | Number of loaded objects                                                                                                                      |
| currentSize       | Number         | Cache current size                                                                                                                            |
| maxSize           | Number         | Cache maximum size                                                                                                                            |
| objectMaxSize     | Number         | Maximum size of objects loadable in the cache                                                                                                 |
| enabled           | Boolean        | true if the web server cache is enabled                                                                                                       |
| nbCachedObjects   | Number         | Number of objects in the cache                                                                                                                |
| cachedObjects     | Collection     | Collection of objects in the cache. Each cached object is defined by different properties (url, mimeType, expirationType, lastModified, etc.) |

#### Example 

After you execute the following code:

```4d
 $webServerInfo:=WEB Get server info(True)
```

... $webServerInfo will contain for example:

```json
{
    "started": true,
    "uptime": 40,
    "SOAPServerStarted": true,
    "startMode": "manual",
    "httpRequestCount": 0,
    "options": {
        "CORSEnabled": false,
        "CORSSettings": null,
        "webCharacterSet": "UTF-8",
        "webHTTPCompressionLevel": 1,
        "webHTTPCompressionThreshold": 1024,
        "webHTTPSPortID": 443,
        "webIPAddressToListen": ["192.168.xxx.xxx"],
        "webInactiveProcessTimeout": 28800,
        "webInactiveSessionTimeout": 28800,
        "webMaxConcurrentProcesses": 100,
        "webPortID": 80
    },
    "security": {
        "HTTPEnabled": true,
        "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",
        "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",
        "perfectForwardSecrecy": true,
        "minTLSVersion": "1.2"
    },
    "cache": {
        "cacheUsage": 1,
        "numOfLoads": 24,
        "currentSize": 154219,
        "maxSize": 10485760,
        "objectMaxSize": 524288,
        "enabled": true,
        "nbCachedObjects": 23,
        "cachedObjects": [
            { ... },
            { ... }
        ]
    }
}

```

#### See also 

[License info](../commands/license-info.md)  
[Process activity](../commands/process-activity.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  