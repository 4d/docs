---
id: wp-import-document
title: WP Import document
slug: /WritePro/commands/wp-import-document
displayed_sidebar: docs
---

<!--REF #_command_.WP Import document.Syntax-->**WP Import document** ( *rotaArquivo* {; *opção*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Import document.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaArquivo | Text | &#8594;  | Rota a um documento 4D Write (.4w7 ou .4wt) ou um documento 4D Write Pro (.4wp) |
| opção | Integer, Object | &#8594;  | Opção de importação para expressões HTML |
| Resultado | Object | &#8592; | Objeto 4D Write Pro |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WP Import document.Summary-->O comando **WP Import document** \[#descv\] converte um documento 4D Write ou 4D Write Pro existente (,4wp, .4w7 ou .4wt) ou documento MS Word (.docx) a um novo objeto 4D Write Pro \[#descv\].<!-- END REF-->

No parâmetro *rotaArquivo*, passe a rota completa de um documento 4D Write armazenado no disco. Os tipos abaixo são compatíveis:

* documentos 4D Write anteriores (.4w7 ou .4wt). Para uma lista detalhada de propriedades 4D Write que são atualmente suportadas em objetos 4D Write Pro, veja a seção *Importar documentos 4D Write*.
* documentos de formato 4D Write Pro (.4wp). Para saber mais sobre o formato de documento 4D Write Pro document format, veja *formato de documento .4wp*.
* documentos em formato .docx. Para saber mais sobre isso, veja *Exportar em formato .docx*.

Deve ser passado uma rota completa, a não ser que o documento esteja localizado no mesmo nível do arquivo de estrutura, em cujo caso você deve passar seu nome.

**Nota:** Se quiser importar um documento armazenado em um campo 4D BLOB, também pode usar o comando [WP New](wp-new.md).

Um erro é retornado se o parâmetro *rotaArquivo* for inválido, ou se o arquivo estiver faltando ou ainda se o formato do arquivo não for compatível.

O parâmetro opcional *opção* permite definir opções de importação para:

* **longint**  
    
Como padrão, expressões HTML inseridos em documentos legados 4D Write não são importados (não há compatibilidade com 4D Write Pro support). Se passar a constante wk import html expressions as text, expressões HTML serão importadas como texto raw dentro das tags *##htmlBegin##* e *##htmlEnd##* \-- que exige ações de formatação depois. Por exemplo:  
    
```RAW  
##htmlBegin##Imported titlebold##htmlEnd##  
```
* **object**  
    
