---
id: web-form
title: Web Form
displayed_sidebar: docs
---

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

<div class="no-index">

| Parámetros | Tipo                       |                             | Descripción                   |
| ---------- | -------------------------- | :-------------------------: | ----------------------------- |
| Resultado  | 4D.WebForm | &#8592; | Nuevo objeto proxy `Web Form` |

</div>
<!-- END REF -->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21          | Añadidos       |

</details>
</div>

## Descripción

El comando `Web Form` <!-- REF #_command_.Web Form.Summary --> devuelve un objeto proxy `4D.WebForm`, ofreciendo un medio para trabajar con las propiedades y las funciones de la página y emularlas eficazmente<!-- END REF -->.

:::info

Tenga en cuenta que un objeto `4D.WebForm` es un **objeto proxy**, y no una referencia directa al propio objeto formulario web. Como consecuencia, por ejemplo, el objeto `4D.WebForm` no expone todas las propiedades de la página en el depurador.

:::

Cada propiedad del objeto devuelto es un objeto de la clase [4D.WebFormItem](../API/WebFormItemClass.md).

El comando devuelve `null` si es llamado en una petición que no se origina desde Qodly Studio.

## Ver también

[Web Event](web-event.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1735 |
| Hilo seguro       | no   |




