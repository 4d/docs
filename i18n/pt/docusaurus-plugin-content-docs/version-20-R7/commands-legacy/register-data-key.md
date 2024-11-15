---
id: register-data-key
title: Register data key
slug: /commands/register-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Register data key.Syntax-->**Register data key** ( curPassPhrase | curDataKey ) : Boolean<!-- END REF-->
<!--REF #_command_.Register data key.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| curPassPhrase &#124; curDataKey | Texto, Objeto | &#8594;  | Frase passe atual (texto) ou chave de criptografia de dados atual (objeto) |
| Resultado | Boolean | &#8592; | True se a chave de criptografia tiver sido adicionada com sucesso ao chaveiro 4D, False se já estiver no chaveiro. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Register data key.Summary-->O comando **Register data key** agrega a chave de cifrado de dados passada no parâmetro ao chaveiro 4D.<!-- END REF-->

O chaveiro 4D é um conjunto de uma ou mais chaves de cifrado de dados carregadas na memória que 4D escaneia automaticamente quando se exigir uma chave de dados para descifrar/cifrar um arquivo de dados. Para mais informação, consulte *Criptografia de dados*.

No primeiro parâmetro, passe *curPassPhrase* ou *curDataKey* que define a chave de cifrado a agregar:

* *curPassPhrase*: string utilizada para gerar a chave de cifrado. Quando se utilizar este parâmetro, se gera uma chave de cifrado.
* *curDataKey*: objeto (com propriedade *encodedKey*) que contém a chave de cifrado de dados. Esta chave pode ser gerada com o comando [New data key](new-data-key.md).

**Valor devolvido**

* **True** se a chave de cifrado for carregada corretamente no chaveiro 4D.
* **False** se a mesma chave de cifrado já estiver presente no chaveiro 4D.

#### Exemplo 

```4d
 var $passphrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Introduza a frase-passe:")
 If(OK=1)
    $added:=Register data key($passphrase)
 
    OPEN DATA FILE("data.4DD") //Não é necessário uma chave, já está no chaveiro 4D
 End if
```

#### Ver também 

  
[New data key](new-data-key.md)  