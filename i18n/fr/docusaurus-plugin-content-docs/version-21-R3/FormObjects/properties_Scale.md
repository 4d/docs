---
id: propertiesScale
title: Graduation
---

## Barber shop

Active la variante «barber shop» pour le thermomètre.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles                                                               |
| :-------------: | :-------------: | ------------------------------------------------------------------------------- |
| [max](#maximum) |      number     | NON passé = activé ; passé = désactivé (thermomètre de base) |

#### Objets pris en charge

[Barber shop](progressIndicator.md#barber-shop)

#### Commandes

[OBJECT Get format](../commands/object-get-format) - [OBJECT Get indicator type](../commands/object-get-indicator-type) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET INDICATOR TYPE](../commands/object-set-indicator-type)

---

## Afficher graduation

Affiche/masque les graduations à côté des libellés.

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles |
| :-------------: | :-------------: | ----------------- |
| showGraduations |     boolean     | "true", "false"   |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#default-thermometer) - [Règle](ruler.md)

#### Commandes

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## Unité de graduation

Mesure de l'affichage de l'échelle.

#### Grammaire JSON

|       Nom      | Type de données | Valeurs possibles           |
| :------------: | :-------------: | --------------------------- |
| graduationStep |     integer     | minimum : 0 |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#default-thermometer) - [Règle](ruler.md)

#### Commandes

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## Emplacement du libellé

Indique l'emplacement du texte d'un objet.

- Aucun - aucun libellé n'est affiché
- Haut - Affiche les libellés à gauche ou au-dessus d'un indicateur
- Bas - Affiche les libellés à droite ou en dessous d'un indicateur

#### Grammaire JSON

|       Nom       | Type de données | Valeurs possibles                        |
| :-------------: | :-------------: | ---------------------------------------- |
| labelsPlacement |      string     | "none", "top", "bottom", "left", "right" |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#default-thermometer) - [Règle](ruler.md)

#### Commandes

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## Maximum

Valeur maximale d'un indicateur.

- Pour les steppers numériques, cette propriété représente les secondes lorsque l'objet est associé à une valeur de type heure, et représente les jours lorsqu'il est associé à une valeur de type date.
- Pour activer les [thermomètres du barber shop](progressIndicator.md#barber-shop), cette propriété doit être omise.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles     |
| :-: | :-------------: | --------------------- |
| max |      number     | N'importe quel nombre |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#default-thermometer) - [Règle](ruler.md) - [Stepper](stepper.md)

#### Commandes

[OBJECT Get format](../commands/object-get-format) [OBJECT Get maximum-value](../commands/object-get-maximum-value) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value)

---

## Minimum

Valeur minimale d'un indicateur. Pour les steppers numériques, cette propriété représente les secondes lorsque l'objet est associé à une valeur de type heure, et représente les jours lorsqu'il est associé à une valeur de type date.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles     |
| :-: | :-------------: | --------------------- |
| min |      number     | N'importe quel nombre |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#default-thermometer) - [Règle](ruler.md) - [Stepper](stepper.md)

#### Commandes

[OBJECT Get format](../commands/object-get-format) - [OBJECT Get minimum-value](../commands/object-get-minimum-value) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET MINIMUM VALUE](../commands/object-set-minimum-value)

---

## Pas

Intervalle minimum accepté entre les valeurs pendant l'utilisation. Pour les steppers numériques, cette propriété représente les secondes lorsque l'objet est associé à une valeur de type heure et représente les jours lorsqu'il est associé à une valeur de type date.

#### Grammaire JSON

|  Nom | Type de données | Valeurs possibles          |
| :--: | :-------------: | -------------------------- |
| step |     integer     | minimum: 1 |

#### Objets pris en charge

[Thermomètre](progressIndicator.md#default-thermometer) - [Règle](ruler.md) - [Stepper](stepper.md)

#### Commandes

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

