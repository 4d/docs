---
id: action
title: Acción
---

## Método

Referencia de un método adjunto al formulario. Puede utilizar un método formulario para gestionar datos y objetos, pero generalmente es más sencillo y eficiente utilizar un método objeto para estos fines. See [Specialized methods](Concepts/methods.md#specialized-methods).

No llame a un método formulario - 4D lo llama automáticamente cuando un evento implica el formulario al que el método está asociado.

Se soportan varios tipos de referencias de métodos:

- a standard project method file path, i.e. that uses the following pattern:\
  `method.4dm`\
  This type of reference indicates that the method file is located at the default location ("sources/{TableForms/_numTable_} | {Forms}/_formName_/"). En este caso, 4D maneja automáticamente el método formulario cuando se ejecutan operaciones en el formulario (renombrar, duplicar, copiar/pegar...)

- a project method name: name of an existing project method without file extension, i.e.:
  `myMethod`
  In this case, 4D does not provide automatic support for form operations.

- a custom method file path including the .4dm extension, e.g.:\
  `MyMethods/myFormMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Forms/FormMethod.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                  |
| ------ | -------------- | --------------------------------------------------------------------------------- |
| method | text           | Ruta estándar o personalizada del método formulario, o nombre del método proyecto |
