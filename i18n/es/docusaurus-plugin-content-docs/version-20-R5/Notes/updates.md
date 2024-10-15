---
id: updates
title: Notas del lanzamiento
---

## 4D 20 R5

Lea [**Novedades en 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-20-R5/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R5.

#### Lo más destacado

- Nuevo [Gestor de componentes](../Project/components.md) para gestionar componentes a través de un archivo `dependencies.json`.
- Soporte de estructuras de gestión de errores [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
- La capa de red QUIC ahora soporta [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), e [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
- Soporte de [selecciones de entidades restringidas](../ORDA/entities.md#restricting-entity-selections).
- Soporte de [clases compartidas](../Concepts/classes.md#shared-classes) y de [clases singleton](../Concepts/classes.md#singleton-classes). Nuevas propiedades de clase: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#isingleton), [`me`](../API/ClassClass.md#me).
- Soporte para [inicializar una propiedad de clase en su línea de declaración](../Concepts/classes.md/#initializing-the-property-in-the-declaration-line).
- Nuevo modo [forzar login para peticiones REST](../REST/authUsers.md#force-login-mode) con un [soporte específico en Qodly Studio para 4D](../WebServer/qodly-studio.md#force-login).
- Nuevo parámetro REST [$format](../REST/$format.md).
- El objeto [`Session`](../API/SessionClass.md#session) está ahora disponible en sesiones de usuario remotas y en sesiones de procedimientos almacenados.
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R5): lista de todos los bugs que se han corregido en 4D 20 R5.

#### Cambios de comportamiento

- Los plug-ins _4D Internet Commands_ y _4D for OCI_ ya no se incluyen en los instaladores de 4D. Para obtener estos plug-ins, necesita conectarse al [**portal de descarga de productos 4D**](https://product-download.4d.com/).
- Los cambios realizados en el editor de estructura en relación con el aspecto gráfico de las tablas y de los campos (color, posición, orden...) ahora se guardan en un archivo separado llamado `catalog_editor.json` almacenado en la carpeta [`Sources`](../Project/architecture.md#sources) del proyecto.

## 4D 20 R4

Lea [**Novedades en 4D 20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R4.

#### Lo más destacado

- Soporte de [formato de cifrado ECDSA\`](../Admin/tls.md#encryption) para certificados TLS.
- Las conexiones TLS cliente/servidor y servidor SQL ahora se [configuran dinámicamente](../Admin/tls.md#enabling-tls-with-the-other-servers) (no se requieren archivos de certificado).
- Formato HTML directo para [exportaciones de definición de estructura](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- Nuevo [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) que mejora el control del código durante los pasos de declaración, comprobación de sintaxis y compilación para evitar errores de ejecución.
- Los parámetros de métodos declarados en prototipos `#DECLARE` [ya no son necesarios en métodos "Compiler_"](../Concepts/parameters.md#compilation).
- Soporte de [formatos personalizados de fecha y hora](../Project/date-time-formats.md)
- Nueva [palabra clave `Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de error simples.
- Nuevo comando [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- Nueva opción de compatibilidad [Impresión no bloqueante](../settings/compatibility.md).
- Nuevo [modo de edición](../Admin/dataExplorer.md#editing-data) en el Explorador de datos.
- Comandos del lenguaje 4D: [Página de novedades](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos los bugs que se han corregido en 4D 20 R4.

#### Cambios de comportamiento

- El uso de una sintaxis heredada para declarar parámetros (por ejemplo, `C_TEXT($1)` o `var $1 : Text`) es obsoleto y genera advertencias en los pasos de escritura de código, verificación de sintaxis y compilación.
- La coherencia de las selecciones ahora se mantiene después de que se hayan eliminado algunos registros y se hayan creado otros (ver [esta entrada de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
- En la actualización de [la librería OpenSSL](#library-table), el nivel de seguridad SSL/TLS por defecto se ha cambiado de 1 a 2. Las llaves RSA, DSA y DH de 1024 bits o más y menos de 2048 bits, así como las llaves ECC de 160 bits o más y menos de 224 bits, ya no están permitidas. Por defecto, la compresión TLS ya estaba desactivada en versiones anteriores de OpenSSL. En el nivel de seguridad 2 no se puede activar.
- Para permitir la verificación de la contraseña cuando el [directorio de usuarios 4D utiliza el algoritmo bcrypt](https://blog.4d.com/bcrypt-support-for-passwords/), el valor "password" en el parámetro _connectionInfo_ del comando [`Open datastore`](../API/DataStoreClass.md#open-datastore) se envía ahora en claro por defecto. Asegúrese de que su método base "On REST authentication" puede manejar contraseñas en claro (el tercer parámetro es entonces **False**) y que `Open datastore` encripta su conexión pasando la opción "tls" a **True** en _connectionInfo_. En casos específicos, también se puede utilizar una nueva opción "passwordAlgorithm" para compatibilidad (ver [`Open datastore`](../API/DataStoreClass.md#open-datastore).

## 4D 20 R3

Lea [**Novedades en 4D 20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R3.

#### Lo más destacado

- Nueva función [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Soporte del parámetro _context_ en [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Soporte de la propiedad `headers` en el parámetro _connectionHandler_ de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Sello de modificación global](../ORDA/global-stamp.md) para ayudar a implementar módulos de sincronización de datos. Nuevas funciones: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) y [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- La asignación de referencias de archivo a atributos imagen/blob está [soportada en ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Soporte para [inicializar el valor de la variable y el tipo de datos en la línea de declaración](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Los parámetros del archivo de registro se guardan ahora [con el archivo de datos actual](../Backup/settings.md#log-file-management)
- Nueva sintaxis para [declarar parámetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: soporte de la [importación](../ViewPro/commands/vp-import-from-blob) y de la [exportación](../ViewPro/commands/vp-export-to-blob) de documentos 4D View Pro al formato Blob.
- Comandos del lenguaje 4D: [Página Novedades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos los bugs que se han corregido en 4D 20 R3.

#### Cambios de comportamiento

- Algunos errores eran detectables por su [método de gestión de errores](../Concepts/error-handling.md) solo en modo interpretado. Se ha realizado una corrección para que los siguientes errores se detecten también en modo compilado: _Indice fuera de rango_, _Tipo incompatible_ y _Derreferenciación de un puntero Null_. Sin embargo, para tales errores en los procesadores Intel, el procedimiento se sigue interrumpiendo como antes, mientras que en los procesadores Apple Silicon el procedimiento solo se interrumpe si se llama al comando [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html).
- 4D ya no incluye un intérprete PHP interno. Necesita [configurar y ejecutar su propio intérprete PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) para utilizar comandos PHP.

## 4D 20 R2

Lea [**Novedades en 4D 20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R2.

:::warning Nota de seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D 20 R2 HF1 build 100440 o superior. Para más información, consulte este [Boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Lo más destacado

- Nueva [clase WebSocket](../API/WebSocketClass.md) para crear y gestionar conexiones WebSocket cliente desde 4D.
- Nueva capa de red QUIC [configuración de interfaz](../settings/client-server.md#network-layer).
- 4D View Pro: soporte del formato de archivo **.sjs** para [la importación](../ViewPro/commands/vp-import-document) y la [exportación](../ViewPro/commands/vp-export-document) de documentos.
- Comandos del lenguaje 4D: [Página Novedades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) en doc.4d.com.
- Interfaz Write Pro 4D: nuevo [Asistente de tablas](../WritePro/writeprointerface.md).
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos los bugs que se han corregido en 4D 20 R2.

#### Cambios de comportamiento

- **Atención**: el valor inicial [`offset`](../API/FileHandleClass.md#offset) de los objetos [4D.FileHandle](../API/FileHandleClass.md) estaba incorrectamente definido en 1 en lugar de 0. Se ha hecho una corrección en 4D a partir de las versiones **20.1 HF1** y **20 R2** y el valor ahora es 0.

## 4D 20.x LTS

See [**Release Notes for 4D 20.x LTS**](../../version-20/Notes/updates.md).

## Tabla de la librería

| Librería  | Versión actual                         | Actualizado en 4D    | Comentario                                                                                                                                                     |
| --------- | -------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ICU       | 73.2                   | 20.1 | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto.                                  |
| CEF       | 121                                    | 20 R5                | Chromium 6167                                                                                                                                                  |
| Hunspell  | 1.7.2  | 20                   | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                                                                      |
| PDFWriter | 4.3                    | 20                   | Dependencia FreeType en 12.2.1                                                                                                 |
| SpreadJS  | 16.2.6 | 20 R4                | Motor 4D View Pro                                                                                                                                              |
| OpenSSL   | 3.2.0  | 20 R4                | Se ha actualizado el nivel de seguridad TLS/SSL por defecto. Ver [Cambios de comportamiento](#cambios-de-comportamiento) para la versión 20 R4 |
| libZip    | 1.9.2  | 20                   | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                                                         |
| LZMA      | 5.4.1  | 20                   |                                                                                                                                                                |
| Zlib      | 1.2.13 | 20                   |                                                                                                                                                                |
| webKit    | WKWebView                              | 19                   |                                                                                                                                                                |
| PHP       | 8.2.4  | 20                   |                                                                                                                                                                |
| libldap   | 2.6.4  | 20 R3                |                                                                                                                                                                |
| libsasl   | 2.1.28 | 20                   |                                                                                                                                                                |
