---
id: structure-fields
title: Campos
---

<!-- INCLUDE my.section.id.Desc -->

### Class

![](../assets/en/Develop/inspector-class.png)

This property is available for fields of type **Object** (in 4D projects only). It allows you to define a **class-typed object field**, enhancing code completion, syntax checking, and runtime validation when typing code that involves object fields.

You can enter any valid class name in this property, including: 
  - User classes (e.g. `cs.MyClass`)
  - Built-in 4D classes (e.g. `4D.File`, `4D.Folder`)
  - [Exposed](../Extensions/develop-components.md#sharing-of-classes) component-defined classes (e.g. `cs.MyComponent.MyClass`)

If you enter an invalid class name, a warning is triggered and the input is rejected. 

:::note
  
[**Non-streamable classes**](../Concepts/dt_object.md#streaming-support) such as [ORDA Data Model classes](../ORDA/ordaClasses.md), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... cannot be associated to object fields.

:::

In your code, when assigning a value to a class-typed object field, 4D verifies that it belongs to the declared class. If not or if the object has no class, an error is triggered. Accessing unknown attributes will also raise syntax errors.

To retrieve the associated class name at runtime, use the [`classID`](../API/DataClassClass.md#attributename) property, for example `ds.MyTable.MyField.classID`.

:::tip Post relacionado no blog

[Stricter class-based typing for objects](https://blog.4d.com/stricter-class-based-typing-for-objects/)

:::

### Classe `4D.Vector`

Se você atribuir `4D.Vector` como a classe de um campo do tipo Object, você define um **campo vetor**. Esses campos armazenam embeddings e podem ser usados para consultar dados usando recursos de IA. Consulte a documentação da [classe `4D.Vector`](../API/VectorClass.md) para ver como consultar com vetores.

Observe que o componente [**4D Embedding Studio**](corner.4d.com/component/4d-embedding-studio) pode ajudar você a configurar e atualizar seus campos 4D.Vector.

Quando você atribui `4D.Vector` como a classe de um campo do tipo Object, um ícone específico é exibido como tipo de campo no editor de Estrutura: ![](../assets/en/Develop/ai-icon.png)

:::tip Post relacionado no blog

[Vector Indexing in 4D: Faster Similarity Search for 4D.Vector Fields](https://blog.4d.com/vector-indexing-in-4d-faster-similarity-search-for-4d-vector-fields)

:::

