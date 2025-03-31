---
id: clear-variable
title: CLEAR VARIABLE
slug: /commands/clear-variable
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR VARIABLE.Syntax-->**CLEAR VARIABLE** ( *variavel* )<!-- END REF-->
<!--REF #_command_.CLEAR VARIABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| variavel | Variable | &#8594;  | Variável a apagar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CLEAR VARIABLE.Summary-->CLEAR VARIABLE reinicia *variavel* no valor por padrão de seu tipo (por exemplo, cadeia vazia para os tipos Alfa e Texto, *0* para as variáveis numéricas, nenhum elemento para um array, etc.).<!-- END REF--> A variável continua existindo em memória.

**Nota:** Para saber mais sobre os valores de tipos normais, veja o parágrafo *Valores padrão*.

A variável que se passa em *variavel* pode ser uma variável local, processo ou interprocesso.  
  
**Nota**: Não é necessário apagar as variáveis processo ao terminar um processo; 4D as apaga automaticamente. De forma similar cada variável local se apaga automaticamente quando o método onde se localiza sua execução completa.

#### Exemplo 

Em um formulário, utilize uma lista suspensa (drop down) chamada *MinhaListaSuspensa* cujo único propósito é a interface do usuário. Em outras palavras, utilize este array durante a entrada de dados,mas quando tiver fechado o formulário, não utilize mais este array. Portanto, durante o evento On Unload, apague o array:

```4d
  //asMyDropDown método de objeto lista drop-drop
 Case of
    :(Form event code=On Load)
  //Initializar o array de uma forma ou outra
       ARRAY TEXT(asMyDropDown;...)
  // ...
    :(Form event code=On Unload)
  //Não precisa mais do array
       CLEAR VARIABLE(asMyDropDown)
  // ...
 End case
```

#### Ver também 

[Undefined](undefined.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 89 |
| Thread-seguro | &check; |


