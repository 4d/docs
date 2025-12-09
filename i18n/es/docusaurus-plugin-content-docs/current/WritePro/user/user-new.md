---
id: user-new
title: user WP
---

para importar

<!-- REF lists-WP.Desc -->

## Listas

4D Write Pro supports two main types of lists:

- unordered lists: where list items are marked with bullets, custom bullets, or images used as markers.
- ordered lists: where list items are marked with numbers or letters

They can be created using:

- the toolbar or sidebar of the [4D Write Pro interface](https://doc.4d.com/4Dv20/4D/20.2/Entry-areas.300-6750367.en.html#5865253)
- the `listStyleType` or `listStyleImage` [standard actions](./standard-actions.md) ,
- or [programmatically](../commands-legacy/4d-write-pro-attributes.md#lists) using [WP SET ATTRIBUTE](../commands/wp-set-attributes.md).

When a list is created using a standard action (`listStyleType` or `listStyleImage`) or the toolbar/sidebar, 4D Write Pro automatically inserts a margin before the text so that the marker is positioned inside it. The value of the inserted margin corresponds to the offset of the default tab (`wk tab default`).

![](../../assets/en/WritePro/margin-bullets.png)

When the list is created using [the WP SET ATTRIBUTE command](../commands-legacy/4d-write-pro-attributes.md#lists), no specific margin is managed, by default the marker is added at the left boundary of the paragraph. The developer can add a custom margin if necessary.

:::info Entrada de blog relacionada

4D Write Pro – Adding a margin automatically when bullets are set using standard actions

:::

<!-- END REF -->
