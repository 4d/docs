---
id: formObjectsOverview
title: Acerca de los objetos formularios 4D
---

Usted crea y personaliza los formularios de su aplicación manipulando los objetos que contienen. Puede añadir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir métodos de objetos que se ejecuten automáticamente cuando se utilice el objeto.

## Objetos activos y estáticos

Los formularios 4D soportan una gran cantidad de objetos **activos** y **estáticos** integrados:

- **Los objetos activos** realizan una tarea o una función de la interfaz. Los campos son objetos activos. Los otros objetos activos -objetos editable (variables), combo box, listas desplegables, botones imagen, etc.- almacenan los datos temporalmente en la memoria o realizan alguna acción, como abrir una caja de diálogo, imprimir un informe o iniciar un proceso en segundo plano.
- **Los objetos estáticos** se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, así como para la interfaz gráfica. Los objetos estáticos no tienen variables asociadas como los objetos activos. Sin embargo, se pueden insertar objetos dinámicos en objetos estáticos.


## Gestión de objetos de formulario

Puede añadir o modificar objetos formulario 4D de las siguientes maneras:

*   **[Editor de formularios](FormEditor/formEditor.md):** arrastre un objeto de la barra de herramientas del editor de formularios al formulario. A continuación, utilice la lista de propiedades para especificar las propiedades del objeto.   
  Consulte el capítulo [Construcción de formularios](https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html) para más información.

* **4D language**: los comandos del tema [Objetos (Formularios)](https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html) como `OBJECT DUPLICATE` o `OBJECT SET FONT STYLE` permiten crear y definir objetos de formulario.

*   **Código JSON en formularios dinámicos:** define las propiedades utilizando JSON. Utilice la propiedad [tipo](propiedades_Objeto.md#tipo) para definir el tipo de objeto y, a continuación, indique sus propiedades disponibles.  Ver la página [Formularios dinámicos](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) para obtener información.  
  Ejemplo de un objeto botón:  
  ```
  { "type": "button", "style": "bevel", "text": "OK", "action": "Cancel", "left": 60, "top": 160, "width": 100, "height": 20 }
