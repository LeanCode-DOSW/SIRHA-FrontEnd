#  SIRHA – FrontEnd

##  a. Tecnologías utilizadas

* **React.js** (creación de interfaces y componentes).
* **Node.js + npm** (gestor de dependencias y ejecución).
* **Axios / Fetch API** (consumo de servicios backend).
* **React Router DOM** (navegación entre pantallas).
* **Bootstrap / TailwindCSS** (estilos y diseño responsivo).
* **Jest + React Testing Library** (pruebas funcionales y unitarias).
* **CI/CD con GitHub Actions + Azure** (integración y despliegue continuo).

---

##  b. Descripción general del sistema y cómo ejecutarlo

Este FrontEnd corresponde al sistema **SIRHA**, una plataforma diseñada para Facilitar la gestión de solicitudes de cambio de materia y grupo por parte de los estudiantes, con trazabilidad, priorización y control de capacidad, brindando a profesores y decanaturas las herramientas necesarias para evaluar y aprobardichas solicitudes.

###  Cómo ejecutarlo localmente:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/usuario/SIRHA-FrontEnd-DOSW.git
   cd SIRHA-FrontEnd-DOSW
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Levantar el servidor local:

   ```bash
   npm start
   ```

   Se ejecuta en: [http://localhost:3000](http://localhost:3000)

---

##  c. Diagrama de navegación del aplicativo
### Estudiante
```mermaid
graph TD;
   Login[Login] --> InfoAcademica[InfoAcademica];
   InfoAcademica[InfoAcademica] --> HorarioActual[HorarioActual];
   InfoAcademica[InfoAcademica] --> HorariosAnteriores[Horarios Anteriores];
   InfoAcademica[InfoAcademica] --> PlanDeEstudios[Plan de estudios];
   Login[Login] --> InfoSolicitudes[InfoSolicitudes];
   InfoSolicitudes[InfoSolicitudes] --> CrearSolicitud[Crear Solicitud];
   InfoSolicitudes[InfoSolicitudes] --> EstadoDeSolicitudes[Estado de solicitudes];
   InfoSolicitudes[InfoSolicitudes] --> Historial[Historial];
```
 Explicación: el usuario inicia en **Login**, pasa al **Dashboard**, y desde allí navega a las diferentes secciones.

### Decanatura
```mermaid
graph TD;
   Login[Login] --> Home[Home];
   Home[Home] --> SolicitudesRecibidas[Solicitudes recibidas];
   SolicitudesRecibidas[Solicitudes recibidas] --> RevisarSolicitud[RevisarSolicitud];
   RevisarSolicitud[RevisarSolicitud] --> Consultar[Consultar];
```
 Explicación: el usuario inicia en **Login**, pasa al **Dashboard**, y desde allí navega a las diferentes secciones.

---

##  d. Cómo funciona el aplicativo

* El usuario inicia sesión con sus credenciales.
* El sistema valida la autenticación contra el Backend.
* Una vez dentro, puede acceder a diferentes módulos (usuarios, reportes, configuración).
* Cada acción se comunica con el **BackEnd vía API REST** y devuelve datos en tiempo real.

---

##  e. Funcionalidades y pantallas

### Funcionalidades principales:

1. **Login:** acceso seguro de usuarios.

   * Happy Path: usuario correcto → Dashboard.
   * Errores: credenciales inválidas → mensaje de error.
2. **Gestión de Usuarios:** crear, listar, actualizar y eliminar usuarios.

   * Happy Path: usuario creado correctamente.
   * Errores: campos vacíos → validación en pantalla.
3. **Reportes:** generación de reportes dinámicos.

   * Happy Path: reporte generado.
   * Errores: conexión fallida → mensaje de error.

 Cada pantalla está organizada en la carpeta `src/pages/` y los componentes en `src/components/`.

---

## f. Video/Link del Demo por funcionalidad

* **Login**: \[YouTube / Azure link aquí]
* **Gestión Usuarios**: \[YouTube / Azure link aquí]
* **Reportes**: \[YouTube / Azure link aquí]

---

## g. Diagrama de Componentes del Aplicativo a Gran Escala

```mermaid
graph LR
    Usuario -->|React FrontEnd| FrontEnd[Frontend React App]
    FrontEnd -->|REST API| BackEnd[BackEnd Spring Boot]
    BackEnd --> BD[(Base de Datos)]
    CI/CD --> Azure[Azure Cloud]
```

---

## h. Evidencia de pruebas funcionales

Capturas de ejecución de pruebas con Jest / React Testing Library.
Ejemplo:

```bash
npm test
```


---

## i. Organización del código

```
SIRHA-FrontEnd-DOSW/
│── src/
│   │
│   ├── /components      Componentes reutilizables de UI
│   ├── /pages           Páginas o vistas de la aplicación
│   ├── /services        Lógica, API y manejo de datos
│   ├── /styles          Estilos y hojas CSS/SCSS
│   ├── App.jsx          Componente principal
│   └── index.js         Punto de entrada de la app
```

---

##  j. Código Documentado

Ejemplo en un componente:

```jsx
/**
 * 
 * 
 */
```

---

##  k. Evidencia del despliegue CI/CD en Azure

* Pipeline de **Desarrollo** → cada push a `develop` genera un build automático.
* Pipeline de **Producción** → cada merge a `main` despliega en Azure.

🔗 Link de despliegue en Azure: [https://sirha-frontend.azurewebsites.net](https://sirha-frontend.azurewebsites.net)

---

##  l. Pipelines (YAML simplificado)

###  Desarrollo

```yaml

```

###  Producción

```yaml

```

## Prototipo de bajo nivel
Pantallas iniciales en baja fidelidad:
- Pantalla Login: Acceso de estudiantes, profesores y administradores al sistema.
  
  <img width="246" height="194" alt="image" src="https://github.com/user-attachments/assets/8e76c94b-7e20-4f7a-86e6-3fcafa1c5c47" />
- Dashboard: Diferenciado según rol, permite acceso a funcionalidades principales.
  
  <img width="236" height="191" alt="image" src="https://github.com/user-attachments/assets/90175608-d0be-450a-b8df-0264e75c328a" />
- Gestión de Horarios: Consulta y solicitud de reasignación de horarios.
  
  <img width="241" height="183" alt="image" src="https://github.com/user-attachments/assets/1cb492bb-2560-47be-b5cc-73ccca2eb7fc" />
- Notificaciones: Visualización de mensajes del sistema sobre solicitudes realizadas.
  
  <img width="241" height="180" alt="image" src="https://github.com/user-attachments/assets/c755d675-4e95-472b-a09f-cc62a12b6c20" />
- Confirmación: Ventana modal para aceptar o cancelar una reasignación.
  
  <img width="249" height="137" alt="image" src="https://github.com/user-attachments/assets/2d43425e-f00b-439f-8117-dddfc5dd01d9" />


---

##  Estrategia de Versionamiento y Branches

###  Versionamiento

Cada commit realizado debe seguir el siguiente template: “usuario institucional: Acción realizada”

---

### Branches (Git Flow Simplificado)

* **`main`** → contiene el código estable en producción.
* **`develop`** → rama de integración, donde se unen todas las funcionalidades antes de pasar a producción.
* **`feature/<nombre>`** → ramas para nuevas funcionalidades. Se crean desde `develop` y se fusionan de nuevo en `develop`.
* **`release/<versión>`** → rama para preparar entregas, pruebas finales y documentación antes de pasar a `main`.
* **`hotfix/<nombre>`** → rama para correcciones críticas que deben aplicarse directamente a `main` y luego integrarse en `develop`.

Link Documento de Arquitectura Front: https://azure.microsoft.com/es-es/products/devops/?nav=min

Link Mock figma: https://www.figma.com/design/TKNUp84l1RozukfoyXDn3s/SHIRA?node-id=0-1&t=bobieBeKtkaggFiV-1 


Link Documento de Arquitectura Front: https://pruebacorreoescuelaingeduco-my.sharepoint.com/:w:/g/personal/juan_guayazan-c_mail_escuelaing_edu_co/EV52Y7qZcypBvTXAc5ADJmEB-GPM3BsdHivL-oYL_TylUQ?e=lT5nDt

Link Mock figma: https://www.figma.com/design/TKNUp84l1RozukfoyXDn3s/SHIRA?node-id=0-1&t=bobieBeKtkaggFiV-1 
