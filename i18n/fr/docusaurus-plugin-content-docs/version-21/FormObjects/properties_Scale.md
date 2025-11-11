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

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT Get indicator type](../commands-legacy/object-get-indicator-type.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md) - [OBJECT SET INDICATOR TYPE](../commands-legacy/object-set-indicator-type.md)

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

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

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

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

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

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

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

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get maximum-value](../commands-legacy/object-get-maximum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md) - [OBJECT SET MAXIMUM VALUE](../commands-legacy/object-set-maximum-value.md)

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

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md) - [OBJECT SET MINIMUM VALUE](../commands-legacy/object-set-minimum-value.md)

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

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)
