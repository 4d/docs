---
id: wp-insert-picture
title: WP INSERT PICTURE
slug: /WritePro/commands/wp-insert-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT PICTURE.Syntax-->**WP INSERT PICTURE** ( *objFaixa* ; *imagem* ; *modo* {; *atualizarFaixa*} )<!-- END REF-->
<!--REF #_command_.WP INSERT PICTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFaixa | Object | &#8594;  | objeto Faixa |
| imagem | Picture | &#8594;  | Campo ou variável Imagem, ou rota para o arquivo imagem em disco |
| modo | Integer | &#8594;  | Modo de inserção |
| atualizarFaixa | Integer | &#8594;  | Modo de atualização de Faixa |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WP INSERT PICTURE.Summary-->O comando **WP INSERT PICTURE** insere a *imagem* no *objFaixa* de acordo com o *modo* de inserção especificado.<!-- END REF--> A imagem se insertará como um carácter em *objFaixa*.

Em *objFaixa*, passe um objeto faixa padrão 4D Write Pro.

* uma range, ou
* um elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé / imagem inline / seção/ subseção), ou
* um documento 4D Write Pro.

Em *imagem*, pode passar:

* seja um campo ou variável imagem 4D,
* ou uma string que contenha uma rota a um arquivo imagem armazenado no disco, expressado utilizando a sintaxe de sistema.  
Se utilizar uma string, pode passar uma rota de acesso completa, ou uma rota relativa ao arquivo de estrutura do banco de dados. Também pode passar um nome de arquivo, em cujo caso o arquivo deve estar localizado junto ao arquivo de estrutura do banco de dados. Se passar um nome de arquivo, é necessário indicar a extensão do arquivo.

Todo formato imagem suportado por 4D pode ser utilizado (ver *Imagens*). Pode obter a lista de formatos imagem disponíveis utilizando o comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Se a *imagem* encapsula vários formatos (codecs), 4D Write Pro só mantém um formato para visualizar e um formato para a impressão (se for diferente) no documento; os "melhores" formatos são selecionados automaticamente.

No parâmetro *modo*, passe uma das seguintes constantes para indicar o modo de inserção a utilizar na imagem no documento:

| Constante  | Tipo          | Valor | Comentário                                                                                                           |
| ---------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| wk append  | Inteiro longo | 2     | Insere conteúdos ao final da faixa e atualiza a faixa para conter tanto os conteúdos anteriores quanto os inseridos. |
| wk prepend | Inteiro longo | 1     | Conteúdos inseridos no início da faixa e atualiza a faixa para conter os conteúdos anteriores e os inseridos         |
| wk replace | Inteiro longo | 0     | Substituir e atualizar conteúdos da faixa; a nova faixa contèm os conteúdos inseridos.                               |

* Se *targetObj* for uma range, pode usar o parâmetro *rangeUpdate* para passar uma das constantes abaixo para especificar se a imagem inserida está incluída na range resultante:  
    
| Constante             | Tipo          | Valor | Comentário                                                                                     |  
| --------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------- |  
| wk exclude from range | Inteiro longo | 1     | Insere conteùdos ao fim da faixa e atualiza a faixa para menter apenas conteúdos anteriores.   |  
| wk include in range   | Inteiro longo | 0     | Insere conteúdos ao início da faixa e atualiza a faixa para manter apenas conteúdos anteriores |  
    
Se não passar um parâmetro *rangeUpdate*, como padrão a imagem inserida é incluida na range resultado.
* Se *targetObj* não for uma range, *rangeUpdate* é ignorada.

## Exemplo 

No exemplo abaixo, um usuário seleciona a imagem que deseja inserir no objeto de faixa e se lhe avisará se esta imagem não puder ser inserida:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //pedir ao usuário escolher uma imagem no disco que deseje inserir
 $imgRef:=Open document("")
  //se o usuário não cancelar
 If(OK=1)
  //se o arquivo for um arquivo de imagem suportado
    If(Is picture file(document))
  // insere imagem selecionada pelo usuário
       WP INSERT PICTURE($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //se a inserção falhar, alerta ao usuário
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## Ver também 

  
[WP INSERT DOCUMENT](wp-insert-document.md)  
[WP Picture range](wp-picture-range.md)  