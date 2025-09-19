---
id: importing-and-exporting-in-docx-format
title: Exportar em formato docx
displayed_sidebar: docs
---

#### 

4D Write Pro pode importar e exportar documentos no formato .docx. Esse formato é compatível com aplicações de processamento de texto como Microsoft Word.  
  
**Nota de compatibilidade:** a compatibilidade para documentos 4D Write Pro exportados em formato .docx só está certificado para Microsoft Word 2010 e versões posteriores. As versões anteriores, em particular Microsoft Word 2007, podem ter problemas para abrir os documentos.

#### Como importar .docx 

Os documentos no formato .docx podem ser importados com 4D Write Pro com o comando [WP Import document](../commands/wp-import-document). Para mais informações veja a descrição do comando.

##### Mudanças de comportamenot 

Se a maioria dos parâmetros .docx são conservados, certos parâmetros são conhecidos por não terem compatibilidade ou por se comportarem diferentemente que em 4D Write Pro. Estes são os seguintes parâmetros:

###### Alinhamento / Layout 

| **Configuração**    | **Descrição**                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Anchored text areas | áreas de texto ancoradas não são compatíveis. O conteúdo pode ser ignorado ou importado como texto inline (opção a estabelecer quando usar o comando [WP Import document](../commands/wp-import-document)). Só áreas de texto simples podem ser importadas. Áreas de texto ancoradas com texto ao redor ou com texto inline são ancoradas na layer superior. |
| Paragraph layout    | Só layouts de texto ocidental são compatíveis. Estilo de parágrafos distribuidos, tailandês e asiático não são compatíveis.                                                                                                                                                                                                                                  |
| Page Size           | Tamanhos de página diferentes não são compatíveis. Só o tamanho da página da primeira seção é importado.                                                                                                                                                                                                                                                     |

###### Background/Fundo 

| **Configurações** | **Descrição**  |
| ----------------- | -------------- |
| Watermark         | Não compatível |

###### Expressões 

| **Configuração**  | **Descrição**                                |
| ----------------- | -------------------------------------------- |
| MS Word equations | Não compatível. Os datos não são importados. |
| MS Word charts    | Não compatível. Os dados não são importados. |

###### Listas 

| **Configuração**    | **Descrição**                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Listas hierárquicas | As listas multiniveles não são suportadas. As listas multinível são convertidas em listas de um só nível, por isso o aspecto da lista ou a numeração podem ser diferentes |

###### Pictures / Imagens 

| **Configuração**     | **Descrição**                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| DrawingML shapes     | Só imagens simples DrawingML (inline ou ancoradas) são importadas. Formas complexas DrawingML não são compatíveis.                      |
| VML shapes or images | Não compatível. VML está obsoleto em MS Word e não deveria ser usado em documentos criados com MS Word 2010 ou anteriores.              |
| 3D models            | Não compatível, entretando a última imagem 2D renderizada ou o último modelo 3D renderizado podem ser importados se presentes no .docx. |
| SmartArt             | Não compatível.                                                                                                                         |

###### Referências/ Review 

| **Configuração** | **Descrição**                             |
| ---------------- | ----------------------------------------- |
| Comments         | Não compatível. Conteúdo não é importado. |
| Footnotes        | Não compatível. Conteúdo não é importado. |

###### Spacing 

| **Configuração**        | **Descrição**                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| "At least" line spacing | Não compativel. Espaçamento de linha "At least" é converitdo para espaçamento de linha fixo (simples). |
| Fit text                | Não compativel.. O estilo normal 4D Write Pro é usado.                                                 |

###### Tabelas 

| **Configurações** | **Descrição**                                         |
| ----------------- | ----------------------------------------------------- |
| Tables            | Tabelas contíguas não são fusionadas automaticamente. |

###### Texto 

| **Configuração** | **Descrição**                                                                                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Themes           | Temas texto não são importados. Se uma definição de cor ou fonte referenciar uma cor ou fonte em um tema, a última cor ou fonte computada serão usadas. Senão, a cor ou fonte definida no tema será usada. |

##### Importar histórico 

Quando importar o formato .docx em um 4D Write Pro, um objeto log histórico é criado e incluido com o objeto documentos importados. Esse objeto pode ser encontrado com o atributo "importLog" (ou a constante wk import log)

```4d
 $myDoc:=WP Import document("test.docx")
 if($myDoc#Null)
    var $log : Object
    $log:=$myDoc[wk import log]
 End if
```

O objeto import log contém as propriedades abaixo:

