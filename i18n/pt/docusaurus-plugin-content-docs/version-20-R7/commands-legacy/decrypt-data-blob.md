---
id: decrypt-data-blob
title: Decrypt data BLOB
slug: /commands/decrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Decrypt data BLOB.Syntax-->**Decrypt data BLOB** ( *blobDecriptografar* ; objetoChave / passefrase ; *salt* ; *BLOBdecriptografado* ) : Boolean<!-- END REF-->
<!--REF #_command_.Decrypt data BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| blobDecriptografar | Blob | &#8594;  | Blob que vai ser decriptografado |
| objetoChave / passefrase | Objeto, Texto | &#8594;  | Objeto JSON que contém a chave de criptografia ou passefrase para geração de chave direta de criptografia (texto) |
| salt | Integer | &#8594;  | Salt (ou sal/dados aleatórios) para o algoritmo de criptografia |
| Blobdecriptografado | Blob | &#8592; | BLOB que foi decriptografado |
| Resultado | Boolean | &#8592; | True se a descrição tiver sido realizada corretamente. Senão False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Decrypt data BLOB.Summary-->O comando **Decrypt data BLOB** realiza a descriptografia do parâmetro *blobDecriptografia* com o mesmo algoritmo que 4D usa para a criptografia de dados (AES-256) e retorna o resultado em *blobDecriptografado*.<!-- END REF-->

Pode usar *objetoChave* ou uma *passefrase* para decriptografar o BLOB: 

* *objetoChave*: um objeto JSON contendo uma chave de criptografia, com a mesma estrutura que o objeto retornado pelo comando [New data key](new-data-key.md)
* *passefrase*: uma string usada para gerar a chave de criptografia

O número passado no parâmetro *salt* **Decrypt data BLOB** deve corresponder com o usado para a criptografia.

Se a decriptografia tiver sucesso, os dados decriptografados serão retornados no parâmetro *blobDecriptografado* e o comando retorna True.

No caso de um erro, o BLOB é retornado vazio e o comando retorna false.

#### Exemplo 

O exemplo abaixo mostra como decriptogrofar um arquivo criptografado localizado na pasta RESOURCES do banco de dados:

  
```4d
 var $fileToDecrypt;$decryptedFile : 4D.File
 var $blobToDecrypt;$decryptedBlob : Blob
 var $result : Boolean
 
 $fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")
 $decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")
 
 $blobToDecrypt:=$fileToDecrypt.getContent()
 
 $result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)
 $decryptedFile.setContent($decryptedBlob)
```

*passefrase* e *salt* usados para a descriptografia são idênticos a *passefrase* e *salt* usados para criptografar (ver o exemplo [Encrypt data BLOB](encrypt-data-blob.md)).

#### Ver também 

  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[New data key](new-data-key.md)  