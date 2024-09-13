---
id: vp-convert-to-picture
title: VP Convert to picture
---

<!-- REF #_method_.VP Convert to picture.Syntax -->

**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

| Parâmetro  | Tipo   |                             | Descrição                                        |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------ | ---------------- |
| vpObject   | Object | ->                          | Objeto 4D View Pro que contém a área a converter |                  |
| rangeObj   | Object | ->                          | Objeto intervalo                                 |                  |
| Resultados | Imagem | <- | Imagem SVG da área                               | <!-- END REF --> |

#### Descrição

O comando `VP Convert to picture` <!-- REF #_method_.VP Convert to picture.Summary -->converte o objeto *vpObject* do 4D View Pro (ou o intervalo *rangeObj* dentro de *vpObject*) em uma imagem SVG<!-- END REF -->.

Este comando é útil, por exemplo:

- para incorporar um documento 4D View Pro em outro documento, como um documento 4D Write Pro
- para imprimir um documento do 4D View Pro sem ter que carregá-lo em uma área do 4D View Pro.

Em *vpObject*, passe o objeto 4D View Pro que você deseja converter. This object must have been previously parsed using [VP Export to object](vp-export-to-object.md) or saved using [VP EXPORT DOCUMENT](vp-export-document.md).

> SVG conversion process requires that expressions and formats (cf. [Cell Format](../configuring.md#cell-format)) included in the 4D View Pro area be evaluated at least once, so that they can be correctly exported. Se você converter um documento que não foi avaliado anteriormente, as expressões ou os formatos poderão ser renderizados de forma inesperada.

Em *rangeObj*, passe um intervalo de células a ser convertido. Por padrão, se esse parâmetro for omitido, todo o conteúdo do documento será convertido.

O conteúdo do documento é convertido com relação aos seus atributos de visualização, incluindo formatos (veja a observação acima), visibilidade de cabeçalhos, colunas e linhas. Há suporte para a conversão dos seguintes elementos:

- Texto: estilo / fonte / tamanho / alinhamento / orientação / rotação / formato
- Fundo da célula: cor / imagem
- Borda das células: espessura / cor / estilo
- Fusão de células
- Imagens
- Altura da linha
- Largura da coluna
- Colunas/linhas ocultas.

> A visibilidade da linha quadriculada depende do atributo definido no documento com[VP SET PRINT INFO](vp-set-print-info.md).

#### Resultado

O comando devolve uma imagem em formato SVG.

#### Exemplo

Pretende converter uma área 4D View Pro em SVG, pré-visualizar o resultado e enviá-lo para uma variável imagem:

```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //exportar toda a área
```

#### Veja também

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
