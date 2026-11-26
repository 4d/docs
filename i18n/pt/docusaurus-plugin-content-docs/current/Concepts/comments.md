---
id: comments
title: Comentários
---

## Noções básicas

Comentários são linhas de código inativas. Essas linhas não são interpretadas pela linguagem 4D e não são executadas quando o código é chamado. Recursos específicos utilizam comentários para documentar e marcar seu código.

Existem duas maneiras de criar comentários:

- `//` para comentários de uma linha
- `/* ... */` para comentários inline ou multilinha.

Ambos os estilos de comentários podem ser usados simultaneamente.

### Comentários de uma linha (`//comentário`)

Insira `//` no início de uma linha ou após uma instrução para adicionar um comentário de uma linha. Exemplo:

```4d
//Este é um comentário
For($vCounter;1;100) //Iniciando loop
  //comentário
  //comentário
  //comentário
End for
```

### Comentários inline ou multilinha (`/*comentário*/`)

Coloque o conteúdo entre os caracteres `/*` ... `*/` para criar comentários inline ou blocos de comentários multilinha. Tanto os comentários inline quanto os blocos multilinha começam com `/*` e terminam com `*/`.

- **Comentários inline** podem ser inseridos em qualquer lugar do código. Exemplo:

```4d
For /* comentário inline */ ($vCounter;1;100)
	...
End for
```

- **Blocos de comentários multilinha** permitem comentar um número ilimitado de linhas. Blocos de comentários podem ser aninhados (útil já que o editor de código 4D suporta o recolhimento de blocos). Exemplo:

```4d
For ($vCounter;1;100)
/*
comentários  
	/*
	outros comentários
	*/
*/
...
End for
```

## Comentários para descrição de sintaxe

Comentários podem descrever a sintaxe de seus métodos, funções de classe ou construtores.

- Para um método, escreva o bloco de comentário nas primeiras linhas do método. No editor de código 4D, os comentários são exibidos em suas [Dicas de ajuda](../code-editor/write-class-method.md#help-tips) (as 5 primeiras linhas são exibidas).
- Para uma função de classe ou construtor, escreva o bloco de comentário imediatamente acima da declaração `Function` ou `Class constructor`. Os comentários são exibidos junto com a assinatura na assistência de código do 4D e no VS Code (detalhes de preenchimento, dicas de ajuda e ajuda de assinatura). Adicione um comentário dedicado para cada parâmetro com a sintaxe `// $paramName: <texto>` (veja abaixo).

Exemplo:

```4d

// Adiciona ou atualiza uma dependência local (como um arquivo URL) no objeto "dependencies" do arquivo de ambiente
// $folder: pasta da dependência a ser registrada
// $optionalName: nome opcional da dependência (padrão é o nome completo da pasta)
#DECLARE($folder : 4D.Folder; $optionalName : Text)

//...código

```

O bloco de comentário segue estas regras:

- É composto por linhas `//` e/ou um bloco `/* */`. Cada linha de um bloco `/* */` é tratada como uma linha `//`, e os marcadores `/*` e `*/` não são exibidos.
- Para uma função de classe ou construtor, deve ser colocado imediatamente acima da declaração. Uma linha em branco entre o bloco de comentário e a declaração quebra a associação: apenas a assinatura é exibida.
- Cada bloco de comentário é associado apenas à próxima declaração, mesmo quando está escrito logo após o código da função anterior.
- Apenas o código salvo é lido: após editar um comentário, a assistência de código mostra o novo texto assim que a classe é salva.
- O texto é exibido como texto simples: marcadores Markdown como `**` ou `*` são mostrados como escritos.




#### Exemplo 1

Você deseja documentar uma função e seu parâmetro para que sejam exibidos no editor de código:

```4d
// Classe: Invoice

// Retorna o preço com impostos
// A taxa é um percentual
// $rate: taxa de imposto a aplicar (20 para 20%)
Function priceWithTaxes($rate : Real) : Real
	return This.price*(1+($rate/100))
```

Quando você digita `$invoice.priceWithTaxes(` em um método, a ajuda exibe a assinatura com:

```
Retorna o preço com impostos
A taxa é um percentual

$rate: taxa de imposto a aplicar (20 para 20%)
```

#### Exemplo 2

Você deseja documentar um construtor de classe com um bloco `/* */`:

```4d
// Classe: Counter
property value : Integer
property name : Text

/*
Cria um contador iniciando em um valor
$start: valor inicial do contador
{$name}: nome do contador
*/
Class constructor($start : Integer; $name : Text)
	This.value:=$start
	This.name:=$name || "default name"
```

Você pode exibir: 

![tips](../assets/en/Concepts/comments-tips.png)


## Comentários para recursos específicos

### Ferramenta MCP

Quando uma função é publicada como uma **ferramenta MCP**, seus comentários são usados para fornecer a [descrição do código da ferramenta MCP](../WebServer/mcp-server.md#describing-the-tools), incluindo tags de comportamento MCP.


### Marcadores de navegação de código

Marcadores de navegação de código como `MARK:`, `TODO:` e `FIXME:` são inseridos através de comentários. Veja [Marcação manual](../code-editor/write-class-method.md#manual-tagging).

