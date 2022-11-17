function factorialize(num) {
    // Paso 1. Crea una variable resultado que guarda num
    let result = num;
     
    // Si num = 0 O num = 1, el factorial devolverá 1
    if (num === 0 || num === 1) 
      return 1; 
  
    while (num > 1) { 
      num--; 
      result = result * num; 
    
    }
    
    return result;
  }
 