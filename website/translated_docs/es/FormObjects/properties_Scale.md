---
id: propertiesScale
title: Escala
---

---
## Barber shop

Activa la variante "barber shop" para el termómetro.

#### Gramática JSON

|     Nombre      | Tipos de datos | Valores posibles                                               |
|:---------------:|:--------------:| -------------------------------------------------------------- |
| [max](#maximum) |     number     | NO pasado = activado; pasado = desactivado (termómetro básico) |

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

[Termómetro](progressIndicator.md#thermometer) - [Regla](ruler.md#ruler)



---
## Paso en la graduación

Medición de la visualización de la escala.

#### Gramática JSON

|     Nombre     | Tipos de datos | Valores posibles |
|:--------------:|:--------------:| ---------------- |
| graduationStep |    integer     | mínimo: 0        |


#### Objetos soportados

[Termómetro](progressIndicator.md#thermometer) - [Regla](ruler.md#ruler)



---
## Posición de la etiqueta

Especifica la ubicación del texto mostrado de un objeto.

* Ninguno - no se muestra ninguna etiqueta
* Arriba - Muestra las etiquetas a la izquierda o sobre el indicador
* Bottom - Displays labels to the right of or below an indicator

#### Gramática JSON

|     Nombre      | Tipos de datos | Valores posibles                         |
|:---------------:|:--------------:| ---------------------------------------- |
| labelsPlacement |     cadena     | "none", "top", "bottom", "left", "right" |

#### Objetos soportados

[Termómetro](progressIndicator.md#thermometer) - [Regla](ruler.md#ruler)



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
