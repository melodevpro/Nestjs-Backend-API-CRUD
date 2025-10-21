import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './productos.entity';

@Injectable()
export class ProductosService implements OnModuleInit {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  // Productos iniciales
  private productosIniciales: Partial<Producto>[] = [
    {
      name: 'iPhone 17 Pro Max',
      price: 1499,
      description: 'El nuevo iPhone 17 Pro Max con chip A19 Bionic y pantalla OLED de 120Hz.',
      stock: 20,
      category: 'Smartphones',
    },
    {
      name: 'MacBook Pro M3',
      price: 2499,
      description: 'Laptop Apple con chip M3, 16GB RAM y pantalla Retina XDR de 16 pulgadas.',
      stock: 15,
      category: 'Laptops',
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      price: 1299,
      description: 'Smartphone de gama alta con cámara de 200MP y pantalla AMOLED 120Hz.',
      stock: 25,
      category: 'Smartphones',
    },
    {
      name: 'PlayStation 5 Slim',
      price: 599,
      description: 'Consola de videojuegos de última generación con 1TB SSD y mando DualSense.',
      stock: 30,
      category: 'Consolas',
    },
    {
      name: 'Xbox Series X',
      price: 579,
      description: 'Consola de Microsoft con gráficos 4K y 1TB de almacenamiento interno.',
      stock: 18,
      category: 'Consolas',
    },
    {
      name: 'AirPods Pro 2',
      price: 249,
      description: 'Auriculares inalámbricos con cancelación activa de ruido y chip H2.',
      stock: 50,
      category: 'Accesorios',
    },
    {
      name: 'Apple Watch Series 9',
      price: 499,
      description: 'Reloj inteligente con sensor de salud, GPS y pantalla Always-On Retina.',
      stock: 35,
      category: 'Wearables',
    },
    {
      name: 'Dell XPS 13 Plus',
      price: 1899,
      description: 'Laptop premium con Intel Core i9, 32GB RAM y pantalla táctil InfinityEdge.',
      stock: 12,
      category: 'Laptops',
    },
    {
      name: 'iPad Pro 13” M4',
      price: 1399,
      description: 'Tablet profesional con chip M4, soporte para Apple Pencil 3 y pantalla Ultra Retina.',
      stock: 22,
      category: 'Tablets',
    },
    {
      name: 'Logitech MX Master 4',
      price: 129,
      description: 'Ratón ergonómico con sensor de alta precisión y conexión multi-dispositivo.',
      stock: 60,
      category: 'Accesorios',
    },
  ];

  // Este método se ejecuta al iniciar el módulo
  async onModuleInit() {
    const count = await this.productoRepository.count();
    if (count === 0) {
      await this.productoRepository.save(this.productosIniciales);
      console.log('Productos iniciales insertados en la base de datos');
    } else {
      console.log(`Ya existen ${count} productos en la base de datos`);
    }
  }

  // Obtener todos los productos
async getAllProducts() {
  const productos = await this.productoRepository.find();
  return {
    message: 'Productos obtenidos correctamente',
    data: productos,
  };
}

// Obtener un producto por ID
async getProductById(id: number) {
  const producto = await this.productoRepository.findOneBy({ id });
  if (!producto) {
    return { message: 'Producto no encontrado', data: null };
  }
  return { message: 'Producto obtenido correctamente', data: producto };
}

// Crear un nuevo producto
async createProduct(productData: Partial<Producto>) {
  const nuevoProducto = this.productoRepository.create(productData);
  const productoGuardado = await this.productoRepository.save(nuevoProducto);
  return {
    message: 'Producto creado correctamente',
    data: productoGuardado,
  };
}

// Actualizar un producto
async updateProduct(id: number, updateData: Partial<Producto>) {
  const producto = await this.productoRepository.findOneBy({ id });
  if (!producto) {
    return { message: 'Producto no encontrado', data: null };
  }

  Object.assign(producto, updateData);
  const productoActualizado = await this.productoRepository.save(producto);
  return {
    message: 'Producto actualizado correctamente',
    data: productoActualizado,
  };
}

// Eliminar un producto
async deleteProduct(id: number) {
  const result = await this.productoRepository.delete(id);
  if ((result.affected ?? 0) > 0) {
    return { message: 'Producto eliminado correctamente', success: true };
  }
  return { message: 'Producto no encontrado', success: false };
}


}
