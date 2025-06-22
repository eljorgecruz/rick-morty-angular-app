# 🚀 Rick and Morty Character Gallery

Una aplicación web desarrollada con **Angular 20** que muestra una galería interactiva de personajes de la serie Rick and Morty, consumiendo datos de la [Rick and Morty API](https://rickandmortyapi.com/).

## ✨ Características

- 📱 **Responsive Design**: Adaptada para dispositivos móviles y desktop
- 🎨 **Interfaz Moderna**: Diseño limpio con efectos hover y transiciones suaves
- 🔄 **Consumo de API REST**: Integración con la Rick and Morty API pública
- ⚡ **Componentes Standalone**: Arquitectura moderna de Angular 19
- 🎯 **TypeScript**: Desarrollo con tipado estático para mayor robustez

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Angular 20
- **Lenguaje**: TypeScript
- **Estilos**: CSS3 con Grid Layout
- **HTTP Client**: Angular HttpClient
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)

## 📋 Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** v18 o superior
- **npm** (incluido con Node.js)
- **Angular CLI** v19

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/eljorgecruz/rick-morty-angular-app
cd rick-y-morty-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`


Los archivos de distribución se generarán en el directorio `dist/`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── character-list/
│   │       ├── character-list.ts
│   │       ├── character-list.html
│   │       └── character-list.css
│   ├── services/
│   │   └── api.ts
│   ├── app.ts
│   ├── app.html
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── index.html
└── main.ts
```

## 🔧 Componentes Principales

### ApiService
Servicio responsable de la comunicación con la API externa:
- Realiza peticiones HTTP GET a la Rick and Morty API
- Maneja la respuesta de datos de personajes
- Implementa el patrón Observable para manejo asíncrono

### CharacterListComponent
Componente principal que muestra la galería:
- Consume el ApiService para obtener datos
- Renderiza las tarjetas de personajes
- Implementa el ciclo de vida OnInit
- Utiliza directivas Angular (*ngFor) para la iteración

## 🎨 Características de Diseño

- **Grid Layout**: Diseño responsive que se adapta al tamaño de pantalla
- **Efectos Hover**: Animaciones suaves al pasar el mouse sobre las tarjetas
- **Sombras y Bordes**: Estética moderna con bordes redondeados
- **Tipografía**: Jerarquía clara con diferentes tamaños de fuente

## 📊 Datos Mostrados

Para cada personaje se visualiza:
- **Imagen**: Avatar del personaje
- **Nombre**: Nombre completo
- **Estado**: Alive, Dead, o Unknown
- **Especie**: Human, Alien, etc.

## 🔗 API Utilizada

- **Endpoint**: `https://rickandmortyapi.com/api/character`
- **Método**: GET
- **Formato**: JSON
- **Documentación**: [Rick and Morty API Docs](https://rickandmortyapi.com/documentation)

## 🚀 Funcionalidades Futuras

- [ ] Paginación para navegar entre páginas de personajes
- [ ] Buscador para filtrar personajes por nombre
- [ ] Vista de detalle individual para cada personaje
- [ ] Filtros por estado y especie
- [ ] Modo oscuro/claro


## 🙏 Agradecimientos

- [Rick and Morty API](https://rickandmortyapi.com/) por proporcionar los datos
- Comunidad de Angular por la documentación y recursos
- Adult Swim por crear la increíble serie Rick and Morty
