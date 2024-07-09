---
id: propertiesPlugIns
title: Plug-ins
---

## Propiedades avanzadas

Si las opciones avanzadas son proporcionadas por el autor del plug-in, un botón **Propiedades avanzadas** puede ser activado en la lista de propiedades. En este caso, puede hacer clic en este botón para definir estas opciones, normalmente a través de una caja de diálogo personalizada.

Dado que la función de propiedades avanzadas está bajo el control del autor del plug-in, la información sobre estas opciones avanzadas es responsabilidad del distribuidor del plug-in.

#### Gramática JSON

| Nombre           | Tipos de datos | Valores posibles                                                                                                                                           |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customProperties | text           | Propiedades específicas del plugin, pasadas al plugin como una cadena JSON si es un objeto, o como un buffer binario si es una cadena codificada en base64 |

#### Objetos soportados

[Área de plugin](pluginArea_overview.md)
