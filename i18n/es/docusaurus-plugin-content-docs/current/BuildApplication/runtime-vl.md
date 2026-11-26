---
id: runtime-vl
title: RuntimeVL
sidebar_label: RuntimeVL
sidebar_position: 2
description: "Llave RuntimeVL"
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

El nodo `<RuntimeVL>` contiene una sola llave, [LastDataPathLookup](#lastdatapathlookup).

```xml
<Preferences4D>
  <BuildApp>
    <RuntimeVL>
      <LastDataPathLookup>ByAppPath</LastDataPathLookup>
    </RuntimeVL>
  </BuildApp>
</Preferences4D>
```

## Resumen

| Llave | Valores | Descripción |
|---|---|---|
| [RuntimeVL/LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Modo de enlace de datos de la aplicación monopuesto |


## Aplicación monopuesto (RuntimeVL)

### LastDataPathLookup

```text title="Ruta XML"
/Preferences4D/BuildApp/RuntimeVL/LastDataPathLookup
```

Define el [modo de enlace de datos](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) de la aplicación monopuesto:

| Valor | Búsqueda de la ruta del archivo de datos | Almacenamiento de la ruta del archivo de datos |
|---|---|---|
| InDbStruct | Ruta almacenada en el archivo de estructura | Dentro del archivo de estructura (funcionamiento heredado) |
| ByAppName | Entrada más reciente en *LastDataPath.xml* | Preferencias del usuario |
| ByAppPath | Entrada cuyo *executablePath* coincide con la ruta de la aplicación | Preferencias del usuario |

La misma llave existe para las aplicaciones cliente/servidor: [CS/LastDataPathLookup](./client-server.md#lastdatapathlookup).
