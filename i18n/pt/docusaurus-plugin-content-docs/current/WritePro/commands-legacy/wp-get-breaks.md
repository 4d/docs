---
id: wp-get-breaks
title: WP Get breaks
slug: /WritePro/commands/wp-get-breaks
displayed_sidebar: docs
---

<!--REF #_command_.WP Get breaks.Syntax-->**WP Get breaks** ( *objAlvo* {; *tipoQuebra*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get breaks.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objAlvo | Object | &#8594;  | Range/faixa de seleção ou elemento ou documento 4D write Pro |
| tipoQuebra | Integer | &#8594;  | Tipo de quebra a retornar |
| Resultado | Collection | &#8592; | Coleção de ranges/faixas de seleção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get breaks.Summary-->O comando **WP Get breaks** retorna a coleção de todas as quebras inseridas em *objAlvo*.<!-- END REF-->

Esse comando só retorna quebras digitadas pelo usuário ou pelo código, e não as quebras geradas automaticamente por 4D Write Pro em processos de layout.

No parâmetro *objAlvo*, pode passar:

* uma range/faixa, ou
* um elemento (tabela / linha / parágrafo / corpo / cabeçalho / rodapé / seção / subseção), ou
* um documento 4D Write Pro

Como padrão, quebras de qualquer tipo são retornadas. Pode selecionar um tipo de quebra específico para retornar passando uma das constantes abaixo no parâmetro opcional *tipoQuebra*:

| Constante                   | Valor | Comentário                                                                                                             |
| --------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------- |
| wk column break             | 3     | Quebra de coluna: insere uma quebra de coluna<br/>                                                             |
| wk continuous section break | 5     | Define uma quebra de seção contínua (frequentemente usada para mudar o número de colunas sem começar uma nova página). |
| wk line break               | 0     | Quebra de linha (no mesmo parágrafo)                                                                                   |
| wk page break               | 2     | Quebra de página: define uma nova página                                                                               |
| wk paragraph break          | 4     | Quebra de parágrafo: define um novo parágrafo                                                                          |
| wk section break            | 1     | Quebra de seção: define uma nova seção<br/>                                                                    |

**Valor retornado**

**WP Get breaks** retornar uma coleção de objetos range, cada um deles descrevendo uma quebra dentro do objAlvo. Uma propriedade específica apenas leitura está disponível em cada objeto range, oferecendo o tipo de quebra:

\[#table\]**Propriedade** **Tipo** **Constante** **Descrição**  
\[ \].breakTypeNumberwk break typeApenas leitura: tipo de quebra#/table\]

Se *objAlvo* for uma range ou elemento, quebras são retornadas na ordem em que são encontrados. Se *objAlvo* for um documento 4D Write Pro, quebras são retornadas na ordem abaixo:

1. corpo
2. cabeçalho da primeira página para seção 1 (se houver)
3. cabeçalho da primeira página para seção 1 (se houver)
4. cabeçalho da página esquerda da seção 1 (se houver)
5. rodapé da página esquerda da seção 1 (se houver)
6. cabeçalho da página direita para seção 1 (se houver)
7. rodapé da página direita para seção 1 (se houver)
8. cabeçalho principal para seção 1 (se houver)
9. rodapé principal para seção 1 (se houver)
10. repetir com seção 2, seção 3, e assim por diante.
11. text boxes

Uma coleção vazia é retornada se *objAlvo* não conter qualquer quebra (ou qualquer quebra da petição de *tipoQuebra*).

#### Exemplo 

Se quiser substituir todas as quebras de linha por quebras de parágrafo no documento:

```4d
 var $_filteredBreaks : Collection
 var $break : Object
 $_filteredBreaks:=WP Get breaks(WParea;wk line break)
 For each($break;$_filteredBreaks)
    WP INSERT BREAK($break;wk paragraph break;wk replace)
 End for each
```

#### Ver também 

[WP Get elements](wp-get-elements.md)  
[WP INSERT BREAK](../commands/wp-insert-break.md)  