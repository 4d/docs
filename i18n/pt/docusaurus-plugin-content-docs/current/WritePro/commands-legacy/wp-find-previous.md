---
id: wp-find-previous
title: WP Find previous
slug: /WritePro/commands/wp-find-previous
displayed_sidebar: docs
---

<!--REF #_command_.WP Find previous.Syntax-->**WP Find previous**  ( *objAlvo* ; *pesquisarAntes* ; *valorPesquisa* ; *condiçãoPesquisa* {; *substituirValor*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Find previous.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objAlvo | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| pesquisarAntes | Object | &#8594;  | Range/seleção antes da qual vai começar a pesquisa |
| valorPesquisa | Text | &#8594;  | Valor a ser pesquisado |
| condiçãoPesquisa | Integer | &#8594;  | Regras da pesquisa |
| substituirValor | Text | &#8594;  | String se quiser substituir o valor |
| Resultado | Object | &#8592; | Range/seleção do valor encontrado/substituído |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Find previous.Summary-->O comando **WP Find previous**  pesquisa *objAlvo*, antes da range *pesquisarAntes*, para o *valorPesquisa* baseado em *condiçõesPesquisa*.<!-- END REF--> Um parâmetro opcional pode ser usado para substituir qualquer resultado encontrado. 

**Nota**: **WP Find previous** não pesquisa ou substitui o texto em fórmulas. Use o comando [WP Get formulas](wp-get-formulas.md) nesse caso. 

No parâmetro *objAlvo*, passe um objeto contendo:

* uma range, ou
* um elemento (tabela / linha/ célula / parágrafo / corpo / cabeçalho / rodapé / seção / subseção), ou
* um documento 4D Write Pro

Passa uma range, faixa de valores, no parâmetro *pesquisarAntes*. A pesquisa vai começar imediatamente antes da faixa selecionada.

O parâmetro *valorPesquisa* permite passar o texto para pesquisar dentro de *objAlvo*. 

Pode especificar como a pesquisa é realizada com o parâmetro *condiçãoPesquisa*. Pode usar uma ou mais das constantes abaixo: 

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

**Nota**: Strings são comparadas usando a linguagem de dados atual a não ser que wk use keyboard language seja usado.

No parâmetro opcional *substituirVAlor*, pode passar texto para tomar o lugar de qualquer ocorrência do texto em *valorPesquisar* encontrada em *objAlvo*.

**Range retornada**

Essa função retorna uma range, uma faixa de elementos, que foi encontrada ou substituida.:

* operações de pesquisa - as ranges correspondem às posições das strings encontradas
* operações de substituição - as ranges correspondem às posições das strings substituídas

Se *objAlvo* for uma range ou elemento, valores encontrados são retornados na ordem em que forem encontrados. Se *objAlvo* for um documento 4D Write Pro, os valores encontrados são retornados na ordem seguinte:

1. corpo
2. cabeçalho de primeira página para seção 1 (se houver)
3. rodapé de primeira página para seção 1(se houver)
4. cabeçalho de página esquerda para seção 1 (se houver)
5. rodapé de página esquerda para seção 1 (se houver)
6. cabeçalho de página direita para seção (se houver)
7. rodapé de página direita para seção 1 (se houver)
8. cabeçalho principal para seção 1 (se houver)
9. rodapé principal para seção 1 (se houver)
10. repetido com seção 2, seção 3, e assim por diante.
11. text boxes

Uma range ou seleção vazia é retornada se nenhum resultado for encontrado.

#### Exemplo 

```4d
 var $userSel ;$target ;$alphaRanges ;$previousRanges: object
 var $options : Integer
 
  // defina opções de pesquisa
 $options:=wk case insensitive+wk diacritic insensitive
 
  // obtém posições de usuários atuais
 $userSel:=WP Selection range(*;"WParea")
 
  // define alvo
 $target:=WP Get body(WParea) // pesquisa apenas dentro do corpo
 
  // lança SEARCH of PREVIOUS ocorrências da string  "alpha"(baseada na seleção atual)
 $previousRanges:=WP Find previous($target;"alpha";$options)
```

#### Ver também 

[WP Find all](wp-find-all.md)  
[WP Find next](wp-find-next.md)  