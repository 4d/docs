---
id: printing-page
title: Printing page
slug: /commands/printing-page
displayed_sidebar: docs
---

<!--REF #_command_.Printing page.Syntax-->**Printing page**  : Integer<!-- END REF-->
<!--REF #_command_.Printing page.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de la página que se está imprimiendo |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Printing page.Summary-->**Printing page** devuelve el número de la página en impresión.<!-- END REF--> Puede utilizarse sólo cuando esté imprimiendo con [PRINT SELECTION](print-selection.md) o con el menú Impresión en el entorno Diseño.

#### Ejemplo 

El siguiente ejemplo cambia la posición de los números de página en un informe de manera que el informe pueda ser reproducido en un formato de dos lados. El formulario par el informe tiene dos variables que muestran los números de página. Una variable en la esquina inferior izquierda (*vNumPagIzq*) imprimirá los números de páginas pares. Una variable en la esquina inferior derecha (*vNumPagDer*) imprimirá los números de las páginas impares. El ejemplo prueba si el número de la página es par o impar, luego borra y utiliza las variables apropiadas:

```4d
 Case of
    :(FORM Event=On Printing Footer)
       If((Printing page% 2)=0) // Modulo es 0 para un número de página par
          vNumPagIzq:=String(Printing page) // Fijar el número de página a la izquierda
          vNumPagDer:="" // Borrar el número de página a la derecha
       Else // De lo contrario, el número de página es impar
          vNumPagIzq:="" // Borrar el número de página a la izquierda
          vNumPagDer:=String(Printing page) // Fijar el número de página a la derecha
       End if
 End case
```

#### Ver también 

[PRINT SELECTION](print-selection.md)  