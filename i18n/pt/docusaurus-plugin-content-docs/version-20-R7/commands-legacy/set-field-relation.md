---
id: set-field-relation
title: SET FIELD RELATION
slug: /commands/set-field-relation
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD RELATION.Syntax-->**SET FIELD RELATION** ( tabelaN | campoN ; *um* ; *muitos* )<!-- END REF-->
<!--REF #_command_.SET FIELD RELATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabelaN &#124; campoN | Tabela, Campo | &#8594;  | Tabela de início das relações ou Campo de início da relação |
| um | Integer | &#8594;  | Estado da relação Muitos a Um a partir do campo ou das relações Muitos a Um da tabela |
| muitos | Integer | &#8594;  | Estado da relação Um a Muitos a partir do campo ou das relações Um a Muitos da tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET FIELD RELATION.Summary-->O comando SET FIELD RELATION permite definir separadamente o estado automático/manual de cada relação do banco para o processo atual, sem considerar seu estado inicial definido no ambiente Desenho na janela de propriedades das relações.<!-- END REF-->

Passe no primeiro parâmetro, um nome de tabela ou campo:

* Se passa um nome de campo (*campoN*), o comando se aplicará unicamente à relação a partir do campo Muitos especificado.
* Se passa um nome de tabela (*tabelaN*), o comando se aplicará a todas as relações a partir da tabela Muitos especificada.
* Se não houver nenhuma relação a partir do campo *campoN* ou da tabela *tabelaN*, os parâmetros *um* e *muitos* devolvem 0, se gera o erro de sintaxe No. 16 (“O campo não tem relação”) e a variável sistema OK toma o valor 0\.
Passe nos parâmetros *um* e *muitos*, os valores que indicam o cambio de estado automático/manual a aplicar respectivamente a(s) relação(es) de tipo Muitos a Um e Um a Muitos. Pode utilizar as constantes do tema “*Relações*”:  
* Do not modify (0) = Não modificar o estado atual da(s) relação(es).
* Structure configuration (1) = Utilizar a configuração definida para a(s) relação(es) na janela de estrutura da aplicação.
* Manual (2) = Transformar em manuais as relações no processo atual.
* Automatic (3) = Transformar automáticas as relações no processo atual.
**Nota:** as mudanças realizadas com este comando só aplicam ao processo atual. A configuração das relações definida utilizando as opções da janela de propriedades da relação não é modificada.  
  
**Note**: Se passar True ao comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md) durante a mesma sessão, as chamadas ao comando SET FIELD RELATION se ignoram, sem importar se estão localizadas antes ou depois de [SET AUTOMATIC RELATIONS](set-automatic-relations.md). Para "bloquear" o modo automático e ter em conta chamadas a SET FIELD RELATION, passe False a [SET AUTOMATIC RELATIONS](set-automatic-relations.md).

#### Exemplo 

I código abaixo permite configurações úteis apenas no editor de Relatório Rápido:  
  
SET AUTOMATIC RELATIONS(False;False) \`Inicialização das relações  
//\`Só serão utilizadas as seguintes relações   
SET FIELD RELATION(\[Faturas\]ID\_Cliente;Automatic;Automatic)  
SET FIELD RELATION(\[Linha\_Fatura\]ID\_Fatura;Automatic;Automatic)  
QR REPORT(\[Faturas\];Char(1))\[#/code4D\]

#### Ver também 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  