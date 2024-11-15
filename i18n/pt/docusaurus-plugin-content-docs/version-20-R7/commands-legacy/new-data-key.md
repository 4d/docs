---
id: new-data-key
title: New data key
slug: /commands/new-data-key
displayed_sidebar: docs
---

<!--REF #_command_.New data key.Syntax-->**New data key** ( *frasePasse* ) : Object<!-- END REF-->
<!--REF #_command_.New data key.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| frasePasse | Text | &#8594;  | Frase-passe usada para gerar a chave de criptografia de dados AES |
| Resultado | Object | &#8592; | Objeto que contém a chave (propriedade encodedKey) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New data key.Summary-->O comando **New data key** gera uma chave de cifrado de dados binários a partir do texto passado no parâmetro *frasePasse*.<!-- END REF-->

A chave codificada pode ser salva localmente, para ser armazenada em um dispositivo extraível, como uma pendrive USB (ver *Armazenando chaves de criptografia de dados em arquivos* no manual de *Design 4D*). Conectar este dispositivo à máquina que aloja o banco de dados cifrado permitirá automaticamente ao usuário acessar aos dados cifrados.

Pode passar qualquer caractere em *passeFrase*. A mesma *frasePasse* sempre produzirá a mesma chave de cifrado de datos.

**Valor devolvido**

O objeto devolvido contém a propriedade abaixo:

| **Propriedade** | **Tipo** | **Descrição**                                                          |
| --------------- | -------- | ---------------------------------------------------------------------- |
| encodedKey      | Texto    | Chave de cifrado AES (SHA de 256 bits) gerada a partir de *frasePasse* |

Se passar uma string vazia em *frasePasse*, o comando devolve *null*.

#### Exemplo 

Se quiser salvar uma chave de criptografia em um arquivo .4DKeyChain:

```4d
 var $dataKey : Object
 var $passphrase : Text
 
 $passphrase:=Request("Enter the passphrase:")
 If(OK=1)
    $dataKey:=New data key($passphrase)
    TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))
 End if
```

#### Ver também 

  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Discover data key](discover-data-key.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[Register data key](register-data-key.md)  