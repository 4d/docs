---
id: discover-data-key
title: Discover data key
slug: /commands/discover-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Discover data key.Syntax-->**Discover data key**  : Boolean<!-- END REF-->
<!--REF #_command_.Discover data key.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True se a chave de criptografia válida para o arquivo de dados aberto atualmente foi encontrado, senão False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Discover data key.Summary-->O comando **Discover data key** busca uma chave de cifrado válida correspondente ao arquivo de dados aberto atualmente a nivel da raíz de todos os dispositivos conectados e devolve **True** se for exitoso.<!-- END REF--> 

Os dispositivos conectados a buscar incluem chaves USB ou discos externos. È necessária uma chave de criptografia válida para permitir o acesso de leitura/escritura a um banco de dados cifrado. Pode chamar a este comando, por exemplo, ao iniciar o banco de dados, depois de que o usuário tenha sido convidado a conectar uma chave USB, pendrive.

Os archivos chave (arquivos de extensão ".4DKeyChain") devem ser armazenados no nível superior dos dispositivos conectados (a pesquisa não passará pela hierarquia de pastas). As chaves de cifrado devem ser guardadas em formato JSON (ver *Armazenando chaves de criptografia de dados em arquivos* na *Referencia de Design de 4D*).

**Valor devolvido**

* **True** se for encontrada uma chave de criptografia válida para o arquivo de dados aberto atual, em cujo caso:  
   * a chave de criptografia se aplica se for necessário para que os dados cifrados possam ser utilizados (acesso às operações de leitura/escritura).  
   * a chave de criptografia se agrega à keychain 4D.
* **False** se não for encontrada uma chave de criptografia válida para o arquivo de dados aberto atual, pelo que não é possível acessar alos dados.

#### Exemplo 

```4d
 var $status : Object
 var $keyFound : Boolean
 
 $status:=ds.encryptionStatus()
 
 If(($status.isEncrypted)&(Not($status.keyProvided))) //nenhuma chave está disponível
  // portanto o acesso aos dados criptografados não está permitido
    $keyFound:=Discover data key
    If($keyFound=True)
       ALERT("Foi encontrada uma chave de criptografia válida.")
    End if
 End if
```

#### Ver também 

  
[New data key](new-data-key.md)  