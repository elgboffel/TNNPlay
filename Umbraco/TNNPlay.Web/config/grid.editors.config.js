[
    {
        "name": "Rich text editor",
        "alias": "rte",
        "view": "rte",
        "icon": "icon-article"
    },
    {
        "name": "Macro",
        "alias": "macro",
        "view": "macro",
        "icon": "icon-settings-alt"
    },
    {
        "name": "Embed",
        "alias": "embed",
        "view": "embed",
        "icon": "icon-movie-alt color-red"
    },
    {
        "name": "Carousel",
        "alias": "carousel",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-picture color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Karousel",
                    "alias": "carousel",
                    "propretyType": {},
                    "dataType": "5d9998f2-4355-4141-9457-ad6df51c8ea7"
                }
            ],
            "expiration": null,
            "frontView": ""
        }
    },
    {
        "name": "Factbox",
        "alias": "factbox",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-notepad color-yellow",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Kort Lokation",
                    "alias": "mapLocation",
                    "propretyType": {},
                    "dataType": "10cce73a-733d-412b-bda5-ce80c22123ae"
                },
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Content",
                    "alias": "rte",
                    "propretyType": {},
                    "dataType": "3e091be8-a6d8-4db2-930b-99add0475f77"
                },
                {
                    "name": "Faktaboks Position",
                    "alias": "factboxPosition",
                    "propretyType": {},
                    "dataType": "30fb23d2-2f02-40e6-b0e3-8f04780f282f"
                },
                {
                    "name": "Vælg Faktaboks",
                    "alias": "pickFactbox",
                    "propretyType": {},
                    "dataType": "9c9dd57b-1e80-41d8-860e-d8b11d03f39d",
                    "description": "Genbrug en faktaboks. Hvis valgt, vil den overskrive de andre inputfelter."
                }
            ],
            "renderInGrid": "1",
            "expiration": null,
            "frontView": ""
        }
    },
    {
        "name": "Spot",
        "alias": "spot",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-lightbulb-active color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Content Layout",
                    "alias": "contentLayout",
                    "propretyType": {},
                    "dataType": "5c9234bc-4097-45c8-bed8-cdd2afa23f8f",
                    "description": "Choosing a layout will enable the content to be centered to the right or left."
                },
                {
                    "name": "Enable Overlay",
                    "alias": "enableOverlay",
                    "propretyType": {},
                    "dataType": "92897bc6-a5f3-4ffe-ae27-f2e7e33dda49",
                    "description": "Enabling this will add a dark transparent overlay to the image. This way the text will be more visible."
                },
                {
                    "name": "Media",
                    "alias": "Media",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
                },
                {
                    "name": "Trumpet",
                    "alias": "trumpet",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Content",
                    "alias": "content",
                    "propretyType": {},
                    "dataType": "54f514ae-137c-4647-a609-234450b8edf5"
                },
                {
                    "name": "Pick Call To Action",
                    "alias": "pickCallToAction",
                    "propretyType": {},
                    "dataType": "53b80b37-6912-4a48-8503-80347240755f"
                },
                {
                    "name": "Link",
                    "alias": "link",
                    "propretyType": {},
                    "dataType": "4e1aa3a9-c2f7-4423-9086-c48253554b2d"
                }
            ],
            "frontView": "",
            "renderInGrid": "0"
        }
    },
    {
        "name": "Image",
        "alias": "image",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-picture color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Billede",
                    "alias": "image",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
                },
                {
                    "name": "Billedtekst",
                    "alias": "imageText",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                }
            ],
            "renderInGrid": "1",
            "frontView": ""
        }
    },
    {
        "name": "Page List",
        "alias": "list",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-thumbnail-list color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                },
                {
                    "name": "Choose Root Page",
                    "alias": "contentPicker",
                    "propretyType": {},
                    "dataType": "fd1e0da5-5606-4862-b679-5d0cf3a52a59",
                    "description": "Descendant pages will be shown from the picked page."
                }
            ],
            "frontView": "",
            "renderInGrid": "0"
        }
    },
    {
        "name": "Employee List",
        "alias": "employeeList",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-users color-yellow",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Heading",
                    "alias": "headline",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Pick Employees",
                    "alias": "employeePicker",
                    "propretyType": {},
                    "dataType": "cf122230-f075-4fff-a952-5605f1b03659",
                    "description": "Choosen employees will be shown as a list."
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Inject Html",
        "alias": "injectHtml",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-script-alt color-red",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Html",
                    "alias": "html",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Quote",
        "alias": "quote",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-quote",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Quote Position",
                    "alias": "quotePosition",
                    "propretyType": {},
                    "dataType": "30fb23d2-2f02-40e6-b0e3-8f04780f282f"
                },
                {
                    "name": "Quote",
                    "alias": "quote",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                },
                {
                    "name": "Byline",
                    "alias": "byline",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "frontView": "",
            "renderInGrid": "1"
        }
    },
    {
        "name": "Pick Speaker",
        "alias": "employee",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-umb-users color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Title",
                    "alias": "title",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Pick Employee",
                    "alias": "contentPicker",
                    "propretyType": {},
                    "dataType": "bb329145-266f-4914-ab10-510db1f804fd"
                },
                {
                    "name": "Layout",
                    "alias": "layout",
                    "propretyType": {},
                    "dataType": "5c9234bc-4097-45c8-bed8-cdd2afa23f8f"
                },
                {
                    "name": "Remove bottom spacing",
                    "alias": "removeBottomSpacing",
                    "propretyType": {},
                    "dataType": "92897bc6-a5f3-4ffe-ae27-f2e7e33dda49",
                    "description": "When this is enabled, the element will align with the underlying element. Meaning the spacing between them will be removed."
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Spot (Sidevælger)",
        "alias": "spotPicker",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-lightbulb-active color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Vælg Side",
                    "alias": "contentPicker",
                    "propretyType": {},
                    "dataType": "260b8432-d737-44e5-b758-14f2ccc2c9e4"
                }
            ],
            "frontView": "",
            "renderInGrid": "1"
        }
    },
    {
        "name": "Login",
        "alias": "login",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-unlocked color-red",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "frontView": "",
            "editors": [
                {
                    "name": "Fejlbesked",
                    "alias": "fejlbesked",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3",
                    "description": "Hvilken fejlmelding skal der komme."
                }
            ]
        }
    },
    {
        "name": "Vælg Video",
        "alias": "video",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-video color-red",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Vælg Video",
                    "alias": "videoPicker",
                    "propretyType": {},
                    "dataType": "a3eec30b-008f-452d-84f9-0a775be656c7"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Kort",
        "alias": "map",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-map-location color-red",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Rubrik",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Vælg Rod",
                    "alias": "contentPicker",
                    "propretyType": {},
                    "dataType": "fd1e0da5-5606-4862-b679-5d0cf3a52a59",
                    "description": "Ud fra den valgte side, vil alle underliggende sider, indeholdende et kort, få deres lokationer vist på et samlet kort."
                },
                {
                    "name": "Beskrivelse",
                    "alias": "description",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Statement",
        "alias": "statement",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-sound-medium color-orange",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Icon Image",
                    "alias": "iconImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
                },
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Content",
                    "alias": "content",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Announcement",
        "alias": "announcement",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-voice color-yellow",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Images",
                    "alias": "images",
                    "propretyType": {},
                    "dataType": "9dbbcbbb-2327-434a-b355-af1b84e5010a"
                },
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                },
                {
                    "name": "Pick Call To Action",
                    "alias": "pickCallToAction",
                    "propretyType": {},
                    "dataType": "53b80b37-6912-4a48-8503-80347240755f"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Quote With Icon",
        "alias": "quoteWithIcon",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-quote color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Icon Image",
                    "alias": "iconImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
                },
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Companies Banner",
        "alias": "companiesBanner",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-company color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                },
                {
                    "name": "Company Logos",
                    "alias": "companyLogos",
                    "propretyType": {},
                    "dataType": "9dbbcbbb-2327-434a-b355-af1b84e5010a"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Announcement with Spakers",
        "alias": "announcementWithSpakers",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-users color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Pick Speakers",
                    "alias": "speakersPicker",
                    "propretyType": {},
                    "dataType": "cf122230-f075-4fff-a952-5605f1b03659",
                    "description": "Pick in even numbers. 2, 4, 6. If not, nothing will be rendered."
                },
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                },
                {
                    "name": "Pick Page",
                    "alias": "pickPage",
                    "propretyType": {},
                    "dataType": "fd1e0da5-5606-4862-b679-5d0cf3a52a59",
                    "description": "Element will link to selected page."
                }
            ],
            "frontView": ""
        }
    }
]