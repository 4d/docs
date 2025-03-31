---
id: edit-formula
title: EDIT FORMULA
slug: /commands/edit-formula
displayed_sidebar: docs
---

<!--REF #_command_.EDIT FORMULA.Syntax-->**EDIT FORMULA** ( *tabela* ; *formula* )<!-- END REF-->
<!--REF #_command_.EDIT FORMULA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a mostrar por padrão no editor de fórmulas |
| formula | Text | &#8594;  | Variável que contem a fórmula a mostrar no editor de fórmulas ou "" somente para mostrar o editor |
| &#8592; | Fórmula validada pelo usuário |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EDIT FORMULA.Summary-->O comando **EDIT FORMULA** mostra o editor de fórmulas com o propósito de permitir ao usuário escrever ou modificar uma fórmula.<!-- END REF--> O editor contém ao abrir:

* na lista da esquerda, os campos da tabela passados no parâmetro *tabela*,
* na área de fórmula, a fórmula contida na variável *formula*. Se passa uma cadeia vazia em *formula*, o editor é mostrado sem fórmula.

O usuário pode modificar e guardar a *formula* mostrada. Também é possível escrever ou carregar uma nova fórmula. Entretanto, se o usuário valida a caixa de diálogo, a variável de sistema OK toma o valor 1 e a variável *formula* contém a fórmula definida pelo usuário. Se o usuário cancela a fórmula, a variável sistema OK toma o valor 0 e a variável *formula* não muda. 

**Nota:** 

* por padrão, o acesso aos métodos e aos comandos está restrito para os usuários (exceto para o Desenhista (designer) e Administrador, em bancos de dados criadas com 4D 2004.4 e posteriores). Quando este mecanismo estiver ativado, você deve designar explicitamente os elementos acessíveis aos usuários utilizando o comando [SET ALLOWED METHODS](../commands/set-allowed-methods.md). Se a *formula* chama métodos que não foram autorizados previamente no editor de fórmulas utilizando o comando [SET ALLOWED METHODS](../commands/set-allowed-methods.md), é gerado um erro de sintaxe e não poderá validar a caixa de diálogo.
* O editor de fórmula não está associado com qualquer barra de menu por padrão. É preciso instalar um menu padrão Edit no processo de chamada se quiser que os usuários possam se beneficiar de atalhos cortar/copiar/pegar no editor de fórmula.
* A estrutura virtual definida pelos comandos [SET TABLE TITLES](set-table-titles.md) e [SET FIELD TITLES](set-field-titles.md) (se houver) não pode ser usada na variável fórmula - nem será usada por 4D na variável retornada. A estrutura virtual é usada apenas na caixa de diálogo editor Fórmula. 

Lembre que quando se valida a caixa de diálogo, o comando não executa a *formula*; só valida e atualiza o conteúdo da variável. Se quer executar a *formula*, deve utilizar o comando [EXECUTE FORMULA](execute-formula.md) . 

#### Exemplo 

Visualização do editor de fórmulas com a tabela \[Empregados\] e sem uma fórmula introduzida previamente: 

```4d
 $minhaFormula:=""
 EDIT FORMULA([Empregados];$minhaFormula)
 If(OK=1)
    APPLY TO SELECTION([Empregados];EXECUTE FORMULA($minhaFormula))
 End if
```

#### Variáveis e conjuntos do sistema 

Se o usuário valida a caixa de diálogo, a variável de sistema OK toma o valor 1\. Se o usuário anula a caixa de diálogo, a variável sistema OK toma o valor 0.

#### Ver também 

[APPLY TO SELECTION](apply-to-selection.md)  
[EXECUTE FORMULA](execute-formula.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 806 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


