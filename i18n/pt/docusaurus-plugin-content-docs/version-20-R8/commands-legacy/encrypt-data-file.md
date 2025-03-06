---
id: encrypt-data-file
title: Encrypt data file
slug: /commands/encrypt-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data file.Syntax-->**Encrypt data file** ( *rotaEstrutura* ; *rotaDados* {; novaFrasePasse/novaChave {; *arqPasta* {; atualFrasePasse/atualChave {; *nomeMetodo*}}}} ) : Text<!-- END REF-->
<!--REF #_command_.Encrypt data file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaEstrutura | Text | &#8594;  | Rota para o arquivo estrutura |
| rotaDados | Text | &#8594;  | Rota de arquivo de dados a criptografar |
| novaFrasePasse/novaChave | Texto, Objeto | &#8594;  | Em caso de mudança: novaFrasePasse (texto) ou nova chave de Criptografia (objeto) |
| arqPasta | Text | &#8594;  | Rota da pasta onde os arquivos originais estão armazenados |
| atualFrasePasse/atualChave | Texto, Objeto | &#8594;  | frase Passe atual (texto) ou chave de criptografia atual (objeto) |
| nomeMetodo | Text | &#8594;  | Nome de método de chamada 4D |
| Resultado | Text | &#8592; | Rota completa de pasta onde os arquivos originais estão armazenados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Encrypt data file.Summary-->O comando **Encrypt data file** se utiliza para cifrar ou cifrar novamente o arquivo de dados designado pelo parâmetro *rotaDados* associado ao parâmetro *rotaEstrutura*.<!-- END REF--> Também pode ser utilizado para eliminar o cifrado do banco de dados. O comando não modifica os arquivos originais, devolve o nome de rota completo da pasta criada para respaldar o arquivo de dados original.

**Notas:**

* Este comando não pode ser utilizado com o arquivo de dados aberto atualmente.
* Este comando só pode ser executado desde 4D (modo local) ou 4D Server (procedimento armazenado). O arquivo de dados que vão ser cifrados deve corresponder ao arquivo de estrutura designado por *rotaEstrutura*.

A execução deste comando cifrará ou modificará o cifrado de todas as tabelas do banco de dados que foram definidas como "encriptografável". Para mais informação, consulte a seção *Criptografia*.

**Atenção:** o cifrado de um banco de dados é uma operação prolongada. Mostra um indicador de progresso (que pode ser interrompido pelo usuário). Lembre que a sequência de cifrado do banco de dados inclui um passo de compactação.

No parâmetro *rotaEstrutura*, pode passar uma string vazia ou a rota de acesso completa do arquivo de estrutura associado com o arquivo de dados que quiser cifrar. Esta informação é necessária para o procedimento de cifrado. Se passar uma string vazia, aparecerá um quadro de diálogo **Abrir arquivo** padrão para que o usuário possa designar o arquivo de estrutura que se utilizará. Do contrário, pode passar uma rota de acesso completa, expressa na sintaxe de sistema operativo.

No parâmetro *rotaDados*, pode passar uma string vazia, um nome de arquivo ou uma rota completa (deve ser expressa na sintaxe de sistema operativo). Se passar uma string vazia, aparecerá um quadro de diálogo **Abrir arquivo** padrão para que o usuário possa designar o arquivo de dados que vai ser cifrado. Este arquivo deve corresponder ao arquivo de estrutura definido no parâmetro *rotaEstrutura*. Se passar apenas o nome de arquivo de dados, 4D o buscará no mesmo nivel que o arquivo de estrutura.

* **Para cifrar o banco de dados pela primeira vez**, só necessita passar o parâmetro *novaFrasePasse* ou *novaChaveDados* (os parâmetros *atualFrasePasse* ou *atualChave* não devem ser proporcionadas):  
   * *novaFrasePasse*: cadena utilizada para generar la llave de cifrado (SHA de 256 bits)  
   * *novaChave*: objeto (com propriedade *encodedKey*) que contém uma nova chave de cifrado de dados. Esta chave deveria ter sido gerado com o comando [New data key](new-data-key.md).  
**Nota:** *novaFrasePasse* (ou *novaChave*) não é agregada ao chaveiro 4D.
* **Para voltar a cifrar um banco de dados** (ou seja, o banco de dados já tiver sido cifrado), deve passar tanto o parâmetro *novaFrasePasse* (ou *novaChave*), como a frase passe atual (ou a chave de dados atual). Isto é necessário para descifrar o banco de dados antes de voltar a criptografá-lo. Esta informação pode ser proporcionada das seguentes maneiras:  
   * passando parâmetros válidos de *atualFrasePasse* (ou *atualChave*) ao comando,  
   * no chaveiro 4D.
