---
id: localized-string
title: Localized string
slug: /commands/localized-string
displayed_sidebar: docs
---

<!--REF #_command_.Localized string.Syntax-->**Localized string** ( *resNome* ) : Text<!-- END REF-->
<!--REF #_command_.Localized string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resNome | Text | &#8594;  | Nome do atributo recurso |
| Resultado | Text | &#8592; | Valor da string determinar por RecNome na linguagem atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Localized string.Summary-->O comando Localized string devolve o valor da string designada pelo atributo *resNome* para a linguagem atual.<!-- END REF-->

Este comando apenas funciona dentro de uma arquitetura XLIFF. Para maior informação sobre este tipo de arquitectura, por favor consulte a descripção de compatibilidade de XLIFF no manual de Desenho.  
  
**Nota:**o comando [Get database localization](get-database-localization.md) pode ser utilizado para pesquisar a linguagem utilizada pela aplicação.  

Passe em *recNome* o nome do recurso da string na qual deseja obter a tradução na linguagem objetivo atual.  
  
Lembre que XLIFF é diacrítica.

#### Exemplo 

Este é um extrato do arquivo .xlf: 

```XML
<file source-language="en-US" target-language="pt-BR">
[...]
   <trans-unit resname="Show on disk">
      <source>Show on disk</source>
      <target>Mostrar no disco</target>
   </trans-unit>
```

Depois da execução do seguinte comando:

```4d
 $valorPT:=Localized string("Show on disk")
```

... se a linguagem atual for Português, , $valorPT contém “Mostrar no disco”.

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável OK assume o valor 1\. Se *recNome* não for encontrado, o comando retorna uma string vazia e a variável OK assume o valor 0.

#### Ver também 

[Get database localization](get-database-localization.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 991 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


