---
id: code-overview
title: Métodos y clases
---

El código 4D utilizado en todo el proyecto está escrito en [métodos](../Concepts/methods.md) y [clases](../Concepts/classes.md).

El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su código. You will usually use the included 4D [code editor](../code-editor/write-class-method.md) to work with your code. You can also use other editors such as **VS Code**, for which the [4D-Analyzer extension](https://github.com/4d/4D-Analyzer-VSCode) is available.

## Creación de métodos

Un método en 4D se almacena en un archivo **.4dm** ubicado en la carpeta apropiada de la carpeta [`/Project/Sources/`](../Project/architecture.md#sources).

Puede crear [varios tipos de métodos](../Concepts/methods.md):

- Todos los tipos de métodos pueden crearse o abrirse desde la ventana del **Explorador** (excepto los métodos Objeto que se gestionan desde el [editor de formularios](../FormEditor/formEditor.md)).
- Los métodos proyecto también pueden crearse o abrirse desde el menú **Archivo** o la barra de herramientas (**Nuevo/Método...** o **Abrir/Método...**) o utilizando los accesos directos de la ventana del [editor de código](../code-editor/write-class-method
- Los triggers también pueden crearse o abrirse desde el editor de Estructura.
- Los métodos formulario también pueden crearse o abrirse desde el [editor de formularios](../FormEditor/formEditor.md).

## Crear las clases

Una clase usuario en 4D está definida por un archivo de método específico (**.4dm**), almacenado en la carpeta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). El nombre del archivo es el nombre de la clase.

Puede crear un archivo de clase desde el menú **Archivo** o la barra de herramientas (**Nuevo/Clase...**) o en la página **Métodos** de la ventana **Explorador**.

Para más información, consulte la sección [Clases](../Concepts/classes.md).

## Eliminar los métodos o las clases

Para eliminar un método o clase existente, puede:

- en su disco, elimine el archivo *.4dm* de la carpeta "Sources",
- en el Explorador 4D, seleccione el método y haga clic ![](../assets/en/Users/MinussNew.png) o elija **Mover a la Papelera** en el menú contextual.

> Para eliminar un método objeto, seleccione **Borrar el método de objeto** en el [editor de formularios](../FormEditor/formEditor.md) (menú **Objeto** o menú contextual).

## Importar y exportar el código

Puede importar y exportar un método o un código de una clase en forma de archivo. Estos comandos se encuentran en el menú **Método** del editor de código .

- Cuando se selecciona el comando **Exportar el método...**, aparece una caja de diálogo estándar para guardar archivos, que permite elegir el nombre, la ubicación y el formato del archivo de exportación (ver abajo). Al igual que con la impresión, la exportación no tiene en cuenta el estado contraído de las estructuras de código y se exporta todo el código.
- Cuando se selecciona el comando **Importar el método...**, aparece una caja de diálogo estándar de apertura de archivos que permite designar el archivo a importar. La importación sustituye el texto seleccionado en el método. Para reemplazar un método existente por un método importado, seleccione todo el contenido del método antes de realizar la importación.

La función de importación/exportación es multiplataforma: un método exportado en Mac OS puede ser importado en Windows y viceversa; 4D se encarga de la conversión de caracteres cuando es necesario.

4D puede exportar e importar métodos en dos formatos:

- Método 4D (extensión *.c4d*): en este formato, los métodos se exportan codificados. Los nombres de los objetos están tokenizados (se transforman en referencias). Este formato se utiliza especialmente para el intercambio de métodos entre las aplicaciones 4D y los plug-ins en diferentes idiomas. Por el contrario, no es posible visualizarlos en un editor de texto.
- Texto (extensión *.txt*): en este formato, los métodos se exportan en forma de texto. En este caso, los métodos se pueden leer con un editor de texto estándar o con una herramienta de control de código fuente.

## Propiedades del método proyecto

Después de crear un método proyecto, puede cambiar su nombre y modificar sus propiedades. Las propiedades de los métodos proyecto se refieren principalmente a sus condiciones de acceso y de seguridad (acceso de usuarios, servidores integrados o servicios), así como a su modo de ejecución.

Los otros tipos de métodos no tienen propiedades específicas. Sus propiedades están relacionadas con las de los objetos a los que están unidos.

Para mostrar la caja de diálogo **Propiedades del método** para un método proyecto, puede:

- en el [editor de código](../code-editor/write-class-method.md), seleccione el comando **Propiedades del método...** en el menú **Método**,
- o en la página **Métodos** del Explorador, **haga clic derecho** en el método proyecto y seleccione **Propiedades del método...** en el menú contextual o en el menú de opciones.

> Una función de parámetrización global permite modificar una propiedad para todos o parte de los métodos proyecto de la base en una sola operación (ver [Modificar atributos de los métodos globalmente](#batch-setting-for-method-attributes)).

### Nombre

Puede cambiar el nombre de un método proyecto en el área **Nombre** de la ventana **Propiedades del método** o en el Explorador.

El nuevo nombre debe cumplir con las reglas de denominación de 4D (ver [Identificadores](../Concepts/identifiers.md)). Si ya existe un método con el mismo nombre, 4D muestra un mensaje diciendo que el nombre del método ya ha sido utilizado. Si es necesario, 4D ordena de nuevo la lista de métodos.

:::caution

Cambiar el nombre de un método ya utilizado en la base de datos puede invalidar cualquier método o fórmula que utilice el antiguo nombre de método y corre el riesgo de interrumpir el funcionamiento de la aplicación. Puede cambiar el nombre del método manualmente, pero se recomienda utilizar la función de cambio de nombre de los métodos proyecto, descrita en [Renombrar](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). Con esta función, puede actualizar automáticamente el nombre siempre que se llame al método en todo el entorno Diseño.

Con 4D Server, el nombre del método se cambia en el servidor cuando se termina de editar. Si más de un usuario está modificando el nombre del método al mismo tiempo, el nombre final del método será el especificado por el último usuario en terminar de editarlo. Es posible que desee designar un propietario del método para que sólo ciertos usuarios puedan cambiar su nombre

:::

:::info

Los métodos base no pueden ser renombrados. Lo mismo ocurre con los triggers, los métodos formulario y los métodos objeto, que están vinculados a los objetos y toman sus nombre del objeto en cuestión.

:::

### Atributos

Puede controlar cómo se utilizan y/o llaman los métodos proyecto en diferentes contextos utilizando atributos. Tenga en cuenta que puede definir los atributos globalmente para una selección de métodos proyecto utilizando el Explorador (ver la sección siguiente).

#### Invisible

Si no quiere que los usuarios puedan ejecutar un método proyecto utilizando el comando **Método...** del menú **Ejecución**, puede hacerlo Invisible marcando esta opción. Un método invisible no aparece en la caja de diálogo de ejecución del método.

Cuando se hace invisible un método proyecto, sigue estando disponible para los desarrolladores de la base. Permanece en la lista de métodos del Explorador y del Editor de código.

#### Compartido por los componentes y la base local

Este atributo se utiliza en el marco de los componentes. Cuando está marcada, indica que el método estará disponible para los componentes cuando la aplicación se utilice como base local. Por otro lado, cuando la aplicación se utiliza como un componente, el método estará disponible para las bases locales.

Para más información sobre los componentes, consulte el capítulo [Desarrollo e instalación de componentes 4D](../Extensions/develop-components.md).

#### Ejecutar en el servidor

Este atributo sólo se tiene en cuenta para una aplicación 4D en modo cliente-servidor. Cuando esta opción está marcada, el método del proyecto se ejecuta siempre en el servidor, independientemente de cómo se llame.

Para más información sobre esta opción, consulte [Atributo Ejecutar en el servidor](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

### Modo Ejecución

Esta opción permite declarar el método elegible para la ejecución en modo apropiativo. Se describe en la [sección Procesos apropiativos](../Develop/processes.md#preemptive-processes).

### Disponibilidad

Los atributos de disponibilidad especifican los servicios externos que pueden llamar explícitamente al método.

#### Web Services

Este atributo le permite publicar el método actual como servicio web accesible a través de peticiones SOAP. Para más información, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html). Cuando esta opción está marcada, se activa la opción **Publicado en WSDL**.

En el Explorador, los métodos proyecto que se ofrecen como Servicio Web reciben un icono específico ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Nota:** no es posible publicar un método como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Si el nombre del método no cumple con esto, 4D no asigna la propiedad.

#### Publicado en WSDL

Este atributo sólo está disponible si el atributo "Servicio Web" está marcado. Permite incluir el método actual en el WSDL de la aplicación 4D. Para obtener más información al respecto, consulte [Generación del WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

En el Explorador, los métodos proyecto que se ofrecen como Servicio Web y se publican en WSDL reciben un icono específico ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

#### Etiquetas 4D y URLs (4DACTION...)

Esta opción se utiliza para reforzar la seguridad del servidor web 4D: cuando no está marcada, el método proyecto no puede ejecutarse a través de una petición HTTP que contenga la URL especial [4DACTION](../WebServer/httpRequests.md#4daction) utilizada para llamar a los métodos 4D, ni las etiquetas especiales [4DSCRIPT, 4DTEXT y 4DHTML](../Tags/transformation-tags.md).

En el Explorador, los métodos proyecto con este atributo reciben un icono específico ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

Por razones de seguridad, esta opción está desmarcada por defecto. Cada método que pueda ejecutarse utilizando las URLs y las etiquetas especiales debe indicarse individualmente.

#### SQL

Cuando está marcada, esta opción permite que el método proyecto sea ejecutado por el motor SQL de 4D. Por defecto, no está seleccionado, lo que significa que, a menos que se autorice explícitamente, los métodos proyecto de 4D están protegidos y no pueden ser llamados por el motor SQL de 4D.

Esta propiedad se aplica a todas las consultas SQL internas y externas, ejecutadas a través del controlador ODBC, código SQL insertado entre las etiquetas [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html) o el comando [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html).

**Notas:**

- Aunque un método tenga el atributo "SQL", los derechos de acceso definidos a nivel de las propiedades de la base y de las propiedades del método se tienen en cuenta para la ejecución del método.
- La función ODBC **SQLProcedure** sólo devuelve los métodos proyecto con el atributo "SQL".

Para más información, consulte [Implementación del motor SQL de 4D](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) en el manual SQL de 4D.

#### Servidor REST

*Esta opción está obsoleta. La llamada a código a través de llamadas REST sólo es compatible con [Funciones clase modelo de datos ORDA](../REST/ClassFunctions.md).*

#### Modificar de atributos globalmente

Mediante el cuadro de diálogo "Atributos de los métodos", puede modificar un atributo (Invisible, Ofrecido como servicio web, etc.) para todos o parte de los métodos proyecto base en una sola operación. Esta funcionalidad es especialmente útil para modificar los atributos de un gran número de métodos proyecto. También puede utilizarse durante el desarrollo para aplicar rápidamente los atributos comunes a grupos de métodos similares.

Para la configuración global de los atributos del método:

1. En la página [Métodos](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) del Explorador 4D, despliegue el menú de opciones y elija el comando **Modificar atributos globalmente...**. Aparece la caja de diálogo **Atributos de los métodos**.

2. En el área "Nombre del método coincidente:", introduzca una cadena que le permita designar los métodos que desea modificar globalmente.
   La cadena de caracteres se utiliza como criterio de búsqueda para los nombres de los métodos.

Utilice el caracter comodín @ para ayudar a definir los grupos de métodos:

- Para designar métodos cuyos nombres empiezan por..., escriba @ al final de la cadena. Por ejemplo: `web@`
- Para designar los métodos cuyos nombres contengan..., escriba @ en medio de la cadena. Por ejemplo: `web@write`
- Para designar los métodos cuyos nombres terminan en..., escriba @ al inicio de la cadena. Por ejemplo: `@write`
- Para designar todos los métodos, basta con escribir @ en el área.

**Notas:**

- La búsqueda no tiene en cuenta las mayúsculas/minúsculas.
- Puede introducir varios caracteres @ en la cadena, por ejemplo `dtro_@web@pro.@`

3. En el área "Atributo a modificar", elija un atributo de la lista desplegable y, a continuación, haga clic en el botón radio **True** o **False** correspondiente al valor que debe aplicarse.

**Nota:** si el atributo "Publicado en WSDL" se establece como True, sólo se aplicará a los métodos proyecto que ya contengan el atributo "Ofrecido como servicio web".

4. Haga clic en **Aplicar**. La modificación se aplica instantáneamente a todos los métodos proyecto designados por la cadena de caracteres introducida.
