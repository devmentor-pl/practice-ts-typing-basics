"use strict";
function createTextField(field) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = field.placeholder || '';
    return input;
}
function createNumberField(field) {
    const input = document.createElement('input');
    input.type = 'number';
    if (field.min)
        input.min = field.min.toString();
    if (field.max)
        input.max = field.max.toString();
    return input;
}
function createSelectField(field) {
    const select = document.createElement('select');
    field.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value.toString();
        optionElement.textContent = option.label;
        select.appendChild(optionElement);
    });
    return select;
}
function createInputForField(field) {
    switch (field.type) {
        case 'text':
            return createTextField(field);
        case 'number':
            return createNumberField(field);
        case 'select':
            return createSelectField(field);
        default:
            throw new Error(`Unsupported field type: ${field}`);
    }
}
// Example of using the function
const fields = [
    { type: 'text', label: 'Name', name: 'name', placeholder: 'Enter your name' },
    { type: 'number', label: 'Age', name: 'age', min: 18, max: 99 },
    { type: 'select', label: 'Country', name: 'country', options: [{ label: 'US', value: 'us' }, { label: 'Canada', value: 'ca' }] }
];
fields.forEach(field => {
    const input = createInputForField(field);
    document.body.appendChild(input); // Add the created input element to the page
});
