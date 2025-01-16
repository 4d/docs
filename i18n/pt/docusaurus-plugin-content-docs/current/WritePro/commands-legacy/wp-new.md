---
id: wp-new
title: WP New
slug: /WritePro/commands/wp-new
displayed_sidebar: docs
---

<!--REF #_command_.WP New.Syntax-->**WP New** {( *fonte* {; *opção*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.WP New.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fonte | Text, Blob, Object | &#8594;  | Fonte HTML 4D ou Blob 4D Write |
| opção | Integer | &#8594;  | Opção de importação para expressões HTML |
| Resultado | Object | &#8592; | Objeto 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP New.Summary-->O comando **WP New** cria e devolve um objeto 4D Write Pro.<!-- END REF-->\[#/descv\]. O objeto retornado é um documento completo que pode ser passado ao comando [WP INSERT DOCUMENT](../commands/wp-insert-document.md), por exemplo.

Por padrão, se omitir o parâmetro *fonte*, o comando devolve um objeto 4D Write Pro vazio.

Também pode utilizar o parâmetro *fonte*, em cujo caso o novo objeto 4D Write Pro será preenchido com o conteúdo da *fonte*. Pode passar:

* um parâmetro *cadeia*: Neste caso, passe uma fonte HTML 4D, ou seja, um texto exportado por [WP EXPORT VARIABLE](wp-export-variable.md) com a opção wk web page html 4D. Este texto pode conter referências (etiquetas e expressões 4D) e imagens aninhadas).
* ou um parâmetro *blob*: Neste caso, deve passar ou:  
   * um formato de documento 4D Write Pro (.4wp) armazenado em um BLOB. Para saber mais sobre o formato 4D Write Pro, veja *formato de documento .4wp*.  
   * uma área de legado 4D Write carregada em um BLOB (Blobs contendo documentos .4w7 ou .4wt são suportados). Para uma lista detalhada de propriedades de 4D Write suportadas em documentos 4D Write Pro, veja a seção *Importar documentos 4D Write*  
   * Se deseja importar um documento 4D Write (.4w7 ou .4wt) armazenado no disco, também pode considerar o uso do comando [WP Import document](../commands/wp-import-document.md).
* un parámetro [objeto](# "Estruturas de dados como objetos 4D nativos") que puede ser:  
   * uma range.  
   **WP New** retorna um novo documento criado a partir da range especificada. Note que, se a range não for igual a range completa do documento, só a primeira seção é exportada e bookmarks não são exportadas  
   * um elemento de referência (tabela / fila/ parágrafo / imagem inline / cabeçalho / rodapé/seção/subseção).  
   **WP New** retorna um novo documento contendo só os conteúdos da referência de elementos na parte do corpo (para uma fila, o novo documento vai conter um elemento de tabela com a fila).  
   * um documento 4D Write Pro.  
   **WP New** vai retornar uma cópia do documento especificado.  
   * um documento 4D Write Pro

Como padrão, expressões HTML inseridas em documentos 4D WRite legados não são importados (não têm compatibilidade com 4D Write Pro). Se passar a constante wk import html expressions as text no parâmetro *opção*, expressões HTML serão importadas como texto raw entre as tags *##htmlBegin##* e *##htmlEnd##* \-- que exigirá depois ações de formatação. Por exemplo:

```RAW
##htmlBegin##Imported titlebold##htmlEnd##
```

Nota de compatibilidade: Folhas de estilo de caracteres em documentos 4D Write "legado" usam um mecanismo proprietário, que não é mais compatível com o 4D Write Pro. Para obter os melhores resultados de textos importados, atributos de folha de estilo são convertidos para atributos de estilo "hard coded". Folhas de estilo caractere "legado" não são importadas e não são mais referenciadas no documento.

#### Exemplo 1 

Deseja criar um objeto 4D Write Pro vazio:

```4d
 myWPObject:=WP New
```

#### Exemplo 2 

Se quiser criar um novo objeto 4D Write Pro além de um documento 4D Write Pro armazenado em disco :

```4d
 var $BlobDoc : Blob
 C_OBJET(myWPArea)
 DOCUMENT VERS BLOB("myDoc.4wp";$BlobDoc) //carrega o documento a partir de um Blob
 myWPArea:=WP Nouveau($BlobDoc)
```

#### Exemplo 3 

Deseja criar um objeto 4D Write Pro que contém uma referência de expressão 4D simples:

```4d
 var myText : Text
 myText:="Today is "
 ST INSERT EXPRESSION(myText;"string(current date;System date long)";ST End text)
 myWPA:=WP New(myText)
```

#### Exemplo 4 

Você deseja inicializar sua área 4D Write Pro com um modelo criado previamente:

```4d
  //Exportar modelo desde uma área existente
 var wpTemplate : Text
 WP EXPORT VARIABLE(myWPArea;wpTemplate;wk web page html 4D)
 
  // Utilizar o modelo para uma nova área
 var myNewWPA : Object
 myNewWPA:=WP New(wpTemplate)
```

#### Exemplo 5 

Se quiser importar um documento armazenado em um campo BLOB do registro atual do anterior plug-in 4D Write em uma área nova 4D Write Pro e manter as expressões HTML:

```4d
 var wpArea : Object
 wpArea=WP New([Templates]Reference_;wk import html expressions as text)
```

#### Exemplo 6 

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

#### Ver também 

[WP Import document](../commands/wp-import-document.md)  
[WP INSERT DOCUMENT](../commands/wp-insert-document.md)  