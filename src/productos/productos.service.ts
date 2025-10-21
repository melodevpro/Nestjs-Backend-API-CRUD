import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    private productos = [
        {
        id: 1,
        name: 'iPhone 17 Pro Max',
        price: 1499,
        description: 'El nuevo iPhone 17 Pro Max con chip A19 Bionic y pantalla OLED de 120Hz.',
        stock: 20,
        category: 'Smartphones',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'MacBook Pro M3',
        price: 2499,
        description: 'Laptop Apple con chip M3, 16GB RAM y pantalla Retina XDR de 16 pulgadas.',
        stock: 15,
        category: 'Laptops',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 1299,
        description: 'Smartphone de gama alta con cámara de 200MP y pantalla AMOLED 120Hz.',
        stock: 25,
        category: 'Smartphones',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'PlayStation 5 Slim',
        price: 599,
        description: 'Consola de videojuegos de última generación con 1TB SSD y mando DualSense.',
        stock: 30,
        category: 'Consolas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Xbox Series X',
        price: 579,
        description: 'Consola de Microsoft con gráficos 4K y 1TB de almacenamiento interno.',
        stock: 18,
        category: 'Consolas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'AirPods Pro 2',
        price: 249,
        description: 'Auriculares inalámbricos con cancelación activa de ruido y chip H2.',
        stock: 50,
        category: 'Accesorios',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Apple Watch Series 9',
        price: 499,
        description: 'Reloj inteligente con sensor de salud, GPS y pantalla Always-On Retina.',
        stock: 35,
        category: 'Wearables',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Dell XPS 13 Plus',
        price: 1899,
        description: 'Laptop premium con Intel Core i9, 32GB RAM y pantalla táctil InfinityEdge.',
        stock: 12,
        category: 'Laptops',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'iPad Pro 13” M4',
        price: 1399,
        description: 'Tablet profesional con chip M4, soporte para Apple Pencil 3 y pantalla Ultra Retina.',
        stock: 22,
        category: 'Tablets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Logitech MX Master 4',
        price: 129,
        description: 'Ratón ergonómico con sensor de alta precisión y conexión multi-dispositivo.',
        stock: 60,
        category: 'Accesorios',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]



  // Obtener todos los productos
  getAllProducts() {
    return this.productos;
  }

  // Obtener un producto por ID
  getProductById(id: number) {
    return this.productos.find(producto => producto.id === id);
  }

  // Crear un producto
  createProduct(product: any) {
    const newProduct = {
        id: this.productos.length + 1,
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    this.productos.push(newProduct);
    return { message: 'Producto creado correctamente', data: newProduct };
  }

  // Actualizar un producto existente
  updateProduct(id: number, updateData: any) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index === -1) {
      return { message: 'Producto no encontrado' };
    }
    this.productos[index] = {
      ...this.productos[index],
      ...updateData,
      updatedAt: new Date(),
    }
    return { message: 'Producto actualizado correctamente', data: this.productos[index] };
  }

  // Eliminar un producto
  deleteProduct(id: number) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index === -1) 
        return { message: 'Producto no encontrado' };
    const deleteProduct = this.productos.splice(index, 1);
    return { message: 'Producto eliminado correctamente' };
  }
}


