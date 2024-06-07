# Quick Test
Test de prueba con PokeapiV2.

## Descripción General
Quick Test es un proyecto diseñado para probar la integración con la PokeapiV2. El objetivo es ofrecer una estructura de proyecto organizada y una implementación básica para interactuar con la API de Pokémon.
Además, maneja temas de geolocalización para mostrar ubicaciones relevantes de Pokémon.

## Requisitos

- Node.js ( >=20.x )
- PNPM (se recomienda en lugar de npm o yarn)

## Instalación
Para instalar este proyecto, asegúrate de tener **pnpm** instalado. Luego, sigue estos pasos:

### Clona el repositorio:

1.  **Copiar código**

````
git clone <URL_DEL_REPOSITORIO>
cd quick-test
````

2. **Instala las dependencias:**
````
pnpm install
````

3. **Configura las variables de entorno:**
````
VITE_API_URL=https://pokeapi.co/api/v2
````

## Uso
Para ejecutar y desarrollar el proyecto, puedes utilizar los siguientes scripts definidos en el archivo package.json:

### Desarrollo: Inicia el servidor de desarrollo.

````
pnpm run dev
````

### Construcción: Compila el proyecto para producción.

````
pnpm run build
````

### Lint: Ejecuta ESLint para encontrar y arreglar problemas en el código.

````
pnpm run lint
````


### Preview: Previsualiza la versión de producción.

````
pnpm run preview
````

## Estructura del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

````
src
├── assets                   # Archivos estáticos
├── core                     # Contiene lógica y componentes globales
│   ├── api                  # Llamadas a la API
│   ├── constants            # Constantes del proyecto
│   ├── helpers              # Funciones de ayuda
│   ├── interfaces           # Interfaces TypeScript
│   ├── layouts              # Componentes de diseño general
│   ├── theme                # Temas y estilos globales
│   ├── utils                # Utilidades generales
│   └── index.ts             # Archivo de entrada principal
├── routes                   # Definición de rutas
│   ├── home                 # Ruta de inicio
│   │   └── hooks            # Hooks específicos de la ruta de inicio
│   ├── locations            # Ruta de ubicaciones
│   │   ├── components       # Componentes específicos de la ruta de ubicaciones
│   │   ├── hooks            # Hooks específicos de la ruta de ubicaciones
│   │   ├── store            # Estado y lógica de la ruta de ubicaciones
│   │   └── main.tsx         # Entrada principal de la ruta de ubicaciones
│   └── _root.tsx            # Configuración de rutas principales
└── index.ts                 # Punto de entrada principal del proyecto
````

#### core: Contiene lógica y componentes que son globales y reutilizables en todo el proyecto.

#### routes: Contiene las diferentes rutas del proyecto, organizadas en carpetas con su respectiva lógica y componentes frontend.

## Contribuciones
Actualmente, no hay pautas específicas para contribuciones.

## Author
- Author - [Jean Carlo Urrego](https://jeandeveloper.netlify.app/)

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

## Contacto
Para más información o preguntas, puedes visitar mi perfil de GitHub https://github.com/jean-carlo94.
