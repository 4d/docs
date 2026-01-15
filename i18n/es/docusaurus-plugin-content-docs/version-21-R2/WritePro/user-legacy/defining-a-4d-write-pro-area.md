---
id: defining-a-4d-write-pro-area
title: Configuración de áreas de 4D Write Pro
displayed_sidebar: docs
slug: /WritePro/configuring-4d-write-pro-areas
---



## Arrastrar y soltar 

Para configurar las funcionalidades de arrastrar y soltar para sus áreas 4D Write Pro, es necesario seleccionar las opciones adecuadas en el tema "Acción" de la Lista de propiedades:

![](../../assets/en/WritePro/pict4101267.es.png)

Las áreas 4D Write Pro soportan dos modos de arrastrar y soltar:

* **Modo personalizado:** solamente las opciones "Arrastrable" y "Soltable" están marcadas.  
En este modo, puede seleccionar texto y empezar a moverlo. El método del objeto se llama con el evento On Begin Drag Over, así que puede definir la acción soltar utilizando código personalizado.
* **Modo automático**: las opciones "Arrastrable", "Soltable", "Arrastrar automático" y "Soltar automático" seleccionadas.  
En este modo, puede mover o copiar de forma automática (presione la tecla **Alt/Opción**) el texto seleccionado. El evento On Begin Drag Over no se dispara.

**Nota:** seleccionando únicamente las opciones "Arrastrar automático" y "Soltar automático" no tendrá ningún efecto en el área 4D Write Pro.

## Propiedades Vista 

Las propiedades de vista del documento están disponibles directamente en la lista de propiedades para áreas 4D Write Pro para permitirle definir cómo un documento 4D Write Pro se muestra de forma predeterminada en esta área. Estas propiedades le permiten personalizar, por ejemplo, si los documentos 4D Write Pro se muestran igual que si se fueran a imprimir, o a renderizar en un navegador. Se pueden establecer diferentes vistas del mismo documento 4D Write Pro en el mismo formulario.

**Nota:** la configuración de la vista se puede administrar dinámicamente utilizando los comandos [WP SET VIEW PROPERTIES](../commands/wp-set-view-properties) y [WP Get view properties](../commands/wp-get-view-properties).

La configuración de vista del documento se manejan a través de temas específicos en el tema **Apariencia** de la lista de propiedades para objetos de formulario 4D Write Pro:

![](../../assets/en/WritePro/pict5941073.en.png)

* **Resolución**: define la resolución de pantalla para los contenidos del área 4D Write Pro. De forma predeterminada, se establece en **72 dpi (macOS)**, que es la resolución estándar para formularios 4D en todas las plataformas. Al establecer esta propiedad en **Automático** significa que el documento de renderización será diferente entre las plataformas macOS y Windows. El establecimiento de un valor específico dpi hará la misma renderización del documento en ambas plataformas macOS y Windows.
* **Zoom**: establece el porcentaje de zoom para mostrar los contenidos del área 4D Write Pro.
* **Modo Vista**: establece el modo de visualización del documento 4D Write Pro en el área del formulario. Tres valores están disponibles:  
   * **Página**: el más completo modo de visualización que incluye contornos de página, orientación, márgenes, saltos de página, encabezados y pies de página, etc. Para más información, consulte el párrafo *Funcionalidades de vista página*.  
   * **Borrador**: modo borrador con propiedades de documentos básicas  
   * **Anidado**: modo de visualización adecuado para áreas anidadas; no muestra los márgenes, los pies de página, los encabezados, los marcos de página, etc.  
   Este modo también se puede utilizar para producir una vista de salida Web (si selecciona también la resolución 96 dpi y la opción **Mostrar HTML WYSIWYG**).  
         
   **Nota**: la propiedad Modo Vista sólo se utiliza para la renderización en pantalla. En cuanto a la configuración de impresión, se utilizan automáticamente las reglas de renderización específicas (ver *Impresión de documentos 4D Write Pro*).
* **Mostrar marco de página:** muestra/oculta el marco de página cuando el modo de vista Página se establece en "Página".
* **Mostrar referencias**: muestra todas las fórmulas (o expresiones) insertadas en el documento como *referencias* (ver *Gestión de fórmulas*). Cuando esta opción no está marcada, las fórmulas 4D se muestran como *valores*.  
**Nota**: las referencias de fórmula se pueden mostrar como símbolos ![](../../assets/en/WritePro/icon-f.png) (ver abajo).
* **Mostrar encabezados/pies**: muestra/oculta los encabezados y pies cuando el modo de vista Página se establece en "Página" (que aparece por defecto). Para más información sobre las encabezados y pies de página, por favor consulte la sección *Utilizar un área 4D Write Pro*.
* **Mostrar fondo y elementos anclados**: muestra/oculta imágenes de fondo, color de fondo, imágenes ancladas y cajas de texto.
* **Mostrar caracteres ocultos**: muestra/oculta caracteres invisibles.
* **Mostrar HTML WYSIWYG**: activa/desactiva la vista HTML WYSIWYG, en la que todos los atributos 4D Write Pro avanzados que no son compatibles con todos los navegadores son retirados.
* **Mostrar regla horizontal**: horizontal. Para más información acerca de las reglas en las áreas 4D Write Pro, consulte la sección *Gestión de reglas*.
* **Mostrar regla vertical**: muestra/oculta la regla vertical cuando el documento está en modo Página. Para mayor información sobre reglas en áreas 4D Write Pro, ver la sección *Gestión de reglas*.
* **Mostrar imágenes vacías o no soportadas**: muestra/oculta un rectángulo negro para las imágenes que no se pueden cargar o calcular (imágenes vacías o en un formato no soportado). Para más información, consulte la sección *Imágenes vacías*.
* **Mostrar la fuente de la fórmula como símbolo**: muestra el texto fuente de las fórmulas como ![](../../assets/en/WritePro/icon-f.png) símbolos cuando las expresiones se muestran como referencias (ver arriba). Mostrar las fórmulas como símbolos hace que los documentos de plantilla sean más compactos y más *wysiwyg*.

## Menú contextual 

Si la propiedad **Menú contextual** está [seleccionada por un área 4D Write Pro](./defining-a-4d-write-pro-area.md#using-the-4d-write-pro-area-object), un menú contextual completo está disponible para los usuarios en modo Aplicación:  
  
![](../../assets/en/WritePro/pict3071271.en.png) 

Este menú ofrece acceso a todas las funcionalidades de 4D Write Pro.

## Seleccionar el modo vista 

Los documentos 4D Write Pro se pueden visualizar en tres modos de vista de página:

* **Borrador**: modo borrador con propiedades básicas
* **Página** (por defecto): modo "vista imprimir"
* **Embebido**: modo de vista conveniente para áreas anidadas; no muestra márgenes, pies de página, encabezados, columnas, marcos de página, etc.  
Este modo también se puede utilizar para producir una salida de vista como Web (si selecciona también la resolución 96 dpi y la opción **HTML WYSIWYG**).

El modo de visualización de la página se puede configurar mediante el menú emergente de área:

![](../../assets/en/WritePro/pict2878453.es.png)

**Nota:** el modo de visualización de la página no se almacena con el documento.

Para las áreas anidadas en formularios 4D, el modo de visualización también se puede configurar por defecto utilizando la lista de propiedades. En este caso, el modo de visualización se almacena como una propiedad del objeto de formulario 4D Write Pro (para más información, consulte el párrafo *Configurar propiedades Vista*).

