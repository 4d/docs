---
id: propertiesPlugIns
title: Plug-ins
---

## Propiedades avanzadas

If advanced options are provided by the author of the plug-in, an **Advanced Properties** button may be enabled in the Property list. En este caso, puede hacer clic en este botón para definir estas opciones, normalmente a través de una caja de diálogo personalizada.

Dado que la función de propiedades avanzadas está bajo el control del autor del plug-in, la información sobre estas opciones avanzadas es responsabilidad del distribuidor del plug-in.

#### Gramática JSON

| Nombre           | Tipos de datos | Valores posibles                                                                                                                                           |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customProperties | text           | Propiedades específicas del plugin, pasadas al plugin como una cadena JSON si es un objeto, o como un buffer binario si es una cadena codificada en base64 |

#### Objetos soportados

[Plug-in Area](pluginArea_overview.md)
