---
id: structure
title: Página Estructura
---

## Llave primaria

These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the [Primary key manager](https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html)).

Las siguientes opciones están disponibles:

- **Name** ("ID" by default): Sets the default name of primary key fields. You can use any name you want, as long as it respects the [4D naming rules](Concepts/identifiers.md#tables-and-fields).
- **Type** ([Longint](Concepts/dt_number.md) by default): Sets the default type of primary key fields. Puede elegir el tipo de UUID. In this case, the primary key fields created by default are of the [Alpha type](Concepts/dt_string.md) and have the **UUID Format** and **Auto UUID** field properties checked.

## Editor de estructura

Este grupo de opciones configura la visualización del editor de estructura de 4D.

### Calidad gráfica de la estructura

Esta opción varía el nivel de detalle gráfico en el editor de estructura. By default, the quality is set to **High**. Puede seleccionar la calidad Estándar para dar prioridad a la velocidad de visualización. The effect of this setting is mainly perceptible when using the zoom function (see the "Zoom" paragraph in [Structure editor](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html)).

### Cuando una carpeta está atenuada, su contenido es:

This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see [Highlight/dim tables by folder](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928)). Las opciones posibles son Atenuado (una sombra sustituye a la imagen de la tabla) e Invisible (la tabla desaparece por completo).
