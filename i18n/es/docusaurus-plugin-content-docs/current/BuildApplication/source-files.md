---
id: source-files
title: Archivos fuente
sidebar_label: Archivos fuente
sidebar_position: 4
description: "Llaves XML BuildApplication del nodo SourcesFiles: ubicaciones de 4D Volume Desktop y 4D Server, iconos, licencias OEM."
keywords: ["BuildApplication", "XML key", "SourcesFiles", "4D Volume Desktop", "icon"]
---

Estas llaves designan las aplicaciones fuente (4D Volume Desktop, 4D Server) y los iconos utilizados para la generación. Se encuentran bajo el nodo `<SourcesFiles>`, en un subnodo `<RuntimeVL>` para las aplicaciones monopuesto y en un subnodo `<CS>` para las aplicaciones cliente/servidor.

Todas las rutas pueden ser absolutas o relativas al archivo de estructura. Una llave `...IncludeIt` con el valor True es necesaria para que la aplicación correspondiente se incluya en la generación.

## Aplicación monopuesto (RuntimeVL)

```xml
<Preferences4D>
  <BuildApp>
    <SourcesFiles>
      <RuntimeVL>
        <RuntimeVLIncludeIt>True</RuntimeVLIncludeIt>
        <RuntimeVLWinFolder>C:\4D\4D Volume Desktop\</RuntimeVLWinFolder>
        <RuntimeVLIconWinPath>C:\MyApp\MyApp.ico</RuntimeVLIconWinPath>
      </RuntimeVL>
    </SourcesFiles>
  </BuildApp>
</Preferences4D>
```

