# Aplicación de Patrones GRASP en el Desarrollo de un Sistema de Gestión de Pedidos

El equipo de desarrollo de una empresa de e-commerce necesita mejorar la arquitectura de su sistema de gestión de pedidos. El objetivo es aplicar patrones GRASP para lograr un diseño más robusto y escalable. El sistema debe manejar la creación, modificación y cancelación de pedidos, así como la gestión de inventario y notificaciones a los clientes.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Aplicación de Patrones GRASP en el Desarrollo de Sistemas |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4-6 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis del Dominio y Selección de Patrones

**Objetivo:** Identificar las responsabilidades y relaciones entre los componentes del sistema y seleccionar los patrones GRASP a aplicar.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Analiza el dominio del sistema de gestión de pedidos.
- Identifica las responsabilidades y relaciones entre los componentes del sistema.
- Selecciona al menos dos patrones GRASP para aplicar en el diseño.

**Entregable:** Documento con el análisis del dominio y la selección de patrones GRASP.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la cohesión y el acoplamiento al seleccionar los patrones.
- Piensa en cómo los patrones pueden mejorar la mantenibilidad y escalabilidad del sistema.

</details>

### Fase 2: Diseño del Sistema Aplicando Patrones GRASP

**Objetivo:** Diseñar el sistema aplicando los patrones GRASP seleccionados.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Aplica los patrones GRASP en el diseño del sistema.
- Define las clases y sus responsabilidades.
- Establece las relaciones entre las clases.

**Entregable:** Diagrama de clases con los patrones GRASP aplicados.

<details>
<summary>Pistas de conocimiento</summary>

- Asegúrate de que cada clase tenga una única responsabilidad.
- Evalúa cómo los patrones mejoran la estructura del sistema.

</details>

### Fase 3: Implementación y Validación del Sistema

**Objetivo:** Implementar el sistema y validar que los patrones GRASP han sido aplicados correctamente.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementa el sistema siguiendo el diseño creado.
- Realiza pruebas para validar que los patrones GRASP han sido aplicados correctamente.
- Documenta cualquier desafío encontrado y cómo lo resolviste.

**Entregable:** Código implementado y documentado con las pruebas realizadas.

<details>
<summary>Pistas de conocimiento</summary>

- Realiza pruebas unitarias para validar cada componente.
- Documenta cualquier desafío y cómo lo resolviste.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es el patrón Experto en Información y cómo lo aplicaste en tu diseño?
- **paraQueSirve**: ¿Para qué sirve aplicar el patrón Creador en el sistema de gestión de pedidos?
- **comoSeUsa**: ¿Cómo usaste el patrón Controlador para manejar las solicitudes en el sistema?
- **erroresComunes**: ¿Qué errores comunes evitaste al aplicar los patrones GRASP en el diseño del sistema?
- **queDecisionesImplica**: ¿Qué decisiones tomaste al aplicar los patrones GRASP y por qué?

## Criterios de Evaluacion

- Análisis del dominio y selección de patrones GRASP documentados.
- Diseño del sistema con patrones GRASP aplicados.
- Implementación y validación del sistema con pruebas documentadas.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
