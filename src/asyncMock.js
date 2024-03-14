const products = [
    // Antialérgicos
    { 
      id: '1', 
      name: 'Loratadina 10mg', 
      price: 12, 
      category: 'Antialérgico', 
      img: 'https://www.laboratoriochile.cl/wp-content/uploads/2015/11/Loratadina_10MG_30C_BE.jpg', 
      stock: 40, 
      description: 'Medicamento antihistamínico para tratar alergias como rinitis y urticaria.'
    },
    { 
      id: '2', 
      name: 'Cetirizina 10mg', 
      price: 15, 
      category: 'Antialérgico', 
      img: 'https://www.mercadofarma.cl/cdn/shop/files/CetirizinaDiclorhidrato10mg30Comprimidosrecubiertos.webp?v=1697047500', 
      stock: 30, 
      description: 'Medicamento antihistamínico para aliviar síntomas de alergias como picazón y estornudos.'
    },
    { 
      id: '3', 
      name: 'Desloratadina 5mg', 
      price: 18, 
      category: 'Antialérgico', 
      img: 'https://www.farmaciasahumada.cl/dw/image/v2/BJVH_PRD/on/demandware.static/-/Sites-ahumada-master-catalog/default/dw06761bc4/images/products/89239/89239.jpg?sw=525&sh=525&sm=fit', 
      stock: 25, 
      description: 'Medicamento antihistamínico de segunda generación para aliviar síntomas de alergias.'
    },
  
    // Antibióticos
    { 
        id: '4', 
        name: 'Amoxicilina 500mg', 
        price: 20, 
        category: 'Antibiótico', 
        img: 'https://farmex.cl/cdn/shop/products/amoxicilina-500-mg-x-21-capsulas-mintlab-268506_grande.jpg?v=1692989471', 
        stock: 35, 
        description: 'Antibiótico de amplio espectro para tratar infecciones bacterianas como la amigdalitis.'
      },
      { 
        id: '5', 
        name: 'Azitromicina 500mg', 
        price: 25, 
        category: 'Antibiótico', 
        img: 'https://www.mercadofarma.cl/cdn/shop/files/Azitromicina500mg3Comprimidos.webp?v=1696438977', 
        stock: 20, 
        description: 'Antibiótico macrólido utilizado para tratar infecciones respiratorias y de la piel.'
      },
      { 
        id: '6', 
        name: 'Ciprofloxacino 500mg', 
        price: 22, 
        category: 'Antibiótico', 
        img: 'https://farmex.cl/cdn/shop/products/ciprofloxacino-500-mg-x-6-comprimidos-opko-854462_grande.webp?v=1692989595', 
        stock: 28, 
        description: 'Antibiótico fluoroquinolona utilizado para tratar infecciones bacterianas como la cistitis.'
      },
    
      // Analgésicos
      { 
        id: '7', 
        name: 'Ibuprofeno 400mg', 
        price: 10, 
        category: 'Analgésico', 
        img: 'https://www.mercadofarma.cl/cdn/shop/products/RC632_800x.jpg?v=1608675660', 
        stock: 50, 
        description: 'Medicamento antiinflamatorio y analgésico para aliviar el dolor y la fiebre.'
      },
      { 
        id: '8', 
        name: 'Paracetamol 500mg', 
        price: 8, 
        category: 'Analgésico', 
        img: 'https://profarcl.vtexassets.com/arquivos/ids/178403-800-auto?v=637835646030600000&width=800&height=auto&aspect=true', 
        stock: 45, 
        description: 'Analgésico y antipirético utilizado para aliviar dolores leves y moderados.'
      },
      { 
        id: '9', 
        name: 'Diclofenaco 50mg', 
        price: 15, 
        category: 'Analgésico', 
        img: 'https://www.novasalud.cl/media/catalog/product/cache/e24405f34b9e7681ae870ab933417430/d/i/diclofenaco_s_dico_50mg_10_comprimidos_con_recubierto_ent_rico.jpg', 
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