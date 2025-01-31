---
id: wp-is-font-style-supported
title: WP Is font style supported
slug: /WritePro/commands/wp-is-font-style-supported
displayed_sidebar: docs
---

<!--REF #_command_.WP Is font style supported.Syntax-->**WP Is font style supported**  ( *faixaObj* ; *wpEstiloFonte* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Is font style supported.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| faixaObj | Object | &#8594;  | Faixa do Objeto parse |
| wpEstiloFonte | Integer | &#8594;  | Constante de Estilo de Fonte wk font negrito wk font itálico wk texto subscrito, wk texto estilo linha atravessada |
| Resultado | Boolean | &#8592; | True se qualquer parte de faixaObj suporta wpEstiloFonte, se não False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Is font style supported.Summary-->O novo comando **WP Is font style supported**  devolve True se o estilo *estiloFonteWP* for suportado por alguma parte do texto em *faixaObj*.<!-- END REF-->

Em *ObjAlvo*, pode passar:

* uma faixa ou
* um elemento (tabela / fila / parágrafo / imagem inline / corpo / cabeçalho / rodapé)

Em *estiloFonteWP*, passe uma das seguintes constantes de estilo do tema de constantes "4D Write Pro":

| Constante                 | Tipo   | Valor                | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | ------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk font bold              | Cadeia | fontBold             | Especifica a grossura do texto (depende dos estilos de fonte disponíveis). Valores possíveis:wk true para passar os caracteres selecionados em negrito; com o comando [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk true se devolve se ao menos um caractere selecionado suportar o estilo de fonte negrito.wk false (pré-determinado) para eliminar o estilo de fonte negrito dos caracteres selecionados se houver; com o comando [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk false é retornado sem nenhum dos caracteres selecionados suporta o estilo de fonte negrito.                                                                      |
| wk font italic            | Cadeia | fontItalic           | Define o estilo itálico do texto (depende dos estilos de fonte disponíveis). Valores possíveis:wk true para passar a estilo itálica ou estilo obliquo os caracteres selecionados; com o comando[WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk true se devolve se ao menos um caractere selecionado suportar o estilo de fonte itálica ou obliqua.wk false (pré-determinado) para eliminar o estilo itálica ou oblicua dos caracteres selecionados se houver; com o comando [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk false se devolve se nenhum dos caracteres selecionados suportar o estilo de fonte itálico ou oblíquo.                      |
| wk text linethrough style | Cadeia | textLinethroughStyle | Define estilo de texto riscado (se houver). Valores possíveis:<br/>wk none (pré-determinado): sem efeito riscadowk solid: desenha uma linha sólida atravessando o texto selecionadowk dotted: desenha uma linha pontilhada atravessando o texto selecionadowk dashed:desenha uma linha tracejada atravessando o texto selecionadowk double: desenha uma linha dupla atravessando o texto selecionadowk semi transparent: linha semi transparente no texto selecionado. Pode ser combinado com outro estilo de linhawk word: desenha uma linha apenas em palavras (exclui espaços em branco). Pode ser combinado com outro estilo de linha. |
| wk text underline style   | Cadeia | textUnderlineStyle   | Define o estilo de sublinha (se houver). Valores possíveis:<br/>wk none (pré-determinado) sem sublinhawk solid: desenha uma sublinha sólidawk dotted: desenha uma sublinha pontilhadawk dashed: desenha uma sublinha tracejadawk double: desenha uma sublinha duplawk semi transparent: sublinha semi transparente. Pode ser combinada com outro estilo de linha.wk word: desenha uma sublinha para palavras apenas (exclui espaços em branco). Pode ser combinado com outro estilo de linha.                                                                                                                                              |

Em geral, este comando se oferece para permitir aos desenvolvedores implementar objetos de interface personalizada, como un menu pop-up que oferece opções de estilo baseadas no texto selecionado.
