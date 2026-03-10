# CPF Validator & Multiples of 3

This project contains a TypeScript utility script that provides two main functionalities: a Brazilian CPF (Tax ID) digit calculator and a tool to identify multiples of 3 within a specific range.

## 🚀 Features

* **CPF Digit Calculator:** Calculates the two verification digits (DV1 and DV2) for a given 9-digit CPF base.
* **Multiples of 3 Finder:** Identifies and lists all numbers divisible by 3 between two given integers.
* **TypeScript Implementation:** Written with type safety and clear logic.

## 🛠️ Logic Breakdown

### CPF Validation
The function `calcularDigitosCpf` follows the official Brazilian algorithm:
1.  Receives a 9-digit string.
2.  Calculates the first digit using a weighted sum (weights 10 to 2).
3.  Calculates the second digit using a weighted sum (weights 11 to 2), including the first calculated digit.
4.  Returns the complete 11-digit CPF.

### Multiples of 3
The function `imprimirMultiplosdeTres`:
1.  Determines the minimum and maximum between two provided numbers.
2.  Iterates through the range and checks for divisibility by 3 using the remainder operator (`%`).
3.  Outputs the result as a comma-separated list in the console.

## 💻 How to Run

1.  **Ensure you have Node.js and TypeScript installed.**
2.  **Compile and run the script:**
    ```bash
    npx ts-node main.ts
    ```

## 📝 Usage Examples

From the included tests in the code:

```typescript
// Calculate CPF digits
console.log(calcularDigitosCpf("891388350")); 
// Result: "RESULTADO: Validador CPF: 89138835037"

// List multiples of 3
imprimirMultiplosdeTres(0, 10); 
// Result: "RESULTADO: Multiplos de 3: 0, 3, 6, 9"
