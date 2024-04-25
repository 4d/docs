---
id: propertiesRangeOfValues
title: Rango de valores
---

## Valor por defecto

Puede asignar un valor por defecto para ser introducido en un objeto de entrada. This property is useful for example when the input [data source](properties_Object.md#variable-or-expression) is a field: the default value is entered when a new record is first displayed. You can change the value unless the input area has been defined as [non-enterable](properties_Entry.md#enterable).

The default value can only be used if the [data source type](properties_Object.md#expression-type) is:

- texto/cadena
- number/integer
- date
- time
- boolean

4D ofrece sellos para generar valores por defecto para la fecha, la hora y el número de secuencia. La fecha y la hora se toman de la fecha y la hora del sistema. 4D genera automáticamente los números de secuencia necesarios. La siguiente tabla muestra el sello a utilizar para generar valores por defecto de forma automática:

| Stamp | Significado         |
| ----- | ------------------- |
| #D    | Fecha actual        |
| #H    | Hora actual         |
| #N    | Número de secuencia |

Puede utilizar un número de secuencia para crear un número único para cada registro de la tabla para el archivo de datos actual. Un número de secuencia es un longint que se genera para cada nuevo registro. Los números comienzan en uno (1) y van aumentando de uno en uno. Un número de secuencia no se repite nunca, incluso si el registro al que se asigna se elimina de la tabla. Cada tabla tiene su propio contador interno de números de secuencia. For more information, refer to the [Autoincrement](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029) paragraph.

> Do not make confusion between this property and the "[default values](properties_DataSource.md#default-list-of-values)" property that allows to fill a list box column with static values.

#### Gramática JSON

| Nombre       | Tipos de datos                      | Valores posibles                                          |
| ------------ | ----------------------------------- | --------------------------------------------------------- |
| defaultValue | string, number, date, time, boolean | Todo valor y/o un sello: "#D", "#H", "#N" |

#### Objetos soportados

[Input](input_overview.md)

---

## Lista de excluidos

Permite definir una lista cuyos valores no pueden introducirse en el objeto. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error.

> Si una lista especificada es jerárquica, sólo se tienen en cuenta los elementos del primer nivel.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                                |
| ------------ | -------------- | ----------------------------------------------- |
| excludedList | lista          | Una lista de valores a excluir. |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Lista requerida

Restringe las entradas válidas a los elementos de la lista. Por ejemplo, es posible que desee utilizar una lista obligatoria para los títulos de los puestos de trabajo, de modo que las entradas válidas se limiten a los títulos que han sido aprobados por la dirección.

La creación de una lista obligatoria no muestra automáticamente la lista cuando se selecciona el campo. If you want to display the required list, assign the same list to the [Choice List](properties_DataSource.md#choice-list) property.
However, unlike the [Choice List](properties_DataSource.md#choice-list) property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the [Choice List](properties_DataSource.md#choice-list) and Required List properties, the Required List property has priority.

> Si una lista especificada es jerárquica, sólo se tienen en cuenta los elementos del primer nivel.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                                   |
| ------------ | -------------- | -------------------------------------------------- |
| requiredList | lista          | Una lista de valores obligatorios. |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)
