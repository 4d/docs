---
id: read-picture-file
title: READ PICTURE FILE
slug: /commands/read-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.READ PICTURE FILE.Syntax-->**READ PICTURE FILE** ( *nomeArquivo* ; *imagem* {; *} )<!-- END REF-->
<!--REF #_command_.READ PICTURE FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArquivo | Text | &#8594;  | Nome ou rota completa do arquivo a ser lido, ou string vazio |
| imagem | Picture | &#8592; | Campo ou variável que recebe a imagem |
| * | Operador | &#8594;  | Se passado = aceitar qualquer tipo de arquivo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.READ PICTURE FILE.Summary-->O comando READ PICTURE FILE  permite abrir a imagem guardada no arquivo do disco *nomeArquivo* e carregá-la no campo ou variável 4D *imagem*.<!-- END REF-->

Pode passar em *nomeArquivo* a rota de acesso completa do arquivo a ler, ou unicamente o nome do arquivo. Se só passa o nome do arquivo, o arquivo será localizado junto ao arquivo de estrutura do banco. Em Windows, igualmente deve indicar a extensão do arquivo.

Se passa uma cadeia vazia ("") em *nomeArquivo*, aparece a caixa de diálogo padrão de abertura de arquivos, permitindo ao usuário selecionar o arquivo a ser lido, assim como os formatos disponíveis. 

Pode obter a lista de formatos disponíveis com a ajuda do comando [PICTURE CODEC LIST](picture-codec-list.md "PICTURE CODEC LIST").

Passe em *imagem* a variável ou o campo imagem que deva receber a imagem lida.

**Nota:** O formato interno da imagem se armazena dentro da variável ou campo 4D. 

Se passar o parâmetro opcional \*, o comando aceitará qualquer tipo de arquivo. Isso significa que você pode trabalhar com imagens sem necessariamente ter os codecs adequados (ver a descrição do comando [BLOB TO PICTURE](blob-to-picture.md)).

#### Variáveis e conjuntos do sistema 

Se a execução do comando é correta, a variável sistema Document contém a rota de acesso completa ao arquivo aberto e a variável sistema OK toma o valor 1\. Do contrário, OK toma o valor 0.

#### Ver também 

[BLOB TO PICTURE](blob-to-picture.md)  
*Imagens*  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  