| Constante     | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk import log | Objeto Log contendo informação sobre a operação de importação .docx. Propriedades são de apenas leitura e não podem ser estabelecidas: <table> <tbody> <tr> <td>**Propriedade**</td> <td> </td> <td>**Tipo**</td> <td>**Descrição**</td> </tr> <tr> <td>status</td> <td> </td> <td>Text</td> <td>Estado da importação:<br/> successo - o documento é importado em 4D Write Pro erro - um documento 4D Write Pro é retornado  </td> </tr> <tr> <td>developer</td> <td> </td> <td>Collection</td> <td>Coleção de objetos mensagem para desenvolvedores 4D Write Pro.</td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Text</td> <td>O tipo de mensagem arquivada:<br/> informação avisos erros  </td> </tr> <tr> <td> </td> <td>\[ \].message</td> <td>Text</td> <td>Mensagem sobre a operação de importação.</td> </tr> <tr> <td>user</td> <td> </td> <td>Collection</td> <td>Coleção de objetos mensagem para usuários 4D Write Pro.</td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Text</td> <td>O tipo de mensagem arquivada:<br/> informação aviso  </td> </tr> <tr> <td> </td> <td>\[ \].messageShort</td> <td>Text</td> <td>Mensagem curta sobre a operação de importação.</td> </tr> <tr> <td> </td> <td>\[ \].messageLong</td> <td>Text</td> <td>Mensagem longa sobre a operação de importação.</td> </tr> </tbody> </table> **Aviso**:   *importLog* é um atributo personalizado, portanto a wk import log não pode ser usada por os comandos [WP SET ATTRIBUTES](../commands/wp-set-attributes), [WP GET ATTRIBUTES](../commands/wp-get-attributes) ou [WP RESET ATTRIBUTES](../commands/wp-reset-attributes) (para mais informações, veja *Usar atributos personalizáveis*). |

#### Como exportar em formato .docx 

Os objetos 4D Write Pro oferecem duas formas de exportar documentos 4D Write Pro ao formato .docx:

* para exportar um arquivo .docx ao disco; utilize o comando [WP EXPORT DOCUMENT](../commands/wp-export-document).
* para exportar um arquivo .docx a uma variável BLOB; utilize o comando [WP EXPORT VARIABLE](../commands/wp-export-variable).
Para saber mais, consulte a descrição destes comandos.

##### Mudanças de comportamento 

Mesmo que a maioria das configurações de 4D Write Pro são conservadas, algumas configurações não são compatíveis ou se comportam de maneira diferente em Microsoft Word. Estes são:

###### Alinhamento / Layout 

| **Parâmetro**                                                                                                     | **Parágrafos**                                                                                                                                                                                                                                                                                         | **Seções**                                                                               | **Imagens** |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ----------- |
| Ancoragem                                                                                                         | Em Microsoft Word, as imagens ancoradas são localizadas em relação ao ângulo superior esquerdo da página e do primeiro parágrafo. Isto poderia fazer com que as imagens sejam mostradas em locais diferentes às desejadas devido às diferenças de design de texto entre 4D Write Pro e Microsoft Word. |                                                                                          |             |
| Caixas de texto ancoradas a áreas embebidas não são exportadas. Renderização ode ser diferente em Microsoft Word. |                                                                                                                                                                                                                                                                                                        |                                                                                          |             |
| Alinhação vertical                                                                                                | Não é compatível com Microsoft Word (todos os elementos serão alinhados à parte superior)                                                                                                                                                                                                              | Não compatível para imagens online (todos os elementos serão alinhados com a linha base) |             |

###### Fundo 

| **Configuração**              | **Parágrafos**                                                                                                | **Seções**                                                                                                     | **Imagens**                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Recorte de Fundo              | Não compatível com Microsoft Word (cor de fundo preenche o parágrafo inteiro, não incluindo bordas e margens) | Não compatível com Microsoft Word (clipping de fundo será igual ao padding box)                                |                                                                                                                                             |
| Background image              | Não compatível com Microsoft Word                                                                             | Backgrounds com imagens e cores não compatíveis com Microsoft Word (convertidos a imagens ancoradas ou formas) | Microsoft Word permite ou uma cor de fundo ou uma imagem de fundo. Se uma imagem de fundo for definida, a cor de fundo será "transparente". |
| Repetição de imagens de fundo | "ladrilhos" horizontais ou verticais são convertidos a ladrilhos completos em Microsoft Word                  | "ladrilhos" horizontais ou verticais são convertidos a ladrilhos completos em Microsoft Word                   |                                                                                                                                             |
| Origem de fundo               | Caixa de origem é convertido ao mesmo valor como clipping box de fundo.                                       | Não compatível com Microsoft.                                                                                  |                                                                                                                                             |

