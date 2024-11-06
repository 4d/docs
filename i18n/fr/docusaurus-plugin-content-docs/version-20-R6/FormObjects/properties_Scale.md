---
id: propertiesScale
title: Echelle
---

## Barber shop

Active la variante «barber shop» pour le thermomètre.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles                                                              |
| :-------------: | :-------------: | ------------------------------------------------------------------------------ |
| [max](#maximum) |      number     | NOT passed = enabled; passed = disabled (basic thermometer) |

#### Objets pris en charge

[Barber shop](progressIndicator.md#barber-shop)

---

## Afficher graduation

Affiche/masque les graduations à côté des étiquettes.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles |
| :-------------: | :-------------: | ----------------- |
| showGraduations |     boolean     | "true", "false"   |

#### Objets pris en charge

[Thermometer](progressIndicator.md#default-thermometer) - [Ruler](ruler.md)

---

## Graduation step

Mesure de l'affichage de l'échelle.

#### Grammaire JSON

|       Nom      | Type de données | Valeurs possibles           |
| :------------: | :-------------: | --------------------------- |
| graduationStep |     integer     | minimum : 0 |

#### Objets pris en charge

[Thermometer](progressIndicator.md#default-thermometer) - [Ruler](ruler.md)

---

## Label Location

Indique l'emplacement du texte d'un objet.

- Aucun - aucun libellé n'est affiché
- Haut - Affiche les libellés à gauche ou au-dessus d'un indicateur
- Bas - Affiche les libellés à droite ou en dessous d'un indicateur

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles                        |
| :-------------: | :-------------: | ---------------------------------------- |
| labelsPlacement |      string     | "none", "top", "bottom", "left", "right" |

#### Objets pris en charge

[Thermometer](progressIndicator.md#default-thermometer) - [Ruler](ruler.md)

---

## Maximum

Valeur maximale d'un indicateur.

- Pour les steppers numériques, cette propriété représente les secondes lorsque l'objet est associé à une valeur de type heure, et représente les jours lorsqu'il est associé à une valeur de type date.
- Pour activer les [thermomètres du barber shop](progressIndicator.md#barber-shop), cette propriété doit être omise.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| :-: | :-------------: | ----------------- |
| max |      number     | Any number        |

#### Objets pris en charge

[Thermometer](progressIndicator.md#default-thermometer) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Minimum

Valeur minimale d'un indicateur. Pour les steppers numériques, cette propriété représente les secondes lorsque l'objet est associé à une valeur de type heure, et représente les jours lorsqu'il est associé à une valeur de type date.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| :-: | :-------------: | ----------------- |
| min |      number     | Any number        |

#### Objets pris en charge

[Thermometer](progressIndicator.md#default-thermometer) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Step

Intervalle minimum accepté entre les valeurs pendant l'utilisation. Pour les steppers numériques, cette propriété représente les secondes lorsque l'objet est associé à une valeur de type heure et représente les jours lorsqu'il est associé à une valeur de type date.

#### Grammaire JSON

|  Nom | Type de données | Valeurs possibles          |
| :--: | :-------------: | -------------------------- |
| step |     integer     | minimum: 1 |

#### Objets pris en charge

[Thermometer](progressIndicator.md#default-thermometer) - [Ruler](ruler.md) - [Stepper](stepper.md)
