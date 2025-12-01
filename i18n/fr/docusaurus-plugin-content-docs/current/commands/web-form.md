---
id: web-form
title: Web Form
displayed_sidebar: docs
---

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Paramètres | Type                       |                             | Description                 |
| ---------- | -------------------------- | :-------------------------: | --------------------------- |
| Résultat   | 4D.WebForm | &#8592; | New `Web Form` proxy object |

<!-- END REF -->

## Description

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` proxy object, providing a means to work with and effectively emulates the Page's properties and functions<!-- END REF -->.

:::info

Keep in mind that a `4D.WebForm` object  is a **proxy object**, and not a direct reference to the web form object itself. As a consequence for example, the `4D.WebForm` object does not expose all Page properties in the Debugger.

:::

Each property of the returned object is an object of the [4D.WebFormItem](../API/WebFormItemClass.md) class.

The command returns `null` if it is called in a request that does not originate from Qodly Studio.

## Voir également

[Web Event](web-event.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1735                        |
| Thread safe        | &cross; |




