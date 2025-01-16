---
id: set-database-localization
title: SET DATABASE LOCALIZATION
slug: /commands/set-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.SET DATABASE LOCALIZATION.Syntax-->**SET DATABASE LOCALIZATION** ( *codigoIdioma* {; *} )<!-- END REF-->
<!--REF #_command_.SET DATABASE LOCALIZATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| codigoIdioma | Text | &#8594;  | Seletor de idioma |
| * | Operador | &#8594;  | Escopo do comando |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET DATABASE LOCALIZATION.Summary-->O comando SET DATABASE LOCALIZATION é utilizado para modificar o idioma atual do banco de dados para a sessão atual.<!-- END REF-->  
  
A linguagem atual do banco de dados lhe permite especificar a pasta. lproj onde o programa irá procurar os itens localizados da aplicação (texto e imagens). Por padrão, 4D determina automaticamente a linguagem atual de acordo com o conteúdo da pasta de **Recursos** e do ambiente do sistema (veja a descrição do comando [Get database localization](get-database-localization.md)). SET DATABASE LOCALIZATION pode ser usado para modificar o idioma padrão atual.   
  
O comando não modifica a linguagem dos formulários que já estão carregados, somente os elementos exibidos depois que o comando é chamado terão a nova configuração em conta.   
  
Passe a linguagem a ser utilizada na aplicação em languageCode, expressa no padrão especificado pela RFC 3066, ISO639 e ISO3166\. Normalmente, você deve passar "fr" para França, "es" para o espanhol, "en-us" para Inglês Americano, e assim por diante. Para mais informações sobre esse padrão, consulte o Manual de Referência de Design.  
  
Por padrão, o comando se aplica a todos os bancos de dados e componentes que estão abertos, para todos os processos. O parâmetro opcional \*, se fornecido, especifica que o comando deve aplicar apenas ao banco de dados que o chamou. Este parâmetro pode ser utilizado mais especificamente para especificar separadamente o idioma do banco de dados e de um componente.   
  
Se o comando foi executado corretamente, a variável de sistema OK é definido como 1, caso contrário, ela é definida como 0.  
  
**Nota**: de acordo com o RFC, o comando utiliza o "-" (traço) para separar o código da linguagem e o código de região, por exemplo "fr-ca" ou "en-us". Por outro lado, a pasta "lproj" da pasta de Recursos usa o "\_" (sublinhado), por exemplo "fr\_ca.lproj" ou "en\_us.lproj".   
  
**4D Server**: com 4D Server, os idiomas disponíveis são aqueles localizados na máquina remota que chamou o comando. Você deve se certificar de que as pastas de recursos estejam sincronizadas.

#### Exemplo 1 

Nós queremos definir o francês como o idioma da interface:

```4d
 SET DATABASE LOCALIZATION("fr")
```

#### Exemplo 2 

A interface do seu aplicativo usa a string estática ":xliff:shopping". Os arquivos XLIFF contêm mais particularmente as seguintes informações:

* Pasta FR:  
```XML  
 <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>Faire les courses</target>  
</trans-unit>  
```
* Pasta FR\_CA folder:  
```XML  
 <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>Magasiner</target>  
</trans-unit>  
```

```4d
 SET DATABASE LOCALIZATION("fr")
  //the string ":xliff:shopping" displays "Faire les courses"
 SET DATABASE LOCALIZATION("fr-ca")
  //the string ":xliff:shopping" displays "Magasiner"
```

#### Ver também 

[Get database localization](get-database-localization.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1104 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


