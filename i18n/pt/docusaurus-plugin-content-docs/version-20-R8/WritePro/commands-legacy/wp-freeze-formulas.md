---
id: wp-freeze-formulas
title: WP FREEZE FORMULAS
slug: /WritePro/commands/wp-freeze-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP FREEZE FORMULAS.Syntax-->**WP FREEZE FORMULAS** ( *alvoObj* {; *recompute*} )<!-- END REF-->
<!--REF #_command_.WP FREEZE FORMULAS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| alvoObj | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| recompute | Integer | &#8594;  | Opção para controlar a recomputação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP FREEZE FORMULAS.Summary-->O comando **WP FREEZE FORMULAS** "congela" os conteúdos das fórmulas em *alvoObj*.<!-- END REF-->

O comando substitui cada fórmula em *alvoObj* com seu valor computado (seja texto estático ou imagem). Isso cria um documento portátil já que apenas as referências de fórmulas são mantidas em *alvoObj*. 

No parâmetro *alvoObj* pode passar:

* uma range (seleção de itens ou objetos), ou
* um elemento (tabela / linha / células / parágrafo / corpo / cabeçalho / rodapé / seção / subseção / imagem inline ou ancorada), ou
* um documento 4D Write Pro.

**Nota:** 

Se alvoObj destermina uma área offscreen onde as fórmulas não foram computadas previamente, serão avaliadas antes de ser congeladas. Em particular, fórmulas não são computadas quando um documento offscream é carregado

Quando passar uma seção em objTarget, só se congelam as fórmulas das imagens ou as fórmulas das caixas de texto ancoradas a esta seção ou a todas as seções. Se estiverem ancoradas a uma página ou à vista aninhada, suas fórmulas não se congelam. Passe o documento em objTarget para congelar todas as fórmulas dos elementos ancorados.

O parâmetro opcional *recompute* permite definir se as fórmulas em *targetObj* deve ser recomputada antes de congelar. Pode passar uma cosntante do tema "4D Write Pro":

| Constante                       | Tipo          | Valor | Comentário                                                                                                            |
| ------------------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------- |
| wk do not recompute expressions | Inteiro longo | 2     | Especifica que todas as expressões em um documento ou variável não voltem a ser calculadas para imprimir ou exportar. |
| wk recompute expressions        | Inteiro longo | 0     | Especifica que todas as expressões no documento voltem a ser calculadas antes de imprimir ou congelar. (valor padrão) |

Como padrão, se *recompute* for omitido, expressões são recomputadas.

Atenção: *Linhas Carry-over*, se houver, serão transformados como linhas normais quando o ojbTarget for congelado. Como resultado, se modificar o tamanho ou a orientação da página, ou se exportar o documento, é possível que se desloquem na disposição resultante.

#### Exemplo 

Para congelas as fórmulas em um documento:

```4d
 WP FREEZE FORMULAS(WriteProArea)
```

Para congelas todas as fórmulas na primeira seção de um documento:

#code4D\]  
WP FREEZE FORMULAS(WP Get section(WriteProArea;1);wk do not recompute expressions)  
\[#/code4D\]

#### Ver também 

[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  