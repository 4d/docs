---
id: difference
title: DIFFERENCE
slug: /commands/difference
displayed_sidebar: docs
---

<!--REF #_command_.DIFFERENCE.Syntax-->**DIFFERENCE** ( *conjunto1* ; *conjunto2* ; *conjuntoResultado* )<!-- END REF-->
<!--REF #_command_.DIFFERENCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto1 | Text | &#8594;  | Conjunto |
| conjunto2 | Text | &#8594;  | Conjunto que será subtraído |
| conjuntoResultado | Text | &#8594;  | Conjunto Resultado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DIFFERENCE.Summary-->DIFFERENCE compara *conjunto1* e *conjunto2* e exclui de *conjuntoResultado* todos os registros de *conjunto2*.<!-- END REF--> Em outras palavras, um registro é incluído em *conjuntoResultado* apenas se estiver em c*onjunto1*, mas não em *conjunto2*. A seguinte tabela mostra todos os resultados possíveis de uma operação de diferença de conjuntos.  
  
| **Conjunto** **1** | **Conjunto** **2** | **Conjunto Resultado** |
| ------------------ | ------------------ | ---------------------- |
| Sim                | Não                | Sim                    |
| Sim                | Sim                | Não                    |
| Não                | Sim                | Não                    |
| Não                | Não                | Não                    |

O gráfico representa uma operação de diferença entre dois conjuntos. O área sombreada é o conjunto resultante.  
  
![](../assets/en/commands/pict32936.en.png)  
O *conjuntoResultado* é criado por DIFFERENCE O *conjuntoResultado* substitui qualquer conjunto existente que tenha o mesmo nome, incluindo *conjunto1* e *conjunto2*. Os conjuntos *conjunto1* e *conjunto2* devem ser da mesma tabela. O conjunto resultado pertence a mesma tabela que *conjunto1* e *conjunto2*.  
  
**4D Server**: em modo cliente/Servidor, conjuntos são "visíveis" dependendo do tipo (interprocesso, processo e local) e onde eles foram criados (servidor ou cliente). DIFFERENCE exige que todos os três conjuntos sejam visíveis na mesma máquina. Veja o parágrafo *4D Server, conjuntos e seleções temporais* no Manual de Referência 4D Server para mais informação.

#### Exemplo 

Este exemplo exclui os registros selecionados pelo usuário. Os registros se mostran na tela com la seguinte instrução:  

```4d
 DISPLAY SELECTION([Clientes]) // Visualização dos clientes em uma lista
```
  
  
Ao final da lista de registros há um botão com um método de objeto. O método de objeto exclui os registros selecionados pelo usuário (o conjunto sistema chamado “UserSet”), e mostra uma seleção reduzida:  
  
```4d
 CREATE SET([Clientes];"$Atual") // Criação de um conjunto a partir da seleção atual DIFFERENCE ("$Atual";"UserSet";"$Atual") ` Exclusão dos registros selecionados
 &NBSP;USE SET("$Atual") // Utilização do novo conjunto
 &NBSP;CLEAR SET("$Atual") // Apagar o conjunto
```

#### Ver também 

[INTERSECTION](intersection.md)  
[UNION](union.md)  