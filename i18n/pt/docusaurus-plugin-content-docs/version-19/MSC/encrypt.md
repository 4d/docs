---
id: encrypt
title: Página de criptografia
sidebar_label: Página de criptografia
---

Pode utilizar esta página para encriptar ou *decriptar* (ou seja, remover a encriptação) o ficheiro de dados, conforme o estado do atributo **Cifrável** definido para cada tabela no banco de dados.

:::info

Para informação detalhada sobre encriptação de dados em 4D, por favor consulte a secção [Cifrar dados](https://doc.4d.com/4Dv20/4D/20/Encrypting-data.300-6263735.en.html) no manual de *Desenho*. Também pode ler blog post [Um olhar mais profundo sobre a encriptação de dados 4D](https://blog.4d.com/a-deeper-look-into-4d-data-encryption/).

:::

É criada uma pasta sempre que é efetuada uma operação de encriptação/desencriptação. Tem o nome "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*> ou "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".
> A encriptação só está disponível no [modo de manutenção](overview.md#display-in-maintenance-mode). Se tentar realizar essa operação no modo padrão, um diálogo de aviso informará que o banco será fechado e se reiniciará no modo de manutenção

**Aviso:**
- A criptografia de um banco de dados é uma operação demorada. Apresenta um indicador de progresso (que pode ser interrompido pelo usuário). Note também que a operação de criptografia de um banco de dados sempre inclui um passo de compactação.
- Cada operação de encriptação produz uma cópia do ficheiro de dados, o que aumenta o tamanho da pasta da aplicação. É importante ter isto em conta (especialmente em macOS onde as aplicações 4D aparecem como pacotes) para que o tamanho da aplicação não aumente excessivamente. Mover ou remover manualmente as cópias do ficheiro original no pacote pode ser útil para minimizar o tamanho do pacote.

## Encriptar dados pela primeira vez
Para encriptar os seus dados pela primeira vez utilizando o CSM, são necessários os seguintes passos:

1. No editor de estruture, marque o atributo **Cifrável** para cada tabela cujos dados pretende encriptar. Ver a secção "Propriedades das tabelas".
2. Abra a página Encriptar do CSM. Se abrir a página sem definir nenhuma tabela como **Cifrável**, é apresentada a seguinte mensagem na página: ![](../assets/en/MSC/MSC_encrypt1.png) Caso contrário, é apresentada a seguinte mensagem: ![](../assets/en/MSC/MSC_encrypt2.png)<p>
Isto significa que o estado **Cifrável** de pelo menos uma tabela foi modificado e que o ficheiro de dados ainda não foi encriptado.
**Nota: **A mesma mensagem é apresentada quando o estado **Cifrável** tiver sido modificado num ficheiro de dados já encriptado ou após o ficheiro de dados ter sido descifrado (ver abaixo).</p>
3. Clique no botão Encriptar imagem.  
   ![](../assets/en/MSC/MSC_encrypt3.png)  
   Ser-lhe-á pedido que introduza uma frase-chave para o seu ficheiro de dados: ![](../assets/en/MSC/MSC_encrypt4.png) A frase-chave é utilizada para gerar a chave de encriptação de dados. Uma frase-chave é uma versão mais segura de uma palavra-passe e pode conter um grande número de caracteres. Por exemplo, pode introduzir uma frase-chave como "Todos nós viemos para Montreux" ou "A minha primeira grande frase-chave!" O indicador do nível de segurança pode ajudá-lo a avaliar a força da sua frase-passe: ![](../assets/en/MSC/MSC_encrypt5.png) (verde intenso é o nível mais elevado)
4. Introduza para confirmar a sua frase-passe protegida.

O processo de encriptação é então iniciado. Se o MSC foi aberto em modo padrão, o banco de dados é reaberto em modo manutenção.

4D oferece a possibilidade de guardar a chave de encriptação (veja [Guardar a chave de encriptação](#saving-the-encryption-key) abaixo). Pode fazê-lo agora ou mais tarde. Também é possível abrir o ficheiro de registo da encriptação.

Se o processo de encriptação for bem-sucedido, a página Encriptar apresenta botões de operações de manutenção de encriptação.

**Atenção:** durante a operação de encriptação, 4D cria um ficheiro de dados vazio e preenche-o com dados do ficheiro de dados original. Os registos pertencentes a tabelas "encriptáveis" são encriptados e depois copiados, os outros registos são apenas copiados (é também executada uma operação de compactação). Se a operação for bem sucedida, o ficheiro de dados original é movido para uma pasta "Replaced Files (Encrypting)". Se tentar entregar um arquivo de dados criptografado, tenha certeza de antes mover/remover qualquer arquivo de dados não criptografado na pasta de banco de dados.

## Operações de manutenção da cifragem
When a database is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](../assets/en/MSC/MSC_encrypt6.png)


### Fornecimento da chave de encriptação de dados atual
Por razões de segurança, todas as operações de manutenção da cifragem exigem que seja fornecida a chave de cifragem de dado atual.

- Se a chave de encriptação de dados já está carregada no enxoval 4D(1), é automaticamente reutilizada por 4D.
- Se a chave de encriptação de dados não for encontrada, é necessário fornecê-la. O seguinte diálogo se mostra: ![](../assets/en/MSC/MSC_encrypt7.png)

Nesta fase, tem duas opções:
- enter the current passphrase(2) and click **OK**. OU
- connect a device such as a USB key and click the **Scan devices** button.

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session. (2) The current passphrase is the passphrase used to generate the current encryption key.

In all cases, if valid information is provided, 4D restarts in maintenance mode (if not already the case) and executes the operation.

### Volte a encriptar os dados com a chave de encriptação atual

This operation is useful when the **Encryptable** attribute has been modified for one or more tables containing data. In this case, to prevent inconsistencies in the data file, 4D disallows any write access to the records of the tables in the application. Re-encrypting data is then necessary to restore a valid encryption status.

1. Click on **Re-encrypt data with the current encryption key**.
2. Introduzir a chave de encriptação de dados atual.

The data file is properly re-encrypted with the current key and a confirmation message is displayed: ![](../assets/en/MSC/MSC_encrypt8.png)

### Alterar a sua frase-chave e voltar a encriptar os dados
Esta operação é útil quando é necessário alterar a chave de encriptação de data atual. Por exemplo, poderá ter de o fazer para cumprir regras de segurança (como a exigência de alterar a frase-chave a cada três meses).

1. Click on **Change your passphrase and re-encrypt data**.
2. Introduzir a chave de encriptação de dados atual.
3. Enter the new passphrase (for added security, you are prompted to enter it twice): ![](../assets/en/MSC/MSC_encrypt9.png) The data file is encrypted with the new key and the confirmation message is displayed. ![](../assets/en/MSC/MSC_encrypt8.png)

### Desencriptar todos os dados
Esta operação remove toda a encriptação do ficheiro de dados. Se já não pretender que os seus dados sejam encriptados:

1. Clique em **Decodificar todos os dados**.
2. Enter the current data encryption key (see Providing the current data encryption key).

The data file is fully decrypted and a confirmation message is displayed: ![](../assets/en/MSC/MSC_encrypt10.png)
> Once the data file is decrypted, the encryption status of tables do not match their Encryptable attributes. To restore a matching status, you must deselect all **Encryptable** attributes at the database structure level.

## Guardar a chave de encriptação

4D permite salvar a chave de encriptação de dados em um arquivo dedicado. The file name must have the `.4DKeyChain` extension, for example "myKeys.4DKeyChain". Armazenar esse arquivo em um aparelho externo, como um pendrive USB, facilita o uso de um banco de ados criptografado, já que o usuário só precisa conectar o aparelho para fornecer a chave de criptografia antes de abrir o banco de dados para poder acessar os dados criptografados.

You can save the encryption key each time a new passphrase has been provided:

- quando o banco de dados for criptografado pela primeira vez,
- quando o banco de dados for re-criptografado com uma nova frase secreta.

Podem ser armazenadas chaves de encriptação sucessivas no mesmo dispositivo.

:::caution

Storing the data encryption key file at the first level of the device is mandatory when you use the  [Automatic restore and log integration feature](../Backup/settings.md#automatic-restore-and-log-integration). When the restoring sequence is triggered, 4D must have access to the encryption key file, otherwise an error occurs.

:::

## Arquivo histórico
Depois que a operação de criptografia tiver sido completada, 4D gera um arquivo na pasta Logs do banco de dados. É criado no formato XML e se chama "*DatabaseName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" ou "*DatabaseName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

An Open log file button is displayed on the MSC page each time a new log file has been generated.

The log file lists all internal operations executed pertaining to the encryption/decryption process, as well as errors (if any).
