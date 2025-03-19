---
id: wp-insert-document
title: WP INSERT DOCUMENT
slug: /WritePro/commands/wp-insert-document
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT DOCUMENT.Syntax-->**WP INSERT DOCUMENT** ( *objFaixa* ; *docWP* ; *modo* {; *atualizFaixa*} )<!-- END REF-->
<!--REF #_command_.WP INSERT DOCUMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFaixa | Object | &#8594;  | Faixa 4D Write Pro |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| modo | Integer | &#8594;  | Modo inserção |
| atualizFaixa | Integer | &#8594;  | Modo atualização Faixa |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WP INSERT DOCUMENT.Summary-->O comando **WP INSERT DOCUMENT** insee o documento *docWP* na faixa *objFaixa* de acordo com o modo de inserção especificado e o parâmetro *atualizFaixa*.<!-- END REF-->

Em *objRange*,

* uma range, ou
* um elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé / imagem inline / seção / subseção / caixa de texto), ou
* um documento 4D Write Pro.

O documento inserido *docWP*  pode ser qualquer documento 4D Write Pro criado com o comando [WP New](wp-new.md) ou [WP Import document](wp-import-document.md). Só são inseridos os elementos de corpo de texto (seções e marcadores na faixa de destino são conservadas). Além disso, os elementos são copiados, por isso *docWP*  podem ser utilizados várias vezes.

No parâmetro *modo*, passe uma ou uma combinação das seguintes constantes do tema *Constantes 4D Write Pro* para indicar o modo de inserção a ser utilizado para o documento na faixa *objFaixa* do documento de destino:

| Constante  | Tipo          | Valor | Comentário                                                                                                           |
| ---------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| wk append  | Inteiro longo | 2     | Insere conteúdos ao final da faixa e atualiza a faixa para conter tanto os conteúdos anteriores quanto os inseridos. |
| wk prepend | Inteiro longo | 1     | Conteúdos inseridos no início da faixa e atualiza a faixa para conter os conteúdos anteriores e os inseridos         |
| wk replace | Inteiro longo | 0     | Substituir e atualizar conteúdos da faixa; a nova faixa contèm os conteúdos inseridos.                               |

Po0de combinar uma das constantes anteriores com as seguintes opções de inserção:

| Constante                | Tipo          | Valor | Comentário                                                      |
| ------------------------ | ------------- | ----- | --------------------------------------------------------------- |
| wk freeze expressions    | Inteiro longo | 64    | Congela expressoes no momento em que são inseridas<br/> |
| wk keep paragraph styles | Inteiro longo | 128   | Mantém o estilo dos parágrafos destino<br/>             |

* Se *alvoObj* for uma range, pode usar o parâmetro opcional *rangeAtulaliz* para passar uma das constantes abaixo para especificar se os conteúdos inseridos são incluidos na range resultante:

| Constante             | Tipo          | Valor | Comentário                                                                                     |
| --------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------- |
| wk exclude from range | Inteiro longo | 1     | Insere conteùdos ao fim da faixa e atualiza a faixa para menter apenas conteúdos anteriores.   |
| wk include in range   | Inteiro longo | 0     | Insere conteúdos ao início da faixa e atualiza a faixa para manter apenas conteúdos anteriores |

 Se não passar um parâmetro *atualizFaixa*, como padrão os conteúdos inseridos estão incluídos na faixa resultante.

 Se *alvoObj* não for uma range, *rangeAtualiz* for ignorado.

## Exemplo 1 

Se desejar substituir os conteúdos de um documento pelo texto selecionado de outro documento:

```4d
 $tempRange:=WP Get selection(WPTemplate) //recuperamos a seleção de usuário no documento WPTemplate
 $doctoCopy:=WP New($tempRange) //criamos um novo documento baseado em WPTemplate
 WP INSERT DOCUMENT(WPDoc;$doctoCopy;wk replace) //substituimos o conteúdo de WPDoc pelo conteúdo do novo documento
```

## Exemplo 2 

Se definir um documento modelo com partes pré-formatadas diferentemente, cada uma das quais sendo armazenadas como uma bookmark. Quando produzir um documento final do modelo, pode extrair qualquer bookmark como um novo documento e inserir a bookmark no documento final. 

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //obtém as bookmarks do modelo
 $targetRange:=WP New //criar um documento vazio (será o documento final)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //gerencia a parte principal cabeçalho 
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //seleciona a faixa
    $RangeDoc:=WP New($Range) //cria um novo documento da faixa
    WP INSERT DOCUMENT($buildRange;$RangeDoc;wk prepend+wk freeze expressions) //wk prepend=after replacement, $buildRange é igual ao fim do texto substituído
 End if
```

## Ver também 

  
[WP INSERT BREAK](wp-insert-break.md)  
[WP INSERT PICTURE](wp-insert-picture.md)  
[WP New](wp-new.md)  