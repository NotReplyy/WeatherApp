# Weather App

¡Bienvenido a la aplicación de Clima!

Este proyecto es una aplicación de clima desarrollada en React con TypeScript y SCSS. Se ha implementado una arquitectura modular y escalable, siguiendo los principios de diseño SOLID. La aplicación te permite obtener información meteorológica actualizada de diferentes ciudades de todo el mundo de manera rápida y sencilla.



## Características principales

- **Información detallada del clima:** Accede a información detallada del clima, incluyendo temperatura, descripción del clima, sensación térmica, humedad, presión y velocidad del viento.
- **Búsqueda rápida:** Encuentra fácilmente la información del clima de cualquier ciudad utilizando la barra de búsqueda integrada. Además, puedes utilizar el botón de "My location" para obtener el clima actual de tu posición.
- **Ciudades populares:** Accede rápidamente a la información del clima de las ciudades más populares del mundo con solo un clic.


## Tecnologías Utilizadas

- **React:** Utilicé React como la biblioteca principal para construir la interfaz de usuario de nuestra aplicación meteorológica, aprovechando su eficiencia y rendimiento.
- **TypeScript:** Implementé TypeScript para agregar tipado estático a nuestro código, mejorando la robustez y la mantenibilidad del proyecto.
- **SCSS:** Utilicé SCSS para la gestión de estilos, permitiendo la creación de estilos reutilizables y mantenibles para nuestros componentes de React. Además, adopté un enfoque "mobile first" en el diseño de estilos para garantizar una experiencia de usuario óptima en dispositivos móviles.
- **Vite:** Vite fue utilizado como el compilador para el proyecto, proporcionando un entorno de desarrollo rápido y eficiente que permite una experiencia de desarrollo fluida y productiva.
- **Patrón de Hooks Personalizados:** Implementé un patrón de hooks personalizados para mejorar la reutilización de la lógica y la separación de preocupaciones en los componentes de React.



## Cómo correr el proyecto

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Clona el repositorio.

3. Navega al directorio del proyecto y ejecuta `npm install` para instalar todas las dependencias necesarias.

4. Crea un archivo `.env` en la raíz del proyecto (fuera de la carpeta `src`), y define las siguientes variables de entorno:

```env
VITE_APP_API_URL=https://api.openweathermap.org/data/2.5/forecast/daily
VITE_APP_API_FIND=https://api.openweathermap.org/data/2.5/find
VITE_WEATHER_API_KEY=<tu_api_key>

```
Estas variables de entorno se utilizan para proteger la información sensible y para mantener la configuración de la aplicación flexible.

5.Una vez definidas las variables de entorno, puedes correr el proyecto ejecutando:

```bash
npm run dev
```
## Pruebas

Para ejecutar las pruebas de unidad, corre el siguiente comando en la raíz del proyecto:

```bash
npm run test
```