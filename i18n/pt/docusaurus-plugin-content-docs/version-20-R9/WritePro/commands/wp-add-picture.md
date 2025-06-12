---
id: wp-add-picture
title: WP Add picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Add picture.Syntax-->**WP Add picture** ( *wpDoc* {; *picture*} ) : Object<br/>**WP Add picture** ( *wpDoc* {; *picturePath*} ) : Object<br/>**WP Add picture** ( *wpDoc* {; *pictureFileObj*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Add picture.Params-->

| Parâmetro      | Tipo                     |                             | Descrição                                                         |
| -------------- | ------------------------ | --------------------------- | ----------------------------------------------------------------- |
| wpDoc          | Object                   | &#8594; | Documento 4D Write Pro                                            |
| picture        | Imagem                   | &#8594; | Imagem 4D                                                         |
| picturePath    | Text                     | &#8594; | Caminho da imagem                                                 |
| pictureFileObj | 4D. File | &#8594; | Objeto 4D.File representando um arquivo de imagem |
| Resultado      | Object                   | &#8592; | Objeto referenciando a imagem                                     |

<!-- END REF-->

## Descrição

O comando **WP Adicionar imagem** <!--REF #_command_.WP Adicionar imagem. ummary--> ancora a imagem passada como parâmetro em um local fixo dentro do *wpDoc* especificado e retorna sua referência.<!-- END REF--> A referência retornada pode ser passada para o comando [WP SET ATTRIBUTES](wp-set-attributes.md) para mover a imagem para qualquer local em *wpDoc* (página, seção, cabeçalho, rodapé, etc.) com uma camada, tamanho, etc.

Em *wpDoc*, passe o nome de um objeto documento 4D Write Pro.

Para o segundo parâmetro opcional, você também pode passar:

- Em *picture*:  uma imagem 4D
- Em *picturePath*: Uma string contendo um caminho para um arquivo de imagem armazenado no disco (sintaxe do sistema). Você pode passar um nome completo ou um nome de caminho relativo ao arquivo de estrutura de banco de dados. Você também pode passar um nome de arquivo, neste caso o arquivo deve estar localizado ao lado do arquivo de estrutura de banco de dados. Se você passar um nome de arquivo, você precisará indicar a extensão do arquivo.
- Em *PictureFileObj*: um objeto `4D.File` que representa um arquivo imagem.

:::note

Qualquer formato imagem [suportado por 4D](../../FormEditor/pictures.md#native-formats-supported) pode ser usado. Você pode obter a lista de formatos de imagens disponíveis usando o comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Se a imagem encapsular vários formatos (codecs), 4D Write Pro apenas mantém um formato para exibição e um formato para impressão (se diferente) no documento; os "melhores" formatos são selecionados automaticamente.

:::

- Se a *imagem* for omitida, uma referência de imagem válida é retornada, e uma imagem vazia é adicionada. Isto permite que você chame [WP SET ATTRIBUTES](wp-set-attributes.md) com o seletor wk image expression para preencher a imagem com uma expressão 4D. Se a expressão não puder ser avaliada ou não retornar uma imagem válida, uma imagem vazia (imagem preta padrão) é exibida.

Por padrão, a imagem adicionada é:

- Incorporado por trás do texto
- Exibido no canto superior esquerdo da caixa de papel
- Exibido em todas as páginas

O local, camada (inline, front-behind de texto), visibilidade e quaisquer propriedades da imagem podem ser modificadas usando o comando [WP SET ATTRIBUTES](wp-set-attributes.md) ou através de ações padrão (veja *Usando ações 4D Write Pro padrão*).

**Nota:** o comando [WP Selection range](../commands-legacy/wp-selection-range.md) retorna um objeto *referência de imagem* se uma imagem ancorada for selecionada e um objeto *alcance* se uma imagem em linha for selecionada. Você pode determinar se um objeto selecionado é um objeto de imagem verificando o atributo `wk type`:

- **Value = 2**: o objeto selecionado é um objeto imagem.
- **Value = 0**: o objeto selecionado é um objeto intervalo.

## Exemplo 1

Se quiser adicionar uma imagem com configurações padrão usando um caminho de arquivo.

```4d
 var $obPict : Object
 $obPict:=WP Add picture(myDoc;"/PACKAGE/Pictures/Saved Pictures/Sunrise.jpg")
```

O resultado é:

![](../../assets/en/WritePro/commands/pict3617325.en.png)

## Exemplo 2

Você quer adicionar uma imagem redimensionada, centralizada e ancorada ao cabeçalho:

```4d
 var $obImage : Object
 var $myPictureFile : 4D.File

 $myPictureFile:=File("/PACKAGE/Pictures/Saved Pictures/Sunrise.jpg")
 $obImage:=WP Add picture(myDoc;$myPictureFile)
 WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)
 WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)
 WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)
 WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")
```

O resultado é:

![](../../assets/en/WritePro/commands/pict3617351.en.png)

## Exemplo 3

Se quiser usar uma expressão de campo para adicionar uma imagem ancorada para um documento que exibe algum texto da base de dados:

```4d
 QUERY([Flowers];[Flowers]Common_Name="tulip")
 WP SET TEXT(myDoc;[Flowers]Description;wk append) //inserir texto
 var $obImage : Object
 $obImage:=WP Add picture(myDoc)
 WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))
```

![](../../assets/en/WritePro/commands/pict3841719.en.png)

## Veja também

[WP DELETE PICTURE](../commands-legacy/wp-delete-picture.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)