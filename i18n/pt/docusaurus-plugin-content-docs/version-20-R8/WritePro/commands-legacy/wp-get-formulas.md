---
id: wp-get-formulas
title: WP Get formulas
slug: /WritePro/commands/wp-get-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP Get formulas.Syntax-->**WP Get formulas** ( *alvoObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get formulas.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| alvoObj | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| Resultado | Collection | &#8592; | Coleção de fórmulas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get formulas.Summary-->O comando **WP Get formulas** devolve uma coleção de todas as fórmulas definidas em *objTarget*.<!-- END REF-->

No parámetro *objTarget*, pode passar:

* um intervalo ou
* um elemento (tabela / línha / células / parágrafo / corpo / cabeçalho / rodapé / seção / subseção / imagem inline ou ancorada/ caixa de texto), ou
* um documento 4D Write Pro.

**Nota:** quando passar uma seção em *objTarget*, só são devolvidas as fórmulas imagem ou as fórmulas das caixas de texto ancoradas a esta seção ou a todas as seções. Se estiverem ancoradas a uma página ou a vista aninhada, não são devolvidos suas fórmulas. Passe o documento em *objTarget* para obter todas as fórmulas de elementos ancorados. 

**Valor devolvido**

**WP Get formulas** devolve uma coleção de objetos fórmula, cada um dos quais contiém uma ou mais das seguintes propriedades:

| **Propriedade**  | **Tipo** | **Descrição**                                                                                                                                                                                                                             |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[ \].formula    | Objeto   | O texto da fórmula está disponível através de **\[ \].formula.source**. A fórmula é uma **copia** dla fórmula que se encontra no objetivo. Se quiser modificar a fórmula, deve voltar a inseri-la no documento para levar em consideração |
| \[ \].range      | Objeto   | Intervalo da fórmula (não devolvido para fórmulas de imagem ancorada)                                                                                                                                                                     |
| \[ \].anchoredID | Texto    | ID da imagem ancorada (devolvida só para fórmulas de imagem ancorada)                                                                                                                                                                     |
| \[ \].name       | Texto    | Nome da fórmula, se tiver definido um nome (não se devolve em caso contrario). Os nomes podem ser definidos utilizando [WP INSERT FORMULA](../commands/wp-insert-formula.md).                                                                         |
| \[ \].owner      | Objeto   | Documento 4D Write Pro                                                                                                                                                                                                                    |

**Notas:**

* Se passar uma subseção como destino, são definidas as fórmulas da seção pai.
* Se devolverem várias fórmulas, a coleção se ordena com respeito a ordem das fórmulas no destino, exceto os destinos de tipo documento e seção (qualquer ordem neste caso).

#### Exemplo 

Para obter todas as fórmulas em um documento:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea)
```

Para obter todas as fórmulas na primeira seção de um documento:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WP Get section(WriteProArea;1))
```

Para obter as fórmulas de todas as imagens ancoradas em um documento:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea).query("anchoredID # null")
```

#### Ver também 

*Gestão de fórmulas*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get links](wp-get-links.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  