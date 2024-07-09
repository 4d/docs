---
id: propertiesHierarchy
title: Jerarquía
---

## List box jerárquico

`List boxes de tipo array`

Esta propiedad especifica que el list box debe mostrarse en forma jerárquica. In the JSON form, this feature is triggered [when the _dataSource_ property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Las opciones adicionales (**Variable 1...10**) están disponibles cuando se selecciona la opción _List box jerárquico_, correspondiente a cada elemento del array _dataSource_ a utilizar como columna de ruptura. Cada vez que se introduce un valor en un campo, se añade una nueva línea. Se pueden especificar hasta 10 variables. Estas variables definen los niveles jerárquicos a mostrar en la primera columna.

Ver [List box jerárquicos](listbox_overview.md#hierarchical-list-boxes)

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                        |
| ---------- | -------------- | ------------------------------------------------------- |
| datasource | array cadena   | Colección de nombres de arrays que definen la jerarquía |

#### Objetos soportados

[List Box](listbox_overview.md)
