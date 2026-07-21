# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "order-management-system",
  "version": "1.0.0",
  "scripts": {
    "start": "nest start",
    "build": "nest build",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.0.0",
    "@nestjs/core": "10.0.0",
    "@nestjs/platform-express": "10.0.0",
    "typeorm": "0.3.9"
  },
  "devDependencies": {
    "@types/node": "18.11.9",
    "jest": "29.3.1"
  }
}

// === ARCHIVO: src/domain/entities/order.ts ===
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  @Column()
  status: string;
}

// === ARCHIVO: src/application/usecases/createOrder.ts ===
import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(productId: string, quantity: number): Promise<void> {
    const order = new Order();
    order.productId = productId;
    order.quantity = quantity;
    order.status = 'pending';
    await this.orderRepository.save(order);
  }
}

// === ARCHIVO: src/application/usecases/modifyOrder.ts ===
import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

@Injectable()
export class ModifyOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: number, quantity: number): Promise<void> {
    const order = await this.orderRepository.findById(id);
    if (!order) throw new Error('Order not found');
    order.quantity = quantity;
    await this.orderRepository.save(order);
  }
}

// === ARCHIVO: src/application/usecases/cancelOrder.ts ===
import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

@Injectable()
export class CancelOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: number): Promise<void> {
    const order = await this.orderRepository.findById(id);
    if (!order) throw new Error('Order not found');
    order.status = 'cancelled';
    await this.orderRepository.save(order);
  }
}

// === ARCHIVO: src/infrastructure/repositories/orderRepository.ts ===
import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async findById(id: number): Promise<Order | undefined> {
    return this.orders.find(order => order.id === id);
  }
}

// === ARCHIVO: src/infrastructure/controllers/orderController.ts ===
import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { CreateOrderUseCase } from '../usecases/createOrder';
import { ModifyOrderUseCase } from '../usecases/modifyOrder';
import { CancelOrderUseCase } from '../usecases/cancelOrder';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly modifyOrderUseCase: ModifyOrderUseCase,
    private readonly cancelOrderUseCase: CancelOrderUseCase
  ) {}

  @Post()
  async createOrder(@Body() body: { productId: string; quantity: number }): Promise<void> {
    await this.createOrderUseCase.execute(body.productId, body.quantity);
  }

  @Put(':id')
  async modifyOrder(@Param('id') id: number, @Body() body: { quantity: number }): Promise<void> {
    await this.modifyOrderUseCase.execute(id, body.quantity);
  }

  @Put(':id/cancel')
  async cancelOrder(@Param('id') id: number): Promise<void> {
    await this.cancelOrderUseCase.execute(id);
  }
}

// === ARCHIVO: test/unit/order.spec.ts ===
import { Order } from '../../src/domain/entities/order';

describe('Order Entity', () => {
  it('should create an order', () => {
    const order = new Order();
    order.productId = '123';
    order.quantity = 1;
    order.status = 'pending';
    expect(order).toBeDefined();
  });
});

// === ARCHIVO: test/unit/createOrder.spec.ts ===
import { CreateOrderUseCase } from '../../src/application/usecases/createOrder';
import { OrderRepository } from '../../src/infrastructure/repositories/orderRepository';

describe('CreateOrderUseCase', () => {
  let createOrderUseCase: CreateOrderUseCase;
  let orderRepository: OrderRepository;

  beforeEach(() => {
    orderRepository = new OrderRepository();
    createOrderUseCase = new CreateOrderUseCase(orderRepository);
  });

  it('should create an order', async () => {
    await createOrderUseCase.execute('123', 1);
    const order = await orderRepository.findById(1);
    expect(order).toBeDefined();
    expect(order?.productId).toBe('123');
  });
});

// === ARCHIVO: config/nestjs.config.ts ===
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// === ARCHIVO: scripts/start.sh ===
#!/bin/bash
npm run build
npm start

```
