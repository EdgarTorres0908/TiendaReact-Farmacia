const pharmacyProducts = [
    // Antialérgicos
    { 
      id: '1', 
      name: 'Loratadina 10mg', 
      price: 12, 
      category: 'Antialérgico', 
      img: 'https://example.com/loratadina.jpg', 
      stock: 40, 
      description: 'Medicamento antihistamínico para tratar alergias como rinitis y urticaria.'
    },
    { 
      id: '2', 
      name: 'Cetirizina 10mg', 
      price: 15, 
      category: 'Antialérgico', 
      img: 'https://example.com/cetirizina.jpg', 
      stock: 30, 
      description: 'Medicamento antihistamínico para aliviar síntomas de alergias como picazón y estornudos.'
    },
    { 
      id: '3', 
      name: 'Desloratadina 5mg', 
      price: 18, 
      category: 'Antialérgico', 
      img: 'https://example.com/desloratadina.jpg', 
      stock: 25, 
      description: 'Medicamento antihistamínico de segunda generación para aliviar síntomas de alergias.'
    },
  
    // Antibióticos
    { 
      id: '4', 
      name: 'Amoxicilina 500mg', 
      price: 20, 
      category: 'Antibiótico', 
      img: 'https://example.com/amoxicilina.jpg', 
      stock: 35, 
      description: 'Antibiótico de amplio espectro para tratar infecciones bacterianas como la amigdalitis.'
    },
    { 
      id: '5', 
      name: 'Azitromicina 500mg', 
      price: 25, 
      category: 'Antibiótico', 
      img: 'https://example.com/azitromicina.jpg', 
      stock: 20, 
      description: 'Antibiótico macrólido utilizado para tratar infecciones respiratorias y de la piel.'
    },
    { 
      id: '6', 
      name: 'Ciprofloxacino 500mg', 
      price: 22, 
      category: 'Antibiótico', 
      img: 'https://example.com/ciprofloxacino.jpg', 
      stock: 28, 
      description: 'Antibiótico fluoroquinolona utilizado para tratar infecciones bacterianas como la cistitis.'
    },
  
    // Analgésicos
    { 
      id: '7', 
      name: 'Ibuprofeno 400mg', 
      price: 10, 
      category: 'Analgésico', 
      img: 'https://example.com/ibuprofeno.jpg', 
      stock: 50, 
      description: 'Medicamento antiinflamatorio y analgésico para aliviar el dolor y la fiebre.'
    },
    { 
      id: '8', 
      name: 'Paracetamol 500mg', 
      price: 8, 
      category: 'Analgésico', 
      img: 'https://example.com/paracetamol.jpg', 
      stock: 45, 
      description: 'Analgésico y antipirético utilizado para aliviar dolores leves y moderados.'
    },
    { 
      id: '9', 
      name: 'Diclofenaco 50mg', 
      price: 15, 
      category: 'Analgésico', 
      img: 'https://example.com/diclofenaco.jpg', 
      stock: 40, 
      description: 'Antiinflamatorio no esteroideo (AINE) utilizado para aliviar dolores y reducir la inflamación.'
    }
  ];

  export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}