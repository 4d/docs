---
id: overview
title: Sobre el código 4D
---


El código 4D utilizado en su aplicación está escrito en los [métodos](../Concepts/methods.md) y las [clases](../Concepts/classes.md).

El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su código. Por lo general, utilizará el [editor de código de 4D](write-class-method.md) para trabajar con su código.


## Creación de métodos

Un método en 4D se almacena en un archivo **.4dm** ubicado en la carpeta correspondiente de la carpeta [`/Project/Sources/`](../Project/architecture.md#sources).

Puede crear [varios tipos de métodos](../Concepts/methods.md):

- Todos los tipos de métodos pueden crearse o abrirse desde la ventana del **Explorador** (excepto los métodos Objeto que se gestionan desde el [editor de formularios](../FormEditor/formEditor.md)).
- Los métodos proyecto también pueden crearse o abrirse desde el menú **Archivo** o la barra de herramientas (**Nuevo/Método...** o **Abrir/Método...**) o utilizando los accesos directos de la ventana del [editor de código](write-class-method.md#shortcuts).
- Los triggers también pueden crearse o abrirse desde el editor de Estructura.
- Los métodos formulario también pueden crearse o abrirse desde el [editor de formularios](../FormEditor/formEditor.md).

## Crear clases

Una clase usuario en 4D está definida por un archivo de método específico (**.4dm**), almacenado en la carpeta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). El nombre del archivo es el nombre de la clase.

Puede crear un archivo de clase desde el menú **Archivo** o la barra de herramientas (**Nuevo/Clase...**) o en la página **Métodos** de la ventana **Explorador**.

Para más información, consulte la sección [Clases](../Concepts/classes.md).


## Eliminar los métodos o las clases

Para eliminar un método o clase existente, puede:

- en su disco, elimine el archivo *.4dm* de la carpeta "Sources",
- en el Explorador de 4D, seleccione el método o la clase y haga clic ![](../assets/en/Users/MinussNew.png) o elija **Mover a la Papelera** en el menú contextual.

> Para eliminar un método objeto, seleccione **Borrar el método de objeto** en el [editor de formularios](../FormEditor/formEditor.md) (menú **Objeto** o menú contextual).


## Importar y exportar el código

Puede importar y exportar un método o un código de una clase en forma de archivo. Estos comandos se encuentran en el menú **Método** del editor de código.

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

- en el [editor de código](write-class-method.md), seleccione el comando **Propiedades del método...** en el menú **Método**,
- o en la página **Métodos** del Explorador, **haga clic derecho** en el método proyecto y seleccione **Propiedades del método...** en el menú contextual o en el menú de opciones.


> Una función de parámetrización global permite modificar una propiedad para todos o parte de los métodos proyecto de la base en una sola operación (ver [Modificar atributos de los métodos globalmente](#batch-setting-for-method-attributes)).

#### Nombre

Puede cambiar el nombre de un método proyecto en el área **Nombre** de la ventana **Propiedades del método** o en el Explorador.

El nuevo nombre debe cumplir con las reglas de denominación de 4D (ver [Identificadores](../Concepts/identifiers.md)). Si ya existe un método con el mismo nombre, 4D muestra un mensaje diciendo que el nombre del método ya ha sido utilizado. Si es necesario, 4D ordena de nuevo la lista de métodos.

**Atención:** el cambio del nombre de un método ya utilizado en la base de datos puede invalidar todos los métodos o fórmulas que utilice el antiguo nombre del método y corre el riesgo de interrumpir el funcionamiento de la aplicación. Puede cambiar el nombre del método manualmente, pero se recomienda utilizar la función de cambio de nombre de los métodos proyecto, descrita en [Renombrar](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). Con esta función, puede actualizar automáticamente el nombre siempre que se llame al método en todo el entorno Diseño.

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name

> Los métodos base no pueden ser renombrados. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned.

#### Atributos

You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).

##### Invisible

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. Un método invisible no aparece en la caja de diálogo de ejecución del método.

When you make a project method invisible, it is still available to database programmers. Permanece en la lista de métodos del Explorador y del Editor de código.

##### Compartido por los componentes y la base local

Este atributo se utiliza en el marco de los componentes. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases.

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

##### Ejecutar en el servidor

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called.

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

#### Modo Ejecución

This option allows you to declare the method eligible for execution in preemptive mode. By default, 4D executes all the project methods of your applications in cooperative mode.

If you want to benefit from the preemptive mode feature, you must explicitly declare all the methods that you want to be started in preemptive mode. El compilador verificará entonces que estos métodos sean realmente hilo seguro.

**Note:** Execution in preemptive mode is only available in compiled mode. For more information, refer to the [Preemptive 4D processes](https://doc.4d.com/4Dv19R6/4D/19-R6/Preemptive-4D-processes.300-5911166.en.html) section.

Se ofrecen las siguientes opciones:

-   **Can be run in preemptive processes**: By checking this option, you declare that the method is capable of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. La propiedad "preemptive" del método se establece como "capable".

When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.

If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a specific context (see [When is a process started preemptively?](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148)).

-   **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".

When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.

-   **Indifferent**(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. La propiedad "preemptive" del método se establece como "indifferent".

When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No se devuelve ningún error relacionado con la ejecución apropiativa. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the [New process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html) command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.

***Particular case*:** If the method has also the [**Shared by components and host database**](shared-by-components-and-host-database) property, setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**.

#### Disponible a través de

Availability attributes specify the external services which are allowed to explicitly call the method.

##### Web Services

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

##### Publicado en WSDL

This attribute is only available when the "Web Service" attribute is checked. Permite incluir el método actual en el WSDL de la aplicación 4D. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

##### Etiquetas 4D y URLs (4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/tags.md).

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

Por razones de seguridad, esta opción está desmarcada por defecto. Each method that can be executed using the special Web URL or tags must be indicated individually.

##### SQL

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D.

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Notas:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

##### Servidor REST

*This option is deprecated because it relies on legacy current record and current selection concepts. It is recommended to use** [ORDA data model class functions](https://developer.4d.com/docs/en/REST/classFunctions.html) for REST access. *

#### Ajuste de atributos del método por lotes

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.

Para la configuración por lotes de los atributos del método:

1.  On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.

2.  In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch. The character string is used as a search criterion for the method names.

Utilice el carácter comodín @ para ayudar a definir los grupos de métodos:

- To designate methods whose names begin with..., type @ at the end of the string. Por ejemplo: `web@`
- To designate methods whose names contain..., type @ in the middle of the string. Por ejemplo: `web@write`
- Para designar los métodos cuyos nombres terminan en..., escriba @ al inicio de la cadena. Por ejemplo: `@escribir`
- Para designar todos los métodos, basta con escribir @ en el área.

**Notas:**
- La búsqueda no tiene en cuenta las mayúsculas/minúsculas.
- Puede introducir varios caracteres @ en la cadena, por ejemplo `dtro_@web@pro.@`

3.  En el área "Atributo a modificar", elija un atributo de la lista desplegable y, a continuación, haga clic en el botón radio **True** o **False** correspondiente al valor que debe aplicarse.

**Nota:** si el atributo "Publicado en WSDL" se establece como True, sólo se aplicará a los métodos proyecto que ya contengan el atributo "Ofrecido como servicio web".

4.  Haga clic en **Aplicar**. La modificación se aplica instantáneamente a todos los métodos proyecto designados por la cadena de caracteres introducida.