Pode passar um objeto para definir como os atributos a seguir são manejados durante a operação de importação:  
    
    
| **Atributos**           | **Tipo** | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| anchoredTextAreas       | Text     | Para MS Word (.docx) documentos. Especifica como áreas de texto ancoradas são manejadas. Valores disponíveis:<br/><br/> **ancorado (padrão) - áreas de texto ancoradas são tratadas como caixas de texto.** **inline** \- Imagens ancoradas são tratadas como texto inline na posição da âncora. **ignore** (padrão) - áreas de texto ancorado são ignoradas. **Nota**: o layout e o número de páginas no documento podem mudar. Veja *Como importar .docx*                                                                                                                                                                               |  
| anchoredImages          | Text     | Apenas para documentos MS Word (.docx) apenas. Especifica como imagens ancoradas são manejadas. Valores possíveis:<br/><br/> **all** (padrão) - todas as imagens ancoradas são importadas como imagens ancoradas. Qualquer imagem com quebra de texto é importada como imagem inline. **ignoreWrap** \- Imagens ancoradas são importadas, mas qualquer quebra de texto ao redor da imagem é ignorado. **ignore** \- Imagens ancoradas não são importadas.                                                                                                                                                                                 |  
| sections                | Text     | Apenas para documentos MS Word (.docx). Especifica como seções são manejadas. Valores possíveis:<br/><br/> **all** (padrão) - Todas as sessões são importadas. Sessões contínuas, pares, ímpares são convertidas para sessões padrão. **ignore** \- Seções são convertidas para seções padrão 4D Write Pro (layout A4 retrato sem cabeçalho ou rodapé). **Nota**: todas as quebras de seção são convertidas para quebras de página exceto quebras de seção contínua que são ignoradas.                                                                                                                                                    |  
| fields                  | Text     | Apenas para documentos MS Word (.docx). Especifica como campos .docx que não podem ser converitods a fórmulas 4D Write Pro são manejados. Valores disponíveis:<br/><br/> **ignore** \- campos .docx são ignorados. **label** \- referências de campo .docx são importadas como etiquetas dentro de colchetes dobros ("{{ }}"). Ex: O campo "ClientName" poderia ser importado como {{ClientName}}. **value** (padrão) - o último valor computado para o campo .docx (se disponível) como importado. **Nota**: se um campo .docx correspondente a uma variável 4D Write Pro, o campo é importado como uma fórmula e essa opção é ignorada. |  
| borderRules             | Text     | Apenas para documentos MS Word (.docx). Especifica como bordas de parágrafo são manejadas. Valores disponíveis:<br/><br/> **collapse** \- formatação de parágrafo é modificada para imitar automaticamente bordas colapsadas. Note que a propriedade colapso só funciona durante a operação de importação. Se uma folha de estilo com uma configuração automática de colapso de borda é reaplicada depois da operação de importação, então a configuração é ignorada. **noCollapse** (padrão) - Formatação de parágrafo não é modificada.                                                                                                 |  
| preferredFontScriptType | Text     | Apenas para documentos MS Word (.docx). Especifica o corpo tipográfico a usar quando diferentes tipos estiverem definidos para uma mesma fonte em OOXML. Valores disponíveis:<br/><br/> **latin** (padrão) - script Latino **bidi** \- script bidirecional. Adequado se o documento for principalmente texto bidirecional da esquerda para a direita (left-to-right -LTR) ou direita para a esquerda (RTL) (por exemplo em árabe ou hebraico). **eastAsia** \- Script para leste asiático. Adequado se seu documento estiver majoritariamente em textos asiáticos.                                                                        |  
| htmlExpressions         | Text     | Apenas para documentos 4D Write (.4w7). Especifica como as expressões HTML são manejadas. Valores disponíveis: <br/><br/> **rawText** \- Expressões HTML são importadas como texto raw dentro das tags ##htmlBegin## e ##htmlEnd## **ignore** (padrão) - expressões HTML são ignoradas.                                                                                                                                                                                                                                                                                                                                                   |  
| importDisplayModeTexto  |          | Só para documentos 4D Write (.4w7). Especifica como se gerencia a visualização da imagem. Valores disponíveis:<br/><br/> legacy - o modo de visualização da imagem 4W7 se converte utilizando uma imagem de fundo se for diferente da escala de ajuste. noLegacy (predeterminado): o modo de visualização da imagem 4W7 se converte no atributo imageDisplayMode se for diferente da escala de ajuste.                                                                                                                                                                                                                                    |

**Nota de Compatibilidade:** 

* *As folhas de estilo de caracteres em documentos herdados de 4D WRite usam um mecanismo patenteado, que não é compatível mais com 4D Write Pro. Para obter os melhores resultados para textos importados, atributos de folha de estilo devem ser convertidos para atributos de estilo "hard coded/codificados". Folhas de estilo de caractere "legado" não são importadas e não são mais referenciadas no documento.*
* A *Compatibilidde para importação em formato .docx só é ce* *rtificada para Microsoft Word 2010 ou mais recentes. Versões anteriores, Microsoft Word 2007 especialmente, podem ter problemas na importação*

## Exemplo 1 

```4d
 var WPDoc : Object
 WPDoc:=WP Import document("C:\\documents\\4DWriteDocs\\Letter.4w7")
```

## Exemplo 2 

Se quiser importar um documento .docx e quiser que as bordas do parágrafo estejam colapsadas como estão em MS Word:

```4d
 $options:=New object
 $options.borderRules:="collapse" //colapsa as bordas de parágrafo enquanto converte
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Se quiser importar campos originais .docx como texto (para campos não convertidos para 4D formulas):

```4d
 $options:=New object
 $options.fields:="label" //para campos não convertidos, importa referências campo como texto entre {{ e }}
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Se quiser importar um documento .docx cujo texto é principalmente em japonês:

```4d
 $options:=New object
 $options.preferredFontScriptType:="eastAsia" //força a conversão para scripts fonte eastAsia
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

## Ver também 

[WP New](wp-new.md)  