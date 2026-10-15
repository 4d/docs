---
id: formObjectsOverview
title: Objectos formulário
---

O usuário constrói e personaliza os seus formulários de aplicação manipulando os objetos neles contidos. Você pode adicionar objetos, reposicionar objetos, definir propriedades de objetos, aplicar regras comerciais especificando restrições de entrada de dados ou escrever métodos objeto executados automaticamente quando o objeto é usado.

## Objectos activos e estáticos

Os formulários 4D suportam um grande número de objetos **ativos** e **estáticos** incorporados:

- Os **objetos ativos** executam uma tarefa de banco de dados ou uma função de interface. Os campos são objetos ativos. Outros objetos ativos - objetos digitáveis (variáveis), combo box, listas suspensas, botões imagem, etc. - armazenam dados temporariamente na memória ou executam alguma ação, como abrir uma caixa de diálogo, imprimir um relatório ou iniciar um processo em segundo plano.
- Os **objetos estáticos** são geralmente usados para definir a aparência do formulário e de seus rótulos, bem como para a interface gráfica. Os objetos estáticos não têm variáveis associadas como os objetos ativos. No entanto, é possível inserir objetos dinâmicos em objetos estáticos.

## Manipulação de objectos de formulário

Pode adicionar ou modificar objetos de formulários 4D das seguintes formas:

- **[Editor de formulários](FormEditor/formEditor.md):** arraste um objeto da barra de ferramentas do editor de formulários para o formulário. Em seguida, use a Lista de propriedades para especificar as propriedades do objeto.

- **Linguagem 4D**: os comandos do tema `Objetos (Formulários) `, como [`OBJECT DUPLICATE`](../commands/object-duplicate) ou [`OBJECT SET FONT STYLE`](../commands/object-set-font-style), permitem criar e definir objetos de formulário.

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

### Accessing form objects using their name or their data source in the 4D language

Many commands handling form objects such as commands from [Objects (Forms)](../commands/theme/Objects_Forms.md), [List Box](../commands/theme/List_Box.md), or [Styled Text](../commands/theme/Styled_Text.md) themes share the same generic syntaxes described here:

```4d
COMMAND NAME( * ; *object* : Text { ; *additional parameters* } )
//or
COMMAND NAME( *object* : Variable, Field { ; *additional parameters* })
```

If you specify the \* parameter, you indicate that *object* is the [name of the object](./properties_Object.md#object-name) (a string). If you don't pass the \*, you indicate that *object* is a field or a variable, i.e. its [data source](./properties_Object.md#variable-or-expression).

When using the [object name](./properties_Object.md#object-name), you can rely on the @ character within that name if you want to address several objects of the form in one call. The following table shows examples of object names you can specify to this command.

| Object Names                        | Objects affected by the call                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| mainGroupBox                        | Only the object mainGroupBox.                                  |
| main@                  | The objects whose name starts with “main”.                     |
| @GroupBox              | The objects whose name ends with “GroupBox”.                   |
| @Agrupar@ | The objects whose name contains “Group”.                       |
| main@Btn               | The objects whose name starts with “main” and ends with “Btn”. |
| @                      | All the objects present in the form.                           |

Form object names can contain up 255 bytes, allowing you to define and apply custom naming rules, such as "xxxx_Button" or "xxx_Mac".

:::warning

You can [configure the way the @ character is interpreted](../settings/database.md#text-comparison) when it is included in a character string. This option affects the functioning of the form object commands.

:::

