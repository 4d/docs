---
id: log
title: Archivo de historial (.journal)
---

Una aplicación de uso continuo siempre está registrando cambios, adiciones o supresiones. Realizar copias de seguridad periódicas de los datos es importante, pero no permite (en caso de incidente) restaurar los datos introducidos desde la última copia de seguridad. Para responder a esta necesidad, 4D ofrece ahora una herramienta específica: el archivo de historial. Este archivo permite garantizar la seguridad permanente de los datos.

Además, 4D trabaja continuamente con una caché de datos en la memoria. Esto acelera el funcionamiento de las aplicaciones; de hecho, el acceso a la memoria es más rápido que el acceso al disco duro. Todos los cambios realizados en los datos de la aplicación se almacenan temporalmente en la caché antes de escribirse en el disco duro. Si se produce un incidente en la aplicación antes de que los datos almacenados en la caché puedan escribirse en el disco, deberá incluir el archivo de historial actual para poder recuperar la aplicación por completo.

Por último, 4D dispone de funciones que analizan el contenido del archivo de historial, permitiendo revertir las operaciones realizadas sobre los datos de la aplicación. Estas funciones están disponibles en el CSM: consulte la página [Análisis de actividades](MSC/analysis.md) y la página [Retroceder](MSC/rollback.md).

## Funcionamiento del archivo de historial

El archivo de historial generado por 4D contiene una descripción de todas las operaciones realizadas en los datos de las tablas registradas en el diario, que se registran de forma secuencial. Por defecto, todas las tablas se registran en el diario, es decir, se incluyen en el archivo de historial, pero puede anular la selección de tablas individuales mediante la propiedad **Incluir en el archivo de historial**.

Así, cada operación realizada por un usuario provoca dos acciones simultáneas: la primera en el archivo de datos (la instrucción se ejecuta normalmente) y la segunda en el archivo de historial (se registra la descripción de la operación). El archivo de historial se crea de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. El archivo de historial se crea de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. El archivo de historial registra los siguientes tipos de acciones:

- Apertura y cierre del archivo de datos,
- Apertura y cierre del proceso (contextos),
- Adición de registros o BLOBs,
- Modificación de registros,
- Eliminación de registros,
- Creación y cierre de transacciones.

Para más información sobre estas acciones, consulte la página [Análisis de actividades](MSC/analysis.md) del CSM.

4D gestiona el archivo de historial. Tiene en cuenta todas las operaciones que afectan al archivo de datos por igual, independientemente de las manipulaciones realizadas por un usuario, métodos 4D, el motor SQL, los plug-ins, o un navegador web o una aplicación móvil.

La siguiente ilustración resume el funcionamiento del archivo de historial:

![](../assets/en/Backup/backup05.png)

El archivo de historial actual se guarda automáticamente con el archivo de datos actual. Este mecanismo tiene dos ventajas distintas:

- Evitar la saturación del volumen de disco donde se almacena el archivo de historial. Sin una copia de seguridad, el archivo de historial se haría cada vez más grande con el uso, y acabaría utilizando todo el espacio disponible en el disco. Para cada copia de seguridad del archivo de datos, 4D o 4D Server cierra el archivo de historial actual e inmediatamente inicia un nuevo archivo vacío, evitando así el riesgo de saturación. A continuación, el archivo de historial antiguo se archiva y, finalmente, se destruye en función del mecanismo de gestión de los conjuntos de copias de seguridad.
- Conservar los archivos de historial correspondientes a las copias de seguridad para poder analizar o reparar una aplicación en un momento posterior. La integración de un archivo de historial sólo puede hacerse en la aplicación a la que corresponde. Para poder integrar correctamente un archivo de historial en una copia de seguridad, es importante que las copias de seguridad y los archivos de historial se archiven simultáneamente.

## Crear el archivo de historial

Por defecto, toda aplicación creada con 4D utiliza un archivo de historial (opción definida en la página **General** de las Preferencias). El archivo de historial se llama *data.journal* y se coloca en la carpeta Data.

Puede averiguar si su aplicación utiliza un archivo de historial en cualquier momento: sólo tiene que comprobar si la opción **Utilizar el archivo de historial** está seleccionada en la página **Backup/Configuración** de las Propiedades. Si deselecciona esta opción, o si utiliza una aplicación sin archivo de historial y desea configurar una estrategia de copia de seguridad con un archivo de historial, tendrá que crear uno.

