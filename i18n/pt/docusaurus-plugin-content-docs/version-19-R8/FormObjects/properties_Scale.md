---
id: propertiesScale
title: Escala
---

## Barber shop

Enables the "barber shop" variant for the thermometer.

#### Gramática JSON

|      Nome       | Tipo de dados | Valores possíveis                                           |
|:---------------:|:-------------:| ----------------------------------------------------------- |
| [max](#maximum) |    number     | NOT passed = enabled; passed = disabled (basic thermometer) |

#### Objectos suportados

[Barber shop](progressIndicator.md#barber-shop)

---

## Display graduation

Displays/Hides the graduations next to the labels.

#### Gramática JSON

|      Nome       | Tipo de dados | Valores possíveis |
|:---------------:|:-------------:| ----------------- |
| showGraduations |    boolean    | "true", "false"   |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Graduation step

Scale display measurement.

#### Gramática JSON

|      Nome      | Tipo de dados | Valores possíveis |
|:--------------:|:-------------:| ----------------- |
| graduationStep |    integer    | mínimo: 0         |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Label Location

Specifies the location of an object's displayed text.

* None - no label is displayed
* Top - Displays labels to the left of or above an indicator
* Bottom - Displays labels to the right of or below an indicator

#### Gramática JSON

|      Nome       | Tipo de dados | Valores possíveis                        |
|:---------------:|:-------------:| ---------------------------------------- |
| labelsPlacement |    string     | "none", "top", "bottom", "left", "right" |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Máximo

Maximum value of an indicator.

* For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
* To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted.

#### Gramática JSON

| Nome |  Tipo de dados  | Valores possíveis                   |
|:----:|:---------------:| ----------------------------------- |
| max  | string / number | minimum: 0 (for numeric data types) |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

---

## Mínimo

Minimum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

#### Gramática JSON

| Nome |  Tipo de dados  | Valores possíveis                   |
|:----:|:---------------:| ----------------------------------- |
| min  | string / number | minimum: 0 (for numeric data types) |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

---

## Step

Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
|:----:|:-------------:| ----------------- |
| step |    integer    | mínimo: 1         |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)
