---
id: is-picture-file
title: Is picture file
slug: /commands/is-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.Is picture file.Syntax-->**Is picture file** ( *viaArquivo* {; *} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Is picture file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| viaArquivo | Text | &#x1F852; | Rota do arquivo |
| * | Operador | &#x1F852; | Validar os dados |
| Resultado | Boolean | &#x1F850; | True = rotaArquivo indica um arquivo de imagem; de outro modo, False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is picture file.Summary-->O comando Is picture file prova o arquivo designado pelo parâmetro *rotaArquivo* e devolve True se for um arquivo de imagem válido.<!-- END REF--> O comando devolve False se o arquivo não for de tipo imagem ou se não for encontrado.   
  
Passe no parâmetro *rotaArquivo* a rota de acesso do arquivo imagem a provar. A rota deve ser expressa com a sintaxe do sistema. Pode passar uma rota de acesso absoluta ou relativa ao arquivo de estrutura do banco. Se passa uma string vazia (""), o comando devolve False.   
  
Se não passa o parâmetro *\**, o comando prova o arquivo buscando sua extensão na lista de codecs disponíveis. Se quer provar os arquivos sem extensões ou efetuar uma verificação mais exaustiva, passe o parâmetro \*. Neste caso, o comando faz provas adicionais: carrega e inspeciona o cabeçalho do arquivo e interroga os codecs com o fim de validar a imagem. Esta sintaxe atrasa a execução de comandos.  
  
**Nota**: o comando devolve True para os arquivos PDF em Windows e arquivos EMF em Mac OS.

#### Ver também 

[PICTURE CODEC LIST](picture-codec-list.md)  