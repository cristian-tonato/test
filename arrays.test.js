import { arraypush } from "./arrays";

describe('Prueba funcion push', () => {

    describe('should lenttgh [1, 2, 3], 48', () => {
        test('Que ha agregado el 48 a la ultima posicion ', () => {
          const  param1 = [1, 2, 3]
          const param2 = 48
          const result = arraypush(param1,param2);
            
            expect(result).toBe(4)
            
        });
        
    });
    describe('should length [1, 2, 3], 48', () => {
        test('Que ha agregado el 48 a la ultima posicion', () => {
            const  param1 = [1, 2, 3]
          const param2 = 48
            arraypush(param1,param2);
            
            expect(param1[param1.length-1]).toBe(48)
        });
        
    });
    
});

describe('Prueba funcion pop', () => {
    const arr = [2, 3, 4, 5];
    let result;
    const expectedResult = 5;
        result = arraypop(arr);
  
    describe('should length [2, 3, 4, 5]', () => {
        test('deberia devolver 5', () => {
            expect(result).toBe(expectedResult);
        });
        test('deberia devolver ultimo elemento de array', () => {
            expect(arr).not.toBe(5);
        });
    })
});


describe('prueba funcion shift', () => {
    describe('Cuando recibimos [1, 2, 3]', () => {
        test('Deberia ser 1', () => {
            const param1 = arrayshift([1, 2, 3]);
            expect(param1).toBe(1);
        });
    });
    describe('Recibimos [1, 2, 3]', () => {
        test('Longuitud de length 2, 3', () => {
            let arr = [1, 2, 3];
            arrayshift(arr);
            expect(arr).toBe (2, 3);
        });
    });
});

