---
id: markers
title: Marcadores
---


Estas propiedades permiten especificar la ubicación precisa de los marcadores en la regla vertical de un **formulario tabla**. Los marcadores se utilizan principalmente en los formularios de salida. They control the information that is listed and set header, breaks, detail and footer areas of the form. Any object that placed in these areas is displayed or printed at the appropriate location.

Whenever any form is used for output, either for screen display or printing, the output marker lines take effect and the areas display or print at designated locations. The markers also take effect when a form is used as the List form in a subform area. Sin embargo, no tienen ningún efecto cuando se utiliza un formulario para introducir datos.

Methods that are associated with objects in these areas are executed when the areas are printed or displayed as long as the appropriate events have been activated. For example, a object method placed in the Header area is executed when the `On Header` event takes place.

---

## Form Break

Form Break areas are displayed once at the end of the list of records and are printed once after the records have been printed in a report.

The Break area is defined as the area between the Detail control line and the Break control line. There can be [several Break areas](#additional-areas) in your report.

You can make Break areas smaller or larger. You can use a Break area to display information that is not part of the records (instructions, current date, current time, etc.), or to display a line or other graphic element that concludes the screen display. In a printed report, you can use a Break area for calculating and printing subtotals and other summary calculations.

#### Gramática JSON

| Nombre      | Tipos de datos                    | Valores posibles                                                                                    |
| ----------- | --------------------------------- | --------------------------------------------------------------------------------------------------- |
| markerBreak | integer &#x7c; integer collection | Break marker position or collection of break marker positions in pixels.<br/>Minimum value: 0 |

---

## Formulario detallado

The form Detail area is displayed on the screen and printed once for each record in a report. The Detail area is defined as the area between the Header control line and the Detail control line.

Puede hacer el área Detalle más pequeña o más grande. Whatever you place in the Detail area is displayed or printed once for each record. Most often you place fields or variables in the Detail area so that the information in each record is displayed or printed, but you can place other elements in the Detail area as well.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                            |
| ---------- | -------------- | ------------------------------------------- |
| markerBody | integer        | Posición del marcador de detalle. Mínimo: 0 |

---

## Pie del formulario

El área de pie de página del formulario se muestra en pantalla bajo la lista de registros. Siempre se imprime al final de cada página de un informe. The Footer area is defined as the area between the Break control line and the Footer control line.

Puede hacer que el área del pie de página sea más pequeña o más grande.

You can use the Footer area to print graphics, page numbers, the current date, or any text you want at the bottom of each page of a report. For output forms designed for use on screen, the Footer area typically contains buttons that give the user options such as doing a search or sort, printing records, or putting away the current report. Se aceptan los objetos activos.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles |
| ------------ | -------------- | ---------------- |
| markerFooter | integer        | mínimo: 0        |

---

## Encabezado del formulario

The form Header area is displayed at the top of each screen and is printed at the top of each page of a report. El área de encabezado se define como el área por encima de la línea de control del encabezado.

Puede hacer el área Encabezado más pequeña o más grande. You can use the Header area for column names, for instructions, additional information, or even a graphic such as a company logo or a decorative pattern.

You can also place and use active objects in the Header area of output forms displayed as subforms, in the records display window or using the `DISPLAY SELECTION` and `MODIFY SELECTION` commands. Se pueden insertar los siguientes objetos activos:

- Botones, botones imagen,
- Combo boxes, listas desplegables, menús emergentes de imágenes,
- listas jerárquicas, list boxes
- Botones de radio, casillas de selección, casillas de selección 3D,
- Indicadores de progreso, reglas, steppers, spinners.

Standard actions such as `Add Subrecord`, `Cancel` (lists displayed using `DISPLAY SELECTION` and `MODIFY SELECTION`) or `Automatic splitter` can be assigned to the inserted buttons. The following events apply to the active objects you insert in the Header area: `On Load`, `On Clicked`, `On Header`, `On Printing Footer`, `On Double Clicked`, `On Drop`, `On Drag Over`, `On Unload`. Keep in mind that the form method is called with the `On Header` event after calling the object methods of the area.

The form can contains [additional header areas](#additional-areas) to be associated with additional breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed.

#### Gramática JSON

| Nombre       | Tipos de datos                    | Valores posibles                                                                                      |
| ------------ | --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| markerHeader | integer &#x7c; integer collection | Header marker position or collection of header marker positions in pixels.<br/>Minimum value: 0 |

## Áreas adicionales

You can create additional Break areas and Header areas for a report. These additional areas allow you to print subtotals and other calculations in a report and to display other information effectively.

Additional areas are defined when you use a collection of positions in the [Form Break](#form-break) and [Form Header](#form-header) properties.

> In the 4D Form editor, you create additional control lines by holding down the **Alt** key while clicking the appropriate control marker.

A form always starts with a Header, Detail, Break level 0, and Footer areas.

Break at level 0 zero takes in all the records; it occurs after all the records are printed. Additional Break areas can be added, i.e. a Break level 1, Break level 2, etc.

A Break level 1 occurs after the records grouped by the first sorted field are printed.

| Etiqueta | Descripción        | Prints after groups created by |
| -------- | ------------------ | ------------------------------ |
| B1       | Nivel de ruptura 1 | Primer campo ordenado          |
| B2       | Nivel de ruptura 2 | Segundo campo ordenado         |
| B3       | Nivel de ruptura 3 | Tercer campo ordenado          |

Las áreas adicionales del encabezado están asociadas a las interrupciones. A level 1 Header is printed just before the records grouped by the first sorted field are printed.

| Etiqueta | Descripción              | Prints after groups created by |
| -------- | ------------------------ | ------------------------------ |
| H1       | Encabezado en el nivel 1 | Primer campo ordenado          |
| H2       | Encabezado en el nivel 2 | Segundo campo ordenado         |
| H3       | Encabezado en el nivel 3 | Tercer campo ordenado          |

If you use the `Subtotal` function to initiate Break processing, you should create a Break area for every level of Break that will be generated by the sort order, minus one. If you do not need anything printed in one of the Break areas, you can reduce its size to nothing by placing its marker on top of another control line. If you have more sort levels than Break areas, the last Break area will be repeated during printing.
