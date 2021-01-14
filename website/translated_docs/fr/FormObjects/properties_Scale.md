---
id: propertiesScale
title: Echelle
---

---
## Barber shop

Active la variante «barber shop» pour le thermomètre.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles                                           |
|:---------------:|:---------------:| ----------------------------------------------------------- |
| [max](#maximum) |     number      | NOT passed = enabled; passed = disabled (basic thermometer) |

#### Objets pris en charge

[Barber shop](progressIndicator.md#barber-shop)



---
## Afficher graduation

Affiche/masque les graduations à côté des étiquettes.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles |
|:---------------:|:---------------:| ----------------- |
| showGraduations |     boolean     | "true", "false"   |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#thermometer) - [Règle](ruler.md#ruler)



---
## Graduation step

Mesure de l'affichage de l'échelle.

#### Grammaire JSON

|      Nom       | Type de données | Valeurs possibles |
|:--------------:|:---------------:| ----------------- |
| graduationStep |     integer     | minimum : 0       |


#### Objets pris en charge

[Thermomètre](progressIndicator.md#thermometer) - [Règle](ruler.md#ruler)



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

[Thermomètre](progressIndicator.md#thermometer) - [Règle](ruler.md#ruler)



---
## Maximum

Valeur maximale d'un indicateur.

- For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
- To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted.

#### Grammaire JSON

| Nom |  Type de données   | Valeurs possibles                                 |
|:---:|:------------------:| ------------------------------------------------- |
| max | chaîne / numérique | minimum: 0 (pour les types de données numériques) |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#thermometer) - [Règle](ruler.md#ruler) - [Stepper](stepper.md#stepper)



---
## Minimum

Valeur minimale d'un indicateur. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

#### Grammaire JSON

| Nom |  Type de données   | Valeurs possibles                                 |
|:---:|:------------------:| ------------------------------------------------- |
| min | chaîne / numérique | minimum: 0 (pour les types de données numériques) |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#thermometer) - [Règle](ruler.md#ruler) - [Stepper](stepper.md#stepper)




---
## Step

Intervalle minimum accepté entre les valeurs pendant l'utilisation. Pour les steppers numériques, cette propriété représente les secondes lorsque l'objet est associé à une valeur de type heure et représente les jours lorsqu'il est associé à une valeur de type date.

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles |
|:----:|:---------------:| ----------------- |
| step |     integer     | minimum: 1        |


#### Objets pris en charge

[Thermomètre](progressIndicator.md#thermometer) - [Règle](ruler.md#ruler) - [Stepper](stepper.md#stepper)






