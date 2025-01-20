"use strict";
function createTextField(field) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = field.placeholder || '';
    input.name = field.name;
    return input;
}
function createNumberField(field) {
    const input = document.createElement('input');
    input.type = 'number';
    if (field.min)
        input.min = field.min.toString();
    if (field.max)
        input.max = field.max.toString();
    input.name = field.name;
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
    select.name = field.name;
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
function validateForm(fields, formData) {
    const errors = [];
    fields.forEach(field => {
        const value = formData[field.name];
        if (field.required && (value === undefined || value === '')) {
            errors.push(`${field.label} is required.`);
        }
        if (field.type === 'number') {
            const numValue = Number(value);
            if (field.min && numValue < field.min) {
                errors.push(`${field.label} must be at least ${field.min}.`);
            }
            if (field.max && numValue > field.max) {
                errors.push(`${field.label} must be less than ${field.max}.`);
            }
        }
        if (field.type === 'select' && !value) {
            errors.push(`Please select a valid ${field.label}.`);
        }
    });
    return errors;
}
const fields = [
    { type: 'text', label: 'Name', name: 'name', placeholder: 'Enter your name', required: true },
    { type: 'number', label: 'Age', name: 'age', min: 18, max: 99, required: true },
    {
        type: 'select',
        label: 'Country',
        name: 'country',
        options: [
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' }
        ],
        required: true
    }
];
const form = document.createElement('form');
fields.forEach(field => {
    const input = createInputForField(field);
    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);
    const wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    form.appendChild(wrapper);
});
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
form.appendChild(submitButton);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {};
    fields.forEach(field => {
        const input = form.querySelector(`[name=${field.name}]`);
        if (input) {
            if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
                formData[field.name] = input.value;
                console.log(formData);
            }
        }
    });
    const errors = validateForm(fields, formData);
    if (errors.length > 0) {
        console.log('Form validation errors:', errors);
    }
    else {
        console.log('Form is valid:', formData);
    }
});
document.body.appendChild(form);
