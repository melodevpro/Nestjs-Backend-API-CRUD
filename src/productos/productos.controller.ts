import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

   // GET /productos
  @Get()
  getAll() {
    return this.productosService.getAllProducts();
  }

  // GET /productos/:id
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productosService.getProductById(+id);
  }

  // POST /productos
  @Post()
  create(@Body() body: any) {
    return this.productosService.createProduct(body);
  }

  // PATCH /productos/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.productosService.updateProduct(+id, body);
  }

  // DELETE /productos/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productosService.deleteProduct(+id);
  }
  
}
