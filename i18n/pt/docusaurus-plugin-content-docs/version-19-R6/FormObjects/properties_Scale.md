---
id: propertiesScale
title: Escala
---

## Barber shop

Enables the "barber shop" variant for the thermometer.

#### JSON Grammar

|      Nome       | Tipo de dados | Possible Values                                             |
|:---------------:|:-------------:| ----------------------------------------------------------- |
| [max](#maximum) |    number     | NOT passed = enabled; passed = disabled (basic thermometer) |

#### Objects Supported

[Barber shop](progressIndicator.md#barber-shop)

---

## Display graduation

Displays/Hides the graduations next to the labels.

#### JSON Grammar

|      Nome       | Tipo de dados | Possible Values |
|:---------------:|:-------------:| --------------- |
| showGraduations |    boolean    | "true", "false" |

#### Objects Supported

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Graduation step

Scale display measurement.

#### JSON Grammar

|      Nome      | Tipo de dados | Possible Values |
|:--------------:|:-------------:| --------------- |
| graduationStep |    integer    | mínimo: 0       |

#### Objects Supported

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Label Location

Specifies the location of an object's displayed text.

* None - no label is displayed
* Top - Displays labels to the left of or above an indicator
* Bottom - Displays labels to the right of or below an indicator

#### JSON Grammar

|      Nome       | Tipo de dados | Possible Values                          |
|:---------------:|:-------------:| ---------------------------------------- |
| labelsPlacement |    string     | "none", "top", "bottom", "left", "right" |

#### Objects Supported

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Máximo

Maximum value of an indicator.

* For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
* To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted.

#### JSON Grammar

| Nome |  Tipo de dados  | Possible Values                     |
|:----:|:---------------:| ----------------------------------- |
| max  | string / number | minimum: 0 (for numeric data types) |

#### Objects Supported

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

---

## Mínimo

Minimum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

#### JSON Grammar

| Nome |  Tipo de dados  | Possible Values                     |
|:----:|:---------------:| ----------------------------------- |
| min  | string / number | minimum: 0 (for numeric data types) |

#### Objects Supported

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

---

## Step

Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.

#### JSON Grammar

| Nome | Tipo de dados | Possible Values |
|:----:|:-------------:| --------------- |
| step |    integer    | mínimo: 1       |

#### Objects Supported

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)
