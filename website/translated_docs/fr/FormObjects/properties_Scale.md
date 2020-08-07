---
id: propertiesScale
title: Echelle
---

---
## Barber shop

Enables the "barber shop" variant for the thermometer.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles                                           |
|:---------------:|:---------------:| ----------------------------------------------------------- |
| [max](#maximum) |     number      | NOT passed = enabled; passed = disabled (basic thermometer) |

#### Objets pris en charge

[Barber shop](progressIndicator.md#barber-shop)



---
## Display graduation

Displays/Hides the graduations next to the labels.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles |
|:---------------:|:---------------:| ----------------- |
| showGraduations |     boolean     | "true", "false"   |

#### Objets pris en charge

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)



---
## Graduation step

Scale display measurement.

#### Grammaire JSON

|      Nom       | Type de données | Valeurs possibles |
|:--------------:|:---------------:| ----------------- |
| graduationStep |     integer     | minimum : 0       |


#### Objets pris en charge

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)



---
## Label Location

Specifies the location of an object's displayed text.

* None - no label is displayed
* Top - Displays labels to the left of or above an indicator
* Bottom - Displays labels to the right of or below an indicator

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles                        |
|:---------------:|:---------------:| ---------------------------------------- |
| labelsPlacement |     string      | "none", "top", "bottom", "left", "right" |

#### Objets pris en charge

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)



---
## Maximum

Maximum value of an indicator.

- For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
- To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles                   |
|:---:|:---------------:| ----------------------------------- |
| max | string / number | minimum: 0 (for numeric data types) |

#### Objets pris en charge

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)



---
## Minimum

Minimum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles                   |
|:---:|:---------------:| ----------------------------------- |
| min | string / number | minimum: 0 (for numeric data types) |

#### Objets pris en charge

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)




---
## Step

Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles |
|:----:|:---------------:| ----------------- |
| step |     integer     | minimum: 1        |


#### Objets pris en charge

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)






