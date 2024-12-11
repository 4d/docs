---
id: set-external-data-path
title: SET EXTERNAL DATA PATH
slug: /commands/set-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.SET EXTERNAL DATA PATH.Syntax-->**SET EXTERNAL DATA PATH** ( *aCampo* ; *rota* )<!-- END REF-->
<!--REF #_command_.SET EXTERNAL DATA PATH.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aCampo | Text, Blob, Picture | &#8594;  | Campo para definir o local de armazenamento |
| rota | Text, Integer | &#8594;  | Caminho e nome do arquivo d armazenamento externo ou0=usar definição da estrutura1=usar pasta padrão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET EXTERNAL DATA PATH.Summary-->* O comando **SET EXTERNAL DATA PATH**, define ou modifica, para o atual registro, a localização do armazenamento externo para o campo *aCampo* passado como parâmetro.<!-- END REF-->

Com 4D é possível salvar campos do tipo Texto, BLOB e Imagem fora do arquivo de dados. Para uma descrição completa desta funcionalidade, consulte o Manual de Desenho 4D.

A configuração definida por este comando somente é aplicada quando o registro atual é salvo no disco. Se o atual registro é cancelado, o comando não faz nada. Parâmetros de armazenamento estabelecidos na estrutura do aplicativo não são modificadas.

Em *rota*, pode passar um nome de rota padrão ou uma constante designando uma localização automática:

* **Rota padrão ao arquivo**  
Neste caso, você utiliza armazenamento externo no "modo padrão." Algumas funções do banco de dados 4D não estão disponíveis automaticamente neste modo (veja o Manual de Desenho 4D), em especial você deve gerenciar a criação ou modificação dos arquivos você mesmo.  
Você pode passar uma rota relativa ao arquivo de dados ou uma rota absoluta, incluindo o nome e a extensão do arquivo de armazenamento. Deverá usar a sintaxe do sistema. Para definir uma rota relativa, passar "../" (no Windows) ou "..:" (OS X) no início da string. Poderá designar qualquer pasta, incluindo a pasta padrão dos arquivos externos do banco de dados (nomeBanco.DadosExternos) - Neste caso, os arquivos de backup do banco de dados são incluídos quando o banco de dados é salvo.  
O arquivo designado pelo parâmetro *rota* deve existir ser acessível quando o comando for executado. Se a rota for inválida (uma pasta ou um arquivo não existirem), um erro é retornado só nos casos onde rota foi definido como um absoluto. Quando uma rota relativa foi especificada, deve ter certeza de sua validez, já que não é retornado um erro se o arquivo não for encontrado.  
Se você salvar os dados externos na mesma pasta que o arquivo de dados ou uma das suas pastas internas, 4D considera que o caminho especificado é relativo ao arquivo de dados e mantêm o link mesmo quando a pasta do arquivo de dados for movida ou renomeada.  
Note que isto significa que é possível "compartir" o mesmo arquivo externo entre vários registros. Quaisquer que sejam as mudanças feitas ao arquivo externo, estão disponíveis em todos os registros. Neste caso, se muitos processos podem escrever nos mesmos campos ao mesmo tempo, deverá ter cuidado a fim de prevenir acessos simultâneos através de semáforos, para não correr o risco de danificar os arquivos externos.
* **Locais automáticos**  
Você pode designar dois locais automáticos, fazendo uso das seguintes constantes, as quais podem ser verificadas no tema *Manutenção do arquivo de dados*:  

| Constante                | Tipo          | Valor | Comentário                                                                                                                                                                                                                                             |  
| ------------------------ | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |  
| Use default folder       | Inteiro longo | 1     | Os dados de campo passados como um parâmetro serão armazenados na pasta padrão chamado *nomBase.ExternalData* e colocados ao lado do arquivo de dados. Neste modo, os dados externos são geridos por 4D como se estivessem dentro do arquivo de dados. |  
| Use structure definition | Inteiro longo | 0     | 4D usará os parâmetros definidos na estrutura para o armazenamento do campo (consulte o manual *Modo Estrutura*). Se você passar de um armazenamento externo a armazenamento interno, o arquivo externo não é excluído.                                |

Quando esse comando for executado, 4D automaticamente mantém o link entre o campo do registro e o arquivo em disco. Você não precisa executar o comando de novo (exceto se você precisar mudar a *rota*). Se 4D não puder acessar mais os dados do campo (arquivo de armazenamento renomeado, apagado, rota modificada, etc), o campo fica vazio, mas não gera um erro.

**Nota:** O comandoSET EXTERNAL DATA PATH só pode ser executado numa máquina 4D local ou num servidor 4D. Não faz nada quando for executado numa máquina 4D remota.

#### Exemplo 

Se você deseja guardar o conteúdo de um arquivo existente no campo imagem, armazenado fora dos dados, na pasta do banco de dados:

```4d
 CREATE RECORD([Photos])
 [Photos]Name:="Paris.png"
 SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)
  //"/custom/Paris.png" deve existir ao lado do arquivo de estrutura
 SAVE RECORD([Photos])
```

#### Ver também 

[Get external data path](get-external-data-path.md)  
[RELOAD EXTERNAL DATA](reload-external-data.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1134 |
| Thread-seguro | &check; |


