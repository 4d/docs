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

- **Linguagem 4D**: os comandos do tema `Objetos (Formulários) `, como [`OBJECT DUPLICATE`] (https://doc.4d.com/4dv20/help/command/en/page1111.html) ou [`OBJECT SET FONT STYLE`] (https://doc.4d.com/4dv20/help/command/en/page166.html), permitem criar e definir objetos de formulário.

- **Código JSON em formulários dinâmicos:** defina as propriedades usando JSON. Use a propriedade [type](properties_Object.md#type) para definir o tipo de objeto e, em seguida, defina suas [propriedades disponíveis](properties_Reference.md).
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
