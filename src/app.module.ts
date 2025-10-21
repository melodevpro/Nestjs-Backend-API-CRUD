import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { Producto } from './productos/productos.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',        
      password: 'admin1969',   
      database: 'tecnologia_db',
      entities: [Producto],
      synchronize: true,       // solo para desarrollo
    }),
    ProductosModule,
  ],
})
export class AppModule {}
