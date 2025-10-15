# CompuMundo Service — Sistema de Turnos y Reparaciones con Excel

## Descripción general ## 

**CompuMundo Service** es un sistema web desarrollado para una PYME con el mismo nombre, pensado para resolver un problema cotidiano: la **falta de organización en la recepción y seguimiento de reparaciones**.

El sistema permite registrar, consultar y actualizar **turnos de reparación de notebooks, celulares y tablets**, guardando toda la información en un archivo **Excel (.xlsx)** a través de un backend en **Flask (Python)**.  
De esta forma, se logra una solución de bajo costo, sin necesidad de bases de datos externas ni infraestructura compleja, totalmente funcional y accesible desde cualquier navegador.

## El problema que tenía CompuMundo... ### 

En CompuMundo, los pedidos de servicio solían recibirse por **WhatsApp, llamadas o anotaciones manuales**, lo que genera:

- Pérdida o duplicación de información.
- Falta de seguimiento de los dispositivos en reparación.
- Dificultad para priorizar tareas.
- Desorganización en la comunicación con el cliente.

Esta situación provoca **demoras, confusión y mala atención al cliente**.  
El desafío fue **crear una herramienta digital simple, accesible y local**, que permitiera gestionar los turnos de manera centralizada sin depender de software pago.

## La solución que hemos planteado ## 

Se diseñó una **página web con dos vistas principales**:

1. **Formulario de turno (`index.html`)**  
   Permite a los técnicos o recepcionistas ingresar los datos del dispositivo, el tipo de problema y la prioridad.

2. **Panel de control (`dashboard.html`)**  
   Permite al técnico o encargado visualizar todos los turnos, filtrarlos por estado o prioridad y actualizar su progreso (“Nuevo”, “En diagnóstico”, “En reparación”, “Listo”, “Entregado”).

### Estructura técnica ###

- **Frontend:** HTML, CSS y JavaScript (Vanilla).  
- **Backend:** Flask (Python) + openpyxl + filelock.  
- **Base de datos:** archivo Excel (`tickets.xlsx`).  
- **Hosting Frontend:** GitHub Pages.  
- **Hosting Backend:** PythonAnywhere.  

El flujo de datos se da a través de una **API REST** en Flask, que recibe y envía información en formato JSON, y la almacena de manera estructurada en el Excel.

## El proceso de aprendizaje que hemos tenido en el desarrollo del proyecto ##

Durante el desarrollo, uno de los principales retos fue **integrar Flask (backend Python) con el frontend HTML y CSS**, ya que implicó comprender:

- Cómo funcionan las **peticiones HTTP (GET, POST, PUT)**.
- Cómo conectar un formulario HTML con un servidor Flask mediante **fetch y JSON**.
- Cómo permitir que ambos se comuniquen de forma segura usando **CORS**.
- Cómo leer y escribir archivos Excel con **openpyxl** sin corromperlos cuando hay varias solicitudes (uso de `filelock`).

Superar estos desafíos permitió entender el funcionamiento completo de una aplicación web moderna y cómo combinar distintas tecnologías para lograr un producto funcional y coherente.

## Respuestas al formulario orientador ##

Las respuestas que se detallan abajo buscan responder a las preguntas presentes en el FORM respecto a la idea del proyecto y todo lo referente a la elaboración del mismo.

### ¿Qué buscas resolver con tu idea proyecto?
Busco resolver la **falta de organización** en la gestión de turnos y reparaciones en pequeños talleres tecnológicos.  
La idea es digitalizar la toma de pedidos y el seguimiento, eliminando errores humanos y mejorando la atención al cliente.

### ¿Cuál será el fin?
El fin es ofrecer una **herramienta práctica, gratuita y autosuficiente** que centralice la información de reparaciones en una interfaz clara y accesible, sin depender de internet para funcionar internamente ni de servicios costosos.

### ¿Qué buscas contar?
El proyecto demuestra que, con herramientas accesibles como **Flask, HTML, CSS y Excel**, es posible construir una aplicación web completa que resuelva problemas reales del entorno local y fomente el aprendizaje de tecnologías modernas.

### ¿Quién es mi cliente/Sponsor?
El cliente es una **pequeña empresa local de servicio técnico** llamada *CompuMundo Service*, que busca mejorar su sistema de gestión.  
También puede representar a **cualquier microemprendimiento de reparación o mantenimiento tecnológico**.

### ¿Quiénes son los usuarios?
- **Encargados de atención o recepción:** cargan los turnos.  
- **Técnicos:** consultan y actualizan el estado de cada reparación.  

### ¿Ya existe algo así?
Existen sistemas de gestión como **Trello, Notion o software de talleres**, pero suelen requerir conexión permanente a internet, pagos mensuales o configuraciones complejas.  
Esta solución es **simple, local y adaptable**, pensada para entornos educativos y PyMEs.

### ¿Qué valor agregado genera?
- Uso de **Excel como base de datos accesible y conocida**.  
- Cero costo de infraestructura.  
- Posibilidad de **instalarlo localmente o online**.  
- Código abierto, fácil de modificar y aprender.

### ¿Cómo beneficia a la comunidad de usuarios?
Facilita la gestión diaria de talleres o servicios pequeños, reduce errores, acelera los tiempos de trabajo y mejora la experiencia del cliente.  
Además, es un ejemplo educativo para otros estudiantes que quieran aprender **desarrollo web con Python** sin depender de bases de datos complejas.

## Conclusión ##

El proyecto demuestra que con creatividad y una buena planificación se pueden desarrollar **soluciones reales a problemas cotidianos**, utilizando tecnologías libres y conocimientos adquiridos durante la formación técnica.  
A través de este trabajo se integraron conocimientos de **frontend, backend, bases de datos y despliegue**, logrando una aplicación funcional, didáctica y con impacto positivo.

## Autores ## 

**Dilan Aguilar Dudik**  
Estudiante de *Generación T* Año: 2025  

**Lionel Alegre**  
Estudiante de *Generación T* Año: 2025

