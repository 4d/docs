---
id: code-overview
title: Creating Methods and classes
---

O código 4D usado em seu projeto está escrito em [métodos](../Concepts/methods.md) e [classes](../Concepts/classes.md).

O IDE 4D fornece vários recursos para criar, editar, exportar ou excluir seu código. Normalmente, você usará o [editor de código](../code-editor/write-class-method.md) 4D incluído para trabalhar com seu código. Você também pode usar outros editores, como **VS Code**, para o qual a [extensão 4D-Analyzer](https://github.com/4d/4D-Analyzer-VSCode) está disponível.

## Criação de métodos

Um método em 4D é armazenado em um arquivo **.4dm** localizado na pasta apropriada da pasta [`/Project/Sources/`](../Project/architecture.md#sources).

Você pode criar [vários tipos de métodos](../Concepts/methods.md):

- All types of methods can be created or opened from the **Explorer** window (except Object methods which are managed from the [Form editor](../FormEditor/formEditor.md)).
- Os métodos projeto também podem ser criados ou abertos no menu **File**, ou na barra de ferramentas (\*\*Novo/Método.. \*\* ou **Abrir/Método...**) ou usando atalhos na [janela do editor de código](../code-editor/write-class-method.md#shortcuts).
- Os triggers também podem ser criados ou abertos a partir do editor de Estrutura.
- Los métodos formulario también pueden crearse o abrirse desde el [editor de formularios](../FormEditor/formEditor.md).

## Criação de classes

Uma classe usuário no 4D é definida por um arquivo de método específico (**.4dm**), armazenado na pasta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). O nome do arquivo é o nome da classe.

You can create a class file from the **File** menu or toolbar (**New/Class...**) or in the **Methods** page of the **Explorer** window.

Para más información, consulte la sección [Clases](../Concepts/classes.md).

## Excluir os métodos ou as classes

Para eliminar um método ou classe existente, pode:

- em seu disco, remova o arquivo *.4dm* da pasta "Sources",
- in the 4D Explorer, select the method or class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

> To delete an object method, choose **Clear Object Method** from the [Form editor](../FormEditor/formEditor.md) (**Object** menu or context menu).

