---
id: formObjectsOverview
title: Objetos formularios
---

Usted crea y personaliza los formularios de su aplicación manipulando los objetos que contienen. Puede añadir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir métodos de objetos que se ejecuten automáticamente cuando se utilice el objeto.

## Objetos activos y estáticos

Los formularios 4D soportan una gran cantidad de objetos **activos** y **estáticos** integrados:

- **Los objetos activos** realizan una tarea o una función de la interfaz. Los campos son objetos activos. Los otros objetos activos -objetos editable (variables), combo box, listas desplegables, botones imagen, etc.- almacenan los datos temporalmente en la memoria o realizan alguna acción, como abrir una caja de diálogo, imprimir un informe o iniciar un proceso en segundo plano.
- **Los objetos estáticos** se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, así como para la interfaz gráfica. Los objetos estáticos no tienen variables asociadas como los objetos activos. Sin embargo, se pueden insertar objetos dinámicos en objetos estáticos.

## Gestión de objetos de formulario

Puede añadir o modificar objetos formulario 4D de las siguientes maneras:

- **[Editor de formularios](FormEditor/formEditor.md):** arrastre un objeto de la barra de herramientas del editor de formularios al formulario. A continuación, utilice la Lista de propiedades para especificar las propiedades del objeto.  
  See the [Building Forms](https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html) chapter for more information.

- **4D language**: Commands from the [Objects (Forms)](https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html) theme such as `OBJECT DUPLICATE` or `OBJECT SET FONT STYLE` allow to create and define form objects.

- **Código JSON en formularios dinámicos:** defina las propiedades utilizando JSON. Use the [type](properties_Object.md#type) property to define the object type, then set its available properties.  See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for information.  
  Ejemplo para un objeto botón:
  ```
  {
  	"type": "button", 
  	"style": "bevel", 
  	"text": "OK", 
  	"action": "Cancel", 
  	"left": 60, 
  	"top": 160, 
  	"width": 100, 
  	"height": 20
  }
  ```
