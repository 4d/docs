---
id: propertiesScale
title: Escala
---

---
## Barber shop

Enables the "barber shop" variant for the thermometer.

#### Gramática JSON

|     Nombre      | Tipos de datos | Valores posibles                                            |
|:---------------:|:--------------:| ----------------------------------------------------------- |
| [max](#maximum) |     number     | NOT passed = enabled; passed = disabled (basic thermometer) |

#### Objetos soportados

[Barber shop](progressIndicator.md#barber-shop)



---
## Mostrar graduación

Muestra/Oculta las graduaciones junto a las etiquetas.

#### Gramática JSON

|     Nombre      | Tipos de datos | Valores posibles |
|:---------------:|:--------------:| ---------------- |
| showGraduations |    booleano    | "true", "false"  |

#### Objetos soportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)



---
## Paso en la graduación

Scale display measurement.

#### Gramática JSON

|     Nombre     | Tipos de datos | Valores posibles |
|:--------------:|:--------------:| ---------------- |
| graduationStep |    integer     | mínimo: 0        |


#### Objetos soportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)



---
## Posición de la etiqueta

Specifies the location of an object's displayed text.

* None - no label is displayed
* Arriba - Muestra las etiquetas a la izquierda o sobre el indicador
* Bottom - Displays labels to the right of or below an indicator

#### Gramática JSON

|     Nombre      | Tipos de datos | Valores posibles                         |
|:---------------:|:--------------:| ---------------------------------------- |
| labelsPlacement |     cadena     | "none", "top", "bottom", "left", "right" |

#### Objetos soportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)



---
## Máximo

Maximum value of an indicator.

- For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
- To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted.

#### Gramática JSON

| Nombre | Tipos de datos  | Valores posibles                    |
|:------:|:---------------:| ----------------------------------- |
|  max   | string / number | minimum: 0 (for numeric data types) |

#### Objetos soportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)



---
## Mínimo

Minimum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

#### Gramática JSON

| Nombre | Tipos de datos  | Valores posibles                    |
|:------:|:---------------:| ----------------------------------- |
|  min   | string / number | minimum: 0 (for numeric data types) |

#### Objetos soportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)




---
## Step

Intervalo mínimo aceptado entre los valores durante el uso. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
|:------:|:--------------:| ---------------- |
|  step  |    integer     | mínimo: 1        |


#### Objetos soportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)






