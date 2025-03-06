---
id: wp-compute-formulas
title: WP COMPUTE FORMULAS
slug: /WritePro/commands/wp-compute-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP COMPUTE FORMULAS.Syntax-->**WP COMPUTE FORMULAS** ( *objTarget* )<!-- END REF-->
<!--REF #_command_.WP COMPUTE FORMULAS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP COMPUTE FORMULAS.Summary-->O comando **WP COMPUTE FORMULAS** avalia as fórmulas em *objTarget*.<!-- END REF-->

O comando calcula ou atualiza o resultado das fórmulas encontradas em *objTarget* em função do contexto atual e mostra o resultado obtido. Por exemplo, se a fórmula inserida for a hora, o valor se modificará cada vez que se chame ao comando **WP COMPUTE FORMULAS**. Para mais informação sobre a avaliação de fórmulas, consulte a seção *Gestão de fórmulas*. 

No parâmetro *objTarget*, pode passar:

* uma range, ou
* um elemento (tabela / linha / células / parágrafo / corpo / cabeçalho / rodapé / seção / subseção / imagem inline ou ancorada / caixa de texto), ou
* um documento 4D Write Pro.

**Nota**: quando se passa uma seção em targetObj, só são calculadas as fórmulas das imagens ou as fórmulas das caixas de texto ancoradas a esta seção ou a todas as seções. Se estiverem ancoradas a uma página ou a vista aninhada, suas fórmulas não são calculadas. Passe o documento em targetObj para calcular todas as fórmulas dos elementos ancorados.

#### Exemplo 

Para atualizar as fórmulas em um documento:

```4d
 WP COMPUTE FORMULAS(WriteProArea)
```

Para atualizar todas as fórmulas na primeira seção de um documento:

```4d
 WP COMPUTE FORMULAS(WP Get section(WriteProArea;1))
```

#### Ver também 

*Gestão de fórmulas*  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  
[WP SET DATA CONTEXT](wp-set-data-context.md)  