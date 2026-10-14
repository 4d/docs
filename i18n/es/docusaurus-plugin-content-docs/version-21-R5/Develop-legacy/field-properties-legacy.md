---
id: field-properties-legacy
title: Campos
---
<!-- REF my.section.id.Desc -->
## Definición

El área «Definición» de la [paleta Inspector](../Develop/structure-editor.md#inspector-palette) configura las propiedades básicas de los campos. Algunas propiedades solo están disponibles cuando se seleccionan determinados tipos de campos.

### Color

Puede asignar un color a cada nombre de campo para distinguir los campos según su función o atributos. Por ejemplo, puede utilizar un color para los campos únicos y otro para los obligatorios. También es posible asignar un [color a cada tabla](../Develop/structure-tables.md#color-of-the-table-image) y a cada relación.

Para definir el color de uno o varios campos, selecciónelos y elija un color mediante:

- el **botón Color** de la barra de herramientas del editor de Estructura;
- el comando **Color** del menú contextual de los campos;
- la opción **Color** de la **paleta Inspector**.

La opción **Automático** permite aplicar al nombre del campo su color estándar original.

### Invisible

Puede hacer que un campo sea invisible en el entorno Aplicación y para los plug-ins seleccionando la propiedad **Invisible**. Este atributo oculta el campo al usuario. Un campo invisible no aparece en ningún editor estándar de 4D ni en los cuadros de diálogo del entorno Aplicación. Tampoco puede ser utilizado por los plug-ins. Afecta a los siguientes editores y cuadros de diálogo:

- todos los editores de **Consulta**;
- el **editor de ordenación**;
- el **editor de etiquetas**;
- los **informes rápidos**;
- los cuadros de diálogo de **exportación e importación de datos**;
- el **editor de fórmulas**.

En todos estos lugares, el usuario no puede ver ni elegir el campo. Por ejemplo, no puede elegir un campo invisible para un diseño creado con el [editor de etiquetas](../Desktop/labels.md).

**Nota:** al utilizar los editores, los usuarios pueden guardar sus especificaciones (por ejemplo, la consulta o la ordenación creadas) en archivos de disco. En ese caso, los campos especificados que posteriormente se declaren invisibles seguirán utilizándose. Además, los usuarios pueden escribir los nombres de campos invisibles en el **editor de fórmulas**.

Los campos invisibles se muestran en *cursiva* en la ventana del editor de Estructura.

### Único

Utilice el atributo **Único** para asegurarse de que cada registro tenga un valor diferente en este campo. Este atributo debe utilizarse para el campo que identifica de forma única cada registro de la tabla. Resulta útil para validar campos que almacenan números de empleado, de seguridad social, de pedido de compra, etc.

El atributo Único impide la duplicación de valores vacíos, al igual que la de cualquier otro valor. Un campo vacío no puede duplicarse en otro registro.

La [barra de información](../Develop/structure-editor.md#information-bar) del editor de Estructura indica si la propiedad Único está seleccionada para un campo.

En 4D, los campos con el atributo Único deben estar indexados. Una indicación visual señala que se creará un índice (si aún no existe) al seleccionar el atributo Único:

![](../assets/en/Develop/field-unique.png)

El editor impide eliminar el índice de un campo Único (la opción **Ninguno** y los comandos de eliminación de índices no están disponibles cuando se selecciona ese campo). Para eliminar el índice de un campo único, primero debe quitar el atributo Único.

### Exponer como recurso REST

Esta opción determina si el [campo se expone a las solicitudes REST](../REST/configuration.md#exposing-field).

:::note Notas

- También puede definir esta opción a nivel de tabla.
- Esta opción se utiliza en el contexto de las [funcionalidades de datastore remoto ORDA](../ORDA/remoteDatastores.md).

:::

### Rechazar entrada de valores NULL

Esta propiedad impide almacenar valores NULL. Cuando está seleccionada para un campo, no es posible almacenar en él un valor NULL. Si un campo con este atributo recibe un valor NULL, se genera un error. Esta propiedad de bajo nivel corresponde exactamente al atributo NOT NULL de SQL.

:::note

En 4D, los campos también pueden tener el atributo «Obligatorio» (véase más abajo). Los conceptos son similares, pero su alcance es diferente: el atributo «Obligatorio» controla la entrada de datos, mientras que «Rechazar entrada de valores NULL» actúa a nivel del motor de la base de datos.

:::

### Mapear valores NULL a valores vacíos

Esta propiedad unifica el tratamiento de los valores «vacíos» y NULL del campo mediante el lenguaje 4D.

:::warning Compatibilidad con ORDA

No se recomienda utilizar esta opción en desarrollos basados en [ORDA](../ORDA/overview.md), donde los valores NULL son totalmente compatibles.

:::

Por razones de compatibilidad, los valores NULL almacenados en las tablas de la base de datos 4D se convierten automáticamente en valores por defecto cuando se manipulan mediante el lenguaje 4D. Por ejemplo, en la siguiente instrucción:

```4d
$myTextVar:=[myTable]myTextField
```

... si el campo *myTextField* contiene un valor NULL, la variable *$myTextVar* contendrá "" (cadena vacía). Los [valores por defecto](../Concepts/data-types.md#default-values) dependen del tipo de datos. En cambio, en principio, este mecanismo no se aplica al procesamiento realizado a nivel del motor de base de datos 4D, como las consultas. Por ello, una búsqueda de un valor «vacío» (por ejemplo, $myvalue=0) no encontrará los registros que almacenan NULL, y viceversa. Cuando ambos tipos de valores (valores por defecto y NULL) están presentes en los registros de un mismo campo, algunos procesamientos pueden cambiar o requerir código adicional. Para evitar estos inconvenientes, la opción **Mapear valores NULL a valores vacíos** permite unificar todo el procesamiento en el lenguaje 4D. Los campos que contienen NULL se consideran sistemáticamente como si contuvieran valores por defecto.

:::note Notas

- Los campos Alpha con formato UUID que no se generan no se consideran NULL (véase Formato UUID).
- Esta propiedad se tiene en cuenta a un nivel muy bajo del motor de base de datos. Actúa especialmente sobre el comando [`Is field value Null`](../commands/is-field-value-null).

:::

### Autoincremento

La propiedad **Autoincremento** genera números de secuencia en la tabla. Se puede utilizar con campos de tipo [Integer, Long Integer e Integer 64 bits](../Concepts/data-types.md).

Un campo con esta propiedad se incrementa automáticamente cada vez que se crea un registro en la tabla. El número de secuencia asignado corresponde al «contador interno» de la tabla, mantenido por 4D. También se puede acceder a este contador con los comandos 4D [`Sequence number`](../commands/sequence-number) y [`Get database parameter`](../commands/get-database-parameter), así como con el marcador `#N` (véase Valores por defecto).

Los números asignados nunca se reutilizan en la tabla, ni siquiera cuando se eliminan registros. Los números generados durante una transacción cancelada se «pierden». La propiedad Autoincremento corresponde al atributo SQL AUTO_INCREMENT. La etiqueta AUTO INCREMENT también aparece en el área de información SQL del [Inspector](../Develop/structure-editor.md#inspector-palette) para los campos que tienen este atributo.

:::warning

Aunque son únicos en la tabla cuando se generan, NO se recomienda utilizar números autoincrementados para rellenar campos de clave primaria con ID únicos, especialmente si la estructura se utiliza con varios archivos de datos, ya que el contador interno podría desincronizarse. Además, el contador interno de una tabla se puede restablecer mediante el comando [`SET DATABASE PARAMETER`](../commands/set-database-parameter). Para crear ID de registro únicos, se recomienda encarecidamente utilizar UUID, que ofrecen estas ventajas:

- los UUID generan ID únicos entre todas las tablas y bases de datos;
- para generar un UUID, puede combinar la opción **Auto UUID** (véase más abajo) con el comando [`Generate UUID`](../commands/generate-uuid).

:::

### Almacenado en el registro, en el archivo de datos o fuera del archivo de datos

Este menú solo está disponible para los campos de tipo Text, BLOB, Picture y Object [type](../Concepts/data-types.md). Permite definir la ubicación de almacenamiento de los datos del campo.

#### En el registro

Los datos se almacenan con cada registro. En general, no debería elegir esta opción para campos que contengan grandes volúmenes de datos. Sin embargo, está seleccionada por defecto para los campos Text, porque este tipo de almacenamiento es necesario para utilizar índices B-Tree «estándar». El menú de selección de índices se oculta cuando los datos Text se almacenan fuera de los registros.

#### En el archivo de datos

Los datos se almacenan en el archivo de datos, pero fuera de cada registro. Esta opción está seleccionada por defecto para los campos BLOB y Picture. Para optimizar el funcionamiento de la base de datos con datos voluminosos, puede almacenar textos, imágenes, Blobs y objetos fuera de los registros.

#### Fuera del archivo de datos

Los datos se almacenan en archivos separados, fuera del [archivo de datos](../Project/architecture.md#data). Esta opción se describe en **Almacenamiento externo de datos**.

:::note Notas

- Esta opción solo se aplica a los nuevos registros que se creen posteriormente en la tabla. Si la define para una tabla que ya contiene registros, estos no se modifican y la tabla utiliza un modo mixto de almacenamiento interno y externo. Para aplicar este modo también a los registros existentes, debe [compactar los datos](../MSC/compact.md) con la opción [**Forzar actualización de los registros**](../MSC/compact.md#force-updating-of-the-records).
- Los datos almacenados fuera del archivo de datos no se gestionan mediante la [funcionalidad de cifrado de datos](../MSC/encrypt.md), si está activada.
- Esta opción no está disponible para los [campos de tipo Object](../Concepts/dt_object.md).

:::

#### Tamaño máximo de almacenamiento interno

Por motivos de optimización, los datos de los campos BLOB, Picture, Text y Object se almacenan por defecto fuera de los registros o del archivo de datos. Por razones de rendimiento, puede ser conveniente forzar el almacenamiento en los registros cuando el tamaño de los datos sea limitado. Este funcionamiento está especialmente optimizado cuando la aplicación gestiona datos BLOB, Picture, texto u objeto de tamaños variables. El valor introducido representa el tamaño en bytes por debajo del cual los datos del campo se almacenarán en el registro. Por ejemplo, si introduce 30 000 para un campo Picture, una imagen de 20 KB se almacenará en el registro y una imagen de 40 KB se guardará en la ubicación definida en los ajustes (en el archivo de datos o fuera de él). El valor por defecto es 0: todos los datos del campo se almacenan fuera de los registros.

### Formato UUID

Esta propiedad está disponible para los campos de tipo [Alpha](../Concepts/data-types.md). Indica que el campo almacena identificadores UUID. Los datos almacenados deben respetar el formato UUID (combinación de 32 letras (A-F, a-f) y números (0-9)). Para ello, puede utilizar la propiedad [**Auto UUID**](#auto-uuid), el comando [`Generate UUID`](../commands/generate-uuid) o cualquier algoritmo personalizado.

Si intenta almacenar en este campo una cadena que no respeta el formato UUID, 4D la convierte automáticamente. La misma operación se aplica al contenido de campos existentes que no son Alpha y se transforman en campos UUID: al cargar los registros, los valores se reformatean y se vuelven a almacenar.

Los campos con formato UUID pueden mostrarse en formularios y siguen siendo editables. Su contenido aparece en mayúsculas. Para mostrar caracteres en minúsculas, debe utilizar una variable.

:::note Notas

- Los campos con formato UUID no se pueden asociar a índices de palabras clave ni a listas de selección.
- Puede crear una relación entre dos campos que tengan formato UUID, pero no vincular un campo Alpha estándar con un campo de formato UUID.
- Un campo UUID inicializado (generado) cuyo valor es NULL devuelve una cadena vacía. Un campo UUID no generado no es NULL y devuelve «000...» (el número de ceros es igual al número de caracteres). La propiedad no se tiene en cuenta para los campos UUID no generados (se muestra «000...»).

:::

#### Auto UUID

Esta opción solo está activa cuando se selecciona la propiedad [**Formato UUID**](#uuid-format). Permite generar automáticamente un número UUID en el campo.

El número se calcula automáticamente en estos casos:

- cuando se crea un registro;
- cuando se carga un registro cuyo campo UUID contiene un valor Null. Esto ocurre especialmente con los registros creados y guardados antes de añadir el campo UUID a la tabla, cuando la opción [**Mapear valores NULL a valores vacíos**](#map-null-values-to-blank-values) no estaba seleccionada.

En todos los casos, es necesario guardar el registro para que el UUID generado automáticamente se almacene en el campo.

:::note

Al importar datos, incluso con esta propiedad seleccionada, 4D no genera un número nuevo, sino que utiliza los valores importados (y los transforma cuando es necesario si el formato no es válido). Sin embargo, si el valor del campo importado está vacío, se genera automáticamente un UUID.

:::

<!-- END REF -->

### Consultas y ordenaciones en texto sin etiquetas

Esta propiedad está disponible para campos Text y Alpha. Al seleccionarla, las consultas y ordenaciones de los datos almacenados en el campo no tienen en cuenta las etiquetas de estilo.

Esta opción está relacionada con la capacidad de 4D para aplicar distintos estilos en una misma área de texto (texto enriquecido) de un formulario. Para más información, consulte Multiestilo (área de texto enriquecido).

Los estilos se definen insertando etiquetas HTML en el texto. Estas etiquetas se interpretan cuando se muestra el área de texto.

Las etiquetas de estilo se almacenan junto con los datos. Por ejemplo, si escribe «week end» en un campo Text, 4D almacena `"week <SPAN STYLE = "color: #D81E05">end</SPAN>"`. Esta operación es transparente para el usuario en el formulario. Sin embargo, para las consultas y ordenaciones, se requiere una opción específica para que 4D ignore las etiquetas de estilo. La consulta solo encontrará «week end» si ha seleccionado la opción Consultas y ordenaciones en texto sin etiquetas para el campo en el editor de Estructura.

Nota: con esta opción, una consulta por el valor textual de los datos del campo equivale a ejecutar esta instrucción en 4D:

```4d
QUERY BY FORMULA(OBJECT Get plain text(thefield)="thevalue")
```

### Indexación

La propiedad Índice está disponible para todos los tipos de campo, excepto BLOB y Picture. La propiedad Índice de palabras clave está disponible para campos de tipo Alpha, Text y Picture.

El uso de índices acelera el procesamiento y las búsquedas en los datos.

La gestión de índices se detalla en Creación y modificación de índices.

## Controles de entrada de datos

Puede establecer controles de entrada de datos para campos y objetos editables a nivel de formulario. Estos controles limitan lo que el usuario puede introducir en el campo u objeto editable en un formulario determinado.

### Obligatorio

Cuando el atributo Obligatorio está definido para un campo, el usuario debe introducir un valor en él durante la entrada de datos. 4D no acepta un registro que contenga un campo obligatorio vacío. Defina este atributo para los campos que contienen información esencial para la base de datos. El campo que identifica de forma única cada registro es un buen candidato. Los números de seguridad social, de factura, ciertas fechas o los números de empleado pueden necesitar este atributo para proteger la integridad de los registros.

También puede definir este atributo para un campo en un formulario concreto. Si selecciona el atributo Obligatorio en el editor de Estructura, no podrá deseleccionarlo en un formulario concreto. Sin embargo, sí puede aplicar el atributo en un formulario a un campo que no lo tenga en el editor de Estructura. Para obtener más información, consulte la sección Atributos Entrada y Obligatorio y propiedades de campo.

Nota: en 4D, los campos también pueden tener la propiedad «Rechazar entrada de valores NULL» (véase más arriba). Los conceptos son similares, pero su alcance es diferente: «Obligatorio» controla la entrada de datos, mientras que «Rechazar entrada de valores NULL» actúa a nivel del motor de la base de datos.

### No se puede modificar

Cuando se define este atributo para un campo, 4D valida el valor introducido inicialmente, pero no permite que el usuario lo modifique después de guardar el registro. El usuario solo puede editar el campo al crear el registro, antes de validarlo. Una vez guardado el registro, el valor ya no es editable. Solo se puede modificar mediante un método o en el entorno Diseño, después de quitar esta opción.

Utilice No se puede modificar en campos que deban proporcionar un registro de auditoría, como la fecha de recepción o de pago. Este atributo se utiliza a menudo para el campo que identifica de forma única cada registro de la tabla.

Nota: este atributo solo funciona con campos mostrados en un formulario de entrada en modo Página. En los demás casos (entrada en lista o en un subformulario en modo Lista o Página), el valor del campo aún se puede modificar.

### Solo visualización

El usuario no puede introducir valores con el teclado en un campo que tenga definido el atributo Solo visualización. Debe utilizar un valor por defecto para ese campo o escribir un método que inserte un valor. Este atributo es útil para mostrar valores que no desea que los usuarios modifiquen, como totales calculados o un número de secuencia asignado por un método.

También puede hacer que cualquier campo no sea editable en un formulario determinado. Para más información, consulte la sección Atributos Entrada y Obligatorio y propiedades de campo.

### Multilínea

Esta opción solo está disponible para campos de tipo Text. Cuando está seleccionada, el campo Text se configura automáticamente para contener varias líneas en los formularios creados posteriormente. Sus características por defecto son:

- altura equivalente a varias líneas;
- barra de desplazamiento horizontal;
- durante la ejecución, un retorno de carro provoca un salto de línea.

Cuando esta opción no está seleccionada, la apariencia por defecto de los campos Text en formularios es la misma que la de los campos Alpha: altura de una sola línea, sin barra de desplazamiento; un retorno de carro desplaza el cursor al siguiente campo del formulario.

Puede cambiar en cualquier momento la apariencia por defecto del campo mediante el editor de Formularios.

### Permitir lista de selección

Utilice el atributo Permitir lista de selección si desea mostrar una lista para introducir información en el campo. Primero debe crear la lista mediante el editor de Listas (véase Listas).

Este atributo permite estandarizar las entradas en el campo y evitar errores tipográficos. Utilice una lista para los campos con un número limitado de valores válidos o habituales. El uso de una lista no impide necesariamente que el usuario introduzca un valor que no aparezca en ella.

También puede asignar una lista de selección a un campo en un formulario concreto. Sin embargo, si solo se asigna en un formulario, la lista no se muestra en otros editores y cuadros de diálogo, como el editor de Consulta. Para más información, consulte la sección Controles de entrada de datos y asistencia.

Nota: también es posible definir listas de valores obligatorios y excluidos a nivel del formulario.

Al seleccionar la opción Permitir lista de selección, se activa el menú desplegable asociado. Puede elegir una lista existente para asignarla al campo o hacer clic en [...] para acceder directamente al editor de Listas (véase Listas).

### Consejo de ayuda

Puede proporcionar información adicional sobre un campo añadiéndole un consejo de ayuda. El texto introducido en el área Consejos de ayuda aparece junto al campo cuando el usuario sitúa el puntero sobre él en cualquier formulario que lo contenga. Los consejos de ayuda se muestran en todas las plataformas.

Cuando el usuario sitúa el puntero del ratón sobre el campo, el consejo aparece debajo, como se muestra a continuación:

Nota: los consejos de ayuda se pueden activar o desactivar globalmente para la aplicación mediante el selector Tips enabled del comando SET DATABASE PARAMETER.

También puede asociar mensajes de ayuda a los campos de otras dos maneras:

- a nivel del editor de formularios; en ese caso, el consejo del campo no aparecerá en los demás formularios. Para más información, consulte la sección Mensajes de ayuda;
- mediante el comando OBJECT SET HELP TIP, para el proceso actual.

### Comentarios

El área Comentarios de la paleta Inspector permite almacenar información adicional sobre el campo. Estos comentarios están disponibles para todos los desarrolladores. Cada tabla y cada relación también tiene su propia área de comentarios.

### SQL

El área SQL de la paleta Inspector proporciona información útil sobre el campo desde el punto de vista de su uso mediante el lenguaje SQL.

En particular, indica si el nombre del campo respeta las reglas de nomenclatura SQL (por ejemplo, a diferencia de 4D, SQL no permite espacios en los nombres de campo).

Nota: SQL también define una lista de palabras reservadas, incluidas funciones y palabras clave SQL. Puede consultar estas palabras reservadas en el editor de Métodos.

Para los campos, el área de información SQL también indica sus atributos SQL (tipo y propiedades).
