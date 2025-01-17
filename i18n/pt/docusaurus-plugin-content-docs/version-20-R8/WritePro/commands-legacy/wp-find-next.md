---
id: wp-find-next
title: WP Find next
slug: /WritePro/commands/wp-find-next
displayed_sidebar: docs
---

<!--REF #_command_.WP Find next.Syntax-->**WP Find next** ( *objAlvo* ; *pesquisarDepois* ; *valorPesquisa* ; *condiçãoPesquisa* {; *valorSubstituir*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Find next.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objAlvo | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| pesquisarDepois | Object | &#8594;  | Range depois da qual vai começar a pesquisa |
| valorPesquisa | Text | &#8594;  | valor a ser pesquisado |
| condiçãoPesquisa | Integer | &#8594;  | Regras da pesquisa |
| valorSubstituir | Text | &#8594;  | String que vai opcionalmente substituir o valor encontrado |
| Resultado | Object | &#8592; | Range/seleção dos valores encontrados/substituídos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Find next.Summary-->O comando **WP Find next** pesquisa *objAlvo*, depois da range/faixa de seleção *pesquisarDepois*, pesquisando por *valorPesquisa* baseado na *condiçãoPesquisa*.<!-- END REF--> Um parâmetro opcional pode ser usado para substituir os resultados encontrados. 

**Nota**: **WP Find next** não pesquisa ou substitui texto em fórmulas. Use o comando [WP Get formulas](wp-get-formulas.md) neste caso. 

No parâmetro *objAlvo*, passe um objeto contendo:

* uma range/seleção ou
* um elemento (tabela / linha / célula / parágrafo / corpo / cabeçalho / rodapé / seção / subseção / caixas de texto), ou
* um documento 4D Write Pro.

Passe uma range no parâmetro *pesquisarDepois*. A pesquisa vai começar imediatamente depois da range definida ou passar NULL ao primeiro valor de *objAlvo*.

O parâmetro *valorPesquisa* permite que passe o texto a pesquisar dentro de *objAlvo*. 

Pode especificar como a pesquisa será realizada com o parâmetro *condiçãoPesquisa*. Pode usar uma ou mais das constantes abaixo: 

| Constante                | Comentário                                                                                                                                                                                                                                                                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk case insensitive      | Strings são comparadas sem levar em conta diferenças de maiúsculas. Note que marcas diacríticas são levadas em consideração. Por exemplo, "A" é considerado como sendo a mesma coisa que "a". Entretanto, "a" é diferente que "à".                                                                                                                 |
| wk diacritic insensitive | As strings são comparadas, mas as marcas diacríticas (acentos) das letras são ignorados. Por exemplo, "a" se considera igual que "à".                                                                                                                                                                                                              |
| wk find reverse          | Pesquisa é realizada na ordem inversa.                                                                                                                                                                                                                                                                                                             |
| wk kana insensitive      | Para linguagem japonesa. Strings são comparadas de acordo com o sentido (não com o estilo de escrita). Por exemplo, "あ" (a em hiragana) é considerado como a mesma coisa que "ア" (a em katakana). Quando essa opção estiver estabelecida, wk width insensitive  está implicito (considerado como estabelecido), entretanto o oposto não é verdade. |
| wk keep character style  | Quando substituir texto, o estilo de caractere existente é mantido (se possível).                                                                                                                                                                                                                                                                  |
| wk override protected    | Proteção de leitura e escrita é ignorada e as strings em áreas protegidas podem ser substituidas                                                                                                                                                                                                                                                   |
| wk use keyboard language | Para comparações de strings, use a propriedade linguagem de teclado do objeto formulário sendo editado ao invés da linguagem de dados atual (padrão). **Nota**: Ignoredo se o documento for offscreen.                                                                                                                                             |
| wk whole word            | Só strings que são palavras completas são consideradas. Procurar strings dentro de outras palavras não é considerado. Por exemplo, "where" não é procurado se estiver dentro de "somewhere".                                                                                                                                                       |
| wk width insensitive     | Para a linguagem japonesa. STrings são comparadas por largura de caractere, "ｱ" é considerado como o mesmo símbolo que "ア".                                                                                                                                                                                                                        |

**Nota**: Strings são comparadas com a linguagem de dados atual a não ser que wk use keyboard language seja usado.

No parâmetro opcional *substituirValor*, pode passar texto para substituir qualquer inst^ncia de texto em *valorPesquisa* encontrado em *objAlvo*.

**Range/seleção retornada**

A função retorna uma range/faixa de seleção de objetos do valor que foi encontrado ou substituído:

* operações de pesquisa - as ranges correspondem com as posições das strings encontradas
* operações de substituição - as ranges correspondem com as posições de strings substituidas

Se *objAlvo* for uma range ou elemento, valores encontrados são retornados na ordem em que forem achados. Se *objAlvo* for um documento 4D Write Pro, valores encontrados são retornados na ordem abaixo:

1. corpo
2. cabeçalho da primeira página para seção 1 (se houver)
3. rodapé da primeira página para seção 1 (se houver)
4. cabeçalho da página esquerda para seção 1 (se houver)
5. rodapé da página esquerda para seção 1 (se houver)
6. cabeçalho da página direita para seção (se houver)
7. rodapé da página direita para seção 1 (se houver)
8. cabeçalho principal para seção 1 (se houver)
9. rodapé principal para seção 1 (se houver)
10. repete com seção 2, seção 3 e assim por diante.
11. caixas de texto

Uma range/intervalo vazia é retornada se nenhum resultado for encontrado.

#### Exemplo 

```4d
 var $userSel ;$target ;$alphaRanges ;$nextRange : object
 var $options : Integer
 
  // define opções de pesquisa
 $options:=wk case insensitive+wk diacritic insensitive
 
  // obtém posição atual do usuário
 $userSel:=WP Selection range(*;"WParea")
 
  // define alvo
 $target:=WP Get body(WParea) // pesquisa apenas no corpo
 
  // pesquisa  SEARCH of NEXT ocorrência da string "alpha"  (baseada na seleção atual)
 $nextRange:=WP Find next($target;$userSel;"alpha";$options)
```

#### Ver também 

[WP Find all](wp-find-all.md)  
[WP Find previous ](wp-find-previous.md)  