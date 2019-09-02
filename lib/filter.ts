export const edit = function (type: any, value: string) {
    let newValue = ''
    switch (type) {
        case 'H1':
            newValue = `# ${value}`;
            break;
        case 'H2':
            newValue = `## ${value}`
            break;
        case 'H3':
            newValue = `### ${value}`;
            break;
        case 'H4':
            newValue = `#### ${value}`
            break;
        case 'H5':
            newValue = `##### ${value}`;
            break;
        case 'H6':
            newValue = `###### ${value}`
            break;
        default: ;
    }
    return newValue
}