---
id: apply-to-selection
title: APPLY TO SELECTION
slug: /commands/apply-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.APPLY TO SELECTION.Syntax-->**APPLY TO SELECTION** ( *tabela* ; *formula* )<!-- END REF-->
<!--REF #_command_.APPLY TO SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual vai aplicar a fórmula ou Tabela por padrão, se omitida |
| formula | Expression | &#8594;  | Uma linha de código ou um método |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.APPLY TO SELECTION.Summary-->APPLY TO SELECTION aplica *formula* a cada registro da seleção atual de tabela.<!-- END REF--> A *fórmula* pode ser uma linha de instruções ou um método. Se *formula* modifica um registro de tabela, o registro modificado é salvado. Se fórmula não modifica um registro, o registro não é salvado. Se a seleção atual estiver vazia, APPLY TO SELECTION não tem efeito. Se a relação for automática, a fórmula pode conter um campo de uma tabela relacionada.  
  
**Aviso:** Parâmetros ($1...$n) não são aceitos em *formula*. 

APPLY TO SELECTION pode ser utilizado para reunir informação da seleção de registros (por exemplo, cálculo de um total), ou para modificar uma seleção (por exemplo, passando a maiúscula a primeira letra de um campo). Se este comando for utilizado dentro de uma transação, todas as mudanças podem ser desfeitas se a transação for cancelada.  
  
**4D Server**: o servidor não executa nenhum dos comandos que são passados em *formula*. Cada registro da seleção será enviado a máquina cliente para ser modificada.  
  
Um termômetro de progressão é mostrado enquanto é executado APPLY TO SELECTION. Para ocultá-lo, utilize [MESSAGES OFF](messages-off.md) antes de chamar a APPLY TO SELECTION. Se o termômetro de progresso é mostrado, o usuário pode cancelar a operação.

#### Exemplo 1 

O exemplo a seguir muda maiúsculas todos os nomes na tabela \[Empregados\]: 

```4d
 APPLY TO SELECTION([Empregados];[Empregados]Sobrenome:=Uppercase([Empregados]Sobrenome))
```

#### Exemplo 2 

Se um registro estiver bloqueado durante a execução de APPLY TO SELECTION e esse registro é modificado, o registro não será guardado. Todos os registros bloqueados que são encontrados são colocados em um conjunto chamado LockedSet. Depois de executar APPLY TO SELECTION, é recomendável testar LockedSet para verificar se houver registros bloqueados. O seguinte loop é executado até que todos os registros tenham sido modificados: 

```4d
 Repeat
    &NBSP;APPLY TO SELECTION([Empregados];[Empregados]Sobrenome:=Uppercase([Empregados]Sobrenome))USE SET("LockedSet") // Seleção de registros bloqueados unicamente
    &NBSP;Until(Records im set("LockedSet")=0) // Até que não haja registros bloqueados
```
  
  
#### Exemplo 3 

Este exemplo utiliza um método: 

```4d
 ALL RECORDS([Empregados])
 APPLY TO SELECTION([Empregados];M_Cap)
```

#### Variáveis e conjuntos do sistema 

Se o usuário clicar no botão Deter no termômetro de progressão, a variável sistema OK assume o valor 0\. Do contrário, assume o valor 1.

#### Ver também 

*Conjuntos*  
[EDIT FORMULA](edit-formula.md)  