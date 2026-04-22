---
id: propertiesFooters
title: Pies
---

## Mostrar pies

Esta propiedad se utiliza para mostrar u ocultar [los pies de columna de los list box](listbox-header-footer.md#footers). Hay un pie de página por columna; cada pie de página se configura por separado.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles |
| ----------- | -------------- | ---------------- |
| showFooters | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Altura

Esta propiedad se utiliza para definir la altura de línea de un pie de list box en **píxeles** o **líneas de texto** (cuando se muestra). Ambos tipos de unidades pueden utilizarse en el mismo list box:

* *Píxel* - el valor de la altura se aplica directamente a la línea en cuestión, independientemente del tamaño de la fuente contenida en las columnas. Si una fuente es demasiado grande, el texto se trunca. Además, las imágenes se truncan o cambian de tamaño según su formato.

* *Línea* - la altura se calcula teniendo en cuenta el tamaño de la fuente de la línea en cuestión.
  * Si se define más de un tamaño, 4D utiliza el mayor. Por ejemplo, si una línea contiene "Verdana 18", "Geneva 12" y "Arial 9", 4D utiliza "Verdana 18" para determinar la altura de la línea (por ejemplo, 25 píxeles). Esta altura se multiplica por el número de líneas definidas.
  * Este cálculo no tiene en cuenta el tamaño de las imágenes ni los estilos aplicados a las fuentes.
  * En macOS, la altura de línea puede ser incorrecta si el usuario introduce caracteres que no están disponibles en la fuente seleccionada. Cuando esto ocurre, se utiliza un tipo de letra sustituto, lo que puede provocar variaciones en el tamaño.
> > Esta propiedad también puede establecerse dinámicamente mediante el comando [LISTBOX SET FOOTERS HEIGHT](https://doc.4d.com/4Dv20/4D/20.6/LISTBOX-SET-FOOTERS-HEIGHT.301-7487629.en.html).

Conversión de unidades: cuando se pasa de una unidad a otra, 4D las convierte automáticamente y muestra el resultado en la Lista de propiedades. Por ejemplo, si la fuente utilizada es "Lucida grande 24", una altura de "1 línea" se convierte en "30 píxeles" y una altura de "60 píxeles" se convierte en "2 líneas".

Tenga en cuenta que la conversión de ida y vuelta puede conducir a un resultado final diferente del valor inicial debido a los cálculos automáticos realizados por 4D. Esto se ilustra en las siguientes secuencias:

*(font Arial 18)*: 52 pixels -> 2 lines -> 40 pixels *(font Arial 12)*: 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels

#### Ejemplo JSON

```
 "List Box": {
  "type": "listbox",
  "showFooters": true,
  "footerHeight": "44px",  
  ...
  }
```

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                  |
| ------------ | -------------- | --------------------------------- |
| footerHeight | string         | decimales positivos +px &#124; em |

#### Objetos soportados

[List Box](listbox_overview.md)

#### Ver también

[Encabezados](properties_Headers.md) - [Pies de List box](listbox-header-footer.md#footers)
