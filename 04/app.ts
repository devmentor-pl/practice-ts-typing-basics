
type FormFieldBase = {
    label: string;
    name: string;
    required?: boolean;
  };
  
type TextField = FormFieldBase & {
    type: 'text';
    placeholder?: string;
};
  
type NumberField = FormFieldBase & {
    type: 'number';
    min?: number;
    max?: number;
};
  
type SelectField = FormFieldBase & {
    type: 'select';
    options: { label: string; value: string | number }[];
};
  
type FormField = TextField | NumberField | SelectField;


function createTextField(field: TextField): HTMLInputElement {
    const input = document.createElement('input') as HTMLInputElement;
    input.type = 'text';
    input.placeholder = field.placeholder || '';
    return input;
  }
  
  function createNumberField(field: NumberField): HTMLInputElement {
    const input = document.createElement('input') as HTMLInputElement;
    input.type = 'number';
    if (field.min) input.min = field.min.toString();
    if (field.max) input.max = field.max.toString();
    return input;
  }
  
  function createSelectField(field: SelectField): HTMLSelectElement {
    const select = document.createElement('select') as HTMLSelectElement;
    field.options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value.toString();
      optionElement.textContent = option.label;
      select.appendChild(optionElement);
    });
    return select;
  }
  
  function createInputForField(field: FormField): HTMLElement {
    switch (field.type) {
      case 'text':
        return createTextField(field as TextField);
      case 'number':
        return createNumberField(field as NumberField);
      case 'select':
        return createSelectField(field as SelectField);
      default:
        throw new Error(`Unsupported field type: ${field}`);
    }
  }
  

  const fields: FormField[] = [
    { type: 'text', label: 'Name', name: 'name', placeholder: 'Enter your name' },
    { type: 'number', label: 'Age', name: 'age', min: 18, max: 99 },
    { type: 'select', label: 'Country', name: 'country', options: [{ label: 'US', value: 'us' }, { label: 'Canada', value: 'ca' }] }
  ];
  
  fields.forEach(field => {
    const input = createInputForField(field);
    document.body.appendChild(input); 
  });