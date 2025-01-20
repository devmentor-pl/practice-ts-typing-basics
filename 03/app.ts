type Address = {
    street: string;
    city: string;
  };
  
  type Contacts = {
    phone: number;
    email: string;
  };
  
  function concatenate(a: string, b: string): string;
  function concatenate(a: number[], b: number[]): number[];
  function concatenate(a: Address, b: Contacts): string;
  
  function concatenate(a: unknown, b: unknown): string | number[] {
    if (typeof a === 'string' && typeof b === 'string') {
      return a + b; 
    } else if (Array.isArray(a) && Array.isArray(b)) {
      return [...a, ...b]; 
    } else if (typeof a === 'object' && a !== null && 'street' in a && typeof b === 'object' && b !== null && 'phone' in b) {
      const address = a as Address;
      const contacts = b as Contacts;
      return `Address: ${address.street}, ${address.city}; Phone: ${contacts.phone}, Email: ${contacts.email}`;
    }
    throw new Error('Invalid parameters!');
  }
  
 
  const address: Address = { street: 'Mała', city: 'Wroclaw' };
  const contacts: Contacts = { phone: 123456789, email: 'agnieszkadraganczyk@gmail.com' };
  
  console.log(concatenate('Hello, ', 'World!')); 
  console.log(concatenate([1, 2, 3], [4, 5, 6])); 
  console.log(concatenate(address, contacts)); 