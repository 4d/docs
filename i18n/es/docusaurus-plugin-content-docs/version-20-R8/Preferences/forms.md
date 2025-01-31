---
id: forms
title: Página formulario
---

Esta página le permite establecer el funcionamiento y la visualización por defecto del editor de formularios 4D.

## Mover

Este grupo de opciones establece los parámetros para mover objetos utilizando el teclado o el ratón en el editor de formularios.

### Paso a paso con el teclado

Esta opción permite establecer el valor (en puntos) del paso utilizado para mover o redimensionar un objeto utilizando el teclado y la tecla **Mayús**.

### Cuando se mueve más allá de los límites de la ventana

Esta opción permite definir el funcionamiento del editor de formularios cuando se mueve un objeto con el ratón más allá de los límites de la ventana.

- **Provocar un desplazamiento automático**: cuando esta opción está marcada, esta acción provoca el desplazamiento del formulario en la ventana, como si se hiciera clic en las barras de desplazamiento. Este comportamiento es útil para mover los objetos en los formularios de gran tamaño.
- **Comenzar un arrastrar y soltar**: cuando se marca esta opción, esta acción se interpreta como un arrastrar y soltar. La ventana del formulario no se modifica y el objeto desplazado puede colocarse en otra ventana (si su contenido es compatible), por ejemplo, en otro formulario. Este funcionamiento es útil para reciclar los objetos entre varios formularios o para utilizar las librerías de objetos (ver [Crear y utilizar librerías de objetos personalizadas](FormEditor/objectLibrary.md#creating-and-using-custom-object-libraries)).

Puede configurar esta opción en función de sus hábitos de trabajo y necesidades de desarrollo.

### Activar alineación automática por defecto

Esta opción activa la alineación automática por defecto en cada nueva ventana del editor de formularios. Es posible modificar esta opción individualmente en cada ventana (consulte [Utilizar la rejilla magnética](FormEditor/formEditor.md#using-the-magnetic-grid)).

## Nueva visualización por defecto del formulario

- **Limites**, **Reglas**, ...: elementos de control que deben mostrarse por defecto en cada nueva ventana del editor de formularios. Es posible modificar la visualización de cada ventana individualmente utilizando el menú jerárquico **Mostrar** del editor de formularios.
- **Color de las líneas de marcado**: modifica el color de las líneas de marcado utilizadas en el editor de formularios para definir las diferentes áreas (encabezado, rupturas, detalle y pie de página, etc.). Para obtener más información sobre los marcadores, consulte [Utilizar las líneas de control de salida](https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html).
- **Marca de visualización por defecto**: define qué marcas se mostrarán por defecto en cada nueva ventana del editor de formularios. Para más información sobre marcas, consulte [Utilizar marcas](FormEditor/formEditor.md#using-shields).
