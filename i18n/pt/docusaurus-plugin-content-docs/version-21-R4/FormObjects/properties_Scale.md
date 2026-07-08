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

#### Comandos

[OBJECT Get format](../commands/object-get-format) - [OBJECT Get indicator type](../commands/object-get-indicator-type) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET INDICATOR TYPE](../commands/object-set-indicator-type)

---

## Exibir graduação

Apresenta/oculta as graduações junto às etiquetas.

#### Gramática JSON

|       Nome      | Tipo de dados | Valores possíveis |
| :-------------: | :-----------: | ----------------- |
| showGraduations |    boolean    | "true", "false"   |

#### Objectos suportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md)

#### Comandos

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## Passo de graduação

Medição do visor da escala.

#### Gramática JSON

|      Nome      | Tipo de dados | Valores possíveis         |
| :------------: | :-----------: | ------------------------- |
| graduationStep |    integer    | mínimo: 0 |

#### Objectos suportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md)

#### Comandos

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

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

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md)

#### Comandos

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## Máximo

Valor máximo de um indicador.

- Para steppers numéricos, essa propriedade representa segundos quando o objeto está associado a um valor do tipo hora sendo ignorada quando está associada a um valor do tipo data.
- Para activar los [termómetros del Barber Shop](progressIndicator.md#barber-shop), esta propiedad debe omitirse.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| :--: | :-----------: | ----------------- |
|  max |     number    | Qualquer número   |

#### Objectos suportados

[Termômetro](progressIndicator.md#default-thermometer) - [Régua](ruler.md) - [Stepper](stepper.md)

#### Comandos

[OBJECT Get format](../commands/object-get-format) [OBJECT Get maximum-value](../commands/object-get-maximum-value) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value)

---

## Mínimo

Valor mínimo de um indicador. Para steppers numéricos, essa propriedade representa segundos quando o objeto está associado a um valor do tipo hora sendo ignorada quando está associada a um valor do tipo data.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| :--: | :-----------: | ----------------- |
|  min |     number    | Qualquer número   |

#### Objectos suportados

[Termômetro](progressIndicator.md#default-thermometer) - [Régua](ruler.md) - [Stepper](stepper.md)

#### Comandos

[OBJECT Get format](../commands/object-get-format) - [OBJECT Get minimum-value](../commands/object-get-minimum-value) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET MINIMUM VALUE](../commands/object-set-minimum-value)

---

## Step

Intervalo mínimo aceite entre valores durante a utilização. Para steppers numéricos, Esta propriedade representa os segundos quando o objeto está associado com um valor de tipo hora e dias quando está associado a um valor de tipo data.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis         |
| :--: | :-----------: | ------------------------- |
| step |    integer    | mínimo: 1 |

#### Objectos suportados

[Termômetro](progressIndicator.md#default-thermometer) - [Régua](ruler.md) - [Stepper](stepper.md)

#### Comandos

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

