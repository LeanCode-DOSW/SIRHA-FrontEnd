# SIRHA - FrontEnd

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

## ⚡ Estrategia de Versionamiento y Branches

### 🔹 Versionamiento

* Se usará **Semantic Versioning (SemVer)**:

  * **MAJOR**: cambios incompatibles con versiones anteriores.
  * **MINOR**: nuevas funcionalidades compatibles.
  * **PATCH**: correcciones de bugs y ajustes menores.

Ejemplo: `v1.2.3`

* `1` → versión mayor.
* `2` → nuevas funcionalidades.
* `3` → correcciones menores.

---

### 🔹 Branches (Git Flow Simplificado)

* **`main`** → contiene el código estable en producción.
* **`develop`** → rama de integración, donde se unen todas las funcionalidades antes de pasar a producción.
* **`feature/<nombre>`** → ramas para nuevas funcionalidades. Se crean desde `develop` y se fusionan de nuevo en `develop`.
* **`release/<versión>`** → rama para preparar entregas, pruebas finales y documentación antes de pasar a `main`.
* **`hotfix/<nombre>`** → rama para correcciones críticas que deben aplicarse directamente a `main` y luego integrarse en `develop`.



