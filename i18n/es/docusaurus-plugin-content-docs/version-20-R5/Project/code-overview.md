---
id: code-overview
title: Métodos y clases
---

The 4D code used across your project is written in [methods](../Concepts/methods.md) and [classes](../Concepts/classes.md).

El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su código. You will usually use the 4D [code editor](../code-editor/write-class-method.md) to work with your code.

## Creación de métodos

A method in 4D is stored in a **.4dm** file located in the appropriate folder of the [`/Project/Sources/`](../Project/architecture.md#sources) folder.

You can create [several types of methods](../Concepts/methods.md):

- All types of methods can be created or opened from the **Explorer** window (except Object methods which are managed from the [Form editor](../FormEditor/formEditor.md)).
- Project methods can also be created or opened from the **File** menu or toolbar (**New/Method...** or **Open/Method...**) or using shortcuts in the [Code editor window](../code-editor/write-class-method.md#shortcuts).
- Los triggers también pueden crearse o abrirse desde el editor de Estructura.
- Form methods can also be created or opened from the [Form editor](../FormEditor/formEditor.md).

## Crear las clases

A user class in 4D is defined by a specific method file (**.4dm**), stored in the [`/Project/Sources/Classes/`](../Project/architecture.md#sources) folder. El nombre del archivo es el nombre de la clase.

You can create a class file from the **File** menu or toolbar (**New/Class...**) or in the **Methods** page of the **Explorer** window.

For more information, please refer to the [Classes](../Concepts/classes.md) section.

## Eliminar los métodos o las clases

Para eliminar un método o clase existente, puede:

- on your disk, remove the _.4dm_ file from the "Sources" folder,
- in the 4D Explorer, select the method or class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

> To delete an object method, choose **Clear Object Method** from the [Form editor](../FormEditor/formEditor.md) (**Object** menu or context menu).

## Importar y exportar el código

Puede importar y exportar un método o un código de una clase en forma de archivo. These commands are found in the **Method** menu of the [Code editor](../code-editor/write-class-method.md).

- When you select the **Export Method...** command, a standard file saving dialog box appears, allowing you to choose the name, location and format of the export file (see below). Al igual que con la impresión, la exportación no tiene en cuenta el estado contraído de las estructuras de código y se exporta todo el código.
- When you select the **Import Method...** command, a standard file opening dialog box appears, allowing you to designate the file to be imported. La importación sustituye el texto seleccionado en el método. Para reemplazar un método existente por un método importado, seleccione todo el contenido del método antes de realizar la importación.

La función de importación/exportación es multiplataforma: un método exportado en Mac OS puede ser importado en Windows y viceversa; 4D se encarga de la conversión de caracteres cuando es necesario.

4D puede exportar e importar métodos en dos formatos:

- 4D method (extension _.c4d_): In this format, methods are exported in encoded form. Los nombres de los objetos están tokenizados (se transforman en referencias). Este formato se utiliza especialmente para el intercambio de métodos entre las aplicaciones 4D y los plug-ins en diferentes idiomas. Por el contrario, no es posible visualizarlos en un editor de texto.
- Text (extension _.txt_): In this format, methods are exported in text-only form. En este caso, los métodos se pueden leer con un editor de texto estándar o con una herramienta de control de código fuente.

## Propiedades del método proyecto

Después de crear un método proyecto, puede cambiar su nombre y modificar sus propiedades. Las propiedades de los métodos proyecto se refieren principalmente a sus condiciones de acceso y de seguridad (acceso de usuarios, servidores integrados o servicios), así como a su modo de ejecución.

Los otros tipos de métodos no tienen propiedades específicas. Sus propiedades están relacionadas con las de los objetos a los que están unidos.

To display the **Method Properties** dialog box for a project method, you can either:

- in the [Code Editor](../code-editor/write-class-method.md), select the **Method Properties...** command in the **Method** menu,
- or on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu.

> A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

### Nombre

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). Si ya existe un método con el mismo nombre, 4D muestra un mensaje diciendo que el nombre del método ya ha sido utilizado. Si es necesario, 4D ordena de nuevo la lista de métodos.

:::caution

Cambiar el nombre de un método ya utilizado en la base de datos puede invalidar cualquier método o fórmula que utilice el antiguo nombre de método y corre el riesgo de interrumpir el funcionamiento de la aplicación. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). Con esta función, puede actualizar automáticamente el nombre siempre que se llame al método en todo el entorno Diseño.

Con 4D Server, el nombre del método se cambia en el servidor cuando se termina de editar. Si más de un usuario está modificando el nombre del método al mismo tiempo, el nombre final del método será el especificado por el último usuario en terminar de editarlo. Es posible que desee designar un propietario del método para que sólo ciertos usuarios puedan cambiar su nombre

:::

:::info

Los métodos base no pueden ser renombrados. Lo mismo ocurre con los triggers, los métodos formulario y los métodos objeto, que están vinculados a los objetos y toman sus nombre del objeto en cuestión.

:::

### Atributos

Puede controlar cómo se utilizan y/o llaman los métodos proyecto en diferentes contextos utilizando atributos. Tenga en cuenta que puede definir los atributos globalmente para una selección de métodos proyecto utilizando el Explorador (ver la sección siguiente).

#### Invisible

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. Un método invisible no aparece en la caja de diálogo de ejecución del método.

Cuando se hace invisible un método proyecto, sigue estando disponible para los desarrolladores de la base. Permanece en la lista de métodos del Explorador y del Editor de código.

#### Compartido por los componentes y la base local

Este atributo se utiliza en el marco de los componentes. Cuando está marcada, indica que el método estará disponible para los componentes cuando la aplicación se utilice como base local. Por otro lado, cuando la aplicación se utiliza como un componente, el método estará disponible para las bases locales.

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

#### Ejecutar en el servidor

Este atributo sólo se tiene en cuenta para una aplicación 4D en modo cliente-servidor. Cuando esta opción está marcada, el método del proyecto se ejecuta siempre en el servidor, independientemente de cómo se llame.

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

### Modo Ejecución

Esta opción permite declarar el método elegible para la ejecución en modo apropiativo. It is described in the [Preemptive processes section](../Develop/processes.md#preemptive-processes).

### Disponibilidad

Los atributos de disponibilidad especifican los servicios externos que pueden llamar explícitamente al método.

#### Web Services

Este atributo le permite publicar el método actual como servicio web accesible a través de peticiones SOAP. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). Si el nombre del método no cumple con esto, 4D no asigna la propiedad.

#### Publicado en WSDL

Este atributo sólo está disponible si el atributo "Servicio Web" está marcado. Permite incluir el método actual en el WSDL de la aplicación 4D. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

#### Etiquetas 4D y URLs (4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/transformation-tags.md).

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

Por razones de seguridad, esta opción está desmarcada por defecto. Cada método que pueda ejecutarse utilizando las URLs y las etiquetas especiales debe indicarse individualmente.

#### SQL

Cuando está marcada, esta opción permite que el método proyecto sea ejecutado por el motor SQL de 4D. Por defecto, no está seleccionado, lo que significa que, a menos que se autorice explícitamente, los métodos proyecto de 4D están protegidos y no pueden ser llamados por el motor SQL de 4D.

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Notas:**

- Aunque un método tenga el atributo "SQL", los derechos de acceso definidos a nivel de las propiedades de la base y de las propiedades del método se tienen en cuenta para la ejecución del método.
- The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

#### Servidor REST

_Esta opción está obsoleta. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md)._

