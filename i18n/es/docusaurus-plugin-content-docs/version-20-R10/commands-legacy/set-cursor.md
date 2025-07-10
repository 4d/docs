---
id: set-cursor
title: SET CURSOR
slug: /commands/set-cursor
displayed_sidebar: docs
---

<!--REF #_command_.SET CURSOR.Syntax-->**SET CURSOR** {( *cursor* )}<!-- END REF-->
<!--REF #_command_.SET CURSOR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| cursor | Integer | &#8594;  | Número de cursor sistema |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET CURSOR.Summary-->El comando SET CURSOR cambia el puntero (gráfico) del ratón por el del sistema cuyo número de identificación se pasa en *cursor*.<!-- END REF-->

Este comando debe llamarse en el contexto del [Form event code](../commands/form-event-code.md) On Mouse Move. 

Para restablecer el cursor de ratón estándar, llame el comando sin parámetro.

Los siguientes son algunos cursores que pueden pasarse en el parámetro *cursor*:

| **Number** | **Cursor**                                    |
| ---------- | --------------------------------------------- |
| 1          | ![](../assets/en/commands/pict14679.es.png)   |
| 2          | ![](../assets/en/commands/pict14680.es.png)   |
| 4          | ![](../assets/en/commands/pict2478657.en.png) |
| 9000       | ![](../assets/en/commands/pict2478660.en.png) |
| 9001       | ![](../assets/en/commands/pict2478662.en.png) |
| 9003       | ![](../assets/en/commands/pict2478664.en.png) |
| 9004       | ![](../assets/en/commands/pict2478666.en.png) |
| 9005       | ![](../assets/en/commands/pict2478669.en.png) |
| 9006       | ![](../assets/en/commands/pict2478671.en.png) |
| 9021       | ![](../assets/en/commands/pict2478674.en.png) |
| 351        | ![](../assets/en/commands/pict2478676.en.png) |
| 9010       | ![](../assets/en/commands/pict2478688.en.png) |
| 9011       | ![](../assets/en/commands/pict2478678.en.png) |
| 9013       | ![](../assets/en/commands/pict2478680.en.png) |
| 9014       | ![](../assets/en/commands/pict2478682.en.png) |
| 9015       | ![](../assets/en/commands/pict2478686.en.png) |
| 9016       | ![](../assets/en/commands/pict2478684.en.png) |
| 9017       | ![](../assets/en/commands/pict2478690.en.png) |
| 9019       | ![](../assets/en/commands/pict2478692.en.png) |
| 9020       | ![](../assets/en/commands/pict2478694.en.png) |
| 559        | ![](../assets/en/commands/pict2478698.en.png) |
| 560        | ![](../assets/en/commands/pict2478696.en.png) |

**Nota:** la disponibilidad y la apariencia de los cursores puede variar dependiendo del sistema operativo.

#### Ejemplo 

Usted quiere que se muestre el cursor ![](../assets/en/commands/pict2478692.en.png) cuando el ratón pase sobre una área variable en el formulario. Puede escribir en el método objeto de la variable:

```4d
 If(Form event code=On Mouse Move)
    SET CURSOR(9019)
 End if
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 469 |
| Hilo seguro | &cross; |


