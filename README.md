# Trendy - Tienda de Maquillaje

## Descripción

**Trendy** es una tienda en línea de maquillaje. Proyecto diseñado que permite explorar 12 productos, agregar al carrito y confirmar compras con persistencia en `localStorage`.

---

## Objetivos de aprendizaje

-Navegar y comprender la documentación oficial del DOM en el navegador.

-Seleccionar, crear, modificar y eliminar nodos del DOM dinámicamente.

-Manejar eventos (incluida delegación de eventos).

-Actualizar clases, estilos y atributos de forma segura.

-Renderizar listas o secciones desde datos (arrays/objetos) sin recargar la página.

-Organizar tu código y versionarlo en GitHub.

## Features DOM Utilizadas

- **Selección:** `querySelector()`, `getElementById()`
- **Manipulación:** `innerHTML`, `classList`, `textContent`
- **Creación:** `createElement()`, `appendChild()`
- **Eventos:** `addEventListener()`, delegación de eventos
- **Atributos:** `getAttribute()`, `setAttribute()`, `dataset`
- **Almacenamiento:** `localStorage`, `JSON.stringify/parse()`
- **Recorrido:** `parentElement`, `children`, `closest()`
- **Arrays:** `.map()`, `.filter()`, `.reduce()`, `.find()`

---

##  Cómo Ejecutar

### Abrir directamente
- Instala "Live Server"
- Clic derecho en `index.html` → "Open with Live Server"

---

## Cómo Usar

1. **Explora** los 12 productos en el catálogo
2. **Agregar** haciendo clic en el botón "Agregar"
3. **Ver carrito** haciendo clic en el botón de carrito (arriba derecha)
4. **Modificar** cantidad con los botones ➕ ➖
5. **Eliminar** con el botón 🗑️
6. **Comprar** haciendo clic en "Confirmar Compra"

---

##  Productos

| Referencia | Productos |
|-----------|-----------|
| **DY2159** | Tinta Gloss Jack |
| **REF BAT2272** | Base Aura |
| **REF HKC1550** | Brillo Lip Balm Kisses Rojo |
| **REF SUT2170** | Sombra En Polvo X12 Urban |
| **REF R1602** | Rubor Doble Mia |
| **REF CPT1252** | Sombra Cloud Trendy |
| **REF PCU-D-T-C 1858** | Pestañina Para Cejas |
| **REF ILK2286** | Iluminador Líquido Panda |
| **REF DOX888** | Suero Detox Niacinamida + Zinc 30ml |
| **REF DBT1926** | Desmaquillante Bifásico |
| **DY2073** | Exfoliante Corporal Stitch |
| **DY2378** | Kit Corporal Stitch |

---

##  Conceptos JavaScript

- Manipulación del DOM
- Eventos y delegación
- Arrays y objetos
- localStorage y JSON
- Template literals
- Funciones reutilizables

---

##  Personalización

### Cambiar colores (CSS :root)
```css
--primary: #f82169ff;     
--secondary: #b423ceff;    
```

### Agregar productos en JavaScript
```javascript
{ 
    id: 13, 
    name: 'Nuevo Producto', 
    category: 'Categoría', 
    price: 19.99, 
    stock: 50, 
    image: 'URL_IMAGEN', 
    desc: 'Descripción' 
}
```

---

##  Validaciones

✓ Stock disponible (botón deshabilitado si no hay)
✓ Cantidad mínima en carrito
✓ Persistencia de datos
✓ Botón de checkout deshabilitado si carrito vacío
✓ Recálculo automático de totales

---

##  Flujo de la Pagina

```
Cargar → Renderizar productos → Usuario agrega items
   ↓
Guardar en localStorage → Mostrar en carrito
   ↓
Modificar cantidades → Actualizar total
   ↓
Confirmar compra → Vaciar carrito → Guardar datos
```