* **Para eliminar o cifrado de todas as tabelas**, passe uma frase passe vazia ou uma chave de dados nula como *novaFrasePasse* (ou *novaChave*). A senha ou chave de dados atual já deve ter sido proporcionada. Os arquivos descifrados são genrados ou copiados em pastas denominadas "Arquivos substituidos (Descifrado) YYYY-MM-DD HH-MM-SS”/"Decrypted files YYYY-MM-DD HH-MM-SS".

O comando não modifica os arquivos originais. São movidas na pasta *pastaArquivo* (se for passado) a uma pasta especial denominada *Arquivos substituídos (Encriptação) YYYY-MM-DD HH-MM-SS* ou *Arquivos substituídos (Descifrado) YYYY-MM-DD HH-MM-SS* onde YYYY-MM-DD HH-MM-SS representa a data e a hora da operação. Por exemplo: "Arquivos substituidos (cifrado) 2018-09-29 13-00-35". O novo arquivo de dados cifrados ou descifrados substitui automaticamente o arquivo original.  
Se passar "" em *pastaArquivo*, aparecerá um diálogo **Abrir pasta** padrão para que o usuário possa especificar o local da pasta que será criada. Se *pastaArquivo* se omite, os arquivos originais são armazenados automaticamente em uma pasta com marca de tempo criada junto ao arquivo de estrutura.

O parâmetro *método* se utiliza para estabelecer um método de retro chamada que se chamará regularmente durante o processo de cifrado. Se passar uma string vazia ou um nome de método não válido, este parâmetro se ignora (não se chama a nenhum método). Quando se chamar, este método recebe até 5 parâmetros segundo o tipo de evento que origina a chamada (ver mais abaixo). É imperativo declarar estes parâmetros no método:

| **Evento**          | **$1 (Inteiro longo)** | **$2 (Inteiro longo)** | **$3 (Texto)**                                                                                           | **$4 (Inteiro longo)**                  | **$5 (Inteiro longo)** |
| ------------------- | ---------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------------------- |
| Message             | 1                      | 0                      | Mensagem de progresso (por exemplo, "Cifrado de BLOBs na tabela Documents")                              | Porcentagem realizado (por exemplo, 50) | Reservado              |
| Encryption finished | 2                      | 0                      | Mensagen de OK (por exemplo, "Ok")                                                                       | 0                                       | Reservado              |
| Error               | 3                      | 0                      | Mensagem de erro (por exemplo, "Problema na tabela de dados XX: Não se proporcionou a chave de cifrado") | 0                                       | Reservado              |
| End of execution    | 4                      | 0                      | "Ok"                                                                                                     | 0                                       | Reservado              |
| Warning(\*)         | 5                      | Tipo de objeto         | Texto de erro                                                                                            | Tabela ou número de índice              | Reservado              |

(\*) Advertência devolvida no passo de verificação (consulte o comando [VERIFY DATA FILE](verify-data-file.md)).

**Valor devolvido**

Rota real da pasta de destino dos arquivos originais.  
  
#### Exemplo 1 

Criptografar um arquivo de dados pela primeira vez:

```4d
 var $folder;$passphrase : Text
 $passphrase:=Request("Entre a frase passe")
 If(OK=1)
  //Como o arquivo de dados não for criptografada, nenhuma chave de criptografia atual é fornecida
    $folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)
 End if
```

#### Exemplo 2 

Recriptografar um arquivo de dados já criptografado (mudar a frase passe):

```4d
 var $folder;$targetFolder;$passphrase;$newPassphrase : Text
 $passphrase:=Request("Entre a frase passe atual")
 If(OK=1)
    $newPassphrase:=Request("Entre a nova frasepasse")
    If(OK=1)
       $targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator
  //Como o arquivo de dados for criptografado, a chave de criptografia atual deve ser fornecida
       $folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)
    End if
 End if
```

#### Exemplo 3 

Remover a criptografia de um arquivo de dados criptografado:

```4d
 var $folder;$targetFolder;$passphrase : Text
 $passphrase:=Request("Entre a frase passe")
 If(OK=1)
    $targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator
  //A nova frase passe está estabelecida para uma string vazia para decriptografar todos os dados
  //A frase passe atual deve ser fornecida
    $folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)
 End if
```

#### Exemplo 4 

Re-encriptar um arquivo de dados criptografado com a chave atual (por exemplo, quando o estado de criptografia foi mudado para algumas tabelas).

```4d
 var $folder;$passPhrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Entre a frase passe")
 If(OK=1)
    $added:=Register data key($passphrase) //A chave de dados agora está no chaveiro  4D
    $folder:=Encrypt data file(Structure file;"myData.4DD")
 End if
```

#### Ver também 

  
[Data file encryption status](data-file-encryption-status.md)  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[New data key](new-data-key.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1610 |
| Thread-seguro | &cross; |


