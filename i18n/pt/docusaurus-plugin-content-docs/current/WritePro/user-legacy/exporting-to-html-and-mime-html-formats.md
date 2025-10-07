---
id: exporting-to-html-and-mime-html-formats
title: Exportar para formatos HTML e MIME HTMLS
displayed_sidebar: docs
slug: /WritePro/exporting-to-html-and-mime-html-formats
---

Documentos 4D Write Pro podem ser exportados para formatos HTML e MIME HTML com os comandos [WP EXPORT DOCUMENT](../commands/wp-export-document) e [WP EXPORT VARIABLE](../commands/wp-export-variable). Use essas tabelas para checar que atributos e funcionalidades 4D Write Pro e são exportados a HTML e MIME HTML. Para uma lista detalhada de atributos, veja *Atributos 4D Write Pro*.

### Atributos comuns 

| **Atributos/funcionalidades**            | **Exportado** | **Comentário** |
| ---------------------------------------- | ------------- | -------------- |
| Clipe fundo                              | sim           |                |
| Cor fundo (para elemento, não caractere) | sim           |                |
| Imagem fundo                             | sim           |                |
| Repetir fundo                            | sim           |                |
| Origem fundo                             | sim           |                |
| Posição fundo                            | sim           |                |
| Largura e altura fundo                   | yes           |                |
| Borda cor                                | sim           |                |
| Borda raio                               | sim           |                |
| Borda estilo                             | sim           |                |
| Borda largura                            | sim           |                |
| Elemento id                              | sim           |                |
| Margem                                   | sim           |                |
| Preenchimento                            | sim           |                |
| Protegido                                | não           |                |
| Folha estilo                             | sim           |                |

### Caracteres 

| **Atributos/Funcionalidades** | **Exportado** | **Comentário**                     |
| ----------------------------- | ------------- | ---------------------------------- |
| Cor fundo                     | sim           |                                    |
| Fonte e estilo fonte          | sim           |                                    |
| Fonte tamanho                 | sim           |                                    |
| Cor tachado                   | não           |                                    |
| Estilo tachado                | parcialmente  | Só sólido é exportado              |
| Superscrito, subscrito        | sim           |                                    |
| Texto cor                     | sim           |                                    |
| Texto sombra                  | sim           |                                    |
| Texto transformar             | parcialmente  | caixa alta pequena não é exportada |
| Cor sublinhado                | não           |                                    |
| Estilo sublinhado             | parcialmente  | Só sólido é exportado              |

### Colunas 

| **Atributos/funcionalidades** | **Exportado** | **Comentário** |
| ----------------------------- | ------------- | -------------- |
| Coluna contagem               | não           |                |
| Coluna cor régua              | não           |                |
| Coluna estilo régua           | não           |                |
| Coluna largura régua          | não           |                |
| Coluna espaçamento            | não           |                |

### Documentos 

| **Atributo/Funcionalidade**  | **Exportado** | **Comentário**                  |
| ---------------------------- | ------------- | ------------------------------- |
| Quebra parágrafo em fórmulas | não           |                                 |
| Documento informação (meta)  | parcialmente  | Só título e tema são exportados |
| Dpi                          | não           |                                 |
| Fonte padrão                 | não           |                                 |
| Cabeçalho e rodapé autofit   | não           |                                 |
| Margem Pagina                | não           |                                 |
| Orientação Página            | não           |                                 |
| Largura/altura página        | não           |                                 |
| Proteção ativada             | não           |                                 |
| Tab separador decimal        | não           |                                 |
| Unidade usuário              | não           |                                 |

### Imagens 

| **Attributos/Funcionalidade**                      | **Exportado** | **Comentário**                                                                   |
| -------------------------------------------------- | ------------- | -------------------------------------------------------------------------------- |
| Texto alternativo                                  | sim           |                                                                                  |
| Alinhamento âncora                                 | parcialmente  | Apenas direita, esquerda, topo ou fundo                                          |
| Âncora embebido                                    | sim           |                                                                                  |
| Ãncora offset                                      | sim           |                                                                                  |
| Âncora origem                                      | parcialmente  | Apenas para container box (bordas da página web)                                 |
| Ãncora a uma única página                          | não           |                                                                                  |
| Âncora a todas as páginas                          | não           |                                                                                  |
| Ancora a todas seções de uma página                | não           |                                                                                  |
| Imagem de funod (e atriutos de fundo relacionados) | sim           |                                                                                  |
| Modo exibição imagem                               | parcialmente  | Se uma imagem tiver uma imagem de fundo, é exportado como ajustada até encaixar. |
| Imagem URL                                         | sim           |                                                                                  |
| Alinhamento Vertical                               | sim           |                                                                                  |

