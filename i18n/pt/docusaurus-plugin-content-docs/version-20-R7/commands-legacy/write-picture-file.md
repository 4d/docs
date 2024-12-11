---
id: write-picture-file
title: WRITE PICTURE FILE
slug: /commands/write-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.WRITE PICTURE FILE.Syntax-->**WRITE PICTURE FILE** ( *nomeArquivo* ; *imagem* {; *codec*} )<!-- END REF-->
<!--REF #_command_.WRITE PICTURE FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArquivo | Text | &#8594;  | Nome ou rota completa do arquivo a escrever, ou string vazia |
| imagem | Picture | &#8594;  | Campo de imagem ou variável a escrever |
| codec | Text | &#8594;  | Codec de identificação de Imagem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WRITE PICTURE FILE.Summary-->O comando WRITE PICTURE FILE permite guardar em um arquivo no disco a imagem passada no parâmetro *imagem,* no formato definido por *codec*.<!-- END REF--> 

Pode passar em *nomArquivo* a rota de acesso completa do arquivo a criar, ou unicamente o nome do arquivo. Se só passa o nome do arquivo, o arquivo será localizado junto ao arquivo de estrutura do banco.   
  
Tem que ser indicado a extensão do arquivo.

Se passa uma string vazia ("") em *nomArquivo*, aparece a caixa de diálogo padrão de registro, permitindo ao usuário indicar o nome, localização e formato do arquivo a criar.   
Se um nome padrão é associado com o campo imagem, ele é fornecido na caixa de diálogo (ver o comando [SET PICTURE FILE NAME](set-picture-file-name.md)).

Passe em *imagem* a variável ou campo imagem que contém a imagem a armazenar no disco.

O parâmetro opcional *codec* permite definir o formato no qual a imagem será guardado. Um codec pode ser uma extensão (por exemplo ".gif") ou um tipo Mime (por exemplo "image/jpg") Pode obter uma lista de codecs disponíveis através do comando [PICTURE CODEC LIST](picture-codec-list.md).

Se for omitido o parâmetro *codec*, o comando tentará determinar o *codec* baseado na extensão do nome do arquivo passado no parâmetro *nomArquivo*. Por exemplo, se passa a instrução:  

```4d
 WRITE PICTURE FILE("c:\folder\foto.jpg";minhafoto)
```

  
... o comando utilizará o codec JPEG para guardar a imagem.   
Se a extensão utilizada não corresponde a nenhum codec disponível, o arquivo não se guarda e a variável sistema OK toma o valor 0\. Se não passa um *codec* ou um arquivo de extensão, o arquivo imagem se guarda em formato PICT. 

**Nota:** se o formato de escrita de *imagem* (indicado via a extensão do *nomArquivo* ou o parâmetro *codec*) é igual a seu tipo original e se nenhuma operação de transformação for aplicada, a imagem é escrita "tal qual", sem nenhuma modificação. 

Se a execução do comando for correta, a variável sistema Document contém a rota de acesso completa ao arquivo criado e a variável sistema OK toma o valor 1\. Do contrário, OK toma o valor 0.

#### Ver também 

*Imagens*  
[PICTURE TO BLOB](picture-to-blob.md)  
[READ PICTURE FILE](read-picture-file.md)  
[SET PICTURE FILE NAME](set-picture-file-name.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 680 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document |
| Proibido no servidor ||


