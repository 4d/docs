---
id: wp-select
title: WP SELECT
slug: /WritePro/commands/wp-select
displayed_sidebar: docs
---

<!--REF #_command_.WP SELECT.Syntax-->**WP SELECT** ( {{* ;} *wpArea*;} {*wpArea*} {; *faixaInicio* ; *faixaFim*} )<!-- END REF-->
<!--REF #_command_.WP SELECT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, wpArea é um formulário nome objeto (string). Se omitido, wpArea é um campo objeto ou variável |
| wpArea | Text, Object | &#8594;  | Nome de objeto formulário (se * for especificado) ou objeto variável ou campo 4D Write Pro (se * for omitido) |
| wpArea | Object | &#8594;  | Nome de objeto de formulário (se * for especificado) ou 4D Write Pro variável objeto ou campo (se * for omitido) |
| faixaInicio | Integer | &#8594;  | Início offset da faixa de texto |
| faixaFim | Integer | &#8594;  | Final offset da faixa de texto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP SELECT.Summary-->O novo comando **WP SELECT** cria uma nova seleção de texto na área 4D Write Pro *wpArea*, baseado na *faixaObj* de um nova faixa definida por *faixaInicio* e *faixaFinal*.<!-- END REF-->

Se passar o parâmetro opcional *\**, indica que *wpArea* é um nome de objeto de formulário (string). Se não passar este parâmetro, indica que *wpArea* é um campo objeto ou variável 4D Write Pro. Se houver uma área 4D Write Pro se passa no parâmetro *wpArea*, o comando não faz nada.

**Nota**: este comando só pode ser utilizada se *wpArea* estiver associada com um objeto de formulário (ou seja, se mostra no formulário).

Para definir a faixa de seleção, pode passar uma faixa objeto existente em *faixaObj*, ou passar um par de limites f*aixaInicio* / *faixaFinal*:

* *WP SELECT({\* ;} wpArea ; faixaObj)*  
Um *faixaObj* pode ser:
* uma faixa, ou
* uma referência de elemento (tabela / fila / parágrafo / imagem ancorada ou em linha / cabeçalho / rodapé/seção/subseção) ou
* um documento 4D Write Pro (só o elemento corpo utilizado)
* *WP SELECT({\* ;} wpArea ; startRange ; endRange)*

*WP SELECT( alvoObj {; startRange ; endRange} )*

* onde *alvoObj* pode ser:  
   * uma range (faixa ou seleção de objetos), ou  
   * uma referência de elemento (tabela/linha/parágrafo/imagem ancorada ou inline/corpo/cabeçalho/rodapé/seção/subseção)  
   * onde *faixaInicio* e *faixaFinal* estão permitidas para as referências de elemento a seguir: corpo/cabeçalho/rodapé/seção/subseção.
* Neste caso em *faixaInicio* e *faixaFinal* passe os valores correspondentes a posição dos primeiros e últimos caracteres a selecionar no documento. Pode passar wk start text em *faixaInicio* para definir o começo do documento e wk end text em *faixaFinal* para definir o final do documento. Lembre que um documento 4D Write Pro não só contém texto visível mas também las etiquetas de formato incluidas na range

#### Exemplo 

O código abaixo:

```4d
 $range:=WP Text range([SAMPLE]WP;wk start text;12)
 WP SELECT(*;"WParea";$range)
```

... terá o mesmo resultado que:

```4d
 WP SELECT(*;"WParea";wk start text;12)
```

#### Ver também 

[WP Text range](wp-text-range.md)  