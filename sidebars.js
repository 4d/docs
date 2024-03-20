module.exports =
{
	docs: [
		{
			type: "category",
			label: "Getting Started",
			link: {
				type: 'generated-index',
				title: 'Getting Started',
				slug: '/category/getting-started',
				keywords: ['start'],
				image: '/img/docusaurus.png',
				},
			items: [
				"GettingStarted/installation",
				"GettingStarted/creating",
				"Notes/updates"
			],
		},
		{
			type: "category",
			label: "Core Development",
			link: {
				type: 'generated-index',
				title: 'Core Development',
				slug: '/category/core-development',
				keywords: ['core'],
				image: '/img/docusaurus.png',
				},
			items:
			[
				{
					type: "category",
					label: "Project Management",
					link: {
						type: 'doc',
						id: 'Project/overview',
					},
					items: [
						"Project/architecture",
						{
							type: "category",
							label: "Settings",
							link: {
								type: 'doc',
								id: 'settings/overview',
							},
							items: [
								"settings/general",
								"settings/interface",
								"settings/compiler",
								"settings/database",
								"settings/backup",
								"settings/client-server",
								"settings/web",
								"settings/sql",
								"settings/php",
								"settings/security",
								"settings/compatibility"
							],
						},
						"Project/date-time-formats",
						"Project/documentation",
					],
				},
								{
					type: "category",
					label: "Development Environment",
					items: [
						"Project/code-overview",
						"code-editor/write-class-method",
						"Project/compiler",
						{
							type: "category",
							label: "Debugging",
							link: {
								type: 'doc',
								id: 'Debugging/basics',
							},
							items: [
								"Debugging/debugger",
								"Debugging/breakpoints",
								"Debugging/debugging-remote",
							]
						},
						"Debugging/debugLogFiles",
					]
				},

				{
					type: "category",
					label: "ORDA",
					link: {
						type: 'doc',
						id: 'ORDA/overview',
					},
					items: [
						"ORDA/dsmapping",
						"ORDA/ordaClasses",
						"ORDA/entities",
						"ORDA/global-stamp",
						"ORDA/datastores",
						"ORDA/privileges",
						"ORDA/glossary"
					],
				},
				{
					type: "category",
					label: "Language",
					items: [
						{
							type: "category",
							label: "Concepts",
							items: [
										"Concepts/about",
										"Concepts/quick-tour",
										"Concepts/operators",
										{
											type: "category",
											label: "Data Types",
											link: {
													type: 'doc',
													id: "Concepts/data-types",
												},
											items: [
												"Concepts/blob",
												"Concepts/boolean",
												"Concepts/collection",
												"Concepts/date",
												"Concepts/null-undefined",
												"Concepts/number",
												"Concepts/object",
												"Concepts/picture",
												"Concepts/pointer",
												"Concepts/string",
												"Concepts/time",
												"Concepts/variant",
											],
										},
										"Concepts/variables",
										"Concepts/arrays",
										"Concepts/methods",
										"Concepts/parameters",
										"Concepts/shared",
										"Concepts/classes",
										"Concepts/commands",
										"Concepts/control-flow",
										"Concepts/error-handling",
										"Concepts/interpreted-compiled",
										"Concepts/components",
										"Concepts/plug-ins",
										"Concepts/identifiers",
										"Concepts/paths"
									],
						},
						{
							type: 'link',
							label: 'Commands', //
							href: 'https://doc.4d.com/4Dv20R4/4D/20-R4/4D-Language-Reference.100-6655756.en.html',
						},
						{
							type: "category",
							label: "Classes",
							items: [
								"API/overview",
								"API/BlobClass",
								"API/ClassClass",
								"API/CollectionClass",
								"API/CryptoKeyClass",
								"API/DataClassClass",
								"API/DataStoreClass",
								"API/EmailObjectClass",
								"API/EntityClass",
								"API/EntitySelectionClass",
								"API/FileClass",
								"API/FileHandleClass",
								"API/FolderClass",
								"API/FunctionClass",
								"API/HTTPRequestClass",
								"API/IMAPTransporterClass",
								"API/MailAttachmentClass",
								"API/POP3TransporterClass",
								"API/SessionClass",
								"API/SignalClass",
								"API/SMTPTransporterClass",
								"API/SystemWorkerClass",
								"API/WebFormClass",
								"API/WebFormItemClass",
								"API/WebServerClass",
								"API/WebSocketClass",
								"API/WebSocketConnectionClass",
								"API/WebSocketServerClass",
								"API/ZipArchiveClass",
								"API/ZipFileClass",
								"API/ZipFolderClass"
							],
							link: {
								type: 'generated-index',
								title: 'Class Functions',
								description: 'List of built-in 4D classes',
								slug: '/category/class-API-reference',
								keywords: ['class'],
								image: '/img/docusaurus.png',
							},
						},
					],
				},
				{
					type: "category",
					label: "Processes",
					items: [
						"Develop/processes",
						"Develop/preemptive",
					]
				},
				"Tags/transformation-tags",
				{
					type: "category",
					label: "Preferences",
					link: {
						type: 'doc',
						id: 'Preferences/overview',
					},
					items: [
						"Preferences/general",
						"Preferences/structure",
						"Preferences/forms",
						"Preferences/methods",
						"Preferences/shortcuts",
					]
				},
			],
		},
		{
			type: "category",
			label: "Administration",
			link: {
				type: 'generated-index',
				title: 'Administration',
				description: 'How to monitor your 4D applications',
				keywords: ['administration'],
				image: '/img/docusaurus.png',
				},
			items: [
				{
					type: "category",
					label: "4D Server Administration Window",
					link: {
						type: 'doc',
						id: 'ServerWindow/overview',
					},
					items: [
						"ServerWindow/monitor",
						"ServerWindow/users",
						"ServerWindow/processes",
						"ServerWindow/maintenance",
						"ServerWindow/application-server",
						"ServerWindow/sql-server",
						"ServerWindow/http-server",
						"ServerWindow/real-time-monitor",
						"ServerWindow/remote-admin",
					],
				},
				{
					type: "category",
					label: "Web Administration",
					link: {
						type: 'generated-index',
						title: 'Web Administration',
						description: '4D web tools for administrating and monitoring your applications.',
						slug: '/category/web-administration',
						keywords: ['web administration'],
						image: '/img/docusaurus.png',
					},
					items: [
						"Admin/webAdmin",
						"Admin/dataExplorer",
					],
				},
				{
					type: "doc",
					label: "Command Line Interface",
					id: "Admin/cli",
				},
				{
					type: "doc",
					label: "TLS Protocol",
					id: "Admin/tls",
				},
				{
					type: "doc",
					label: "Managing 4D Licenses",
					id: "Admin/licenses",
				},
				{
					type: "category",
					label: "MSC",
					link: {
						type: 'doc',
						id: 'MSC/overview',
					},
					items: [
						"MSC/information",
						"MSC/analysis",
						"MSC/verify",
						"MSC/backup",
						"MSC/compact",
						"MSC/rollback",
						"MSC/restore",
						"MSC/repair",
						"MSC/encrypt",
					],
				},
				{
					type: "category",
					label: "Backup and Restore",
					link: {
						type: 'doc',
						id: 'Backup/overview',
					},
					items: [
						"Backup/backup",
						"Backup/settings",
						"Backup/log",
						"Backup/restore",
					]
				},
				{
					type: "doc",
					label: "Data Collection",
					id: "Admin/data-collect",
				},
			],
		},
		{
			type: "category",
			label: "Extensions",
			link: {
					type: 'doc',
					id: 'Extensions/overview',
				},
			items: [
						{
							type: "category",
							label: "4D View Pro",
							link: {
								type: 'generated-index',
								title: '4D View Pro',
								slug: '/category/4d-view-pro',
								keywords: ['4D View Pro'],
								image: '/img/docusaurus.png',
								},
							items: [
								"ViewPro/getting-started",
								"ViewPro/configuring",
								"ViewPro/formulas",
								"ViewPro/method-list",
								"ViewPro/classes",
								"ViewPro/advanced-programming"
									]
							},
						{
						  type: 'link',
						  label: '4D Write Pro', // The link label
						  href: 'https://doc.4d.com/4Dv20R4/4D/20-R4/4D-Write-Pro-Reference.100-6683440.en.html',
						},
						{
						  type: 'doc',
						  label: '4D Write Pro Interface', // The link label
						  id: "WritePro/writeprointerface",
						},
						{
						  type: 'link',
						  label: '4D Mobile App Server', // The link label
						  href: 'https://github.com/4d-go-mobile/4D-Mobile-App-Server',
						},
						{
						  type: 'link',
						  label: '4D NetKit', // The link label
						  href: 'https://github.com/4d/4D-NetKit',
						},
						{
						  type: 'link',
						  label: '4D Progress', // The link label
						  href: 'https://doc.4d.com/4Dv20R4/4D/20-R4/4D-Progress.100-6790744.en.html',
						},
						{
						  type: 'link',
						  label: '4D SVG', // The link label
						  href: 'https://doc.4d.com/4Dv20R4/4D/20-R4/4D-SVG-Component.100-6790835.en.html',
						},
						{
						  type: 'link',
						  label: '4D Widgets', // The link label
						  href: 'https://doc.4d.com/4Dv20R4/4D/20-R4/4D-Widgets.100-6791484.en.html',
						},
						"Extensions/develop-components",
						"Extensions/develop-plug-ins",

				]
			},
		{
			type: "category",
			label: "Web Applications",
			link: {
				type: 'generated-index',
				title: 'Web Applications',
				description: 'Guides for developing Web applications with 4D',
				keywords: ['web applications'],
				image: '/img/docusaurus.png',
				},
			items: [
				{
					type: "category",
					label: "Web Server",
					link: {
						type: 'doc',
						id: 'WebServer/webServer',
					},
					items: [
						"WebServer/webServerConfig",
						"WebServer/webServerAdmin",
						"WebServer/webServerObject",
					],
				},
				{
					type: "category",
					label: "Web Development",
					link: {
						type: 'doc',
						id: 'WebServer/gettingStarted',
					},
				items: [
						"WebServer/templates",
						"WebServer/httpRequests",
						"WebServer/allowProject",
						"WebServer/errorPages",
						"WebServer/authentication",
						"WebServer/sessions",
						"WebServer/preemptiveWeb",
						"WebServer/qodly-studio"
					],
				},
				{
					type: "category",
					label: "REST Server",
					link: {
						type: 'generated-index',
						title: 'REST Server',
						description: 'Configuring the 4D REST Server and using the REST API.',
						keywords: ['REST server'],
						image: '/img/docusaurus.png',
					},
					items: [
						{
						type: "category",
						label: "Guides",
						link: {
							type: 'doc',
							id: 'REST/gettingStarted',
						},
						items: [
								"REST/configuration",
								"REST/authUsers",
								"REST/genInfo",
								"REST/manData",
								"REST/classFunctions",
								"REST/REST_requests",
							],
						},
						{
							type: "category",
							label: "API (general)",
							link: {
								type: 'generated-index',
								title: 'API (general)',
								description: 'REST API for global information',
								keywords: ['REST API'],
								image: '/img/docusaurus.png',
							},
							items: [
								"REST/catalog",
								"REST/directory",
								"REST/info",
								"REST/upload",
							],
						},
						{
							type: "category",
							label: "API (dataClass)",
							link: {
								type: 'generated-index',
								title: 'API (dataClass)',
								description: 'REST API for dataClass.',
								keywords: ['REST API'],
								image: '/img/docusaurus.png',
							},
							items: [
								"REST/dataClass",
								"REST/asArray",
								"REST/atomic_$atonce",
								"REST/attributes",
								"REST/binary",
								"REST/compute",
								"REST/distinct",
								"REST/entityset",
								"REST/expand",
								"REST/filter",
								"REST/format",
								"REST/imageformat",
								"REST/lock",
								"REST/method",
								"REST/orderby",
								"REST/querypath",
								"REST/queryplan",
								"REST/savedfilter",
								"REST/savedorderby",
								"REST/skip",
								"REST/timeout",
								"REST/top_$limit",
								"REST/version",
							],
						},
					],
				},
				],
		},

		{
					type: "category",
					label: "Desktop Applications",
					link: {
						type: 'generated-index',
						title: 'Desktop Applications',
						description: 'Guides for developing Desktop applications with 4D',
						keywords: ['desktop applications'],
						image: '/img/docusaurus.png',
						},

					items: [
						{
							type: "doc",
							label: "Client/Server",
							id: "Desktop/clientServer",
						},
				{
					type: "category",
					label: "Access Rights",
					link: {
						type: 'generated-index',
						title: 'Access Rights',
						description: 'Access control and user privileges for desktop applications.',
						slug: '/category/access-rights',
						keywords: ['access rights'],
						image: '/img/docusaurus.png',
					},
					items: [
						"Users/overview",
						"Users/editing",
					],
				},

						{
							type: "category",
							label: "Forms",
						link: {
							type: 'doc',
							id: 'FormEditor/forms',
						},
						items: [
								"FormEditor/stylesheets",
								"FormEditor/pictures",
								{
									type: "category",
									label: "Form Editor",
									link: {
										type: 'doc',
										id: 'FormEditor/formEditor',
									},
									items: [
										"FormEditor/macros",
										"FormEditor/objectLibrary"	]
								},
								{
									type: "category",
									label: "Form Properties",
									link: {
										type: 'doc',
										id: 'FormEditor/jsonReference',
									},
									items: [
								"FormEditor/action",
								"FormEditor/propertiesForm",
								"FormEditor/formSize",
								"FormEditor/markers",
								"FormEditor/menu",
								"FormEditor/print",
								"FormEditor/windowSize"
									],
								},
								{
									type: "category",
									label: "Form Objects",
									link: {
										type: 'doc',
										id: 'FormObjects/formObjectsOverview',
									},
									items: [
										"FormObjects/buttonOverview",
										"FormObjects/buttonGridOverview",
										"FormObjects/checkboxOverview",
										"FormObjects/comboBoxOverview",
										"FormObjects/dropdownListOverview",
										"FormObjects/groupBox",
										"FormObjects/inputOverview",
										"FormObjects/listOverview",
										"FormObjects/listboxOverview",
										"FormObjects/pictureButtonOverview",
										"FormObjects/picturePopupMenuOverview",
										"FormObjects/pluginAreaOverview",
										"FormObjects/progressIndicator",
										"FormObjects/radiobuttonOverview",
										"FormObjects/ruler",
										"FormObjects/shapesOverview",
										"FormObjects/spinner",
										"FormObjects/splitters",
										"FormObjects/staticPicture",
										"FormObjects/stepper",
										"FormObjects/subformOverview",
										"FormObjects/tabControl",
										"FormObjects/text",
										"FormObjects/webAreaOverview",
										"FormObjects/viewProAreaOverview",
										"FormObjects/writeProAreaOverview"
									],
								},
								{
									type: "category",
									label: "Form Object Properties",
									link: {
										type: 'doc',
										id: 'FormObjects/propertiesReference',
									},
									items: [
										"FormObjects/propertiesAction",
										"FormObjects/propertiesAnimation",
										"FormObjects/propertiesAppearance",
										"FormObjects/propertiesBackgroundAndBorder",
										"FormObjects/propertiesCoordinatesAndSizing",
										"FormObjects/propertiesCrop",
										"FormObjects/propertiesDataSource",
										"FormObjects/propertiesDisplay",
										"FormObjects/propertiesEntry",
										"FormObjects/propertiesFooters",
										"FormObjects/propertiesGridlines",
										"FormObjects/propertiesHeaders",
										"FormObjects/propertiesHelp",
										"FormObjects/propertiesHierarchy",
										"FormObjects/propertiesListBox",
										"FormObjects/propertiesObject",
										"FormObjects/propertiesPicture",
										"FormObjects/propertiesPlugIns",
										"FormObjects/propertiesPrint",
										"FormObjects/propertiesRangeOfValues",
										"FormObjects/propertiesResizingOptions",
										"FormObjects/propertiesScale",
										"FormObjects/propertiesSubform",
										"FormObjects/propertiesText",
										"FormObjects/propertiesTextAndPicture",
										"FormObjects/propertiesWebArea"
									],
								},
								{
									type: "category",
									label: "Form Events",
									link: {
										type: 'doc',
										id: 'Events/overview',
									},
									items: [
										"Events/onActivate",
										"Events/onAfterEdit",
										"Events/onAfterKeystroke",
										"Events/onAfterSort",
										"Events/onAlternativeClick",
										"Events/onBeforeDataEntry",
										"Events/onBeforeKeystroke",
										"Events/onBeginDragOver",
										"Events/onBeginUrlLoading",
										"Events/onBoundVariableChange",
										"Events/onClicked",
										"Events/onCloseBox",
										"Events/onCloseDetail",
										"Events/onCollapse",
										"Events/onColumnMoved",
										"Events/onColumnResize",
										"Events/onDataChange",
										"Events/onDeactivate",
										"Events/onDeleteAction",
										"Events/onDisplayDetail",
										"Events/onDoubleClicked",
										"Events/onDragOver",
										"Events/onDrop",
										"Events/onEndUrlLoading",
										"Events/onExpand",
										"Events/onFooterClick",
										"Events/onGettingFocus",
										"Events/onHeader",
										"Events/onHeaderClick",
										"Events/onLoad",
										"Events/onLoadRecord",
										"Events/onLongClick",
										"Events/onLosingFocus",
										"Events/onMenuSelected",
										"Events/onMouseEnter",
										"Events/onMouseLeave",
										"Events/onMouseMove",
										"Events/onMouseUp",
										"Events/onOpenDetail",
										"Events/onOpenExternalLink",
										"Events/onOutsideCall",
										"Events/onPageChange",
										"Events/onPlugInArea",
										"Events/onPrintingBreak",
										"Events/onPrintingDetail",
										"Events/onPrintingFooter",
										"Events/onResize",
										"Events/onRowMoved",
										"Events/onRowResize",
										"Events/onScroll",
										"Events/onSelectionChange",
										"Events/onTimer",
										"Events/onUnload",
										"Events/onUrlFiltering",
										"Events/onUrlLoadingError",
										"Events/onUrlResourceLoading",
										"Events/onValidate",
										"Events/onVpRangeChanged",
										"Events/onVpReady",
										"Events/onWindowOpeningDenied"
									],
								},



							],
						},

						{
							type: "category",
							label: "Menus",
							link: {
								type: 'doc',
								id: 'Menus/overview',
							},
							items: [
								"Menus/creating",
								"Menus/properties",
								"Menus/bars",
								"Menus/sdi"
							],
						},
						{
							type: "doc",
							label: "User Settings",
							id: "Desktop/user-settings",
						},
						{
							type: "doc",
							label: "Build Application",
							id: "Desktop/building"
						}
					]
				},
				{
					type: "category",
					label: "Mobile Applications",
					items: [
						{
						  type: 'link',
						  label: 'Go Mobile', // The link label
						  href: 'https://developer.4d.com/go-mobile/', // The external URL
						},
						{
						  type: 'link',
						  label: '4D for iOS (archive)', // The link label
						  href: 'https://developer.4d.com/4d-for-ios', // The external URL
						}
					],
				},

	 ]
}
