---
id: sequence-number
title: Sequence number
slug: /commands/sequence-number
displayed_sidebar: docs
---

<!--REF #_command_.Sequence number.Syntax-->**Sequence number** {( *tabela* )} : Integer<!-- END REF-->
<!--REF #_command_.Sequence number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual devolver o número de sequência, ou tabela padrão, se omitido |
| Resultado | Integer | &#8592; | Número de sequência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Sequence number.Summary-->**Sequence number** devolve o próximo número automático de *tabela*.<!-- END REF--> O número de sequência é único para cada tabela. É um valor que não se repete e é incrementado (\*) para cada novo registro criado pela tabela.  
  
(\*) Por razões de otimização, a incrementação é iniciada apenas na primeira chamada ao comando **Sequence number** ou de uma propriedade que obtém acesso a sequência de números (ver abaixo). Além disso, a numeração pode ser modificada usando o comando \[#cmd id="642"/\]. Desta forma, o valor retornado não deve ser considerado como contagem dos registros criados em *umaTabela*.   
  
Normalmente, a numeração começa em 1\. Pode mudar a numeração para uma tabela utilizando o comando [SET DATABASE PARAMETER](set-database-parameter.md).  
  
**Nota:** Se não houver um registro atual e a numeração tiver sido modificada via o comando [SET DATABASE PARAMETER](set-database-parameter.md), este número é em fato reservado para a criação do novo registro mas só vai re ser retornado pela função **Sequence number** quando o comando [SAVE RECORD](save-record.md) tiver sido chamado. 

A função **Sequence number** é útil nos casos abaixos: 
* O número de sequência precisa de um incremento maior que 1
* O número de sequência é parte de um código, por exemplo um número de código parcial.

  
Para armazenar o número de sequência com a ajuda de um método, crie um campo de tipo Inteiro longo na tabela e atribua o número de sequência ao campo.

O número de sequência devolvido por essa função para a *tabela* é o mesmo número que o gerado ao selecionar a opção **Autoincrementar** para um campo da *tabela* utilizando o inspetor de estrutura ou ao atribuído utilizando o símbolo #N como valor automático para um campo da *tabela* em um formulário. Para maior informação sobre a atribuição de valores, consulte o Manual de Desenho de 4D.  
  
**Nota**: a numeração automática também pode ser atribuída através do atributo SQL AUTO\_INCREMENT.

  
Se a numeração deve começar em um valor diferente de 1, simplesmente adiciona a diferença a **Sequence number**. Por exemplo, se o número de sequência deve começar em 1.000, pode utilizar a seguinte linha de código para atribuir o número:  

```4d
 [Tabela1]NumAuto:=Sequence number([Tabela1])+999
```

#### Exemplo 

O exemplo a seguir é parte de um método de formulário. Estas linhas de código testam se é um novo registro (se o número de fatura for igual a uma cadeia vazia). Se for um novo registro, o método atribui um número de fatura. O número de fatura está formado por duas partes: o número de sequência, e o identificador do operador, o qual foi introduzido ao abrir o banco. O número de sequência é formatado como uma cadeia de cinco caracteres: 

```4d
  // Se for uma nova fatura, criar um número de fatura
 If([Faturas]NumFatura="")
  // O número de fatura é uma cadeia que termina pelo número de referência do usuário.
    [Faturas]NumFatura:=String(Sequence number;"00000")+[Faturas]Usuário
 End if
```

#### Ver também 

[Record number](record-number.md)  
[Selected record number](selected-record-number.md)  
*Sobre Números de Registros*  