# Diseño del Sistema con Patrones GRASP

## Patrones Aplicados
- **Creator**: Utilizado en el servicio de aplicación para crear nuevas transacciones.
- **Information Expert**: Utilizado en el repositorio de infraestructura para persistir transacciones.

## Contribución a la Cohesión y Bajo Acoplamiento
- **Creator**: Centraliza la creación de transacciones en el servicio de aplicación, mejorando la cohesión.
- **Information Expert**: Localiza la persistencia de transacciones en el repositorio de infraestructura, reduciendo el acoplamiento.