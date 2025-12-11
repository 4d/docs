---
id: web-form
title: Web Form
displayed_sidebar: docs
---

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Parámetros | Tipo                       |                             | Descripción                   |
| ---------- | -------------------------- | :-------------------------: | ----------------------------- |
| Resultado  | 4D.WebForm | &#8592; | Nuevo objeto proxy `Web Form` |

<!-- END REF -->

## Descripción

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` proxy object, providing a means to work with and effectively emulates the Page's properties and functions<!-- END REF -->.

:::info

Keep in mind that a `4D.WebForm` object  is a **proxy object**, and not a direct reference to the web form object itself. Como consecuencia, por ejemplo, el objeto `4D.WebForm` no expone todas las propiedades de la página en el depurador.

:::

Cada propiedad del objeto devuelto es un objeto de la clase [4D.WebFormItem](../API/WebFormItemClass.md).

The command returns `null` if it is called in a request that does not originate from Qodly Studio.

## Ver también

[Web Event](web-event.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1735                        |
| Hilo seguro       | no |




