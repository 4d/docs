---
id: data-file-encryption-status
title: Data file encryption status
slug: /commands/data-file-encryption-status
displayed_sidebar: docs
---

<!--REF #_command_.Data file encryption status.Syntax-->**Data file encryption status** ( rotaEstrutura , rotaDados ) : Object<!-- END REF-->
<!--REF #_command_.Data file encryption status.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaEstrutura | Text | &#8594;  | Rota do arquivo de estrutura 4D a ser verificado |
| rotaDados | Text | &#8594;  | Rota do arquivo de dados 4D a ser verificado |
| Resultado | Object | &#8592; | Informação sobre o estado de criptografia do arquivo de dados e de cada tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Data file encryption status.Summary-->O comando **Data file encryption status** devolve um objeto que fornece o estado de cifrado para o arquivo de dados designado pelos parâmetros *rotaEstruta* e *rotaDados*.<!-- END REF--> Também se proporciona o estado de cada tabela.

*rotaDados* designa um arquivo de dados 4D (.4dd). Deve corresponder ao arquivo de estrutura definido pelo parâmetro *rotaEstrut*. Pode designar o arquivo de estrutura atual, mas o arquivo de dados não deve ser o arquivo atual (aberto).

**Nota:** utilize o método *ds.encryptionStatus( )* para determinar o estado de cifrado do arquivo de dados atual.

**Valor devolvido**

O objeto devolvido contém as propriedades abaixo:

| **Propriedade** | **Tipo** | **Descrição**                                                                                         |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| isEncrypted     | Booleano | True se o arquivo de dados estiver cifrado                                                            |
| keyProvided     | Booleano | True se a chave de cifrado que coincidir com o arquivo de dados cifrados estiver no chaveiro 4D (\*). |
| tables          | Objeto   | Objeto que contém tantas propriedades como tabelas *criptografadas* oy *criptografáveis*.             |
| <*table name*\> | Objeto   | Tabela Encriptada ou Criptografável                                                                   |
| name            | Texto    | Nome da tabela                                                                                        |
| num             | Número   | Número de tabela                                                                                      |
| isEncryptable   | Booleano | True se a tabela se declara criptografável no arquivo de estrutura                                    |
| isEncrypted     | Booleano | True se os registros da tabela estiverem cifrados no arquivo de dados                                 |

(\*) A chave de criptografia pode ser fornecida:

* previamente:  
   * antes de abrir este arquivo de dados, utilizando um dispositivo conectado,  
   * com o comando *ds.provideDataKey( )* quando se abre este arquivo de dados,  
   * depois de abrir o arquivo de dados, con o comando [Discover data key](discover-data-key.md)
* utilizando o comando [Register data key](register-data-key.md)

#### Exemplo 

Se quiser conhecer o estado de criptografia de um arquivo de dados que corresponda ao arquivo de estrutura atual:

```4d
 var $status : Object
 
 $status:=Data file encryption status(Structure file;"D:\\Invoices\\Data_2019\\Invoices.4dd")
 Case of
    :(Not($status.isEncrypted))
       ALERT("O arquivo de dados não está criptografado")
    :($status.isEncrypted&(Not($status.keyProvided))
       ALERT("O arquivo de dados está criptografado e a chave de cifrado não está no chaveiro. Não terá acesso aos dados cifrados.")
    :($status.isEncrypted&$status.keyProvided)
       ALERT("O arquivo de dados está cifrado e a chave de cifrado está no chaveiro. Terá acesso aos datos cifrados.")
 End case
```

#### Ver também 

  
[Encrypt data file](encrypt-data-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1609 |
| Thread-seguro | &check; |


