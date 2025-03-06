---
id: generate-encryption-keypair
title: GENERATE ENCRYPTION KEYPAIR
slug: /commands/generate-encryption-keypair
displayed_sidebar: docs
---

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Syntax-->**GENERATE ENCRYPTION KEYPAIR** ( *chavPriv* ; *chavPublica* {; *tamanho*} )<!-- END REF-->
<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| chavPriv | Blob | &#8592; | BLOB que contém a chave privada |
| chavPublica | Blob | &#8592; | BLOB que contém a chave pública |
| tamanho | Integer | &#8594;  | Tamanho da chave (bits) [512...2048]. O valor normal é  512 |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Summary-->O comando GENERATE ENCRYPTION KEYPAIR gera um novo apr de chaves RSA.<!-- END REF--> sistema de segurança oferecido em 4D está baseado em chaves destinadas a codificar/decodificar informação. As chaves podem ser usadas dentro do protocolo TLS, com o servidor web 4D (cifrado e segurança das comunicações) e em todos os bancos de dados (codificação de dados).

**Nota:** Se precisar criptografar seus dados em disco, considere usar as propriedades de criptografia de dados fornecidas por 4D (ver *Criptografia de dados*). 

Quando tiver executado o comando, os BLOBs passados nos parâmetros *chavePrim* e *chavePublica* contêm um novo par de chaves de cifrado.

O parâmetro opcional *tamanho* permite especificar o tamanho da chave (em bits). Quanto maior o tamanho da chave, mais difícil será romper o código cifrado.

Entretanto, as chaves grandes precisam de mais tempo de execução ou de resposta, especialmente dentro de uma conexão TLS.

Como padrão (se omitir o parâmetro *tamanho*), o tamanho de chave gerado é de 512 bits, o qual é um bom compromisso para a relação segurança/eficiência. Para aumentar o fator de segurança, pode mudar as chaves com frequência, por exemplo a cada seis meses. Pode gerar chaves de 2048 bits para aumentar a segurança de codificação, mas isso poderia diminuir a velocidade das conexões para a aplicação web.

Este comando gera chaves em formato PKCS codificadas em base64, o que significa que seu conteúdo pode ser copiado e colado em um correio eletrônico sem sofrer nenhuma mudança. Quando tiver gerado o par de chaves, pode gerar um documento de texto em formato PEM (utilizando por exemplo o comando [BLOB TO DOCUMENT](blob-to-document.md)) e as chaves podem ser salvadas em um lugar seguro.

**Advertência:** a chave privada sempre deve ser mantida em segredo.

#### RSA, chaves privadas e chaves públicas 

O algoritmo de cifrado RSA utilizado por **GENERATE ENCRYPTION KEYPAIR** está baseado em um sistema de cifrado de chave dupla: uma chave privada e uma chave pública. Como seu nome o indica, a chave pública pode ser entregada a uma terceira pessoa e utilizada para decifrar a informação. A chave pública corresponde a uma chave privada única, utilizada para cifrar a informação. Desta forma, a chave privada se utiliza para o cifrado; a chave pública para decifrar (ou vice-versa). A informação cifrada com uma chave só pode ser decifrada com a outra.

As funções de cifrado do protocolo SSL estão baseadas neste principio, a chave pública que se inclui no certificado enviado aos navegadores (para maior informação, consulte a seção [WEB SERVICE SET PARAMETER](web-service-set-parameter.md)). 

Este modo de cifrado também o utiliza a primeira sintaxes dos comandos [ENCRYPT BLOB](encrypt-blob.md) e [DECRYPT BLOB](decrypt-blob.md) A chave pública deve ser publicada de maneira confidencial. 

É possível combinar as chaves públicas e privadas de duas pessoas para cifrar informação de maneira que o receptor seja a única pessoa que possa decifrar os dados e o emissor a única pessoa que pode criptografá-los. É o principio da segunda sintaxes dos comandos [ENCRYPT BLOB](encrypt-blob.md) e [DECRYPT BLOB](decrypt-blob.md)

#### Exemplo 

Ver o exemplo do comando [ENCRYPT BLOB](encrypt-blob.md).

#### Ver também 

[DECRYPT BLOB](decrypt-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 688 |
| Thread-seguro | &check; |


