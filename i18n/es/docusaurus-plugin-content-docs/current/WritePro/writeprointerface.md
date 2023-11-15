---
id: writeprointerface
title: Interfaz 4D Write Pro
---

4D WritePro Interface ofrece un conjunto de paletas, que permiten a los usuarios finales personalizar fácilmente un documento 4D Write Pro.

Un desarrollador 4D puede implementar fácilmente estas paletas en su aplicación. Así, los usuarios finales pueden gestionar todas las propiedades de 4D Write Pro, como las fuentes, la alineación del texto, los marcadores, la disposición de las tablas y los marcos.

La documentación principal de [la interfaz de 4D Write Pro](https://doc.4d.com/4Dv20/4D/20/Entry-areas.300-6263967.en.html) se encuentra en el manual *Diseño 4D*.

A continuación encontrará la documentación de configuración del Asistente para tablas.

## Asistente de tablas

El asistente de tablas está aquí para simplificar aún más la creación de tablas basadas en datos de bases d utilizando contextos, fuentes de datos y fórmulas.

El asistente de tablas, accesible a los usuarios finales, carga plantillas suministradas y configuradas por los desarrolladores de 4D. Esto permite a los desarrolladores personalizar la plantilla según los casos de uso específicos y los requisitos empresariales de los usuarios.

El Asistente de tablas viene con plantillas y temas predeterminados, que los desarrolladores pueden configurar para adaptar su contenido a los requisitos específicos de la aplicación.

Para implementar el Asistente de tablas en su aplicación, los desarrolladores pueden crear y configurar archivos de plantilla.

### Interfaz del Asistente de tablas WP

El usuario abre el diálogo Asistente para tablas desde el elemento de menú "Insertar tabla" de la barra de herramientas y la barra lateral de la interfaz de 4D Write Pro.

![](../assets/en/WritePro/tablewizard-interface.png)

Desde esta interfaz, el usuario puede seleccionar una plantilla o una tabla en la primera lista desplegable y un tema en la segunda.

##### En Columnas:

![](../assets/en/WritePro/columns2.PNG)

Dependiendo de si el usuario selecciona un modelo o una tabla, puede ver la lista de campos almacenados en el modelo (los tipos Blob y objeto se excluyen automáticamente). A continuación, pueden seleccionar las columnas que se mostrarán en la tabla marcando la casilla situada delante del nombre del campo y ordenarlas moviendo y arrastrando la lista de campos.

##### En líneas:

![](../assets/en/WritePro/rows.PNG)

En el Asistente de tablas, el usuario también puede definir el número de líneas de encabezado y de líneas adicionales (de 0 a 5 cada una), definir [líneas de interrupción](https://doc.4d.com/4Dv20/4D/20/Handling-tables.200-6229469.en.html#6233076) (líneas de resumen) por encima o por debajo de la línea de datos, y elegir mostrar/ocultar [líneas de arrastre](https://doc.4d.com/4Dv20/4D/20/Handling-tables.200-6229469.en.html#6236686).

##### En pantalla:

![](../assets/en/WritePro/display2.PNG)

El usuario ajusta el nivel de zoom según sus preferencias seleccionando la opción deseada de una lista desplegable, utiliza botones de opción para mostrar fórmulas o datos para una presentación clara y elige mostrar una regla horizontal utilizando una casilla de verificación.

Tras finalizar la creación y personalización de la tabla, el usuario puede hacer clic en el botón **Insertar** para añadir la tabla a su documento WP.

Una vez integrada la tabla en el documento, el usuario puede personalizar su estilo. Las herramientas de formato de la barra de herramientas y la barra lateral siguen estando disponibles.

### Configuración de la plantilla WP Table Wizard

La configuración de las plantillas incluye:

* Definición de tablas y campos, así como preparación de fórmulas adaptadas a la aplicación desde el [archivo de plantilla](#template-files).
* Traducción de nombres de tablas, campos y fórmulas del [archivo de traducción](#translation-files).
* Diseño de estilos gráficos y temas personalizados a partir del [ archivo de temas](#theme-files).

Estos tres tipos de archivos contribuyen a la configuración del Asistente para tablas y, aunque cada uno de ellos tiene una finalidad distinta, ninguno de ellos se considera un componente esencial.

#### Archivos de plantillas

El archivo de plantilla permite definir lo siguiente:

- la fórmula que devuelve una selección de entidades utilizada como fuente de datos de la tabla,
- the break formulas (if any break row can be inserted)
- the dataclass attributes that can be used as table columns,
- the formulas available as contextual menus inside break rows, carry-over row or extra rows.

:::info Limitación

In the current implementation (4D v20 R2), formulas in breaks, data sources and contextual menus do not support calls to the host database methods. This limitation will be removed in the next version.

:::

The template file must be stored in a "[`Resources`](../Project/architecture.md#resources)/4DWP_Wizard/Templates" folder within your project.

The template file in JSON format contains the following attributes:

| Atributo             | Tipo       | Obligatorio | Descripción                                                                                                                                              |
|:-------------------- |:---------- |:----------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tableDataSource      | Text       | x           | Formula of table data source                                                                                                                             |
| columns              | Collection | x           | Colección de columnas de tabla                                                                                                                           |
| columns.check        | Text       | x           | True when the column is already checked in the template editor. False when the column is unchecked in the template editor.                               |
| columns.header       | Text       | x           | Etiqueta mostrada al usuario                                                                                                                             |
| columns.source       | Text       | x           | Formula                                                                                                                                                  |
| breaks               | Collection |             | Collection of break objects. The order of the breaks is important. It corresponds to the order in the document when the breaks are above the data lines. |
| breaks.label         | Text       | x           | Etiqueta mostrada al usuario                                                                                                                             |
| breaks.source        | Text       | x           | Formula                                                                                                                                                  |
| breakFormulas        | Collection |             | Collection of formula objects applicable to break rows                                                                                                   |
| breakFormulas.label  | Text       | x           | Etiqueta mostrada al usuario                                                                                                                             |
| breakFormulas.source | Text       | x           | Formula                                                                                                                                                  |
| bcorFormulas         | Collection |             | Collection of formula objects applicable to bottom carry over rows                                                                                       |
| bcorFormulas.label   | Text       | x           | Etiqueta mostrada al usuario                                                                                                                             |
| bcorFormulas.source  | Text       | x           | Formula                                                                                                                                                  |
| extraFormulas        | Collection |             | Collection of formula objects applicable to extra rows                                                                                                   |
| extraFormulas.label  | Text       | x           | Etiqueta mostrada al usuario                                                                                                                             |
| extraFormulas.source | Text       | x           | Formula                                                                                                                                                  |

:::note Francés

If your application is likely to be run on a 4D with language set to French, make sure that you use [tokens](https://doc.4d.com/4Dv20/4D/20/Using-tokens-in-formulas.300-6237731.en.html) in your formulas so that they are correctly interpreted no matter the user's language configuration.

:::

##### Ejemplo

He aquí un breve ejemplo del aspecto que podría tener su archivo JSON:

```json
{
    "tableDataSource": "ds.People.all().orderBy(\"toCompany.name asc, continent asc, country asc, city asc\")",
    "columns": [{
            "check": true,
            "header": "Firstname",
            "source": "This.item.firstname"
        }, {
            "check": true,
            "header": "Lastname",
            "source": "This.item.lastname"
        }, {
            "check": true,
            "header": "Salary",
            "source": "String(This.item.salary;\"###,###.00\")"
        }
    ],
    "breaks": [{
            "label": "Company",
            "source": "This.item.toCompany.name"
        }
    ],
    "breakFormulas": [{
            "label": "Company",
            "source": "This.item.toCompany.name"
    }, {
            "label": "Sum of salaries",
            "source": "String(This.breakItems.sum(\"salary\"); \"###,###.00\")"
        }
    ],
    "bcorFormulas": [{
            "label": "Sum of salaries",
            "source": "String(This.tableData.sum(\"salary\"); \"###,###.00\")"
        }
    ],
    "extraFormulas": [{
            "label": "Sum of salaries",
            "source": "String(This.tableData.sum(\"salary\"); \"###,###.00\")"
        }
    ]
}

```

#### Archivos de traducción

Translation files translate the names of templates, themes, tables, fields, and formulas. These files are added to the "[`Resources`](../Project/architecture.md#resources)/4DWP_Wizard/Translations" folder in your project.

Each translation file must be named with the corresponding language code (for example "en" for English or "fr" for French).

The translation file in JSON format contains the following attributes:

| Atributo  | Tipo       | Obligatorio | Descripción                                                                           |
|:--------- |:---------- |:----------- |:------------------------------------------------------------------------------------- |
| tables    | Collection |             | Colección de objetos de tabla traducidos                                              |
| fields    | Collection |             | Collection of translated field objects                                                |
| formulas  | Collection |             | Collection of translated formula objects                                              |
| fileNames | Collection |             | Collection of translated fileName objects (applicable to the theme and template name) |

Whitin each one of these attribute, the translation object includes the following attributes:

| Atributo    | Tipo | Obligatorio | Descripción                           |
|:----------- |:---- |:----------- |:------------------------------------- |
| original    | Text | x           | Texto original destinado a traducción |
| translation | Text | x           | Versión traducida del texto original  |

Defining these attributes within the translation object ensures proper organization and alignment between the source and translated content.

If the template name or the formula (break, carry-over row, or extra) exists in the translated file, its translation is applied in the Table Wizard. In addition, only the table defined within the translation file is displayed and translated.

The translation file serves an additional role when a user selects a table in the interface. It can filter the tables and fields proposed to the user. For example, to hide table IDs, this behavior is similar to the `SET TABLE TITLES` and `SET FIELD TITLES` commands.

##### Ejemplo

```json
{
    "tables": [{
            "original": "People",
            "translation": "Personne"
        }
    ],
    "fields": [{
            "original": "lastname",
            "translation": "Nom"
        }, {
            "original": "firstname",
            "translation": "Prénom"
        }, {
            "original": "salary",
            "translation": "Salaire"
        }, {
            "original": "company",
            "translation": "Société"
        }
    ],
    "formulas": [{
            "original": "Sum of salary",
            "translation": "Somme des salaires"
        }
    ]
}

```

#### Theme files

A list of themes is provided by default in the 4D Write Pro Interface component, such as "Arial", "CourierNew" and "YuGothic", available in multiple variations like "Blue" and "Green". However, you can create your own theme by placing it in the "[`Resources`](../Project/architecture.md#resources)/4DWP_Wizard/Themes" folder within your project.

The theme file in JSON format contains the following attributes:

| Atributo | Tipo   | Obligatorio | Descripción                                                                                                                           |
|:-------- |:------ |:----------- |:------------------------------------------------------------------------------------------------------------------------------------- |
| default  | Object |             | Objeto que contiene el estilo por defecto aplicable a todas las líneas.                                                               |
| table    | Object |             | Objeto que contiene la definición de estilo aplicable a la tabla.                                                                     |
| rows     | Object |             | Objeto que contiene la definición de estilo aplicable a todas las líneas.                                                             |
| cells    | Object |             | Objeto que contiene la definición de estilo aplicable a todas las celdas.                                                             |
| header1  | Object |             | Objeto que contiene la definición de estilo aplicable a la primera línea del encabezado.                                              |
| header2  | Object |             | Objeto que contiene la definición de estilo aplicable a la segunda línea del encabezado.                                              |
| header3  | Object |             | Objeto que contiene la definición de estilo aplicable a la tercera línea del encabezado.                                              |
| header4  | Object |             | Objeto que contiene la definición de estilo aplicable a la cuarta línea del encabezado.                                               |
| header5  | Object |             | Objeto que contiene la definición de estilo aplicable a la quinta línea del encabezado.                                               |
| headers  | Object |             | Object containing the style definition applicable to the header rows, if a specific header (like header1, header2...) is not defined. |
| data     | Object |             | Object containing the style definition applicable to the repeated data row.                                                           |
| break1   | Object |             | Object containing the style definition applicable to the first break row.                                                             |
| break2   | Object |             | Object containing the style definition applicable to the second break row.                                                            |
| break3   | Object |             | Object containing the style definition applicable to the third break row.                                                             |
| break4   | Object |             | Object containing the style definition applicable to the fourth break row.                                                            |
| break5   | Object |             | Object containing the style definition applicable to the fifth break row.                                                             |
| breaks   | Object |             | Object containing the style definition applicable to the break rows, if a specific break (like break1, break2...) is not defined.     |
| bcor     | Object |             | Object containing the style definition applicable to the bottom carry-over row.                                                       |


For every attribute used in your JSON file (header, data, carry-over, summary, and extra rows), you can define the following WP attributes, mentionned with their [corresponding WP constant](https://doc.4d.com/4Dv20/4D/20/4D-Write-Pro-Attributes.300-6229528.en.html):

| Atributos WP    | Constante WP correspondiente |
|:--------------- |:---------------------------- |
| textAlign       | wk text align                |
| backgroundColor | wk background color          |
| borderColor     | wk border color              |
| borderStyle     | wk border style              |
| borderWidth     | wk border width              |
| font            | wk font                      |
| color           | wk font color                |
| fontFamily      | wk font family               |
| fontSize        | wk font size                 |
| padding         | wk padding                   |

##### Ejemplo

```json
{
    "default": {
           "backgroundColor": "#F0F0F0",
           "borderColor": "#101010",
           "borderStyle": 1,
           "borderWidth": "0.5pt",
           "font": "Times New Roman",
           "color": "#101010",
           "fontFamily": "Times New Roman",
           "fontSize": "7pt",
           "padding": "2pt"
    },
    "table": {
           "backgroundColor": "#E1EAF3"
    },
    "header1": {
           "textAlign": 2,
           "borderColor": "#41548F",
           "borderWidth": "1.5pt",
           "backgroundColor": "#979BA9",
           "color": "#F4F4FF",
           "font": "Times New Roman Bold"
    },
    "data": {
           "fontSize": "13pt",
           "textAlign": 0
    },
    "break1": {
           "textAlign": 2,
           "fontSize": "15pt"
    }
}

```

#### Ver también

[4D Write Pro - Table Wizard (tutorial video)](https://www.youtube.com/watch?v=2ChlTju-mtM)