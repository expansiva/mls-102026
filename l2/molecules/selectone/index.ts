/// <mls fileReference="_102026_/l2/molecules/selectone/index.ts" enhancement="_102027_/l2/enhancementLit" />

export const widgetDefinition = {
    name: "selectone",
    description: "Widget that allows selecting a single item",
    properties: [
        {
            name: "list",
            type: "array",
            description: "List of available options",
            itemsType: "object"
        },
        {
            name: "selected",
            type: "number",
            description: "Index or ID of the selected item"
        }
    ]
}