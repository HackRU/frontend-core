const CONFIG = [
    {
        
        "module": "MODULE-A",
        "params": {
            "text": "This is module-a",
        },
        "children": [
            {
                "module": "MODULE-C",
                "params": {
                    "text":  "module c"
                },
                "children": []
            },
            {
                "module": "MODULE-B",
                "params": {
                    "text":  "module b"
                },
                "children": []
            },
            {
                "module": "MODULE-C",
                "params": {
                    "text":  "module c"
                },
                "children": []
            }
        ]
    },
    {
        "module": "MODULE-C",
        "params": {
            "text":  "module c"
        },
        "children": []
    },
    {
        "module": "MODULE-B",
        "params": {
            "text":  "module b"
        },
        "children": []
    },
    {
        "module": "MODULE-D",
        "params": {
            "text":  "parent"
        },
        "children": [
            {
                "module": "MODULE-D",
                "params": {
                    "text":  "child of parent"
                },
                "children": [
                    {
                        "module": "MODULE-D",
                        "params": {
                            "text":  "child of child"
                        },
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "module": "MODULE-E",
        "params": {
            "text":  "https://hackru.org/"
        },
        "children": [
            {
                "module": "MODULE-A",
                "params": {
                    "text":  "Link to HackRU"
                },
                "children": []
            }
        ]
    }
]

export default CONFIG