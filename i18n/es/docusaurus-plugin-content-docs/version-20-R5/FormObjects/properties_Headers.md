---
id: propertiesHeaders
title: Encabezados
---

## Mostrar encabezados

Esta propiedad se utiliza para mostrar u ocultar [los encabezados de columna listbox](listbox_overview.md#list-box-headers). Hay un encabezado por columna; cada encabezado se configura por separado.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles |
| ----------- | -------------- | ---------------- |
| showHeaders | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Altura

Esta propiedad se utiliza para definir la altura de línea de un encabezado de list box en **píxeles** o **líneas de texto** (cuando se muestra). Ambos tipos de unidades pueden utilizarse en el mismo list box:

- _Píxel_ - el valor de la altura se aplica directamente a la línea en cuestión, independientemente del tamaño de la fuente contenida en las columnas. Si una fuente es demasiado grande, el texto se trunca. Además, las imágenes se truncan o cambian de tamaño según su formato.

- _Línea_ - la altura se calcula teniendo en cuenta el tamaño de la fuente de la línea en cuestión.
  - Si se define más de un tamaño, 4D utiliza el mayor. Por ejemplo, si una línea contiene "Verdana 18", "Geneva 12" y "Arial 9", 4D utiliza "Verdana 18" para determinar la altura de la línea (por ejemplo, 25 píxeles). Esta altura se multiplica por el número de líneas definidas.
  - Este cálculo no tiene en cuenta el tamaño de las imágenes ni los estilos aplicados a las fuentes.
  - En macOS, la altura de línea puede ser incorrecta si el usuario introduce caracteres que no están disponibles en la fuente seleccionada. Cuando esto ocurre, se utiliza un tipo de letra sustituto, lo que puede provocar variaciones en el tamaño.

> > This property can also be set dynamically using the [LISTBOX SET HEADERS HEIGHT](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html) command.

Conversión de unidades: cuando se pasa de una unidad a otra, 4D las convierte automáticamente y muestra el resultado en la Lista de propiedades. Por ejemplo, si la fuente utilizada es "Lucida grande 24", una altura de "1 línea" se convierte en "30 píxeles" y una altura de "60 píxeles" se convierte en "2 líneas".

Tenga en cuenta que la conversión de ida y vuelta puede conducir a un resultado final diferente del valor inicial debido a los cálculos automáticos realizados por 4D. Esto se ilustra en las siguientes secuencias:

- (fuente Arial 18)\*: 52 píxeles -> 2 líneas -> 40 píxeles
- (fuente Arial 12)\*: 3 píxeles -> 0,4 línea redondeada a 1 línea -> 19 píxeles

#### Ejemplo JSON

```
 "List Box": {
  "type": "listbox",
  "showHeaders": true,
  "headerHeight": "22px",  
  ...
  }
```

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles              |
| ------------ | -------------- | ----------------------------- |
| headerHeight | string         | decimales positivos +px \| em |

#### Objetos soportados

[List Box](listbox_overview.md)

#### Ver también

[Pies](properties_Footers.md) - [Encabezados List box](listbox_overview.md#list-box-headers)
