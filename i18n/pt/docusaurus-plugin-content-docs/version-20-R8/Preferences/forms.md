---
id: forms
title: Página Formulários
---

Esta página permite-lhe definir a operação e o ecrã padrão do editor de formulários de 4D.

## Mover

Este grupo de opções define parâmetros para mover objetos utilizando o teclado ou o rato no editor de formulários.

### Passo utilizando o teclado

Esta opción permite establecer el valor (en puntos) del paso utilizado para mover o redimensionar un objeto utilizando el teclado y la tecla **Mayús**.

### Ao ultrapassar os limites da janela

This option allows setting the behavior of the Form editor when moving an object using the mouse beyond window limits.

- **Provocar un desplazamiento automático**: cuando esta opción está marcada, esta acción provoca el desplazamiento del formulario en la ventana, como si se hiciera clic en las barras de desplazamiento. Esse comportamento é útil para mover objetos em formulários grandes.
- **Comenzar un arrastrar y soltar**: cuando se marca esta opción, esta acción se interpreta como un arrastrar y soltar. The form window is not modified and the moved object can be dropped in another window (if its contents are compatible), for example, in another form. Este funcionamiento es útil para reciclar los objetos entre varios formularios o para utilizar las librerías de objetos (ver [Crear y utilizar librerías de objetos personalizadas](FormEditor/objectLibrary.md#creating-and-using-custom-object-libraries)).

You can configure this option depending on your work habits and development needs.

### Ativar o alinhamento automático por padrão

This option activates auto alignment by default in each new window of the Form editor. Es posible modificar esta opción individualmente en cada ventana (consulte [Utilizar la rejilla magnética](FormEditor/formEditor.md#using-the-magnetic-grid)).

## Exibição padrão do novo formulário

- **Limites**, **Reglas**, ...: elementos de control que deben mostrarse por defecto en cada nueva ventana del editor de formularios. Es posible modificar la visualización de cada ventana individualmente utilizando el menú jerárquico **Mostrar** del editor de formularios.
- **Color de las líneas de marcado**: modifica el color de las líneas de marcado utilizadas en el editor de formularios para definir las diferentes áreas (encabezado, rupturas, detalle y pie de página, etc.). Para obtener más información sobre los marcadores, consulte [Utilizar las líneas de control de salida](https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html).
- **Marca de visualización por defecto**: define qué marcas se mostrarán por defecto en cada nueva ventana del editor de formularios. Para más información sobre marcas, consulte [Utilizar marcas](FormEditor/formEditor.md#using-shields).
