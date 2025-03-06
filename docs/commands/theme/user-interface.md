---
id: user-interface
title: About User Interface
---
||
|---|
|**BEEP**<br/>The BEEP command causes the PC or Macintosh to generate a beep.|
|**Caps lock down**  : Boolean<br/>Caps lock down returns TRUE if the Caps Lock key is pressed.|
|**Focus object**  : Pointer<br/>This command is kept only for compatibility reasons.|
|**Get Application color scheme** {( * )} : Text<br/>The **Get Application color scheme** command returns the name of the actual color scheme in use at the application level.|
|**GET FIELD TITLES** ( *aTable* ; *fieldTitles* ; *fieldNums* )<br/>The **GET FIELD TITLES** command fills the *fieldTitles* and *fieldNums* arrays with the names and numbers of database fields for the desired *aTable*.|
|**GET TABLE TITLES** ( *tableTitles* ; *tableNums* )<br/>The **GET TABLE TITLES** command fills the *tableTitles* and *tableNums* arrays with the names and numbers of database tables defined in the Structure window or using the [SET TABLE TITLES](set-table-titles.md) command.|
|**HIDE MENU BAR**<br/>The HIDE MENU BAR command makes the menu bar invisible.|
|**Macintosh command down**  : Boolean<br/>**Macintosh command down** returns TRUE if the Macintosh command key is pressed.|
|**Macintosh control down**  : Boolean<br/>**Macintosh control down** returns TRUE if the Macintosh Control key is pressed.|
|**Macintosh option down**  : Boolean<br/>**Macintosh option down** returns TRUE if the Macintosh Option key is pressed.|
|**MOUSE POSITION** ( *mouseX* ; *mouseY* ; *mouseButton* {; *} )<br/>The MOUSE POSITION command returns the current state of the mouse.|
|**PLAY** ( *objectName* {; *async*} )<br/>The **PLAY** command plays sound or multimedia files.|
|**Pop up menu** ( *contents* {; *default* {; *xCoord* ; *yCoord*}} )  : Integer<br/>The **Pop up menu** command displays a pop-up menu at the current location of the mouse.|
|**POST CLICK** ( *mouseX* ; *mouseY* {; *process*} {; *} )<br/>The POST CLICK command simulates a mouse click.|
|**POST EVENT** ( *what* ; *message* ; *when* ; *mouseX* ; *mouseY* ; *modifiers* {; *process*} )<br/>The **POST EVENT** command simulates a keyboard or mouse event.|
|**POST KEY** ( *code* {; *modifiers* {; *process*}} )<br/>The **POST KEY** command simulates a keystroke.|
|**REDRAW** ( *object* )<br/>When you use a method to change the value of a field displayed in a subform, you must execute REDRAW to ensure that the form is updated.|
|**SET ABOUT** ( *itemText* ; *method* )<br/>The **SET ABOUT** command changes the **About 4D** menu command in the **Help** menu (Windows) or in the **Application** menu (macOS) menu to *itemText*.|
|**SET APPLICATION COLOR SCHEME** ( *colorScheme* )<br/>The **SET APPLICATION COLOR SCHEME** command defines the color scheme to use at the application level for the current session.|
|**SET CURSOR** {( *cursor* )}<br/>The SET CURSOR command changes the mouse cursor to the system cursor whose ID number you pass in *cursor*.|
|**SET FIELD TITLES** ( *aTable* ; *fieldTitles* ; *fieldNumbers* {; *} )<br/>**SET FIELD TITLES** lets you mask, rename, and reorder the fields of the table passed in *aTable* when they appear in standard 4D dialog boxes, such as the Query editor, within the Application environment (i.e. when the startup mode is **Application**, or after you select **Test application** in the **Run** menu).|
|**SET TABLE TITLES** {( *tableTitles* ; *tableNumbers* {; *})}<br/>**SET TABLE TITLES** lets you mask, rename, and reorder the tables of your database that appear in standard 4D dialog boxes within the Application environment (i.e. when the startup mode is **Application**, or after you select **Test application** in the **Run** menu).|
|**Shift down**  : Boolean<br/>Shift down returns TRUE if the Shift key is pressed.|
|**SHOW MENU BAR**<br/>The SHOW MENU BAR command makes the menu bar visible.|
|**Windows Alt down**  : Boolean<br/>**Windows Alt down** returns TRUE if the Windows Alt key is pressed.|
|**Windows Ctrl down**  : Boolean<br/>**Windows Ctrl down** returns TRUE if the Windows Ctrl key is pressed.|
