---
id: client-server
title: Cliente/Servidor
sidebar_label: Cliente/Servidor
sidebar_position: 3
description: "Llaves XML BuildApplication del nodo CS, relativas a las aplicaciones cliente/servidor."
keywords: ["BuildApplication", "XML key", "CS", "client/server"]
---

Estas llaves definen opciones para las [aplicaciones cliente/servidor](../Desktop/building.md#clientserver-page). Se encuentran bajo el nodo `<CS>`.

```xml
<Preferences4D>
  <BuildApp>
    <CS>
      <BuildServerApplication>True</BuildServerApplication>
      <BuildCSUpgradeable>True</BuildCSUpgradeable>
      <IPAddress>myserver.example.com</IPAddress>
      <CurrentVers>3</CurrentVers>
    </CS>
  </BuildApp>
</Preferences4D>
```

## Resumen

| Llave | Valores | Descripción |
|---|---|---|
| [BuildServerApplication](#buildserverapplication) | True / False | Generar una aplicación cliente/servidor |
| [BuildCSUpgradeable](#buildcsupgradeable) | True / False | Generar aplicaciones de actualización de clientes |
| [IPAddress](#ipaddress) | Dirección IP o nombre de host | Dirección del servidor utilizada por los clientes |
| [PortNumber](#portnumber) | Número de puerto | Puerto TCP del servidor utilizado por los clientes |
| [ServerSelectionAllowed](#serverselectionallowed) | True / False | Permitir la caja de diálogo de selección del servidor cuando la conexión falla |
| [HardLink](#hardlink) | Texto (31 caracteres máx.) | Firma de las aplicaciones cliente y servidor |
| [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) | Ruta | Lista de autoridades de certificación de confianza, utilizada por los clientes para validar el certificado TLS del servidor |
| [CertificateDomainName](#certificatedomainname) | Texto | Nombres de dominio de confianza del certificado TLS del servidor |
| [CurrentVers](#currentvers) | Número | Versión actual de la aplicación generada |
| [RangeVersMin](#rangeversmin) | Número | Versión mínima de cliente autorizada a conectarse |
| [RangeVersMax](#rangeversmax) | Número | Versión máxima de cliente autorizada a conectarse |
| [LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Modo de enlace de datos del servidor |
| [MacCompiledDatabaseToWin](#maccompileddatabasetowin) | Ruta | Estructura compilada en macOS para los clientes Silicon |
| [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) | True / False | Incluir la estructura compilada en macOS en un servidor Windows |
| [ServerEmbedsProjectDirectoryFile](#serverembedsprojectdirectoryfile) | True / False | Copiar el archivo directory.json del proyecto en el servidor |
| [ServerDataCollection](#serverdatacollection) | True / False | Activar la recolección de datos en el servidor |
| [ServerStructureFolderName](#serverstructurefoldername) | Nombre de carpeta | Nombre de la carpeta de caché del servidor |
| [ClientServerSystemFolderName](#clientserversystemfoldername) | Nombre de carpeta | Nombre de la carpeta de caché del cliente |
| [ClientUserPreferencesFolderByPath](#clientuserpreferencesfolderbypath) | True / False | Carpeta de preferencias del usuario separada por ruta de cliente |
| [ClientWinSingleInstance](#clientwinsingleinstance) | True / False | Permitir una sola instancia del cliente en Windows |
| [ShareLocalResourcesOnWindowsClient](#sharelocalresourcesonwindowsclient) | True / False | Almacenar los recursos locales del cliente en una carpeta compartida en Windows |
| [HideAdministrationMenuItem](#hideadministrationmenuitem) | True / False | Ocultar la ventana de administración del servidor |
| [HideDataExplorerMenuItem](#hidedataexplorermenuitem) | True / False | Ocultar el elemento de menú Explorador de datos del servidor |
| [HideRuntimeExplorerMenuItem](#hideruntimeexplorermenuitem) | True / False | Ocultar el elemento de menú Explorador de ejecución del servidor |

## Generación

### BuildServerApplication

**Valores**: True / False (por defecto)

Si es True, se genera una aplicación cliente/servidor. La ruta de 4D Server debe definirse mediante la llave [ServerWinFolder](./source-files.md#serverwinfolder) o [ServerMacFolder](./source-files.md#servermacfolder).

### BuildCSUpgradeable

**Valores**: True / False (por defecto)

Si es True, se generan para macOS y Windows aplicaciones de actualización de clientes, listas para descargar.

## Conexión

### IPAddress

**Valores**: dirección IP o nombre de host

Dirección del servidor. Esta llave no es obligatoria ya que 4D dispone de mecanismos de red internos, pero es necesaria en algunos casos (WAN, números de puerto específicos, etc.). Ver [Gestión de la conexión de las aplicaciones clientes](../Desktop/merged-client-connections.md).

La dirección se almacena en el archivo "EnginedServer.4Dlink", en la carpeta Database de la aplicación cliente.

### PortNumber

**Valores**: número de puerto (por defecto 19813)

Puerto TCP del servidor. Esta llave sólo es necesaria cuando se ha modificado el puerto del servidor. El puerto se añade a la dirección almacenada en el archivo "EnginedServer.4Dlink" de la aplicación cliente.

:::caution

Esta llave sólo modifica el número de puerto del lado del cliente. Del lado del servidor, se utiliza el número de puerto de la base 4D que genera la aplicación. Para generar un servidor con un puerto personalizado, utilice [`SET DATABASE PARAMETER`](../commands/set-database-parameter) antes de llamar a [`BUILD APPLICATION`](../commands/build-application):

```4d
tempport:=Get database parameter(Client Server Port ID)
SET DATABASE PARAMETER(Client Server Port ID;21000)
BUILD APPLICATION("")
SET DATABASE PARAMETER(Client Server Port ID;tempport)
```

:::

### ServerSelectionAllowed

**Valores**: True / False

Configura la caja de diálogo de error que se muestra cuando fallan los mecanismos de conexión automática:

- **True**: la caja de diálogo da acceso a la ventana de selección del servidor.
- **False**: la caja de diálogo no da acceso a la ventana de selección del servidor.

Al presionar **Alt** (Windows) u **Opción** (macOS) al inicio, siempre se muestra la caja de diálogo de selección del servidor. Ver [Disponibilidad de la caja de diálogo de selección del servidor en caso de error](../Desktop/merged-client-connections.md#availability-of-the-server-selection-dialog-box-in-case-of-error).

:::note

En las bases binarias, esta llave requiere la opción de compatibilidad **Utilizar la nueva arquitectura para el despliegue de aplicaciones**.

:::

### HardLink

**Valores**: texto (31 caracteres como máximo)

Firma de las aplicaciones cliente y servidor.

### CertificateAuthoritiesCertificates

**Valores**: ruta

Ruta de un archivo que contiene la lista de autoridades de certificación (CA) de confianza y el nombre de dominio del certificado del servidor. Esta lista se copia en la aplicación cliente y se utiliza para validar el certificado enviado por 4D Server en la conexión.

Esta llave es útil cuando instala su propio certificado [TLS](../Admin/tls.md) en una aplicación cliente/servidor:

1. Copie sus archivos personalizados *key.pem* y *cert.pem* en la carpeta **Resources** de la aplicación servidor generada (junto al ejecutable del servidor):
   - Windows: `Client Server executable/<ApplicationName> Server/Resources`
   - macOS: `Client Server executable/<ApplicationName> Server.app` (la carpeta Resources se encuentra en el primer nivel del paquete)
2. Añada el certificado de su autoridad de certificación (generalmente proporcionado por la propia CA) a una lista de CA de confianza en formato PEM, y pase la ruta de esta lista a la llave **CertificateAuthoritiesCertificates**.

   La lista es un archivo de texto que contiene uno o varios certificados, cada uno precedido opcionalmente por un título. Por ejemplo, con una CA raíz y una CA intermedia (el contenido de los certificados está abreviado):

   ```text title="Lista de CA de confianza (PEM)"
   Root CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
   ...
   -----END CERTIFICATE-----

   Server CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIEkjCCA3qgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChML
   ...
   -----END CERTIFICATE-----
   ```

Para más información, consulte [esta entrada del blog](https://blog.4d.com/encryption-authentication-certificate-authority-validation).

### CertificateDomainName

**Valores**: texto (lista de nombres de dominio separados por punto y coma)

Lista de nombres de dominio de confianza para el certificado enviado por 4D Server en la conexión. Las aplicaciones cliente utilizan esta lista para verificar el nombre de dominio del certificado, tras validar su autoridad de certificación con [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) (el nombre de dominio no puede verificarse sin una validación previa de la CA).

## Versiones

El servidor verifica las versiones de cliente autorizadas a conectarse utilizando las siguientes llaves. Ver [Versión actual](../Desktop/building.md#current-version).

### CurrentVers

**Valores**: número de versión

Número de versión actual de la aplicación generada. Si no se utilizan [RangeVersMin](#rangeversmin) y [RangeVersMax](#rangeversmax), este número es sólo informativo. En caso contrario, el servidor lo lee para verificar si el cliente pertenece al rango autorizado.

### RangeVersMin

**Valores**: número de versión

Versión mínima del cliente (por ejemplo 2). Se invita a los clientes anteriores a actualizarse. Se utiliza con [RangeVersMax](#rangeversmax) y [CurrentVers](#currentvers).

### RangeVersMax

**Valores**: número de versión

Versión máxima del cliente (por ejemplo 3). Se invita a los clientes posteriores a actualizarse. Se utiliza con [RangeVersMin](#rangeversmin) y [CurrentVers](#currentvers).

## Servidor

### LastDataPathLookup

Define el [modo de enlace de datos](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) de la aplicación servidor:

| Valor | Búsqueda de la ruta del archivo de datos | Almacenamiento de la ruta del archivo de datos |
|---|---|---|
| InDbStruct | Ruta almacenada en el archivo de estructura | Dentro del archivo de estructura (funcionamiento heredado) |
| ByAppName | Entrada más reciente en *LastDataPath.xml* | Preferencias del usuario |
| ByAppPath | Entrada cuyo *executablePath* coincide con la ruta de la aplicación | Preferencias del usuario |

La misma llave existe para las aplicaciones monopuesto: [RuntimeVL/LastDataPathLookup](./runtime-vl.md#lastdatapathlookup).

### MacCompiledDatabaseToWin

**Valores**: ruta

Ruta de la carpeta que contiene la estructura compilada en macOS para Silicon e Intel. Se utiliza con [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) para [autorizar a los clientes Silicon Mac](../Desktop/building.md#allow-connection-of-silicon-mac-clients) a conectarse a un servidor generado en Windows.

### MacCompiledDatabaseToWinIncludeIt

**Valores**: True / False (por defecto)

Al generar un servidor en Windows, si es True, la estructura compilada en macOS designada por [MacCompiledDatabaseToWin](#maccompileddatabasetowin) se incluye en el servidor.

### ServerEmbedsProjectDirectoryFile

**Valores**: True / False (por defecto)

Si es True, el archivo [directory.json](../Users/handling_users_groups.md#directoryjson-file) de la carpeta de parámetros usuario del proyecto se copia en la carpeta de parámetros usuario del servidor generado. Ver [Integrar el proyecto Usuarios y Grupos en la aplicación servidor creada](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).

### ServerDataCollection

**Valores**: True (por defecto) / False

Cuando es False, la [recolección automática de datos](../Admin/data-collect.md) se desactiva en el servidor generado.

### ServerStructureFolderName

**Valores**: nombre de carpeta

Nombre personalizado de la carpeta de caché del servidor, creada en la Carpeta 4D activa dentro de la carpeta de la aplicación fusionada. Por defecto, el nombre es el de la aplicación fusionada. El nombre debe respetar las reglas del sistema operativo para los nombres de carpeta. Ver [Carpeta de caché del servidor](../Desktop/building.md#server-cache-folder).

```xml
<CS>
  <ServerStructureFolderName>MyCache_v1</ServerStructureFolderName>
</CS>
```

### HideAdministrationMenuItem

**Valores**: True / False (por defecto)

Si es True, en el servidor generado:

- el elemento **Administración** se elimina del menú **Ventana**,
- la ventana de administración no se muestra al inicio (aún puede mostrarse utilizando [`OPEN ADMINISTRATION WINDOW`](../commands/open-administration-window)).

### HideDataExplorerMenuItem

**Valores**: True / False (por defecto)

Si es True, el elemento de menú **Explorador de datos** se elimina del servidor generado.

### HideRuntimeExplorerMenuItem

**Valores**: True / False (por defecto)

Si es True, el elemento de menú **Explorador de ejecución** y su atajo (Cmd+Mayús+F9 en macOS, Ctrl+Mayús+F9 en Windows) se eliminan del servidor generado.

## Cliente

### ClientServerSystemFolderName

**Valores**: nombre de carpeta

Nombre personalizado de la carpeta de caché local de los clientes fusionados (la carpeta devuelta por [`Get 4D folder`](../commands/get-4d-folder)`(4D Client database folder)`). Por defecto, el nombre se construye a partir de información de la aplicación y del servidor. El nombre debe respetar las reglas del sistema operativo para los nombres de carpeta. Ver [Carpeta de caché cliente](../Desktop/building.md#client-cache-folder).

### ClientUserPreferencesFolderByPath

**Valores**: True / False (por defecto)

Útil cuando varios clientes fusionados con el mismo nombre, en la misma máquina, se conectan a servidores diferentes. Si es True, la carpeta de preferencias del usuario de cada cliente lleva como sufijo un hash de 3 dígitos de la ruta completa del cliente, de modo que cada cliente tiene su propia carpeta:

- **macOS**: `/Users/{UserAccount}/Library/Application Support/{ApplicationName} Client_{hash}`
- **Windows**: `\Users\{UserAccount}\AppData\Roaming\{ApplicationName}_{hash}`

[`Folder`](../commands/folder)`(fk user preferences folder)` y [`Get 4D folder`](../commands/get-4d-folder)`(Active 4D Folder)` devuelven entonces la ruta con el hash.

:::note

En las bases binarias, esta llave requiere la opción de compatibilidad **Utilizar la nueva arquitectura para el despliegue de aplicaciones**.

:::

### ClientWinSingleInstance

**Valores**: True (por defecto) / False

En Windows, por defecto sólo se puede abrir una instancia de una aplicación cliente en la misma sesión. Pase esta llave a False para permitir varias instancias:

```xml
<CS>
  <ClientWinSingleInstance>False</ClientWinSingleInstance>
</CS>
```

### ShareLocalResourcesOnWindowsClient

**Valores**: True / False (por defecto)

Define dónde almacenan los clientes fusionados Windows los *recursos locales* descargados del servidor (archivo .4dz, carpeta Libraries, carpeta Resources...):

- **False**: en la carpeta del usuario, `\Users\{UserAccount}\AppData\Local\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`
- **True**: en una carpeta compartida, `\ProgramData\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`

Una carpeta compartida ahorra tiempo de descarga y espacio en disco en entornos Remote Desktop Services o Citrix. Esta llave sólo se tiene en cuenta en los proyectos, para los clientes fusionados en Windows.

Cuando esta llave es True, la actualización de los clientes requiere un acceso de lectura/escritura a la carpeta ProgramData. Un administrador debe:

1. Desconectar a todos los usuarios y prohibir el acceso al cliente fusionado.
2. Actualizar el servidor fusionado.
3. En la sesión de administrador del servidor Remote Desktop, lanzar el cliente fusionado para que se actualice (automática o manualmente) y descargue los recursos locales en la carpeta compartida.
4. Restablecer el acceso de los usuarios al cliente fusionado.

Esto evita escrituras concurrentes en los recursos locales compartidos y errores de derechos de acceso.