Para crear un archivo de historial:

1. En la página **Copia de seguridad/Configuración** de las Propiedades de estructura, marque la opción **Utilizar el archivo de historial**.
   El programa muestra una caja de diálogo estándar de abrir/nuevo archivo. Por defecto, el archivo de historial se llama *data.journal*.

2. Mantenga el nombre por defecto o cambie el nombre, y luego seleccione la ubicación del archivo.
   Si tiene al menos dos discos duros, se recomienda colocar el archivo de historial en un disco distinto al que contiene el proyecto de aplicación. Si se pierde el disco duro de la aplicación, aún puede recuperar su archivo de historial.

3. Presione **Guardar**.
   El disco y el nombre del archivo de historial abierto se muestran ahora en el área **Utilizar historial** de la caja de diálogo. Puede hacer clic en esta área para que aparezca un menú emergente con la ruta del historial en el disco.

4. Valide la caja de diálogo de las Propiedades.

Para poder crear directamente un archivo de historial, los datos deben estar en una de las siguientes situaciones:

- El archivo de datos está en blanco,
- Acaba de realizar una copia de seguridad y aún no se han realizado cambios en los datos.

Si hace clic en <strong x-id="1">Aceptar</strong>, la copia de seguridad comienza inmediatamente, y luego se activa el archivo de historial. Si hace clic en **Aceptar**, la copia de seguridad comienza inmediatamente, y luego se activa el archivo de historial. Si hace clic en **Cancelar**, la solicitud se guarda pero la creación del archivo de historial se pospone y en realidad sólo se creará después de la siguiente copia de seguridad de la aplicación. Esta precaución es indispensable porque, para restaurar una aplicación después de algún incidente, necesitará una copia de la aplicación en la que se integrarán las operaciones registradas en el archivo de historial.

Sin tener que hacer nada más, todas las operaciones realizadas sobre los datos se registran en este archivo y se utilizarán en el futuro cuando se abra la aplicación.

Debe crear otro archivo de historial si crea un nuevo archivo de datos. Debe establecer o crear otro archivo de historial si abre otro archivo de datos que no está asociado a un archivo de historial (o si falta el archivo de historial).

## Parámetros del archivo de historial

Los [parámetros del archivo de historial](settings.md#log-file-management) se basa en dos datos: un valor booleano y una ruta.

1. **Valor booleano**: indica si la funcionalidad "Utilizar archivo de registro" está activada o desactivada en la aplicación. Por defecto, el valor booleano se almacena en *catalog.4DCatalog*. Sin embargo, cuando se activan los [parámetros usuario](../Desktop/user-settings.md), la configuración del archivo *catalog.4DCatalog* se anula, y el valor booleano puede definirse tanto en el archivo *Backup.4DSettings* [junto al archivo de datos](../Project/architecture.md#settings-user-data) como en el archivo *Backup.4DSettings* [en la carpeta del proyecto](../Project/architecture.md#settings-user) (ver también la documentación de la llave de backup xml `JournalFileEnabled` en [doc.4d.com](https://doc.4d.com)).

2. **Ruta**: una cadena que indica dónde se encuentra el archivo de registro. La ruta del archivo de registro siempre se almacena en el archivo de datos vinculados.

## Cerrar el historial

Si desea dejar de registrar las operaciones en el archivo de historial actual, sólo tiene que anular la selección de la opción **Utilizar el archivo de historial** en la página **Copia de seguridad/Configuración** de las Propiedades.

4D muestra entonces un mensaje de alerta para recordarle que esta acción le impide aprovechar la seguridad que ofrece el archivo de historial:

![](../assets/en/Backup/backup06.png)

Si hace clic en el botón **Parar**, el archivo de historial actual se cierra inmediatamente (la caja de dialogo de las Propiedades no necesita ser validada después).

Si desea cerrar el archivo de historial actual porque es demasiado grande, puede considerar la posibilidad de realizar una copia de seguridad del archivo de datos, lo que hará que el archivo de historial se copie también.

> **4D Server:** el comando `New log file` cierra automáticamente el archivo de historial actual e inicia uno nuevo.
> Si por alguna razón el archivo de historial no está disponible durante una sesión de trabajo, se genera el error 1274 y 4D Server no permite a los usuarios escribir más datos. Cuando el archivo de historial está disponible de nuevo, es necesario hacer una copia de seguridad.
