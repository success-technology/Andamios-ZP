# Entrega web Andamios ZP — revisión técnica y legal preliminar

## Contenido
- `index.html`: página principal actualizada, enlaces a cuatro páginas de servicio y pie legal.
- `CSS/style.css`: estilos actuales con correcciones puntuales, pie legal y panel de preferencias.
- `paginas/servicios/`: madera, andamios multidireccionales, ingeniería civil y frutas.
- `paginas/legal/`: política de privacidad/tratamiento de datos, términos y condiciones, política de cookies.
- `js/cookies.js`: panel de preferencias almacenado en localStorage.
- Las rutas de imágenes conservan la carpeta `img/` que ya utiliza el proyecto; copia también esa carpeta al desplegar.

## Hallazgos técnicos corregidos
1. En el HTML original, el enlace de Google Fonts de DM Sans/Manrope usaba `ref=` en lugar de `href=`, por lo que la fuente podía no cargarse.
2. El CSS original contenía `font-weight: weight`, un valor no válido; se cambió por `400`.
3. Los tres servicios existentes ahora enlazan a páginas propias y se añadió una tarjeta de frutas.
4. Se agregaron enlaces legales y un panel de preferencias de cookies.
5. Se mantuvieron enlaces externos de WhatsApp con `rel="noopener noreferrer"` cuando abren otra pestaña.

## Riesgos y tareas pendientes antes de producción
- **Identidad legal incompleta:** el sitio no muestra NIT ni dirección física. Deben completarse y verificarse en las páginas legales. No inventar esos datos.
- **Revisión jurídica necesaria:** los documentos incluidos son borradores informativos, no un dictamen legal. Confirmar la razón social exacta, domicilio, finalidades reales, canales y plazos de atención, retención, proveedores y operaciones de datos.
- **Datos personales:** si se añaden formularios, bases de datos, newsletter, CRM, WhatsApp automatizado o analítica, actualizar la política, incorporar autorización clara cuando corresponda y conservar evidencia de la autorización.
- **Cookies:** el panel guarda la preferencia en `localStorage`, que no es una cookie. El paquete no integra analítica ni publicidad; las casillas de esas categorías no cargan scripts. Si se instalan herramientas, bloquearlas hasta tener la base/consentimiento requerido y probarlas.
- **Proveedores externos:** Google Fonts, imágenes remotas y WhatsApp realizan conexiones a terceros. Valorar alojar fuentes/imágenes localmente y revisar sus políticas.
- **HTTPS y cabeceras:** activar HTTPS en el alojamiento y configurar `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy` y `Permissions-Policy` desde el servidor/hosting. Una meta HTML no sustituye todas las cabeceras HTTP.
- **Archivos multimedia:** comprobar que cada archivo de `img/` existe, que hay derechos de uso y que el texto alternativo describe la imagen real.
- **Accesibilidad/responsividad:** probar navegación por teclado, contraste, zoom, menú móvil, lectores de pantalla y tamaños reales. El menú principal del original se oculta en pantallas de menos de 900 px; no se implementó un menú móvil nuevo en esta entrega.
- **Seguridad real:** no se ha ejecutado un escaneo dinámico sobre un dominio desplegado ni se han probado cabeceras HTTP, TLS, dependencias, rutas ni contenido de la carpeta de imágenes. Por tanto, no debe anunciarse como “auditada” o “100 % segura”.
- **Pruebas manuales recomendadas:** abrir todos los enlaces desde el home y desde páginas internas; verificar que imágenes carguen; probar “Solo necesarias”, “Aceptar todas”, “Configurar” y “Guardar selección”; inspeccionar almacenamiento local y solicitudes de red; revisar el sitio publicado con un escáner TLS/cabeceras.

## Referencias oficiales de Colombia consultadas
- Ley 1581 de 2012, protección de datos personales: https://relatoria.colombiacompra.gov.co/normativa/ley-1581-de-2012/
- Decreto 1377 de 2013, reglamentación de protección de datos (compilado en Decreto 1074 de 2015): https://apps.procuraduria.gov.co/normograma/compilacion/docs/decreto_1377_2013.htm
- Ley 1480 de 2011, Estatuto del Consumidor, incluidos deberes para comercio electrónico: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306
- Ley 527 de 1999, mensajes de datos y comercio electrónico: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4276
- SIC, documentación sobre cookies: https://sedeelectronica.sic.gov.co/transparencia/normativa/politicas-lineamientos-y-manuales/documentacion-de-cookies

## Antes de publicar
1. Confirmar NIT, razón social exacta y domicilio físico.
2. Confirmar que el correo y teléfono siguen vigentes.
3. Aprobar legalmente las políticas según la operación real.
4. Copiar `index.html`, `CSS/`, `js/`, `paginas/` y la carpeta original `img/` a la raíz del sitio.
5. Realizar las pruebas de despliegue descritas arriba.
