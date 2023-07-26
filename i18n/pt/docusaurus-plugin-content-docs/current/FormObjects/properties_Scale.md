---
id: propertiesScale
title: Escala
---

## Barber shop

Ativa a variante "barber shop" para o termómetro.

#### Gramática JSON

|      Nome       | Tipo de dados | Valores possíveis                                             |
|:---------------:|:-------------:| ------------------------------------------------------------- |
| [max](#maximum) |    number     | NÃO passou = ativado; passou = desativado (termómetro básico) |

#### Objectos suportados

[Barber shop](progressIndicator.md#barber-shop)

---

## Exibir graduação

Apresenta/oculta as graduações junto às etiquetas.

#### Gramática JSON

|      Nome       | Tipo de dados | Valores possíveis |
|:---------------:|:-------------:| ----------------- |
| showGraduations |    boolean    | "true", "false"   |

#### Objectos suportados

[Termômetro](progressIndicator.md#thermometer) - [Régua](ruler.md#ruler)

---

## Graduation step

Scale display measurement.

#### Gramática JSON

|      Nome      | Tipo de dados | Valores possíveis |
|:--------------:|:-------------:| ----------------- |
| graduationStep |    integer    | mínimo: 0         |

#### Objectos suportados

[Termômetro](progressIndicator.md#thermometer) - [Régua](ruler.md#ruler)

---

## Localização da etiqueta

Specifies the location of an object's displayed text.

* Nenhum - não é apresentada qualquer etiqueta
* Top - Displays labels to the left of or above an indicator
* Bottom - Displays labels to the right of or below an indicator

#### Gramática JSON

|      Nome       | Tipo de dados | Valores possíveis                        |
|:---------------:|:-------------:| ---------------------------------------- |
| labelsPlacement |    string     | "none", "top", "bottom", "left", "right" |

#### Objectos suportados

[Termômetro](progressIndicator.md#thermometer) - [Régua](ruler.md#ruler)

---

## Máximo

Valor máximo de um indicador.

* For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
* To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
|:----:|:-------------:| ----------------- |
| max  |    number     | Qualquer número   |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)


---

## Mínimo

Valor mínimo de um indicador. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
|:----:|:-------------:| ----------------- |
| min  |    number     | Qualquer número   |

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
