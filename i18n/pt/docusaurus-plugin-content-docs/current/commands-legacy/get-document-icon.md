---
id: get-document-icon
title: GET DOCUMENT ICON
slug: /commands/get-document-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET DOCUMENT ICON.Syntax-->**GET DOCUMENT ICON** ( *rotaDoc* ; *icone* {; *tamanho*} )<!-- END REF-->
<!--REF #_command_.GET DOCUMENT ICON.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaDoc | Text | &#8594;  | Nome ou rota de acesso do documento para recuperar ícone, ou string vazia para caixa de diálogo Abrir Arquivo |
| icone | Picture, Picture | &#8592; | Variavel imagem ou campo |
| tamanho | Integer | &#8594;  | Tamanho da imagem retornada (em pixels) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET DOCUMENT ICON.Summary-->O comando GET DOCUMENT ICON retorna no campo ou a variável imagem 4D ícone, o ícone do documento cujo nome ou rota de acesso se passa em *rotaDoc.<!-- END REF--> rotaDoc* pode especificar um arquivo de todo tipo (executável, documento, atalho ou alias, etc.) ou uma pasta.  

Passe em *rotaDoc* a rota de acesso absoluta do documento. Igualmente, pode passar unicamente o nome do documento ou rota de acesso relativa, neste caso o documento deve ser encontrado no diretório atual da banco (geralmente, a pasta que contém o arquivo de estrutura da banco).

Se passa uma string vazia em *rotaDoc*, aparece a caixa de diálogo padrão de abertura de arquivos, permitindo ao usuário selecionar o arquivo a ser lido. Quando tiver validada a caixa de diálogo, a variável sistema Document contém a rota de acesso completa do arquivo selecionado.  
  
Passe em *ícone* um campo ou uma variável imagem 4D. Depois da execução do comando, este parâmetro contém o ícone do arquivo (formato PICT).  
  
O parâmetro opcional *tamanho* permite indicar as dimensões em píxels do ícone. Este valor representa o comprimento do quadrado incluindo o ícone. Geralmente, os ícones são definidos de 32x32 píxels (“ícones longos”) ou 16x16 píxels (“ícones pequenos”). Se passa 0 ou omite este parâmetro, o comando retorna o ícone mais grande disponível.
