---
id: set-file-to-pasteboard
title: SET FILE TO PASTEBOARD
slug: /commands/set-file-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET FILE TO PASTEBOARD.Syntax-->**SET FILE TO PASTEBOARD** ( *rotaArquivo* {; *} )<!-- END REF-->
<!--REF #_command_.SET FILE TO PASTEBOARD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaArquivo | Text | &#8594;  | Nome do arquivo ou rota de acesso completa |
| * | Operador | &#8594;  | Se passar = adicionar; se omitido = substituir |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET FILE TO PASTEBOARD.Summary-->O comando SET FILE TO PASTEBOARD adiciona a área de transferência à rota de acesso completa do arquivo passada no parâmetro *arquivo*.<!-- END REF--> Este comando permite criar interfaces permitindo arrastar e soltar objetos 4D aos arquivos no escritório por exemplo.  
  
No parâmetro *arquivo*, pode passar uma rota de acesso completo ou um simples nome de arquivo (sem rota de acesso). No último caso, o arquivo deve estar localizado ao lado do arquivo de estrutura do banco.  
  
O comando admite o asterisco *\** como parâmetro opcional. Automaticamente, quando se omite este parâmetro, o comando substitui o conteúdo da área de transferência pela última rota de acesso definida por *arquivo*. Se passa este parâmetro, o comando adiciona o *arquivo* a área de transferência Desta forma pode conter uma "pilha" de rotas de acesso de arquivos. Em ambos os casos, se apagam os dados diferentes as rotas de acesso que estejam na área de transferência.  

**Nota:** a área de transferência está em modo apenas leitura durante o evento de formulário On Drag Over. Portanto não é possível utilizar este comando nesse contexto.

#### Ver também 

[Get file from pasteboard](get-file-from-pasteboard.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 975 |
| Thread-seguro | &cross; |