#### Modificar de atributos globalmente

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. Esta funcionalidad es especialmente útil para modificar los atributos de un gran número de métodos proyecto. También puede utilizarse durante el desarrollo para aplicar rápidamente los atributos comunes a grupos de métodos similares.

Para la configuración global de los atributos del método:

1. On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.

2. En el área "Nombre del método coincidente:", introduzca una cadena que le permita designar los métodos que desea modificar globalmente.
   La cadena de caracteres se utiliza como criterio de búsqueda para los nombres de los métodos.

Utilice el caracter comodín @ para ayudar a definir los grupos de métodos:

- Para designar métodos cuyos nombres empiezan por..., escriba @ al final de la cadena. For example: `web@`
- Para designar los métodos cuyos nombres contengan..., escriba @ en medio de la cadena. For example: `web@write`
- Para designar los métodos cuyos nombres terminan en..., escriba @ al inicio de la cadena. Por ejemplo: `@write`
- Para designar todos los métodos, basta con escribir @ en el área.

**Notas:**

- La búsqueda no tiene en cuenta las mayúsculas/minúsculas.
- You can enter several @ characters in the string, for example `dtro_@web@pro.@`

3. In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied.

**Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.

4. Click on **Apply**. La modificación se aplica instantáneamente a todos los métodos proyecto designados por la cadena de caracteres introducida.
