---
id: user-new
title: user WP
draft: true
---

para importar

<!-- REF lists-WP.Desc -->

## Listas

4D Write Pro soporta dos tipos principales de listas:

- listas desordenadas: donde los elementos de la lista se marcan con viñetas, viñetas personalizadas o imágenes utilizadas como marcadores.
- listas ordenadas: en las que los elementos de la lista se marcan con números o letras

Pueden crearse utilizando:

- la barra de herramientas o la barra lateral de la [interfaz de 4D Write Pro](https://doc.4d.com/4Dv20/4D/20.2/Entry-areas.300-6750367.en.html#5865253)
- las [acciones estándar](../user-legacy/standard-actions.md) `listStyleType` o `listStyleImage`,
- o [por programación](../commands-legacy/4d-write-pro-attributes.md#lists) utilizando [WP SET ATTRIBUTE](./commands/wp-set-attributes).

Cuando se crea una lista utilizando una acción estándar (`listStyleType` o `listStyleImage`) o la barra de herramientas/barra lateral, 4D Write Pro inserta automáticamente un margen antes del texto para que el marcador se sitúe en él. El valor del margen insertado corresponde al desplazamiento de la pestaña por defecto (`wk tab default`).

![](../../assets/en/WritePro/margin-bullets.png)

When the list is created using [the WP SET ATTRIBUTE command](../commands-legacy/4d-write-pro-attributes.md#lists), no specific margin is managed, by default the marker is added at the left boundary of the paragraph. El desarrollador puede añadir un margen personalizado si es necesario.

:::info Entrada de blog relacionada

[4D Write Pro – Adding a margin automatically when bullets are set using standard actions](https://blog.4d.com/4d-write-pro-adding-a-margin-automatically-when-bullets-are-set-using-standard-actions)

:::

<!-- END REF -->
