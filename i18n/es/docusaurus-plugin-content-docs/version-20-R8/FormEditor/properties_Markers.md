---
id: markers
title: Marcadores
---

Estas propiedades permiten especificar la ubicación precisa de los marcadores en la regla vertical de un **formulario tabla**. Los marcadores se utilizan principalmente en los formularios de salida. Controlan la información que se lista y definen las áreas de encabezado, saltos, detalles y pie de página del formulario. Todo objeto que se coloque en estas áreas se mostrará o imprimirá en el lugar correspondiente.

Siempre que se utilice cualquier formulario para la salida, ya sea para la visualización en pantalla o para la impresión, las líneas de marcador de salida tienen efecto y las áreas se muestran o imprimen en los lugares designados. Los marcadores también tienen efecto cuando un formulario se utiliza como formulario lista en un área de subformulario. Sin embargo, no tienen ningún efecto cuando se utiliza un formulario para introducir datos.

Los métodos asociados a los objetos de estas áreas se ejecutan cuando las áreas se imprimen o se muestran siempre que se hayan activado los eventos correspondientes. Por ejemplo, un método objeto colocado en el área Encabezado se ejecuta cuando se produce el evento `On Header`.

---

## Ruptura de formulario

Las áreas de Ruptura del formulario se muestran una vez al final de la lista de registros y se imprimen una vez después de imprimir los registros en un informe.

El área Ruptura se define como el área comprendida entre la línea de control Detalle y la línea de control Ruptura. Puede haber [varias áreas de ruptura](#additional-areas) en su informe.

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

También puede colocar y utilizar objetos activos en el área de encabezado de los formularios de salida mostrados como subformularios, en la ventana de visualización de registros o utilizando los comandos `DISPLAY SELECTION` y `MODIFY SELECTION`. Se pueden insertar los siguientes objetos activos:

- Botones, botones imagen,
- Combo boxes, listas desplegables, menús emergentes de imágenes,
- listas jerárquicas, list boxes
- Botones de radio, casillas de selección, casillas de selección 3D,
- Indicadores de progreso, reglas, steppers, spinners.

A los botones insertados se les pueden asignar acciones estándar como `Add Subrecord`, `Cancel` (listas visualizadas utilizando `DISPLAY SELECTION` y `MODIFY SELECTION`) o `Automatic splitter`. Los siguientes eventos se aplican a los objetos activos que inserte en el área Encabezado: `On Load`, `On Clicked`, `On Header`, `On Printing Footer`, `On Double Clicked`, `On Drop`, `On Drag Over`, `On Unload`. Tenga en cuenta que el método formulario se llama con el evento `On Header` después de llamar a los métodos del objeto del área.

El formulario puede contener [áreas de encabezado adicionales](#additional-areas) que se asociarán a rupturas adicionales. Se imprime un Encabezado nivel 1 justo antes de imprimir los registros agrupados por el primer campo ordenado.

#### Gramática JSON

| Nombre       | Tipos de datos                | Valores posibles                                                                                                                                         |
| ------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| markerHeader | integer \| integer collection | Posición del marcador de encabezado o colección de posiciones del marcador de encabezado en píxeles.<br/>Valor mínimo: 0 |

## Áreas adicionales

Puede crear áreas de Ruptura y Encabezados adicionales para un informe. Estas áreas adicionales permiten imprimir subtotales y otros cálculos en un informe y mostrar otra información de forma eficaz.

Las áreas adicionales se definen cuando se utiliza una colección de posiciones en las propiedades [Ruptura](#form-break) y [Encabezado](#form-header).

> En el editor de formularios 4D, puede crear líneas de control adicionales manteniendo presionada la tecla **Alt** mientras hace clic en el marcador de control apropiado.

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

Si utiliza la función `Subtotal` para iniciar el procesamiento de Rupturas, deberá crear un área de Pausa para cada nivel de Ruptura que generará el orden de clasificación, menos uno. Si no necesita imprimir nada en una de las áreas de Ruptura, puede reducir su tamaño a nada colocando su marcador sobre otra línea de control. Si tiene más niveles de clasificación que áreas de pausa, la última área de pausa se repetirá durante la impresión.
