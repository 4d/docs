---
id: propertiesScale
title: Escala
---

## Barber shop

Ativa a variante "barber shop" para o termómetro.

#### Gramática JSON

|       Nome      | Tipo de dados | Valores possíveis                                                                |
| :-------------: | :-----------: | -------------------------------------------------------------------------------- |
| [max](#maximum) |     number    | NÃO passou = ativado; passou = desativado (termómetro básico) |

#### Objectos suportados

[Barber shop](progressIndicator.md#barber-shop)

---

## Exibir graduação

Apresenta/oculta as graduações junto às etiquetas.

#### Gramática JSON

|       Nome      | Tipo de dados | Valores possíveis |
| :-------------: | :-----------: | ----------------- |
| showGraduations |    boolean    | "true", "false"   |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Passo de graduação

Medição do visor da escala.

#### Gramática JSON

|      Nome      | Tipo de dados | Valores possíveis         |
| :------------: | :-----------: | ------------------------- |
| graduationStep |    integer    | mínimo: 0 |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Localização da etiqueta

Especifica a localização do texto de um objeto.

- Nenhum - não é apresentada qualquer etiqueta
- Topo - Apresenta etiquetas à esquerda ou acima de um indicador
- Inferior - Apresenta etiquetas à direita ou por baixo de um indicador

#### Gramática JSON

|       Nome      | Tipo de dados | Valores possíveis                        |
| :-------------: | :-----------: | ---------------------------------------- |
| labelsPlacement |     string    | "none", "top", "bottom", "left", "right" |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

---

## Máximo

Valor máximo de um indicador.

- For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
- To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| :--: | :-----------: | ----------------- |
|  max |     number    | Qualquer número   |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

---

## Mínimo

Valor mínimo de um indicador. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| :--: | :-----------: | ----------------- |
|  min |     number    | Qualquer número   |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

---

## Step

Intervalo mínimo aceite entre valores durante a utilização. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis         |
| :--: | :-----------: | ------------------------- |
| step |    integer    | mínimo: 1 |

#### Objectos suportados

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)
