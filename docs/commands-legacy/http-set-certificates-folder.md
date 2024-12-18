---
id: http-set-certificates-folder
title: HTTP SET CERTIFICATES FOLDER
slug: /commands/http-set-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Syntax-->**HTTP SET CERTIFICATES FOLDER** ( *certificatesFolder* )<!-- END REF-->
<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| certificatesFolder | Text | &#8594;  | Pathname and name of client certificates folder |

<!-- END REF-->

:::info Compatibility

This command is maintained for compatibility reasons only. It is now recommended to use the [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Description 

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Summary-->The **HTTP SET CERTIFICATES FOLDER** command modifies the active client certificates folder for all processes of the current session.<!-- END REF--> 

The client certificates folder is the one where 4D looks for the client certificate files that are required by Web servers. By default, as long as the **HTTP SET CERTIFICATES FOLDER** command is not executed, 4D uses a folder named "ClientCertificatesFolder" that is created next to the structure file. This folder is only created when necessary.

 In 4D v14, it is now possible to use several client certificates.

In *certificatesFolder*, pass the pathname of the custom folder containing the client certificates. You can pass either a pathname relative to the application structure file, or an absolute pathname. The path must be expressed using the system syntax, for example:

* (OS X): Disk:Applications:myserv:folder
* (Windows): C:\\Applications\\myserv\\folder

Once this command has been executed, the new path is immediately taken into account by commands such as [HTTP Request](http-request.md) that are executed later on (you do not have to restart the application). It is used in all the processes of the database.

If the folder specified does not exist at the location defined, or if the pathname passed in *certificatesFolder* is not valid, an error is generated. You can intercept this error using an error-handling method installed by the [ON ERR CALL](on-err-call.md) command. 

#### About SSL certificates 

As described in [this page](https://developer.4d.com/docs/Admin/tls), SSL certificates managed by 4D must be in the **PEM format**. If your certificate provider (for example, [startssl](https://www.startssl.com/)) sends you a certificate that is in a binary format such as .crt, .pfx or .p12 (the format also depends on your browser), you have to convert it to PEM format in order to be able to use it. There are Web sites such as *sslshopper* where you can do this conversion on-line.

#### Example 

You want to change certificates folder temporarily:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //save current folder
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // execution of specific requests
 HTTP SET CERTIFICATES FOLDER($certifFolder) //restore previous folder
```

#### See also 

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  
[HTTP Get certificates folder](http-get-certificates-folder.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1306 |
| Thread safe | &check; |


