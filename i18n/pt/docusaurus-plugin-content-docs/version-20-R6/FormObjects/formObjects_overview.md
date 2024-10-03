---
id: formObjectsOverview
title: Objectos formulário
---

O usuário constrói e personaliza os seus formulários de aplicação manipulando os objetos neles contidos. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.

## Active and static objects

Os formulários 4D suportam um grande número de objetos **ativos** e **estáticos** incorporados:

- Os **objetos ativos** executam uma tarefa de banco de dados ou uma função de interface. Os campos são objetos ativos. Other active objects — enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on — store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process.
- Os **objetos estáticos** são geralmente usados para definir a aparência do formulário e de seus rótulos, bem como para a interface gráfica. Os objetos estáticos não têm variáveis associadas como os objetos ativos. No entanto, é possível inserir objetos dinâmicos em objetos estáticos.

## Manipulação de objectos de formulário

Pode adicionar ou modificar objetos de formulários 4D das seguintes formas:

- **[Editor de formulários](FormEditor/formEditor.md):** arraste um objeto da barra de ferramentas do editor de formulários para o formulário. Em seguida, use a Lista de propriedades para especificar as propriedades do objeto.

- **4D language**: Commands from the `Objects (Forms)` theme such as [`OBJECT DUPLICATE`](https://doc.4d.com/4dv20/help/command/en/page1111.html) or [`OBJECT SET FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page166.html) allow to create and define form objects.

- **Código JSON en formularios dinámicos:** define las propiedades utilizando JSON. Utilice la propiedad [type](properties_Object.md#type) para definir el tipo de objeto y, a continuación, defina sus [propiedades disponibles](properties_Reference.md).
  Exemplo de um objeto botão:

```json
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