| Llave | Valores | Descripción |
|---|---|---|
| <a name="runtimevlincludeit"></a>RuntimeVLIncludeIt | True / False | Debe ser True para incluir el 4D Volume Desktop designado por las siguientes llaves |
| <a name="runtimevlwinfolder"></a>RuntimeVLWinFolder | Ruta | Carpeta de 4D Volume Desktop para Windows |
| <a name="runtimevlmacfolder"></a>RuntimeVLMacFolder | Ruta | Paquete de 4D Volume Desktop para macOS |
| <a name="runtimevliconwinpath"></a>RuntimeVLIconWinPath | Ruta | Icono de la aplicación para Windows (.ico) |
| <a name="runtimevliconmacpath"></a>RuntimeVLIconMacPath | Ruta | Icono de la aplicación para macOS (.icns, el archivo info.plist se actualiza) |
| [IsOEM](#isoem) | True / False | Incluir las licencias de despliegue OEM |

RuntimeVLWinFolder y RuntimeVLMacFolder son obligatorias si [BuildApplicationSerialized](./general.md#buildapplicationserialized) es True. En caso contrario, se devuelve un error y se detiene la generación.

Si se omite una llave de icono, se utiliza el icono por defecto de 4D Volume Desktop. Ver también [Personalizar los iconos de una aplicación](../Desktop/building.md#customizing-application-icons).

## Aplicación cliente/servidor (CS)

```xml
<Preferences4D>
  <BuildApp>
    <SourcesFiles>
      <CS>
        <ServerIncludeIt>True</ServerIncludeIt>
        <ServerWinFolder>C:\4D\4D Server\</ServerWinFolder>
        <ClientWinIncludeIt>True</ClientWinIncludeIt>
        <ClientWinFolderToWin>C:\4D\4D Volume Desktop\</ClientWinFolderToWin>
      </CS>
    </SourcesFiles>
  </BuildApp>
</Preferences4D>
```

### Servidor

| Llave | Valores | Descripción |
|---|---|---|
| <a name="serverincludeit"></a>ServerIncludeIt | True / False | Debe ser True para incluir el 4D Server designado por las siguientes llaves |
| <a name="serverwinfolder"></a>ServerWinFolder | Ruta | Carpeta de 4D Server para Windows |
| <a name="servermacfolder"></a>ServerMacFolder | Ruta | Carpeta de 4D Server para macOS |
| <a name="servericonwinpath"></a>ServerIconWinPath | Ruta | Icono del servidor para Windows (.ico) |
| <a name="servericonmacpath"></a>ServerIconMacPath | Ruta | Icono del servidor para macOS (.icns, el archivo info.plist se actualiza) |

ServerWinFolder y ServerMacFolder son obligatorias si [BuildServerApplication](./client-server.md#buildserverapplication) es True. En caso contrario, se devuelve un error y se detiene la generación.

Si se omite una llave de icono, se utiliza el icono por defecto de 4D Server.

### Clientes

Las llaves cliente se nombran en función de la plataforma de la aplicación cliente (`ClientWin...`, `ClientMac...`) y de la plataforma de la máquina de generación (`...ToWin`, `...ToMac`, `...ForWinPath`, `...ForMacPath`).

| Llave | Valores | Descripción |
|---|---|---|
| <a name="clientwinincludeit"></a>ClientWinIncludeIt | True / False | Debe ser True para incluir el cliente Windows designado por ClientWinFolderToWin o ClientWinFolderToMac |
| <a name="clientwinfoldertowin"></a>ClientWinFolderToWin | Ruta | 4D Volume Desktop para Windows, al generar en Windows |
| <a name="clientwinfoldertomac"></a>ClientWinFolderToMac | Ruta | 4D Volume Desktop para Windows o archivo **.4darchive** Windows, al generar en macOS |
| <a name="clientmacincludeit"></a>ClientMacIncludeIt | True / False | Debe ser True para incluir el cliente macOS designado por ClientMacFolderToMac o ClientMacFolderToWin |
| <a name="clientmacfoldertomac"></a>ClientMacFolderToMac | Ruta | 4D Volume Desktop para macOS, al generar en macOS |
| <a name="clientmacfoldertowin"></a>ClientMacFolderToWin | Ruta | Archivo **.4darchive** macOS, al generar en Windows |
| <a name="clientwiniconforwinpath"></a>ClientWinIconForWinPath | Ruta | Icono del cliente Windows (.ico), al generar en Windows |
| <a name="clientwiniconformacpath"></a>ClientWinIconForMacPath | Ruta | Icono del cliente Windows (.ico), al generar en macOS |
| <a name="clientmaciconforwinpath"></a>ClientMacIconForWinPath | Ruta | Icono del cliente macOS (.icns), al generar en Windows |
| <a name="clientmaciconformacpath"></a>ClientMacIconForMacPath | Ruta | Icono del cliente macOS (.icns), al generar en macOS |
| <a name="databasetoembedinclientwinfolder"></a>DatabaseToEmbedInClientWinFolder | Ruta | Carpeta Windows que contiene la estructura compilada a [integrar en un cliente monopuesto](../Desktop/building.md#embedding-a-single-user-client-application) |
| <a name="databasetoembedinclientmacfolder"></a>DatabaseToEmbedInClientMacFolder | Ruta | Carpeta macOS que contiene la estructura compilada a [integrar en un cliente monopuesto](../Desktop/building.md#embedding-a-single-user-client-application) |
| [IsOEM](#isoem) | True / False | Incluir las licencias de despliegue OEM |

Si se omite una llave de icono, se utiliza el icono por defecto de 4D Volume Desktop. Ver también [Seleccionar el archivo cliente para la plataforma concurrente](../Desktop/building.md#selecting-client-archive-for-the-concurrent-platform).

## IsOEM

```text title="Rutas XML"
/Preferences4D/BuildApp/SourcesFiles/RuntimeVL/IsOEM
/Preferences4D/BuildApp/SourcesFiles/CS/IsOEM
```

**Valores**: True / False (por defecto)

Si es True, la aplicación generada (monopuesto o cliente/servidor, según el nodo) incluye las licencias de despliegue OEM. En caso contrario, la aplicación se genera en modo demo. Esta llave requiere una licencia OEM.
