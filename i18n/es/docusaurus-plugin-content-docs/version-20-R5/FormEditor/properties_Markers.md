---
id: markers
title: Marcadores
---

These properties let you specify the precise location of markers on the vertical ruler of a **table form**. Los marcadores se utilizan principalmente en los formularios de salida. Controlan la información que se lista y definen las áreas de encabezado, saltos, detalles y pie de página del formulario. Todo objeto que se coloque en estas áreas se mostrará o imprimirá en el lugar correspondiente.

Siempre que se utilice cualquier formulario para la salida, ya sea para la visualización en pantalla o para la impresión, las líneas de marcador de salida tienen efecto y las áreas se muestran o imprimen en los lugares designados. Los marcadores también tienen efecto cuando un formulario se utiliza como formulario lista en un área de subformulario. Sin embargo, no tienen ningún efecto cuando se utiliza un formulario para introducir datos.

Los métodos asociados a los objetos de estas áreas se ejecutan cuando las áreas se imprimen o se muestran siempre que se hayan activado los eventos correspondientes. For example, a object method placed in the Header area is executed when the `On Header` event takes place.

---

## Ruptura de formulario

Las áreas de Ruptura del formulario se muestran una vez al final de la lista de registros y se imprimen una vez después de imprimir los registros en un informe.

El área Ruptura se define como el área comprendida entre la línea de control Detalle y la línea de control Ruptura. There can be [several Break areas](#additional-areas) in your report.

Puede hacer que las áreas Ruptura sean más pequeñas o más grandes. Puede utilizar un área de pausa para mostrar información que no forme parte de los registros (instrucciones, fecha actual, hora actual, etc.), o para mostrar una línea u otro elemento gráfico que concluya la visualización de la pantalla. En un informe impreso, puede utilizar un área de Ruptura para calcular e imprimir subtotales y otros cálculos de resumen.

#### Gramática JSON

| Nombre      | Tipos de datos                | Valores posibles                                                                                                                                   |
| ----------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| markerBreak | integer \| integer collection | Posición del marcador de ruptura o colección de posiciones del marcador de ruptura en píxeles.<br/>Valor mínimo: 0 |

---

## Formulario detallado

El área Detalle del formulario se muestra en la pantalla y se imprime una vez por cada registro de un informe. El área Detalle se define como el área comprendida entre la línea de control Encabezado y la línea de control Detalle.

Puede hacer el área Detalle más pequeña o más grande. Lo que coloque en el área Detalle se muestra o imprime una vez por cada registro. Lo más habitual es colocar campos o variables en el área Detalle para que se muestre o imprima la información de cada registro, pero también se pueden colocar otros elementos en el área Detalle.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                            |
| ---------- | -------------- | --------------------------------------------------------------------------- |
| markerBody | integer        | Posición del marcador de detalle. Mínimo: 0 |

---

## Pie del formulario

El área de pie de página del formulario se muestra en pantalla bajo la lista de registros. Siempre se imprime al final de cada página de un informe. El área de pie de página se define como el área comprendida entre la línea de control de salto y la línea de control de pie de página.

Puede hacer que el área del pie de página sea más pequeña o más grande.

Puede utilizar el área de pie de página para imprimir gráficos, números de página, la fecha actual o cualquier texto que desee en la parte inferior de cada página de un informe. En los formularios de salida diseñados para su uso en pantalla, el área de pie de página suele contener botones que ofrecen al usuario opciones como realizar una búsqueda u ordenación, imprimir registros o guardar el informe actual. Se aceptan los objetos activos.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles          |
| ------------ | -------------- | ------------------------- |
| markerFooter | integer        | mínimo: 0 |

---

## Encabezado del formulario

El área de encabezado del formulario se muestra en la parte superior de cada pantalla y se imprime en la parte superior de cada página de un informe. El área de encabezado se define como el área por encima de la línea de control del encabezado.

Puede hacer el área Encabezado más pequeña o más grande. Puede utilizar el área Encabezado para los nombres de las columnas, para instrucciones, información adicional o incluso un gráfico como el logotipo de una empresa o un patrón decorativo.

You can also place and use active objects in the Header area of output forms displayed as subforms, in the records display window or using the `DISPLAY SELECTION` and `MODIFY SELECTION` commands. Se pueden insertar los siguientes objetos activos:

- Botones, botones imagen,
- Combo boxes, listas desplegables, menús emergentes de imágenes,
- listas jerárquicas, list boxes
- Botones de radio, casillas de selección, casillas de selección 3D,
- Indicadores de progreso, reglas, steppers, spinners.

Standard actions such as `Add Subrecord`, `Cancel` (lists displayed using `DISPLAY SELECTION` and `MODIFY SELECTION`) or `Automatic splitter` can be assigned to the inserted buttons. The following events apply to the active objects you insert in the Header area: `On Load`, `On Clicked`, `On Header`, `On Printing Footer`, `On Double Clicked`, `On Drop`, `On Drag Over`, `On Unload`. Keep in mind that the form method is called with the `On Header` event after calling the object methods of the area.

The form can contains [additional header areas](#additional-areas) to be associated with additional breaks. Se imprime un Encabezado nivel 1 justo antes de imprimir los registros agrupados por el primer campo ordenado.

#### Gramática JSON

| Nombre       | Tipos de datos                | Valores posibles                                                                                                                                         |
| ------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| markerHeader | integer \| integer collection | Posición del marcador de encabezado o colección de posiciones del marcador de encabezado en píxeles.<br/>Valor mínimo: 0 |

## Áreas adicionales

Puede crear áreas de Ruptura y Encabezados adicionales para un informe. Estas áreas adicionales permiten imprimir subtotales y otros cálculos en un informe y mostrar otra información de forma eficaz.

Additional areas are defined when you use a collection of positions in the [Form Break](#form-break) and [Form Header](#form-header) properties.

> In the 4D Form editor, you create additional control lines by holding down the **Alt** key while clicking the appropriate control marker.

Un formulario comienza siempre con las áreas de Encabezado, Detalle, Nivel 0 y Pie de página.

La Ruptura en el nivel 0 cero toma todos los registros; se produce después de imprimir todos los registros. Se pueden añadir áreas de ruptura adicionales, es decir, un nivel de ruptura 1, un nivel de ruptura 2, etc.

Un nivel de Ruptura 1 se produce después de imprimir los registros agrupados por el primer campo ordenado.

| Etiqueta | Descripción        | Imprime después de grupos creados por |
| -------- | ------------------ | ------------------------------------- |
| B1       | Nivel de ruptura 1 | Primer campo ordenado                 |
| B2       | Nivel de ruptura 2 | Segundo campo ordenado                |
| B3       | Nivel de ruptura 3 | Tercer campo ordenado                 |

Las áreas adicionales del encabezado están asociadas a las interrupciones. Se imprime un Encabezado nivel 1 justo antes de imprimir los registros agrupados por el primer campo ordenado.

| Etiqueta | Descripción              | Imprime después de grupos creados por |
| -------- | ------------------------ | ------------------------------------- |
| H1       | Encabezado en el nivel 1 | Primer campo ordenado                 |
| H2       | Encabezado en el nivel 2 | Segundo campo ordenado                |
| H3       | Encabezado en el nivel 3 | Tercer campo ordenado                 |

If you use the `Subtotal` function to initiate Break processing, you should create a Break area for every level of Break that will be generated by the sort order, minus one. Si no necesita imprimir nada en una de las áreas de Ruptura, puede reducir su tamaño a nada colocando su marcador sobre otra línea de control. Si tiene más niveles de clasificación que áreas de pausa, la última área de pausa se repetirá durante la impresión.
