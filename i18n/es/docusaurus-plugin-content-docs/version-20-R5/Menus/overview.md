---
id: overview
title: Menús
---

Puede crear barras de menús y menús para sus aplicaciones 4D. Dado que los menús desplegables son una funcionalidad estándar de toda aplicación de escritorio, su adición facilitará el uso de sus aplicaciones y hará que los usuarios las sientan familiares.

![](../assets/en/Menus/menubar.png)

Una **barra de menús** es un grupo de menús que pueden aparecer juntos en una misma pantalla. Cada **menú** de una barra de menús puede tener varios comandos de menú en ella, incluyendo algunos que llaman a submenús en cascada (o submenús jerárquicos). Cuando el usuario elige un comando de menú o submenú, llama a un método proyecto o a una acción estándar que realiza una operación.

Puede tener varias barras de menús separadas para cada aplicación. Por ejemplo, puede utilizar una barra de menús que contenga menús para las operaciones estándar de la base de datos y otra que se active sólo para los informes. Una barra de menús puede contener un menú con comandos de menú para introducir registros. La barra de menús que aparece con el formulario de entrada puede contener el mismo menú, pero los comandos del menú están desactivados porque el usuario no los necesita durante la entrada de datos.

Puede utilizar el mismo menú en varias barras de menús o en otros menús, o puede dejarlo suelto y gestionarlo sólo por programación (en este caso, se conoce como menú independiente).

Cuando diseñe los menús, tenga en cuenta las dos reglas siguientes:

- Utilice los menús para las funciones que se adaptan a los menús: los comandos del menú deben realizar tareas como añadir un registro, buscar registros o imprimir un informe.
- Agrupe los comandos de menú por función: por ejemplo, todos los comandos de menú que imprimen informes deben estar en el mismo menú. Por ejemplo, puede tener todas las operaciones de una determinada tabla en un solo menú.

Para crear menús y barras de menús, puede utilizar:

- el editor de menús de la caja de herramientas,
- los comandos de lenguaje para el tema "Menús",
- una combinación de ambos.

## Editor de menús

Se accede al editor de menús mediante el botón **Menús** de la caja de herramientas.

![](../assets/en/Menus/editor1.png)

Los menús y las barras de menús se muestran como dos elementos de la misma lista jerárquica, en la parte izquierda de la caja de diálogo. Cada menú puede estar unido a una barra de menús o a otro menú. En el segundo caso, el menú se convierte en un submenú.

4D asigna los números de las barras de menú de forma secuencial: Menu Bar #1 aparece primero. Puede cambiar el nombre de las barras de menú, pero no puede cambiar sus números. Estos números son utilizados por los comandos del lenguaje.
