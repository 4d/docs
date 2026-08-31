---
id: current-selection
title: Selección actual
slug: /Develop/current-selection
displayed_sidebar: docs
---


## Información general

Al gestionar datos, se selecciona el grupo de registros con el que se desea trabajar. Este grupo de registros se denomina **selección actual**. La selección actual puede no contener ninguno, uno, varios o todos los registros de una tabla. Cada tabla y cada proceso tiene su propia selección actual de registros.

La **selección actual** es un concepto importante en 4D. Las operaciones de gestión de datos más habituales sobre los [**registros**](./records.md) se realizan en la selección actual. Estas operaciones incluyen:

- ordenar registros,
- ver y modificar registros individuales,
- actualizar un grupo de registros,
- imprimir un informe,
- generar etiquetas,
- crear gráficos de datos,
- exportar registros.

En otras palabras, crear una selección actual en una tabla es el primer paso hacia numerosas otras operaciones de gestión de datos.

La selección actual de registros es siempre el conjunto de registros seleccionados más recientemente. Por ejemplo, puede tener una base de datos de empresa que utilice una tabla Empleados para llevar el seguimiento de las fichas de los empleados. Suponga que decide buscar las fichas de todos los ingenieros de la empresa.
Cuando comienza esta búsqueda, la selección actual puede contener las fichas de todos los empleados de la empresa — comerciales, personal de producción, ingenieros, etc. Una vez finalizada la búsqueda, la selección actual contiene únicamente las fichas de los ingenieros. Si imprimiera una lista de registros, la lista contendría solo los registros de la selección actual — en este caso, las fichas de todos los ingenieros de la empresa. Si creara un gráfico de los salarios de los empleados, el gráfico mostraría los salarios de todos los ingenieros de la empresa.

La selección actual permanece igual hasta que realiza una operación que la modifica. Puede cambiar la selección actual:

- seleccionando todos los registros,
- seleccionando manualmente un subconjunto de registros,
- buscando registros.

La barra de título del formulario de salida indica cuántos registros hay en la tabla actual y cuántos registros de la tabla están en la selección actual. En un 4D remoto, solo se muestra el número de registros de la selección actual.

Cada tabla de una base de datos tiene su propia selección actual. En una base de datos relacional, cambiar la selección actual de una tabla puede cambiar las selecciones actuales de las tablas relacionadas. Por ejemplo, en una base de datos formada por las tablas relacionadas [Empleados] y [Departamentos], abrir un formulario de entrada en la tabla [Departamentos] cambia la selección actual de la tabla [Empleados]. Es decir, los empleados que pertenecen a ese departamento se convierten en la nueva selección actual de la tabla [Empleados].

Si utiliza [procesos](../Develop/processes.md) para llevar a cabo tareas en la base de datos, puede haber varias selecciones actuales simultáneas por tabla. Cada proceso actúa como un entorno 4D individual, lo que le permite realizar tareas independientes. Puede ser útil tener más de una selección actual, especialmente cuando se comparan dos o más tipos de datos, como la facturación mensual de varias regiones de ventas diferentes.

## Mostrar todos los registros

Cuando se utiliza un formulario de salida para mostrar registros, se puede restablecer la selección actual para que contenga todos los registros de la tabla actual. Esta operación puede realizarse mediante la [acción estándar `Select All`](../Desktop-legacy/standard-actions.md#selectall) o el comando [`ALL RECORDS`](../commands/all-records).

En el entorno de diseño, puede utilizar el comando **Mostrar todo** del menú **Registros**. Todos los registros de la tabla actual se incluyen entonces en la selección actual. El comando **Mostrar todo** está desactivado cuando se utiliza un formulario de entrada.

## Crear un subconjunto de registros

Puede especificar una nueva selección actual en un formulario de salida "marcando" manualmente ciertos registros y definiéndolos luego como la nueva selección actual. Esto se conoce como crear un subconjunto. En el entorno de diseño, existe un comando **Mostrar subconjunto** específico en el menú **Registros**.

En su desarrollo, puede gestionar los registros marcados por los usuarios utilizando [Conjuntos](./sets.md).

Puede recorrer y manipular las selecciones actuales mediante los comandos del tema [Selección](../commands/theme/Selection).
