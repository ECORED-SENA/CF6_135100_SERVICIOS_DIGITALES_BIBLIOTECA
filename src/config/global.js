export default {
  global: {
    componenteFormativo: 'Informes estadísticos',
    descripcionCurso:
      'Este componente formativo aborda elementos de tabulación de datos estadísticos, construcción de tablas y gráficas en el proceso de obtención de información en reportes e informes. Con el estudio de este componente, el aprendiz podrá afianzar sus conocimientos y habilidades en el registro de información, elaboración de gráficos y técnicas de comunicación en la prestación de servicios de bibliotecas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Registro de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elaboración de tablas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tabla de frecuencias',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Análisis',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tabla de frecuencias para datos agrupados',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Análisis de tablas con agrupación de datos',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gráficas y tipos de gráficas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Reportes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes del documento de reporte',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de presentación y comunicación de información',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Registro de información',
      referencia:
        'Del Ramo, J., y Núñez, J. (2012). Almacenamiento y recuperación de información bibliográfica. OCW.',
      tipo: 'Documento',
      link: 'http://ocw.uv.es/ciencias/2-1/3_almacenamientoyrecuperacion.pdf',
    },
    {
      tema: 'Registro de información',
      referencia:
        'Martínez, N., y Díaz, N. (2018). Servicios digitales en las bibliotecas. CCB.',
      tipo: 'Documento',
      link:
        'https://www.ccbiblio.es/wp-content/uploads/catalogo_de_servicios_digitales.pdf',
    },
    {
      tema: 'Análisis',
      referencia:
        'Venteño, G., y Casas, F. (2013). Levantamiento de datos estadísticos en la biblioteca. Biblioteca Universitaria, 16(1), 46-53.',
      tipo: 'Documento',
      link: 'https://www.redalyc.org/pdf/285/28528266005.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento de datos',
      significado:
        'actividad de resguardar y registrar información digitalmente en dispositivos electrónicos o magnéticos, para facilitar su consulta.',
    },
    {
      termino: 'Captura de información',
      significado:
        'acción de registrar la información que se desea analizar a través de un instrumento como pueden ser formularios, cuestionarios o registrada por medios automáticos.',
    },
    {
      termino: 'Conclusiones estadísticas',
      significado:
        'interpretaciones a que se llega por parte del analista, respecto de los datos obtenidos de una muestra obtenida que presentan una tendencia, comportamiento después de un ordenamiento y procesamiento estadístico. Pueden ser aspectos a mejorar o consolidar.',
    },
    {
      termino: 'Dato',
      significado:
        'características o cantidad numérica de una variable que es objeto de recolección para complementar una muestra que se quiere analizar o estudiar.',
    },
    {
      termino: 'Encuesta',
      significado:
        'técnica de aplicación de un cuestionario para obtener información referente a consumos preferencias, y que facilitan la identificación de tendencias, proporcionan información de opiniones, actitudes y comportamientos de los empleados, clientes, proveedores, etc.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos de análisis y toma de decisiones.',
    },
    {
      termino: 'Estratificación',
      significado:
        'clasificación o posibilidades que tiene una variable, pero que no denota un sentido de ordenación o sentido numérico estrictamente, ejemplo las quejas de un servicio por parte de los usuarios.',
    },
    {
      termino: 'Frecuencia absoluta',
      significado:
        'cantidad de veces que se presenta una característica, hecho en una variable a analizar.',
    },
    {
      termino: 'Frecuencia relativa',
      significado:
        'proporción de la frecuencia absoluta respecto al número total de datos, casos de la muestra o población, se expresa por tanto en porcentaje.',
    },
    {
      termino: 'Metodología de análisis',
      significado:
        'para procesos de análisis, corresponde al definir las diferentes formas de ordenar la información, estructurar las tablas de frecuencia u ocurrencia, y definir los métodos gráficos para facilitar el entendimiento que se utilizará para análisis.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'posibilidad de ocurrencia o que se presente una situación, la cual depende de las posibilidades en que la variable se expresa, por ejemplo, en un dado la probabilidad que salga un número en particular es 1/6= 0,1666 veces de un lanzamiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Zappino, J. (2020). Manual de estadística básica para no estadísticos. INAP.',
      link:
        'https://www.argentina.gob.ar/sites/default/files/cuinap_13_2020_0.pdf',
    },
    {
      referencia:
        'Suárez, M. (2013). Cálculo del tamaño de la muestra. Investigación en Educación Médica, 2(8), 217-224.',
      link: 'https://www.redalyc.org/pdf/3497/349733226007.pdf',
    },
    {
      referencia:
        'Tlaxcala, I. (s.f.). Herramientas estadísticas. Alfredo Gutiérrez.',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro: 'Regional Bogotá - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño Y Metrología ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejia Lopez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
