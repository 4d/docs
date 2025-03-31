---
id: wp-insert-break
title: WP INSERT BREAK
slug: /WritePro/commands/wp-insert-break
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT BREAK.Syntax-->**WP INSERT BREAK** ( *objFaixa* ; *tipoRuptura* ; *modo* {; *atualizFaixa*} )<!-- END REF-->
<!--REF #_command_.WP INSERT BREAK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFaixa | Object | &#8594;  | Objeto de faixa 4dWrite Pro |
| tipoRuptura | Integer | &#8594;  | Tipo de quebra a inserir |
| modo | Integer | &#8594;  | Modo de inserção |
| atualizFaixa | Integer | &#8594;  | Modo de atualização da Faixa |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WP INSERT BREAK.Summary-->O comando **WP INSERT BREAK** \[#descv\] insere uma nova ruptura de tipo *tipoRuptura* na faixa de seleção *objFaixa* segundo o modo de inserção *modo* e o parâmetro *AtualizFaixa*.<!-- END REF--> \[#descv\]

Em *objFaixa*, passe:

* uma range, ou
* um elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé / imagem inline / seção / subseção), ou
* um documento 4D Write Pro

Em *tipoRuptura*, passe uma das seguintes constantes do tema *Constantes 4D Write Pro* para definir o tipo de ruptura a inserir:

| Constante                   | Tipo          | Valor | Comentário                                                                                                             |
| --------------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------- |
| wk column break             | Inteiro longo | 3     | Quebra de coluna: insere uma quebra de coluna<br/>                                                             |
| wk continuous section break | Inteiro longo | 5     | Define uma quebra de seção contínua (frequentemente usada para mudar o número de colunas sem começar uma nova página). |
| wk line break               | Inteiro longo | 0     | Quebra de linha (no mesmo parágrafo)                                                                                   |
| wk page break               | Inteiro longo | 2     | Quebra de página: define uma nova página                                                                               |
| wk paragraph break          | Inteiro longo | 4     | Quebra de parágrafo: define um novo parágrafo                                                                          |
| wk section break            | Inteiro longo | 1     | Quebra de seção: define uma nova seção<br/>                                                                    |

No parâmetro *modo*, passe uma constante para indicar o modo de inserção que se utilizará para a ruptura na faixa de seleção *objFaixa*:

| Constante  | Tipo          | Valor | Comentário                                                                                                           |
| ---------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| wk append  | Inteiro longo | 2     | Insere conteúdos ao final da faixa e atualiza a faixa para conter tanto os conteúdos anteriores quanto os inseridos. |
| wk prepend | Inteiro longo | 1     | Conteúdos inseridos no início da faixa e atualiza a faixa para conter os conteúdos anteriores e os inseridos         |
| wk replace | Inteiro longo | 0     | Substituir e atualizar conteúdos da faixa; a nova faixa contèm os conteúdos inseridos.                               |

* Se *objRango* for uma range, pode usar o *ActRange* opcional para passar uma das constantes abaixo para especificar se os conteúdos inseridos estão incluidos na range resultante:  
    
| Constante             | Tipo          | Valor | Comentário                                                                                     |  
| --------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------- |  
| wk exclude from range | Inteiro longo | 1     | Insere conteùdos ao fim da faixa e atualiza a faixa para menter apenas conteúdos anteriores.   |  
| wk include in range   | Inteiro longo | 0     | Insere conteúdos ao início da faixa e atualiza a faixa para manter apenas conteúdos anteriores |  
    
Se não passar o parâmetro *ActFaixa*, como padrão os conteúdos inseridos estão incluidos na faixa resultante.
* Se *objRange* não for uma range, *ActRange*  é ignorado.

## Exemplo 1 

Ao criar faturas, se deseja inserir quebras de página, exceto na última página:  
  
```4d
 $nbInvoices:=Records in selection([INVOICE])
 For($j;1;$nbInvoices)
    ... //Processamento de faturas
    If($j#$nbInvoices) //Inserir uma quebra de página, exceto na última página
       WP INSERT BREAK($buildRange;wk page break;wk append;wk exclude from range)
    End if
 End for
```

## Exemplo 2 

Se quiser inserir uma quebra de seção contínua para ter uma seção de uma coluna e uma seção de duas colunas na mesma página.

1. Insira uma quebra de seção contínua na seleção para criar uma nova seção:  
    
```4d  
 $range:=WP Selection range(*;"WParea")  
 WP INSERT BREAK($range;wk continuous section break;wk append)  
```  
    
    
![](../../assets/en/WritePro/commands/pict5562056.en.png)
2. Defina a contagem de colunas a 2 para a primeira seção:  
    
```4d  
 $section:=WP Get section(WParea;1)  
 WP SET ATTRIBUTES($section;wk column count;2)  
```  
    
    
![](../../assets/en/WritePro/commands/pict5562058.en.png)

## Ver também 

[WP Get breaks](wp-get-breaks.md)  
[WP INSERT DOCUMENT](wp-insert-document.md)  