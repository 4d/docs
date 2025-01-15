---
id: parse-formula
title: Parse formula
slug: /commands/parse-formula
displayed_sidebar: docs
---

<!--REF #_command_.Parse formula.Syntax-->**Parse formula** ( *formula* {; *opções*}{; *mensagemErro*} ) : Text<!-- END REF-->
<!--REF #_command_.Parse formula.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| formula | Text | &#8594;  | Fórmula de texto simples |
| opções | Integer | &#8594;  | Instruções para input/output |
| mensagemErro | Text | &#8592; | Mensagem de erro (string vazia se não houver erro) |
| Resultado | Text | &#8592; | Fórmula transformada (texto simples) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Parse formula.Summary-->A função **Parse formula** analisa a *fórmula* 4D, verifica sua sintaxe e devolve seu formulário normalizado.<!-- END REF--> Isto permite que a fórmula continue sendo válida no caso de que se mude o nome de uma linguagem 4D ou elemento de estrutura (comando, constante, tabela, campo ou0 Plugin 4D). 

**Parse formula** pode ser usada para avaliar e traduzir fórmulas da maneira abaixo:

* Os nomes reais de tabela/campo podem ser convertidos a nomes de estrutura\* virtual (nomes personalizados) ou equivalentes tokenizados \*\*
* Os equivalentes de tabela/campo tokenizados podem ser convertidos a nomes de estrutura virtual ou nomes reais de tabela/campo
* As estruturas virtuais podem ser convertidas a nomes reais de tabela/campo ou equivalentes simbólicos
* Os elementos de linguagem 4D podem ser convertidos a equivalentes de linguagem 4D tokenizados
* Os equivalentes da linguagem 4D tokenizados podem ser convertidos a elementos de linguagem 4D

**\*** **As estruturas virtuais são definidas utilizando os comandos [SET TABLE TITLES](set-table-titles.md) e [SET FIELD TITLES](set-field-titles.md) (\** **parâmetro requerido).* 

**\*\*** **Os equivalentes tokenizados são elementos* **de estrutura* *e da linguagem 4D em texto sem formato expressos ​​com a sintaxe do token, como é mostrado abaixo (consulte também* *Usar tokens em fórmulas):* 

```RAW
[Table:1]Field:1+String:C10(1)
```

Em *fórmula*, passe uma fórmula em texto sem formato. Pode usar nomes de estruturas reais ou virtuais, assim como equivalentes tokenizados.

Sem importar os tipos de nome utilizados em *fórmula*, como padrão **Parse formula** devolve a linguagem 4D real ou os nomes dos elementos da estrutura sem tokens de texto.

O parâmetro opcional *opções* lhe permite especificar como se expressa ou se devolve *fórmula* utilizando as constantes abaixo do tema *Fórmulas*. Pode combinar constantes para designar tanto o formato de entrada como o de saída da fórmula devolvida.

  
| Constante                          | Valor | Comentário                                                                                                                         |
| ---------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Formula in with virtual structure  | 1     | A fórmula é expressa utilizando uma estrutura virtual (nomes personalizados). Como padrão, a fórmula devolvida contém nomes reais. |
| Formula out with virtual structure | 2     | A fórmula devolvida deve conter nomes personalizados (virtual).                                                                    |
| Formula out with tokens            | 4     | A fórmula devolvida deve conter texto tokenizado (por exemplo: Cxx).                                                               |

  
O parâmetro opcional *mensagemE* *rro* receberá uma mensagem de erro se houver um erro de sintaxe em *fórmula*. Se não houver nenhum erro, será devolvido uma string vazia.

#### Exemplo 1 

```4d
 ARRAY TEXT($t1;1)
 ARRAY LONGINT($t2;1)
 $t1{1}:="Virtual table"
 $t2{1}:=1
 SET TABLE TITLES($t1;$t2;*)
 
 ARRAY TEXT($tf1;1)
 ARRAY LONGINT($tf2;1)
 $tf1{1}:="Virtual field"
 $tf2{1}:=2
 SET FIELD TITLES([Table_1];$tf1;$tf2;*)
 
  //Estrutura virtual para tabela e nome de campo equivalente
 $parsedFormula:=Parse formula("[Virtual table]Virtual field";Formula in with virtual structure;$errorMessage)
  //return [Table_1]Field_2
 
  //Nome de tabela e campo para equivalente de estrutura virtual
 $parsedFormula:=Parse formula("[Table_1]Field_2";Formula out with virtual structure;$errorMessage)
  //return [Virtual table]Virtual field
 
  //Tabela e nome de campo para o formulário tokenizado equivalente
 $parsedFormula:=Parse formula("String([Table_1]Field_2)";Formula out with tokens;$errorMessage)
  //return String:C10([Table_1:1]Field_2:2)
 
 
```

#### Exemplo 2 

```4d
  //pede ao usuário para digitar sua fórmula favorita
 $formula:=""
 EDIT FORMULA([Table_1];$formula)
 
  //salva a fórmula do usuário para uso posterior
 CREATE RECORD([users_preferences])
 $persistentFormula:=Parse formula($formula;Formula out with tokens)
 [users_preferences]formula:=$persistentFormula
 SAVE RECORD([users_preferences])
 
  //later: executa a fórmula previamente salva
 CREATE RECORD([Table_1])
 EXECUTE FORMULA([users_preferences]formula)
```

#### Ver também 

[Formula from string](formula-from-string.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
*Usar tokens em fórmulas*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1576 |
| Thread-seguro | &cross; |