### Caixas de texto 

| **Atributo/Funcionalidade**      | **Exportado** | **Comentário**                                    |
| -------------------------------- | ------------- | ------------------------------------------------- |
| Anchor align                     | sim           |                                                   |
| Anchor embedded                  | sim           | como div                                          |
| Anchor offset                    | sim           |                                                   |
| Anchor origin                    | parcialmente  | Só para a caixa recipiente (bordas da página web) |
| Anchor to a single page          | não           |                                                   |
| Anchor to all pages              | não           |                                                   |
| Anchor to all sections of a page | não           |                                                   |
| Vertical align                   | sim           |                                                   |

### Parágrafos 

| **Atributo/Funcionalidade**                  | **Exportado**                                             | **Comentário**                                                                                  |
| -------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Paradas tabulação absolutas                  | não                                                       |                                                                                                 |
| Depois quebra de coluna\[#tab/sim            | Apenas uma coluna (colunas múltiplas não são compatíveis) |                                                                                                 |
| Direção                                      | sim                                                       |                                                                                                 |
| Altura linha                                 | sim                                                       |                                                                                                 |
| Lista fonte                                  | não                                                       |                                                                                                 |
| Lista imagem                                 | sim                                                       |                                                                                                 |
| Lista imagem altura                          | não                                                       |                                                                                                 |
| Lista número início                          | sim                                                       |                                                                                                 |
| Lista formato string (formato personalizado) | não                                                       |                                                                                                 |
| Lista tipo estilo                            | partially                                                 | formato de Quadrado oco, diamante e trevo não são exportados, grego decimal é o mesmo que grego |
| Min-altura                                   | sim                                                       |                                                                                                 |
| Min-largura                                  | não                                                       |                                                                                                 |
| Nova linha folha estilo                      | não                                                       |                                                                                                 |
| Quebra página depois                         | sim                                                       |                                                                                                 |
| Quebra página dentro                         | sim                                                       |                                                                                                 |
| Quebra seção depois (continuo ou não)        | não                                                       |                                                                                                 |
| Texto alinhamento                            | sim                                                       |                                                                                                 |
| Texto indentação                             | sim                                                       |                                                                                                 |
| Vertical-alinhamento                         | sim                                                       |                                                                                                 |
| Widow and orphan control                     | no                                                        |                                                                                                 |
| Width                                        | yes                                                       |                                                                                                 |

### Elementos de seção e página 

| **Atributo/Funcionalidade**            | **Exportado** | **Comentário**                                                      |
| -------------------------------------- | ------------- | ------------------------------------------------------------------- |
| Subseção Primeira página               | não           |                                                                     |
| Cabeçalhos e rodapés                   | não           |                                                                     |
| Subseções de página esquerda e direita | não           |                                                                     |
| Seções principais                      | não           | Só atributos no nível do documento são exportados para o corpo html |
| Margem página                          | não           |                                                                     |
| Orientação página                      | não           |                                                                     |

### Tabelas 

| **Atributo/Funcionalidade**                                 | **Exportado** | **Comentário**                                            |
| ----------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| Background image (imagem de fundo e atributos relacionados) | sim           |                                                           |
| Column break after                                          | sim           | Apenas uma coluna (colunas múltiplas não são compatíveis) |
| Horizontal alignment                                        | sim           |                                                           |
| Page break after                                            | sim           |                                                           |
| Page break inside                                           | sim           |                                                           |
| Section break after                                         | não           |                                                           |
| Bottom carry-over rows                                      | não           |                                                           |

### Células tabela 

| **Atributo/Funcionalidade**                                | **Exportado** | **Comentário** |
| ---------------------------------------------------------- | ------------- | -------------- |
| Background image (imagem de fundo e atribuos relacionados) | sim           |                |
| Height                                                     | sim           |                |
| Vertical align                                             | sim           |                |
| Width                                                      | sim           |                |

### Linhas Tabela 

| **Atributo/Funcionalidade**                                       | **Exportado** | **Comentário**                                            |
| ----------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| Background image (Imagem de fundo e funcionalidades relacionadas) | sim           |                                                           |
| Column break after                                                | yes           | Apenas uma coluna (colunas múltiplas não são compatíveis) |
| Height                                                            | sim           |                                                           |
| Page break after                                                  | sim           |                                                           |

### Outras funcionalidades 

| **Atributo/Funcionalidade**  | **Exportado** | **Comentário**                        |
| ---------------------------- | ------------- | ------------------------------------- |
| 4D formulas                  | no            | Computado e congelado para exportação |
| 4D method links              | não           |                                       |
| Bookmarks and bookmark links | sim           |                                       |
| URL links                    | sim           |                                       |