---
id: wp-insert-picture
title: WP Insert picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert picture.Syntax-->**WP Insert picture** ( *targetObj* ; *picture* ; *mode* {; *rangeUpdate*} ): Object<br/>**WP Insert picture** ( *targetObj* ; *pictureFileObj*; *mode* {; *rangeUpdate*}): Object<!-- END REF-->

<!--REF #_command_.WP Insert picture.Params-->

| Parâmetro      | Tipo                     |                             | Descrição                                                                 |
| -------------- | ------------------------ | --------------------------- | ------------------------------------------------------------------------- |
| targetObj      | Object                   | &#8594; | Intervalo ou elemento ou documento 4D Write Pro                           |
| picture        | Imagem                   | &#8594; | Campo de imagem ou variável, ou caminho para o arquivo de imagem no disco |
| pictureFileObj | 4D. File | &#8594; | Um objeto de arquivo representando um arquivo de imagem.  |
| mode           | Integer                  | &#8594; | Modo de inserção                                                          |
| rangeUpdate    | Integer                  | &#8594; | Modo de atualização de intervalo                                          |
| Resultado      | Object                   | &#8592; | Objeto referenciando a imagem                                             |

<!-- END REF-->

## Descrição

O comando **WP Insert picture** <!--REF #_command_.WP Insira a imagem. ummary--> insere uma *imagem* ou um *pictureFileObj* no *targetObj* especificado de acordo com os parâmetros *modo* de inserção passada e *rangeUpdate*, e retorna uma referência ao elemento imagem. !-- FIM REF--> A imagem será inserida como um caractere no *targetObj*.

Em *targetObj*, pode-se passar:

- Um intervalo
- Um elemento (tabela / linha / parágrafo / corpo / cabeçalho / rodapé / imagem em linha / seção / subseção)
- Um documento 4D Write Pro

Para o segundo parâmetro, você também pode passar:

- Em *picture*:
  - Um campo de imagem ou variável
  - Uma string que contém um caminho para um arquivo de imagem armazenado no disco, na sintaxe do sistema.
    Se você usar uma string, você poderá passar um nome completo ou um nome de caminho relativo ao arquivo de estrutura do banco de dados. Você também pode passar um nome de arquivo, neste caso o arquivo deve estar localizado ao lado do arquivo de estrutura de banco de dados. Se você passar um nome de arquivo, você deve indicar a extensão do arquivo.
- Em *pictureFileObj*: um objeto `File` que representa um arquivo imagem.

Qualquer formato imagem [suportado por 4D](../../FormEditor/pictures.md#native-formats-supported) pode ser usado. Você pode obter a lista de formatos de imagens disponíveis usando o comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Se a imagem encapsular vários formatos (codecs), 4D Write Pro apenas mantém um formato para exibição e um formato para impressão (se diferente) no documento; os "melhores" formatos são selecionados automaticamente.

No parâmetro *modo*, passe uma das seguintes constantes para indicar o modo de inserção a ser usado na imagem no documento:

| Parâmetros | Tipo    | Valor | Comentário                         |
| ---------- | ------- | ----- | ---------------------------------- |
| wk append  | Integer | 2     | Inserir conteúdo no final do alvo  |
| wk prepend | Integer | 1     | Inserir conteúdo no início do alvo |
| wk replace | Integer | 0     | Replace target contents            |

Se *targetObj* for um intervalo, você poderá usar opcionalmente o parâmetro *rangeUpdate* para passar uma das seguintes constantes para especificar se a imagem inserida está ou não incluída no intervalo resultante:

| Parâmetros            | Tipo    | Valor | Comentário                                                          |
| --------------------- | ------- | ----- | ------------------------------------------------------------------- |
| wk exclude from range | Integer | 1     | Imagem não incluída no intervalo atualizado                         |
| wk include in range   | Integer | 0     | Imagem incluída no intervalo atualizado (padrão) |

Se você não passar um parâmetro *rangeUpdate*, por padrão a imagem inserida é incluída no intervalo resultante.

- Se *targetObj* não for um intervalo, *rangeUpdate* será ignorado.

## Exemplo 1

No exemplo a seguir, um usuário seleciona a imagem que deseja inserir no objeto de intervalo e será avisado se não for possível inserir essa imagem:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //pede ao usuário para escolher uma imagem no disco que queiram inserir
 $imgRef:=Open document("")
  //sse usuário não cancelar
 If(OK=1)
  //se o arquivo não for um arquivo de imagem compatível
    If(Is picture file(document))
  // insere imagem selecionado pelo usuário
       WP Insert picture($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //se a inserção falhar, alerteo usuário
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## Exemplo 2

Se quiser inserir uma imagem no corpo da documentação:

```4d
var $file : 4D.File
var $pictRef : Object

$file:=File("/RESOURCES/NovelCover1.jpg")

WParea:=WP New
$pictRef:=WP Insert picture(WParea; $file; wk replace)

```

## Veja também

[WP Insert document body](wp-insert-document-body.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)