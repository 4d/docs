---
id: structure
title: Página Estructura
---

## Llave primaria

Estas opciones en las preferencias modifican el nombre y el tipo por defecto de los campos llaves primaria añadidos automáticamente por 4D cuando se crean nuevas tablas o mediante el [Gestor de llaves primarias](https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html)).

Las siguientes opciones están disponibles:

- **Name** ("ID" por defecto): define el nombre por defecto de los campos llaves primarias. Puede utilizar el nombre que desee, siempre que respete las [reglas de denominación de 4D](Concepts/identifiers.md#tables-and-fields).
- **Type** ([Longint](Concepts/dt_number.md) por defecto): define el tipo por defecto de los campos llave primaria. Puede elegir el tipo de UUID. En este caso, los campos de llave primaria creados por defecto son de [tipo Alfa](Concepts/dt_string.md) y tienen marcadas las propiedades de los campos **Formato UUID** y **Auto UUID**.

## Editor de estructura

Este grupo de opciones configura la visualización del editor de estructura de 4D.

### Calidad gráfica de la estructura

Esta opción varía el nivel de detalle gráfico en el editor de estructura. Por defecto, la calidad se define como **Alta**. Puede seleccionar la calidad Estándar para dar prioridad a la velocidad de visualización. El efecto de este ajuste es perceptible principalmente cuando se utiliza la función de zoom (ver el párrafo "Zoom" en la sección [Editor de estructura](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html)).

### Cuando una carpeta está atenuada, su contenido es:

Esta opción establece el aspecto de las tablas atenuadas en el editor de estructuras, cuando se realizan selecciones por carpetas (ver [Resaltar/atenuar tablas por carpeta](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928)) Las opciones posibles son Atenuado (una sombra sustituye a la imagen de la tabla) e Invisible (la tabla desaparece por completo).
