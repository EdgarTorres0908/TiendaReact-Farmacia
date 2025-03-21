# TiendaReact-Farmacia

**TiendaReact-Farmacia** es una aplicación de comercio electrónico desarrollada con **React.js**. Permite a los usuarios explorar un catálogo de productos farmacéuticos, visualizar detalles y agregar productos al carrito.  

 **Este proyecto fue desarrollado como parte de un curso de React.js y actualmente permite solo la visualización del carrito, sin opción de modificar o eliminar productos.**  

---

## Tecnologías utilizadas

- **React.js** - Librería para la creación de interfaces.  
- **Vite** - Entorno de desarrollo rápido.  
- **Firebase Firestore** - Base de datos en la nube para gestionar los productos y pedidos.  
- **CSS Modules** - Estilos modulares para los componentes.  
- **React Router** - Navegación entre páginas.  
- **Context API** - Manejo global del carrito de compras.  

---

## Funcionalidades

**Catálogo de productos**: Lista de productos con imagen, precio y descripción.  
**Filtro por categoría**: Permite a los usuarios filtrar productos por tipo (analgésicos, antibióticos, etc.).  
**Detalle de productos**: Página con información detallada y opciones de compra.  
**Carrito de compras**: Permite **visualizar** los productos seleccionados antes de la compra (sin opción de modificar o eliminar).  
**Cálculo de total**: Muestra el precio total de los productos en el carrito.  
**Checkout**: Formulario donde el usuario ingresa sus datos antes de finalizar la compra.  

**Futuras mejoras**: Se planea agregar la opción de **modificar y eliminar productos del carrito** en versiones posteriores.  

---

## Instalación y ejecución

### **Paso 1: Clonar el repositorio**
```sh
git clone https://github.com/EdgarTorres0908/TiendaReact-Farmacia.git
cd TiendaReact-Farmacia

### **Paso 2: Instalar dependencias**
npm install

### **Paso 3: Configurar variables de entorno**
Crea un archivo .env.local en la raíz del proyecto y agrega las credenciales de Firebase:


VITE_API_KEY=TU_API_KEY
VITE_AUTH_DOMAIN=TU_AUTH_DOMAIN
VITE_PROJECT_ID=TU_PROJECT_ID
VITE_STORAGE_BUCKET=TU_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
VITE_APP_ID=TU_APP_ID
** Reemplaza TU_API_KEY y demás valores con los de tu Firebase.**

**Paso 4: Ejecutar el servidor**
npm run dev
Abre la aplicación en http://localhost:5173/