###### Bordas 

| **Parâmetro**                       | **Parágrafos**                                                                                                                                                                                                                                  | **Seções**                                                                           | **Imagens** |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------- |
| Cor de borda                        | Microsoft Word não admite diferentes cores de borda para cada linha de borda. A primeira linha de borda de imagem 4D Write Pro definida (nesta ordem: superior, direita, inferior, esquerda) são utilizadas para todas as bordas de uma imagem. |                                                                                      |             |
| Raio da borda (bordas arredondadas) | Não compatíveis com Microsoft Word                                                                                                                                                                                                              |                                                                                      |             |
| Largura da borda                    | O máximo de Microsoft Word é 12pt, as bordas que excedem este tamanho são reduzidas.                                                                                                                                                            | O máximo de Microsoft Word é 12pt, as bordas que excedem este tamanho são reduzidas. |             |

###### Expressões 

| **Configuração** | **Parágrafos**                                                                                                                                                                                                                                                                                           | **Seções** | **Imagens** |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| Expressions      | Apenas expressões simples 4D tais como "Current date" ou "Current time", ou 4D Write Pro variáveis locais reservados ($wp\_title, $wp\_pageNumber, etc.) são convertidos a campos Microsoft Word. Outras expressões 4D são computadas e convertidas a texto ou imagens durante o processo de exportação. |            |             |

###### Listas 

| **Configuração**  | **Parágrafos**                                                                                                             | **Seções** | **Imagens** |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| Indent            | Convertido a 0 para itens de lista\] (indentação de itens de lista é convertido a alinhamento recolhido em Microsoft Word) |            |             |
| Ordered list type | Grego, armênio e Geórgio são convertidos a decimais e Hiragana é convertido a Katakana em Microsoft Word.                  |            |             |

###### Imagens 

| **Configuração** | **Parágrafos**                                                                              | **Seções** | **Imagens** |
| ---------------- | ------------------------------------------------------------------------------------------- | ---------- | ----------- |
| SVG              | Não compatível com Microsoft Word (imagens em formato SVG vai ser convertido a formato PNG) |            |             |

###### Tamanho 

| Configuração             | **Parágrafos**                                                                        | **Seções** | **Imagens** |
| ------------------------ | ------------------------------------------------------------------------------------- | ---------- | ----------- |
| Altura mínima            | Não é compatível com Microsoft Word (altura é gerenciada automaticamente)             |            |             |
| Largura / Largura Mínima | Não é compatível com Microsoft Word (largura de parágrafo é manejada automaticamente) |            |             |

###### Spacing 

| Configuração | **Parágrafos**                                                                            | **Seções**                                                                                | **Imagens** |
| ------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------- |
| Padding      | Máximo de Microsoft Word é 31pts, se o preenchimento exceder esse tamanho, será reduzido. | Máximo de Microsoft Word é 31pts, se o preenchimento exceder esse tamanho, será reduzido. |             |

###### Tabelas 

| **Propriedade**       | **Descrição**    |
| --------------------- | ---------------- |
| Bottom carry-over row | Não é exportado. |

###### Tabulações 

| **Configurações**      | **Parágrafos**                                                                                                                                       | **Seções** | **Imagens** |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| Default tab stop       | Não compatível com Microsoft Word (vai ser conviertido a paradas de tabulação absolutas)                                                             |            |             |
| Tab leading characters | Microsoft Word é compatível com "pontos" (....), "hífens" (----), e "subscrito" (\_\_\_\_), todos os outros caracteres serão convertidos a "nenhum". |            |             |

###### Text 

| **Configuração** | **Parágrafos**                                                                                                          | **Seções**                                                                             | **Imagens** |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------- |
| Linethrough      | Cor de linha diferente da cor de texto não é oferecida por Microsoft Word; apenas estilos sólido e duplo são oferecidos |                                                                                        |             |
| Style Sheets     | Folhas de estilo de parágrafo são convertidos a estilos de parágrafos.                                                  |                                                                                        |             |
| Text align       | Microsoft Word comprime os espaços, de modo que texto justificado pode ser reconfigurado.                               | Microsoft Word comprime espaços, de modo que texto justificado pode ser reconfigurado. |             |
| Text shadow      | 4D Write Pro shadow é convertido ao blur e offset, usando a cor padrão em Microsoft Word.                               |                                                                                        |             |
| Underline        | Sobrelinha Semi-transparente vai ser convertido a sólido.                                                               |                                                                                        |             |