/// <mls shortName="index" project="102026" enhancement="_blank" folder="molecules/selectone" />

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