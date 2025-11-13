---
id: field-properties
title: Propiedades de los campos
---

For other field properties, please refer to [doc.4d.com](https://doc.4d.com/4Dv21/4D/21/Field-properties.300-7676763.en.html).

## Class

![](../assets/en/Develop/inspector-class.png)

Esta propiedad está disponible para campos de tipo **Objeto** (en los proyectos 4D únicamente). It allows you to define a **class-typed object field**, enhancing code completion, syntax checking, and runtime validation when typing code that involves object fields.

Puede introducir cualquier nombre de clase válido en esta propiedad, incluyendo:

- Clases usuario (por ejemplo, `cs.MyClass`)
- Clases 4D integradas (por ejemplo, `4D.File`, `4D.Folder`)
- [Exposed](../Extensions/develop-components.md#sharing-of-classes) component-defined classes (e.g. `cs.MyComponent.MyClass`)

Si introduce un nombre de clase inválido, se activa una advertencia y se rechaza la entrada.

:::note

**Non-streamable classes** such as [ORDA Data Model classes](../ORDA/ordaClasses.md), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... no pueden asociarse a campos objeto.

:::

En su código, al asignar un valor a un campo de tipo clase de objeto, 4D verifica que pertenece a la clase declarada. Si no es así o si el objeto no tiene clase, se produce un error. El acceso a atributos desconocidos también provocará errores de sintaxis.

To retrieve the associated class name at runtime, use the [`classID`](../API/DataClassClass.md#attributename) property, for example `ds.MyTable.MyField.classID`.

### Ver también

- [Blog post: Stricter class-based typing for objects](https://blog.4d.com/stricter-class-based-typing-for-objects/)


