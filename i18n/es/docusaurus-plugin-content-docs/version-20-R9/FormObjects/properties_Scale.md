---
id: propertiesScale
title: Escala
---

## Barber shop

Activa la variante "barber shop" para el termómetro.

#### Gramática JSON

|     Nombre     | Tipos de datos | Valores posibles                                                                  |
| :------------: | :------------: | --------------------------------------------------------------------------------- |
| [max](#máximo) |     number     | NO pasado = activado; pasado = desactivado (termómetro básico) |

#### Objetos soportados

[Barbería](progressIndicator.md#barber-shop)

---

## Mostrar graduación

Muestra/Oculta las graduaciones junto a las etiquetas.

#### Gramática JSON

|      Nombre     | Tipos de datos | Valores posibles |
| :-------------: | :------------: | ---------------- |
| showGraduations |     boolean    | "true", "false"  |

#### Objetos soportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md)

---

## Paso en la graduación

Medición de la visualización de la escala.

#### Gramática JSON

|     Nombre     | Tipos de datos | Valores posibles          |
| :------------: | :------------: | ------------------------- |
| graduationStep |     integer    | mínimo: 0 |

#### Objetos soportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md)

---

## Posición de la etiqueta

Especifica la ubicación del texto mostrado de un objeto.

- Ninguno - no se muestra ninguna etiqueta
- Arriba - Muestra las etiquetas a la izquierda o sobre el indicador
- Abajo - Muestra las etiquetas a la derecha o debajo de un indicador

#### Gramática JSON

|      Nombre     | Tipos de datos | Valores posibles                         |
| :-------------: | :------------: | ---------------------------------------- |
| labelsPlacement |     string     | "none", "top", "bottom", "left", "right" |

#### Objetos soportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md)

---

## Máximo

Valor máximo de un indicador.

- Para los steppers numéricos, esta propiedad representa los segundos cuando el objeto está asociado a un valor de tipo hora y se ignoran cuando están asociados a un valor de tipo fecha.
- Para activar los [termómetros del Barber Shop](progressIndicator.md#barber-shop), esta propiedad debe omitirse.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| :----: | :------------: | ---------------- |
|   max  |     number     | Cualquier número |

#### Objetos soportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md) - [Stepper](stepper.md)

---

## Mínimo

Valor mínimo de un indicador. Para los steppers numéricos, esta propiedad representa los segundos cuando el objeto está asociado a un valor de tipo hora y se ignoran cuando están asociados a un valor de tipo fecha.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| :----: | :------------: | ---------------- |
|   min  |     number     | Cualquier número |

#### Objetos soportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md) - [Stepper](stepper.md)

---

## Step

Intervalo mínimo aceptado entre los valores durante el uso. Para los steppers numéricos, esta propiedad representa los segundos cuando el objeto está asociado a un valor de tipo hora y los días cuando está asociado a un valor de tipo fecha.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| :----: | :------------: | ------------------------- |
|  step  |     integer    | mínimo: 1 |

#### Objetos soportados

[Termómetro](progressIndicator.md#default-thermometer) - [Regla](ruler.md) - [Stepper](stepper.md)
