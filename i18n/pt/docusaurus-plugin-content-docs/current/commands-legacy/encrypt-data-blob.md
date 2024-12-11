---
id: encrypt-data-blob
title: Encrypt data BLOB
slug: /commands/encrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data BLOB.Syntax-->**Encrypt data BLOB** ( *blobAcriptografar* ; objetoChave / passefrase ; *salt* ; blobCriptografado' ) : Boolean<!-- END REF-->
<!--REF #_command_.Encrypt data BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| blobAcriptografar | Blob | &#8594;  | BLOB que vai criptografar |
| objetoChave / passefrase | Objeto, Texto | &#8594;  | Objeto JSON que contém a chave de criptografia ou passefrase para geração de uma chave de criptografia direta (texto) |
| salt | Integer | &#8594;  | Sal de criptografia (para adicionar dados aleatórios) para maior segurança do algoritmo |
| blobCriptografado' | BLOB | &#8592; | BLOB que foi criptografado |
| Resultado | Boolean | &#8592; | TRUE se a criptografia for realizada corretamente, senão FALSE |

<!-- END REF-->

#### Description 

<!--REF #_command_.Encrypt data BLOB.Summary-->O comando **Encrypt data BLOB** encripta o parâmetro *blobCriptografar* com o mesmo algoritmo que 4D usas para criptografia de dados (AES-256) e retorna o resultao em *blobCriptografado*.<!-- END REF-->

Pode usar um *objetoChave* ou uma *passefrase* para criptografar o BLOB: 

* *objetoChave*: um objeto JSON que contém a chave de criptografia com a mesma estrutura que o objeto retornado pelo comando [New data key](new-data-key.md)
* *passefrase*: uma string usada para gerar a chave de criptografia

Passe em *salt* (sal de criptografia) um número que será usado para tornar a criptografia mais robusta.

Se a criptografia tiver sucesso, os dados criptografados são retornados no parâmetro *blobCriptografado* e o comando retorna True.

No caso de um erro, o BLOB é retornada vazia e o comando retorna False.

**Nota:** Quando criptografar um blob usando **Encrypt data BLOB**, o resultado *blobCriptografado* é um múltiplo de 16 bytes por causa do algoritmo de criptografia. Como consequência, se *blobCriptografar* não for um múltiplo de 16 bytes, o comando automaticamente vira para um múltiplo de 16 bytes para adicionar null bytes no final. Para evitar erros quando decriptografar o blob com [Decrypt data BLOB](decrypt-data-blob.md), precisa manejar o tamanho de *blobCritpgrafar* quando trabalhar com arquivos que não forem arquivos de texto. Para um exemplo detalhado de como fazer isso, veja [esse artigo no blog](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/). 

#### Exemplo 

Para criptografar um arquivo texto na pasta RESOURCES no banco de dados:

```4d
 var $fileToEncrypt;$encryptedFile : 4D.File
 var $blobToEncrypt;$encryptedBlob : Blob
 var $result : Boolean
 
 $fileToEncrypt:=File("/RESOURCES/confidential.txt")
 $encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")
 
 $blobToencrypt:=$fileToEncrypt.getContent()
 
 $result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)
 $encryptedFile.setContent($encryptedBlob)
```

#### Ver também 

  
[Decrypt data BLOB](decrypt-data-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[New data key](new-data-key.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1773 |
| Thread-seguro | &check; |
| Proibido no servidor ||


