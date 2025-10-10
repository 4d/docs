---
id: importing-4d-write-documents
title: Importar documentos 4D Write
displayed_sidebar: docs
slug: /WritePro/importing-4d-write-documents
---

Uma das principais funcionalidades do novo 4D Write Pro é a capacidade de importar e converter documentos 4D Write Pro existentes. Isto lhe permitirá migrar as aplicações que se baseiam no plug-in 4D Write. 

**Nota de compatibilidade**:

* só os documentos 4D Write da última geração ("4D Write v7") são suportados.
* Copiar-colar de um documento 4D Write document para uma área 4D Write Pro não é suportada no momento. Importar um documento 4D Write pode apenas ser feito usando os comandos de linguagem 4D Write Pro.
* Retornos de carro (CR) em fórmulas se comportam diferente em 4D Write do que em 4D Write Pro. Em 4D Write, eles sempre são interpretados como quebras de parágrafo, mas em 4D Write Pro são interpretados como quebras de linha por padrão. Para manter CR em fórmulas como quebras de parágrafos em documentos importados 4D Write, depois da conversão, use:  
```4d  
 WP SET ATTRIBUTES(wp;wk break paragraphs in formulas;wk true)  
```  
    
Para saber mais veja *Gestão de fórmulas*.

## Como importar um documento 4D Write 

Os objetos 4D Write Pro oferecem duas maneiras de importar documentos 4D Write:

* Para os arquivos 4D Write Pro armazenados no disco, se utiliza o comando [WP Import document](../commands/wp-import-document),
* Para as áreas 4D Write armazenadas em campos BLOB, se utiliza o comando [WP New](../commands/wp-new).

Para mais informação, consulte a descrição destes comandos.

## Que propriedades se conservam de 4D Write? 

Para facilitar a migração desde o plug-in 4D Write a 4D Write Pro, queremos suportar tantas funcionalidades 4D Write como seja possível em objetos 4D Write Pro.

Este parágrafo mostra as propriedades do plug-in 4D Write que se recuperam em uma área 4D Write Pro depois de uma importação com os comandos [WP Import document](../commands/wp-import-document) ou [WP New](../commands/wp-new). 

Tenha em conta no entanto, que há algumas diferenças, que não se consideram como bugs. Isto deve ser, por exemplo, a fonte pré determinada utilizada em 4D Write Pro para vinhetas, ou pequenas conversões no tipo Sublinhado.

### Informação do documento 

| **Plug-in** **4D Write** | **4D Write Pro**                                          |
| ------------------------ | --------------------------------------------------------- |
| Criação data e hora      | Disponível                                                |
| Modificação data e hora  | Disponível                                                |
| Bloqueado                | Não disponível (utilizar a propriedade objeto só leitura) |
| Título                   | Disponível                                                |
| Tema                     | Disponível (só texto plano)                               |
| Autor                    | Disponível                                                |
| Empresa                  | Disponível                                                |
| Notas                    | Disponível                                                |

### Parâmetros de visualização do documento 

| **Plug-in** **4D Write**           | **4D Write Pro**                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| Vista modo página                  | Não importado (utilizar o modo de vista Documento/Página no menu contextual) |
| Vista regras                       | Não disponível                                                               |
| Vista marcos                       | Não disponível                                                               |
| Vista cabeçalho                    | Não disponível                                                               |
| Vista rodapé                       | Não disponível                                                               |
| Vista cabeçalho de primeira página | Não disponível                                                               |
| Vista rodapé de primeira página    | Não disponível                                                               |
| Vista imagens                      | Não disponível                                                               |
| Vista HScrollbar                   | Não importado (utilize a propriedade de objeto deslocável hor.)              |
| Vista VScrollbar                   | Não importado (utilize a propriedade de objeto deslocável vert.)             |
| Vista invisible characters         | Não disponível                                                               |
| Vista referências                  | Não importado (utilize [ST SET OPTIONS](../../commands/st-set-options))      |
| Vista separadores de coluna        | Não disponível                                                               |
| Vista H Splitter                   | Não disponível                                                               |
| Vista V Splitter                   | Não disponível                                                               |
| Vista Wysiwyg                      | Não disponível                                                               |
| Vista zoom                         | Não importado (utilize Document/Zoom no menu contextual)                     |

