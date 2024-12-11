---
id: subtotal
title: Subtotal
slug: /commands/subtotal
displayed_sidebar: docs
---

<!--REF #_command_.Subtotal.Syntax-->**Subtotal** ( *valores* {; *saltoPag*} ) : Real<!-- END REF-->
<!--REF #_command_.Subtotal.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valores | Field | &#8594;  | Campo o variable numérica donde quiere devolver el subtotal |
| saltoPag | Integer | &#8594;  | Nivel de ruptura para el cual efectuar un salto de página |
| Resultado | Real | &#8592; | Subtotal de valores |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Subtotal.Summary-->Subtotal devuelve el subtotal de *valores* para el nivel de ruptura actual o anterior.<!-- END REF--> Subtotal sólo funciona cuando una selección ordenada se imprime con [PRINT SELECTION](print-selection.md "PRINT SELECTION") o utilizando Imprimir en el entorno Diseño. El parámetro *valores* debe ser de tipo real, entero, o entero largo. Usted debe asignar el resultado de la función Subtotal a una variable ubicada en el área de ruptura del formulario.

**Advertencia:** **debe** ejecutar los comandos [BREAK LEVEL](break-level.md "BREAK LEVEL") y [ACCUMULATE](accumulate.md "ACCUMULATE") antes de cada informe de formulario para el cual quiera hacer proceso de ruptura y calcular subtotales. Ver la discusión al final de la descripción de este comando.

El segundo parámetro (opcional) de la función Subtotal se utiliza para provocar saltos de página durante la impresión. Si *saltoPag* es 0, Subtotal no genera ningún salto de página. Si *saltoPag* es igual a 1, Subtotal genera un salto de página para cada nivel de ruptura 1\. Si *saltoPag* es igual a 2, Subtotal genera un salto de página para cada nivel de ruptura 1 y 2, etc.

**Consejo:** si ejecuta Subtotal desde un formulario de salida mostrado en pantalla, se generará un error, disparando un bucle infinito de actualizaciones entre el formulario y la ventana de error. Para salir de este bucle, presione Alt+Mayús (Windows) u Opción-Mayús (Macintosh) y haga clic en el botón Abortar en la ventana de error (probablemente tenga que hacer esto varias veces). Esto detiene temporalmente las actualizaciones de la ventana del formulario. Seleccione otro formulario de salida de manera que el error no se repita. Regrese al entorno Diseño y aísle la llamada a Subtotal para una prueba Form event=On Printing Break si tiene la intención de utilizar el mismo formulario de salida para la visualización y la impresión.

#### Ejemplo 

El siguiente ejemplo es un método de objeto en un área de ruptura de un formulario (B0, el área situada sobre el marcador B0). La variable vSalario está ubicada en el área de ruptura. La variable toma el valor del subtotal del campo Salario para este nivel de ruptura. El tratamiento de ruptura debe haber sido activado de antemano utilizando los comandos [ACCUMULATE](accumulate.md "ACCUMULATE") y [BREAK LEVEL](break-level.md "BREAK LEVEL").

```4d
 Case of
    :(FORM Event=On Printing Break)
       vSalario:=Subtotal([Empleados]Salario)
 End case
```

Para mayor información sobre diseño de formulario con áreas de encabezado y de ruptura, consulte el manual de Diseño.

#### Activación de niveles de ruptura en los formularios de informes 

Para poder generar informes con rupturas, debe activar el tratamiento de rupturas llamando los comandos BREAK LEVEL y ACCUMULATE.

Debe ejecutar ambos comandos antes de imprimir un informe de formulario. La función Subtotal es necesaria para mostrar los valores en un formulario. Debe ordenar al menos el número de niveles de rupturas que necesite.

Cuando utilice BREAK LEVEL y ACCUMULATE, el proceso de imprimir un informe es generalmente como este:

1\. Seleccione los registros a imprimir.

2\. Ordene los registros utilizando [ORDER BY](order-by.md "ORDER BY"). Ordene el mismo número de niveles como rupturas.

3\. Ejecute BREAK LEVEL y ACCUMULATE.

4\. Imprima el informe utilizando [PRINT SELECTION](print-selection.md "PRINT SELECTION").

La función Subtotal es necesaria para mostrar valores en un formulario.

#### Ver también 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level](level.md)  
[PRINT SELECTION](print-selection.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 97 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


