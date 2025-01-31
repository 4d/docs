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