### Parâmetros do documento 

| **Plug-in** **4D Write** | **4D Write Pro**                                                     |
| ------------------------ | -------------------------------------------------------------------- |
| Unidade                  | Não importado (use unidades de documento/medidas no menu contextual) |
| Linguagem                | Não disponível                                                       |
| Contagem de colunas      | disponível (a partir de v17)                                         |
| Espaço entre colunas     | disponível (a partir de v17)                                         |
| Viúvas e órfãos          | disponível                                                           |
| Aba por padrão           | Disponível                                                           |
| Aba Líder                | Disponível                                                           |
| Cor URL                  | Não disponível                                                       |
| Cor de URL visitado      | Não disponível                                                       |

**Nota:** O separador do sistema (como retornado por [GET SYSTEM FORMAT](../../commands/get-system-format)) é usado como separador decimal para tabulação decimal. Pode mudar esse parâmetro usando o comando [WP SET ATTRIBUTES](../commands/wp-set-attributes). 

### Parâmetros de paginação de documentos 

| **Plug-in** **4D Write**                                          | **4D Write Pro** |
| ----------------------------------------------------------------- | ---------------- |
| Largura de página                                                 | disponível       |
| Altura página                                                     | disponível       |
| Número primeira página                                            | disponível       |
| Primeira página cabeçalho rodapés diferentes                      | disponível       |
| Página cabeçalho Esquerda e direita e rodapé de página diferentes | disponível       |
| Encadernação                                                      | disponível       |
| Páginas opostas                                                   | disponível       |
| Margens página                                                    | Disponível       |
| Cabeçalho margem superior                                         | disponível       |
| Cabeçalho margem inferior                                         | disponível       |
| Rodapé de página margem superior                                  | disponível       |
| Rodapé de página margem inferior                                  | disponível       |
| Primeira página margem superior                                   | disponível       |
| Primeira página margem inferior                                   | disponível       |
| Cabeçalho primeira página margem superior                         | disponível       |
| Cabeçalho primeira página margem inferior                         | disponível       |
| Rodapé de página primeira página margem superior                  | disponível       |
| Rodapé de página primeira página margem inferior                  | disponível       |
| Primeira página é correta                                         | disponível       |

### Parâmetros de impressão de documentos 

| **Plug-in 4D Write** | **4D Write Pro** |
| -------------------- | ---------------- |
| Classe de papel      | Não disponível   |
| Paisagem             | Não disponível   |
| Largura              | Não disponível   |
| Altura               | Não disponível   |
| Margens de usuário   | Não disponível   |
| Escala               | Não disponível   |
| Resolução X          | Não disponível   |
| Resolução Y          | Não disponível   |

### Imagens 

**Notas de compatibilidade**:

Os modos de visualização de imagens são importadas automaticamente a partir de 4D Write Pro v19 R2, utilizando [WP Import document](../commands/wp-import-document). Pode restaurar o comportamento anterior (todas as imagens se escalam para ajuste) utilizando o atributo importDisplayMode.

 Windows imagens com o formato PICT de Mac OS são importadas mas não podem ser geradas em 4D Write Pro . Se quiser importar documentos que contenham imagens desse tipo, deve primeiro converter as imagens para outro formato, Lembre que o formato PICT é obsoleto e não deve mais ser usado (ver ).  
  
| **Plug-in** **4D Write**                      | **4D Write Pro** X (esquerda)                              | (& position :absolute) (para imagens em página unicamente) |
| --------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| Y (acima)                                     | (& position :absolute) (para imagens em página unicamente) |                                                            |
| Largura                                       | Disponível                                                 |                                                            |
| Altura                                        | Disponível                                                 |                                                            |
| Número de página                              | Disponível (a partir de v16 R6)                            |                                                            |
| Atrás                                         | Disponível (a partir de v16 R6)                            |                                                            |
| Não em primeira página                        | Disponível (a partir de v16 R6)                            |                                                            |
| Modo de visualização (escala a ajustar, etc.) | Disponível                                                 |                                                            |
| É uma expressão                               | Disponível para imagens inline(a partir de v16 R5)         |                                                            |
| Conservar o tamanho                           | \]Não importado (automático em 4D Write Pro)l              |                                                            |

### Propriedades de caracteres 

| **Plug-in** **4D Write**                   | **4D Write Pro (span)**          |
| ------------------------------------------ | -------------------------------- |
| Itálica                                    | Disponível                       |
| Negrita                                    | Disponível                       |
| Tachado                                    | Disponível                       |
| Sublinhado                                 | Disponível                       |
| Sombra                                     | Disponível                       |
| Exponente (superscript ou subscript)       | Disponível                       |
| Maiúsculas ou pequenas maiúsculas          | Disponível                       |
| Família de fonte                           | Disponível                       |
| Tamanho de fonte                           | Disponível                       |
| Cor texto                                  | Disponível                       |
| Cor fundo de texto                         | Disponível                       |
| Cor sublinhado                             | Disponível                       |
| Cor tachado                                | Disponível                       |
| Cor sombra                                 | Disponível                       |
| Propriedade usuário                        | Não disponível                   |
| Correção ortográfica (sintaxe e gramática) | Não importada (propriedade área) |
| Aparência                                  | Não disponível                   |
| Folha de estilo                            | Disponível a partir de 4D v18)   |

### Propriedades parágrafos 

| **Plug-in** **4D Write**                 | **4D Write Pro** |
| ---------------------------------------- | ---------------- |
| Justificação                             | Disponível       |
| Interlinear                              | Disponível       |
| Vinhetas                                 | Disponível       |
| Margem esquerda                          | Disponível       |
| Margem direita                           | Disponível       |
| Indentar texto                           | Disponível       |
| Estilo borde linha                       | Disponível       |
| Cor borde linha                          | Disponível       |
| Cor fundo borde                          | Disponível       |
| Borde esquerdo                           | Disponível       |
| Borde direito                            | Disponível       |
| Borde superior e borde interior acima    | Disponível       |
| Borde inferior e borde interior inferior | Disponível       |
| Espaço de borde                          | Disponível       |
| Folha de estilo                          | Disponível       |
| Tabulações                               | Disponível       |

### Hyperlinks 

| **4D Write plug-in** | **4D Write Pro**                            |
| -------------------- | ------------------------------------------- |
| URL link             | Disponível (\*)                             |
| 4D method link       | disponível (\*\*) (a partir de v17 R5)      |
| Open document link   | Disponível (convertido a URL arquivo local) |

* (\*) A partir de 4D v16 R4, URL links são convertidos a atributos editáveis. Para saber mais, veja *Manejar URLs*.
* (\*\*) Precisa adaptar os parâmetros recebidos dentro dos métodos chamados:  

| **Parâmetros** | **4D Write plug-in**                 | **4D Write Pro**                                                                                                                                                                                                                                                                                      |  
| -------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| $1             | Longint - 4D Write area reference    | Text - nome área 4D Write Pro                                                                                                                                                                                                                                                                         |  
| $2             | Text - Link label                    | Object - Link description:.método - Nome do link de método. Deve ser permitido com o comando [SET ALLOWED METHODS](../../commands/set-allowed-methods). .parâmetro - valor de parâmetro de usuário passado ao método (se usado).range - Range da etiqueta de link. ver *Comandos de seleção de faixa* |  
| $3             | Longint - User parameter (methodRef) | \-                                                                                                                                                                                                                                                                                                    |

### Expressões 4D 

| **Plug-in** **4D Write** | **4D Write Pro** |
| ------------------------ | ---------------- |
| Expressão 4D             | Disponível       |
| Data e hora              | Disponível       |
| Expressão HTML           | Não disponível\* |
| Expressão RTF            | Não disponível   |

\*Use o comando [WP SET ATTRIBUTES](../commands/wp-set-attributes) com o atributo wk break paragraphs in formulas para transformar CR (retorno de carro) retornado pelas fórmulas em quebras de parágrafo no documento importado (quebra de linha como padrão). (Ver *Gestão de fórmulas*) 

\*\*pode ser importado como texto entre as tags **##htmlBegin##** e **##htmlEnd##** se usar a constante wk import html expressions as text.

### Dados de texto 

| **Plug-in** **4D Write**  | **4D Write Pro** |
| ------------------------- | ---------------- |
| Dados de texto principais | Disponível       |
| Dados de texto cabeçalho  | Disponível       |
| Dados de texto Rodapé     | Disponível       |