<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Registro de información
    
    p En cualquier actividad administrativa se busca entender su contexto y desarrollo, así como de los productos o servicios ofertados mediante la obtención, organización y análisis de información, resumiendo y compilando, cada vez más, grandes cantidades de esta.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .BG02.p-4.mb-4
          p.mb-0 Para lo anterior, se debe acudir a instrumentos o técnicas de recolección de información directa con los usuarios o individuos para obtener información sobre los servicios y registros de uso de elementos que obedezcan a una categoría o población específica y que reúna una o varias características comunes.
        .row.align-items-center
          .col-2.px-0(data-aos="fade-right")
            img.w-75(src="@/assets/curso/temas/img01.png")
          .col-10
            .h5 <span style="color:#785549">#[strong ¡Nota!]</span>
            p.mb-0 Todos estos datos deberán estar alojados en los sistemas de gestión de la biblioteca o, simplemente, se obtendrán por observaciones o cualquier otro medio previamente fijado para, luego, analizarlos ordenadamente y ser fácilmente interpretados.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.png")

    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-5
      .col-lg-5.col-10.d-none.d-lg-flex.mb-lg-0.mb-4(data-aos="flip-up")
        img(src="@/assets/curso/tema1/img03.png")
      .col-lg-7(data-aos="fade-left")
        p El registro de datos denota un proceso en el cual hay que tener en cuenta el tipo de variable en que se expresan dichos datos, es decir:
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Si es una variable cuantitativa o cualitativa.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Si es del primer tipo.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Si se trata de variables, a su vez, discretas o continuas.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Si es nominal u ordinal (cuando es cualitativa).
        p La información se registra en columnas con encabezados que describen la característica o variable, como se muestra en el siguiente ejemplo:
        .BGR3.p-4.mb-4
          .h5 <span style="color:#FD9827">Ejemplo:</span>
          p.text-white Una biblioteca posee una cantidad de títulos de libros en varios idiomas, obteniendo la siguiente información de conformidad al conteo realizado, como se muestra en la tabla.

        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Ejemplo de número de títulos de libros físicos, en diversos idiomas, que posee una biblioteca
        table
          thead
            tr
              td(style="background-color: #FC9622;").text-center Idioma
              td(style="background-color: #FC9622;").text-center Número de títulos
          tbody
            tr
              td(style="background-color: #FFF;").text-center Francés
              td(style="background-color: #FFF;").text-center 47
            tr
              td(style="background-color: #F9EEE6;").text-center Alemán 
              td(style="background-color: #F9EEE6;").text-center 30
            tr
              td(style="background-color: #FFF;").text-center Inglés
              td(style="background-color: #FFF;").text-center 78
            tr
              td(style="background-color: #F9EEE6;").text-center Italiano
              td(style="background-color: #F9EEE6;").text-center 25

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Elaboración de tablas          

    p En primera medida, todo análisis estadístico comienza con la obtención de datos de una población, bien sea en su totalidad de datos (censal), o por toma de muestra (de carácter muestral).
          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .row.align-items-center.BG04.mb-4
          .col-1.px-0
            img(src="@/assets/curso/temas/img02.png")
          .col-11.p-3
            p.mb-0 Esta información puede ser física, virtual, o consignada mediante la importación de registros procedentes de aplicativos, como hojas de cálculo de Excel u otros programas especializados, donde la biblioteca contenga, compile información, o acceda o deposite datos.
        p.mb-0 En relación con la elaboración de tablas, se debe tener en cuenta aspectos como:
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img04.png")

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.d-none.d-lg-flex.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img05.png")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="BGR05")
          div(titulo="Presentación de datos")
            p.mb-0 Todo análisis estadístico busca, en la presentación de los datos obtenidos en la muestra (o en los diferentes recursos), que la presentación de los mismos sea de forma sencilla y coherente.
          div(titulo="Plus estético de la presentación")
            p.mb-0 Así mismo, la presentación de los datos deberá ser, en lo posible, lógica y estéticamente atractiva para el usuario o lector de la información.
          div(titulo="Aporte de la presentación en tablas")
            p.mb-0 Generalmente, presentar esta información en tablas asegura la interpretación correcta de los datos, el análisis acertado y la comprensión de la misma. En muchas ocasiones, las tablas se enriquecen con gráficas que describen la distribución de los datos.
          div(titulo="Las columnas en las tablas de información")
            p.mb-0 La forma más apropiada de registrar los datos de una variable estadística, en una tabla es mediante columnas.
          div(titulo="Primeras columnas")
            p.mb-0 En la primera columna es muy usual y conveniente registrar los casos o los distintos valores que presenta la variable (generalmente ordenados) de la variable estadística o del correspondiente atributo.
          div(titulo="Segundas columnas")
            p.mb-0 En la segunda columna se presenta la cuantificación de esa variable, en un determinado estudio; lo que se denomina: frecuencias absolutas que no es más que el número de casos dividido entre el número total de casos de la muestra.

    p A continuación, se invita a revisar en detalle un ejemplo práctico sobre la elaboración de una tabla de títulos de libros, de diferentes idiomas que reposan en una biblioteca.

    .BGIMG11.p-5.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Inventario de libros
            p En una biblioteca se cuenta con inventario de libros en idioma extranjero, sin embargo, se quiere tener la claridad de cuántos títulos por idioma se tienen.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img09.png")       
        .row.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Clasificación de la información
            p Como lo que se requiere es establecer el número de títulos en otros idiomas que posee la biblioteca, se levanta el censo de dicha colección de libros como lo muestra la tabla.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img10.svg")
        .row.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Tabulación de la información
            p Posteriormente, se procede a realizar la tabulación y conteo de los registros y datos de la población, a partir del idioma en que están escritos para obtener el resultado real de títulos, en determinado idioma.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img11.png")
        .row.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Resultado del conteo y tabulación de la información
            p Por último, se involucra una variable y suele repetirse con cada objeto de estudio, en este caso, corresponde al  número de libros que hay por cada idioma.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img12.png")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tabla de frecuencias
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4(data-aos="fade-right")
        p La tabla de frecuencias muestra, de forma ordenada y descendentemente, un conjunto de datos estadísticos donde, por cada tipo de dato de la variable, se contabiliza el número de veces que se repite cada uno de ellos.
        .row.align-items-center.BG07
          .col-1.px-0
            img(src="@/assets/curso/temas/img02.png")
          .col-11.p-3
            p.mb-0 Esto quiere decir que se le identifica, a cada tipo de dato de la variable, <span style="color:#785549">#[strong la frecuencia de ocurrencia]</span> o, en otras palabras, <span style="color:#785549">#[strong el comportamiento de frecuencia absoluta]</span> de la variable (fx), lo que facilita, posteriormente, determinar la frecuencia absoluta acumulada (Fx).
      .col-lg-4.BG08.pt-lg-5.pt-xl-0(data-aos="flip-up")
        figure.mt-lg-4.mt-xl-0
          img(src="@/assets/curso/tema1/img14.svg")
      .col-lg-4.BGIMG03.p-4.py-5(data-aos="fade-left")
          .h4 <span style="color:#FD9827">Frecuencia relativa</span>
          p.text-white.mb-0 La frecuencia relativa (hx) es la proporción de los datos de la variable, respecto del total de la muestra o población. Mientras que la frecuencia relativa acumulada (Hx), es el porcentaje acumulado de las frecuencias relativas.

    p.mb-5 Para la construcción de la tabla de frecuencias, se deben seguir algunas recomendaciones, como se muestra a continuación:

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JjTt2_WUhxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Análisis
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .row.align-items-center.BG07.mb-4
          .col-1.px-0
            img(src="@/assets/curso/temas/img02.png")
          .col-11.p-3
            p.mb-0 Con la información de la población objeto de estudio, obtenida censal o muestralmente, debidamente registrada, tabulada y ordenada con la determinación de las frecuencias, se pueden realizar análisis e interpretaciones rápidas, respecto del comportamiento de la variable.
        p.mb-0 Continuando con el ejemplo del caso del número de títulos de libros en idioma extranjero y su tabla de frecuencias, se pueden inferir los siguientes hallazgos:
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img20.png")

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.d-none.d-lg-flex.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img21.png")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Títulos") El número total de títulos de libros en idioma extranjero en la biblioteca es de 180 títulos.
          p.text-small(numero="2" titulo="Oferta de títulos") La oferta de títulos de libros en idioma extranjero contempla cuatro idiomas: inglés, francés, alemán e italiano.
          p.text-small(numero="3" titulo="Mayor oferta") La mayor oferta de títulos de libros en idioma extranjero está en idioma inglés, donde existen 78 títulos de libros.
          p.text-small(numero="4" titulo="Segunda mayor opción") La segunda opción de títulos de libros en idioma extranjero es en francés, con 47 títulos de libros.
          p.text-small(numero="5" titulo="Menor oferta") La oferta que menor disposición de libros en idioma extranjero está en italiano, donde existen 25 títulos, lo que equivale al 13,89% de la oferta de títulos de libros en idioma extranjero.
          p.text-small(numero="6" titulo="Porcentaje de títulos en idioma extranjero") El 69,44% de los títulos en idioma extranjero con que cuenta la biblioteca, están en idioma inglés y francés.
          p.text-small(numero="7" titulo="Otros porcentajes") El 30,56% de los títulos están en alemán o en italiano, siendo el 16,67% de este valor, la oferta de títulos en idioma alemán.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Tabla de frecuencias para datos agrupados 

    p Se utilizan o construyen tablas de frecuencias de datos agrupados en análisis estadísticos, <span style="color:#FD9827">#[strong cuando la variable objeto de estudio obedece a una variable cuantitativa]</span> que presenta grandes cantidades de valores.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .row.align-items-center.BG07.mb-4
          .col-1.px-0
            img(src="@/assets/curso/temas/img02.png")
          .col-11.p-3
            p.mb-0 Cuando se trata de una variable continua se aconseja agrupar los diferentes datos de la variable, por intervalos de igual amplitud, donde a cada intervalo se le denomina clase (Zappino, 2020). 
        p.mb-0 Existen algunas recomendaciones importantes para la construcción de este tipo de tablas, a saber:
      .col-lg-5.col-10.d-none.d-lg-flex.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img22.png")

    .BGIMG04.p-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.d-none.d-lg-flex.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img24.png")
        .col-lg-8(data-aos="fade-left")
          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Identificar datos]</span>
                p.text-center Identificar los datos obtenidos de la población o variable objeto de análisis, ya sea de carácter censal o muestral. Esta información se debe obtener previamente.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .col-4
                      img(src="@/assets/curso/tema1/img25.png")
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Ordenar]</span>
                p.text-center Ordenar la información de datos a analizar de forma ascendente, de menor a mayor valor.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .col-4
                      img(src="@/assets/curso/tema1/img26.png")
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Identificar valores]</span>
                p.text-center Identificar el valor máximo y el valor mínimo del conjunto de datos de la población o muestra a analizar.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .h4.text-center.my-5 X(máx.)   y  X(mín.)
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Calcular]</span>
                p.text-center Calcular el rango o recorrido (R) de los datos, que es el valor o magnitud de la variable que definirá cada clase.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .h4.text-center.my-5 R = X(máx.)- X(mín.)
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Hallar]</span>
                p.text-center Hallar el número de clases o intervalos (K), para lo cual se recomienda usar la fórmula de la denominada regla de Sturges.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .h4.text-center K = 1 + 3,322 * log (n)
                    p.text-center Donde:
                    p.text-center #[strong n]: es el número de datos.
                    p.text-center #[strong log (n)]: es el logaritmo en base diez del número de datos.
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Determinar amplitud]</span>
                p.text-center Determinar la amplitud del intervalo o de la clase (A).
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .h4.text-center.my-5 A = R/K
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Fijar límites]</span>
                p.text-center Fijar el límite inferior -lím.(inf.) y el límite superior -lím.(sup.); que corresponden a los valores inicial y final de cada clase o agrupación de datos.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .h4.text-center.my-5 El límite superior de clase = límite inferior + A
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Determinar marcas]</span>
                p.text-center Determinar las marcas de clase (MC), es el punto medio de la clase.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    .h4.text-center.mt-5.mb-0 Mc = <u>límite superior - límite inferior</u>
                    .h4.text-center.mb-5 2
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827">#[strong Construir tabla]</span>
                p.text-center Construir la tabla de frecuencias de la siguiente manera y estructura.
                .col-lg-8.col-11.BGR10.p-4
                  .row.justify-content-center
                    p.mb-0 Columna 1: número de clases (intervalos)
                    p.mb-0 Columna 2: límite inferior de la clase
                    p.mb-0 Columna 3: límite superior de la clase
                    p.mb-0 Columna 4: marcas de clase
                    p.mb-0 Columna 5: frecuencia absoluta - f(x)
                    p.mb-0 Columna 6: frecuencia relativa - h(x)
                    p.mb-0 Columna 7: frecuencia absoluta acumulada F(x)
                    p.mb-0 Columna 8: frecuencia relativa acumulada H(x)

    p.mb-5 En la siguiente tabla se presenta la información de inversiones, en material bibliográfico, para el mes de junio de una biblioteca que adquirió varios ejemplares. Se recomienda prestar atención a los detalles de esa compra y al nivel de <span style="color:#FD9827">#[strong rango de inversión]</span> que predominó en la misma. 

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 3
      span Ejemplo de datos de inversión en material bibliográfico, adquirido por una biblioteca en el mes de junio
    
    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h4.text-white.mb-0 Inversiones en material bibliográfico - Precio unitario - Mes de junio
      table
        tbody
          tr
            td(style="background-color: #F4EAE2;").text-center $73.000
            td(style="background-color: #F4EAE2;").text-center $65.000
            td(style="background-color: #F4EAE2;").text-center $82.000
            td(style="background-color: #F4EAE2;").text-center $70.000
            td(style="background-color: #F4EAE2;").text-center $45.000
            td(style="background-color: #F4EAE2;").text-center $50.000
            td(style="background-color: #F4EAE2;").text-center $70.000
            td(style="background-color: #F4EAE2;").text-center $54.000
            td(style="background-color: #F4EAE2;").text-center $32.000
            td(style="background-color: #F4EAE2;").text-center $75.000
          tr
            td(style="background-color: #EBD0BC;").text-center $75.000
            td(style="background-color: #EBD0BC;").text-center $67.000
            td(style="background-color: #EBD0BC;").text-center $65.000
            td(style="background-color: #EBD0BC;").text-center $60.000
            td(style="background-color: #EBD0BC;").text-center $75.000
            td(style="background-color: #EBD0BC;").text-center $87.000
            td(style="background-color: #EBD0BC;").text-center $83.000
            td(style="background-color: #EBD0BC;").text-center $40.000
            td(style="background-color: #EBD0BC;").text-center $72.000
            td(style="background-color: #EBD0BC;").text-center $64.000
          tr
            td(style="background-color: #F4EAE2;").text-center $58.000
            td(style="background-color: #F4EAE2;").text-center $75.000
            td(style="background-color: #F4EAE2;").text-center $89.000
            td(style="background-color: #F4EAE2;").text-center $70.000
            td(style="background-color: #F4EAE2;").text-center $73.000
            td(style="background-color: #F4EAE2;").text-center $55.000
            td(style="background-color: #F4EAE2;").text-center $61.000
            td(style="background-color: #F4EAE2;").text-center $78.000
            td(style="background-color: #F4EAE2;").text-center $89.000
            td(style="background-color: #F4EAE2;").text-center $93.000
          tr
            td(style="background-color: #EBD0BC;").text-center $43.000
            td(style="background-color: #EBD0BC;").text-center $51.000
            td(style="background-color: #EBD0BC;").text-center $59.000
            td(style="background-color: #EBD0BC;").text-center $38.000
            td(style="background-color: #EBD0BC;").text-center $65.000
            td(style="background-color: #EBD0BC;").text-center $71.000
            td(style="background-color: #EBD0BC;").text-center $75.000
            td(style="background-color: #EBD0BC;").text-center $85.000
            td(style="background-color: #EBD0BC;").text-center $65.000
            td(style="background-color: #EBD0BC;").text-center $85.000
          tr
            td(style="background-color: #F4EAE2;").text-center $49.000
            td(style="background-color: #F4EAE2;").text-center $97.000
            td(style="background-color: #F4EAE2;").text-center $55.000
            td(style="background-color: #F4EAE2;").text-center $60.000
            td(style="background-color: #F4EAE2;").text-center $76.000
            td(style="background-color: #F4EAE2;").text-center $75.000
            td(style="background-color: #F4EAE2;").text-center $69.000
            td(style="background-color: #F4EAE2;").text-center $35.000
            td(style="background-color: #F4EAE2;").text-center $45.000
            td(style="background-color: #F4EAE2;").text-center $63.000

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .row.align-items-center.BGR11.mb-4
          .col-2.px-0
            img(src="@/assets/curso/temas/img03.png")
          .col-10.p-3
            .h5.text-white.mt-4 ¡Importante!
            p.text-white.mb-4 Para la consolidación de una tabla como esta, la información registrada en ella se sustenta en la base de datos de los materiales bibliográficos adquiridos que describe el precio unitario.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img27.png")

    p Para analizar y comprender mejor el ejemplo de la tabla de inversión, se debe seguir el procedimiento señalado para la construcción de tablas de frecuencia, para datos de variables cuantitativas.

    SlyderF.mb-5(columnas="col-md-6")(data-aos="zoom-in")
      .BGIMG05.p-4
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src="@/assets/curso/tema1/img28.png")
        h4.text-white.text-center Identifique valores <br>
        p.text-white.text-center Identificar el valor máximo y el valor mínimo del conjunto de datos de la población o muestra a analizar.
        p.text-white.text-center Valor máximo de los datos - X(máx.) = $97.000 por un libro.
        p.text-white.text-center.mb-0 Valor mínimo de los datos X(mín.) = $32.000 por un libro.
      .BGIMG05.p-4
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src="@/assets/curso/tema1/img28.png")
        h4.text-white.text-center Calcule el recorrido <br>
        p.text-white.text-center Calcular el rango o recorrido (R) de los datos, que es el valor o magnitud de la variable que definirá cada clase: 
        p.text-white.text-center R = $97.000 - $32.000
        p.text-white.text-center R = $65.000
      .BGIMG05.p-4
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src="@/assets/curso/tema1/img28.png")
        h4.text-white.text-center Halle intervalos <br>
        p.text-white.text-center.mb-0 Hallar el número de clases o intervalos (K): 
        p.text-white.text-center.mb-0 K = 1 + 3,322 * log (50)
        p.text-white.text-center.mb-0 K = 6,64
        p.text-white.text-center.mb-0 K = 7,00
        p.text-white.text-center.mb-0 Donde:
        p.text-white.text-center.mb-0 n: es el número de datos.
        p.text-white.text-center.mb-0 log (n): es el logaritmo en base diez del número de datos
      .BGIMG05.p-4
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src="@/assets/curso/tema1/img28.png")
        h4.text-white.text-center Fije amplitud <br>
        p.text-white.text-center Determinar la amplitud del intervalo o de la clase (1): 
        p.text-white.text-center A = 65.000 / 7
        p.text-white.text-center  A = 9.285,71
      .BGIMG05.p-4
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src="@/assets/curso/tema1/img28.png")
        h4.text-white.text-center Establezca límites inferior y superior <br>
        p.text-white.text-center.mb-0 Los cuales corresponden a los valores inicial y final de cada clase o agrupación de datos:
        p.text-white.text-center.mb-0 El límite superior de clase 1 = límite inferior + A.
        p.text-white.text-center.mb-0 El límite superior de clase 1 = 32.000 + 9.285,71.
        p.text-white.text-center.mb-0 El límite superior de clase 1 = 41.285,71 este valor será el límite superior.
        p.text-white.text-center.mb-0 (Así mismo se realiza con los demás intervalos)
      .BGIMG05.p-4
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src="@/assets/curso/tema1/img28.png")
        h4.text-white.text-center Determine marcas de clase <br>
        p.text-white.text-center Marcas de clase (MC), es el punto medio de la clase:
        p.text-white.text-center.mb-0 Mc = <u>41.285,71- 32.000</u>
        p.text-white.text-center 2
        p.text-white.text-center Mc =  36.643

    p.mb-5 Una vez analizada la tabla inicial con la información de inversión de la biblioteca y de haber seguido los pasos correspondientes, se podrá generar la <span style="color:#FD9827">#[strong tabla de frecuencias de las inversiones]</span> de material bibliográfico para el mes de junio, la cual deberá resultar así:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 4
      span Tabla de frecuencias de las inversiones de material bibliográfico, para el mes de junio en la biblioteca
    
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            td(style="background-color: #505059;").text-center.text-white Clase
            td(style="background-color: #505059;").text-center.text-white lím. (inf.)
            td(style="background-color: #505059;").text-center.text-white lím. (sup.)
            td(style="background-color: #505059;").text-center.text-white Marca de clase
            td(style="background-color: #505059;").text-center.text-white f(x)
            td(style="background-color: #505059;").text-center.text-white h(x)
            td(style="background-color: #505059;").text-center.text-white F(x)
            td(style="background-color: #505059;").text-center.text-white H(x)
        tbody    
          tr
            td(style="background-color: #EEE6DF;").text-center 1
            td(style="background-color: #EEE6DF;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">$32.000,00</span>
            td(style="background-color: #EEE6DF;").text-center $41.285,71
            td(style="background-color: #EEE6DF;").text-center $36.643
            td(style="background-color: #EEE6DF;").text-center 4
            td(style="background-color: #EEE6DF;").text-center 8,00%
            td(style="background-color: #EEE6DF;").text-center 4
            td(style="background-color: #EEE6DF;").text-center 8,00%
          tr
            td(style="background-color: #E7D1C1;").text-center 2
            td(style="background-color: #E7D1C1;").text-center $41.285,72
            td(style="background-color: #E7D1C1;").text-center $50.571,44
            td(style="background-color: #E7D1C1;").text-center $45.929
            td(style="background-color: #E7D1C1;").text-center 5
            td(style="background-color: #E7D1C1;").text-center 10,00%
            td(style="background-color: #E7D1C1;").text-center 9
            td(style="background-color: #E7D1C1;").text-center 18,00%
          tr
            td(style="background-color: #EEE6DF;").text-center 3
            td(style="background-color: #EEE6DF;").text-center $50.571,45
            td(style="background-color: #EEE6DF;").text-center $59.857,16
            td(style="background-color: #EEE6DF;").text-center $55.214
            td(style="background-color: #EEE6DF;").text-center 6
            td(style="background-color: #EEE6DF;").text-center 12,00%
            td(style="background-color: #EEE6DF;").text-center 15
            td(style="background-color: #EEE6DF;").text-center 30,00%
          tr
            td(style="background-color: #E7D1C1;").text-center 4
            td(style="background-color: #E7D1C1;").text-center $59.857,17
            td(style="background-color: #E7D1C1;").text-center $69.142,89
            td(style="background-color: #E7D1C1;").text-center $64.500
            td(style="background-color: #E7D1C1;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">11</span>
            td(style="background-color: #E7D1C1;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">22,00%</span>
            td(style="background-color: #E7D1C1;").text-center 26
            td(style="background-color: #E7D1C1;").text-center 52,00%
          tr
            td(style="background-color: #EEE6DF;").text-center 5
            td(style="background-color: #EEE6DF;").text-center $69.142,90
            td(style="background-color: #EEE6DF;").text-center $78.428,61
            td(style="background-color: #EEE6DF;").text-center $73.786
            td(style="background-color: #EEE6DF;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">15</span>
            td(style="background-color: #EEE6DF;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">30,00%</span>
            td(style="background-color: #EEE6DF;").text-center 41
            td(style="background-color: #EEE6DF;").text-center 82,00%
          tr
            td(style="background-color: #E7D1C1;").text-center 6
            td(style="background-color: #E7D1C1;").text-center $78.428,62
            td(style="background-color: #E7D1C1;").text-center $87.714,34
            td(style="background-color: #E7D1C1;").text-center $83.071
            td(style="background-color: #E7D1C1;").text-center 5
            td(style="background-color: #E7D1C1;").text-center 10,00%
            td(style="background-color: #E7D1C1;").text-center 46
            td(style="background-color: #E7D1C1;").text-center 92,00%
          tr
            td(style="background-color: #EEE6DF;").text-center 7
            td(style="background-color: #EEE6DF;").text-center $87.714,35
            td(style="background-color: #EEE6DF;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">$97.000,06</span>
            td(style="background-color: #EEE6DF;").text-center $92.357
            td(style="background-color: #EEE6DF;").text-center 4
            td(style="background-color: #EEE6DF;").text-center 8,00%
            td(style="background-color: #EEE6DF;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">50</span>
            td(style="background-color: #EEE6DF;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">100,00%</span>
          tr
            td(style="background-color: #CEB6A3;").text-center
            td(style="background-color: #CEB6A3;").text-center 
            td(style="background-color: #CEB6A3;").text-center 
            td(style="background-color: #CEB6A3;").text-center Total
            td(style="background-color: #CEB6A3;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">50</span>
            td(style="background-color: #CEB6A3;").text-center <span style="background-color: #F3F0ED; border: 3px solid #F5A751; border-radius: 100px; padding: 2px">100,00%</span>
            td(style="background-color: #CEB6A3;").text-center 
            td(style="background-color: #CEB6A3;").text-center
    
    p.mb-5 En consecuencia, se podrá generar la <span style="color:#FD9827">#[strong tabla de descripción del nivel de inversión]</span>, en dinero, dada la adquisición de material bibliográfico de la biblioteca.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 5
      span Ejemplo Tabla de descripción del nivel de inversión
    
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            td(style="background-color: #31313C; width: 36%;").text-center.text-white Rango de precio de las adquisiciones
            td(style="background-color: #31313C; width: 16%;").text-center.text-white Inversión (fx)
            td(style="background-color: #31313C; width: 16%;").text-center.text-white % de inversión h(x)
            td(style="background-color: #31313C; width: 16%;").text-center.text-white Inversión acumulada F(x)
            td(style="background-color: #31313C; width: 16%;").text-center.text-white % de inversión acumulada H(x)
        tbody    
          tr
            td(style="background-color: #EBD0BC;") $32.000 - $41.285,71
            td(style="background-color: #EBD0BC;").text-end $145.000,00
            td(style="background-color: #EBD0BC;").text-end 4,39%
            td(style="background-color: #EBD0BC;").text-end $145.000,00
            td(style="background-color: #EBD0BC;").text-end 4,39%
          tr
            td(style="background-color: #F4EAE2;") $41.285,71 - $50.571,42
            td(style="background-color: #F4EAE2;").text-end $232.000,00
            td(style="background-color: #F4EAE2;").text-end 7,02%
            td(style="background-color: #F4EAE2;").text-end $377.000,00
            td(style="background-color: #F4EAE2;").text-end 11,40%
            tr
            td(style="background-color: #EBD0BC;") $50.571,42 - $59.857,13
            td(style="background-color: #EBD0BC;").text-end $332.000,00
            td(style="background-color: #EBD0BC;").text-end 10,04%
            td(style="background-color: #EBD0BC;").text-end $709.000,00
            td(style="background-color: #EBD0BC;").text-end 21,45%
          tr
            td(style="background-color: #F4EAE2;") $59.857,13 - $69.142,84
            td(style="background-color: #F4EAE2;").text-end $704.000,00
            td(style="background-color: #F4EAE2;").text-end 21,29%
            td(style="background-color: #F4EAE2;").text-end $1.413.000,00
            td(style="background-color: #F4EAE2;").text-end 42,74%
          tr
            td(style="background-color: #EBD0BC;") $69.142,84 - $78.428,55
            td(style="background-color: #EBD0BC;").text-end $1.103.000,00
            td(style="background-color: #EBD0BC;").text-end 33,36%
            td(style="background-color: #EBD0BC;").text-end $2.516.000,00
            td(style="background-color: #EBD0BC;").text-end 76,10%
          tr
            td(style="background-color: #F4EAE2;") $78.428,55 - $87.714,26
            td(style="background-color: #F4EAE2;").text-end $422.000,00
            td(style="background-color: #F4EAE2;").text-end 12,76%
            td(style="background-color: #F4EAE2;").text-end $2.938.000,00
            td(style="background-color: #F4EAE2;").text-end 88,87%
          tr
            td(style="background-color: #EBD0BC;") $87.714,26 - $96.999,97
            td(style="background-color: #EBD0BC;").text-end $271.000,00
            td(style="background-color: #EBD0BC;").text-end 8,20%
            td(style="background-color: #EBD0BC;").text-end $3.209.000,00
            td(style="background-color: #EBD0BC;").text-end 97,07%
          tr
            td(style="background-color: #F4EAE2;") $96.999,97 - $106285,68
            td(style="background-color: #F4EAE2;").text-end $97.000,00
            td(style="background-color: #F4EAE2;").text-end 2,93%
            td(style="background-color: #F4EAE2;").text-end $3.306.000,00
            td(style="background-color: #F4EAE2;").text-end 100,00%
          tr
            td(style="background-color: #CDAF98;") Total general
            td(style="background-color: #CDAF98;").text-end $3.306.000
            td(style="background-color: #CDAF98;").text-end 100,00%
            td(style="background-color: #CDAF98;") 
            td(style="background-color: #CDAF98;") 

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Análisis de tablas con agrupación de datos 

    .BGM06.p-md-5.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          .row.align-items-center.BG07.mb-4
            .col-1.px-0
              img(src="@/assets/curso/temas/img02.png")
            .col-11.p-3
              p.mb-0 Con la información de la población objeto de estudio, suministrada por las adquisiciones de material bibliográfico por parte de una biblioteca, debidamente registrada, tabulada y ordenada y con la determinación de las frecuencias, se pueden realizar análisis e interpretaciones rápidas, respecto del comportamiento de la variable.
          p En el ejemplo que se ha venido trabajando y para el análisis de esta tabla sobre el comportamiento de las variables, se pueden llegar a interpretaciones como:
          ul.lista-ul--color.ms-4
            li
              <i class="fas fa-chevron-right" style="color:#FD9827"></i>
              | El número total de libros adquiridos por la biblioteca en junio fue de 50 unidades.
            li
              <i class="fas fa-chevron-right" style="color:#FD9827"></i>
              | Los libros adquiridos oscilaron en precio desde $32.000 hasta los $97.000.
            li
              <i class="fas fa-chevron-right" style="color:#FD9827"></i>
              | El 30% de las adquisiciones de libros obedece a 30 libros, cuyo precio osciló entre los $69.142 y los $78.428,61 por libro.
            li
              <i class="fas fa-chevron-right" style="color:#FD9827"></i>
              | El 52% de las adquisiciones obedece a 26 libros de los 50 libros totales adquiridos.
            li
              <i class="fas fa-chevron-right" style="color:#FD9827"></i>
              | Se evidencia que la compra procuró optimizar la inversión, ya que no se concentró en los libros más económicos, tampoco en los más costosos, pues de estos dos niveles adquirió cuatro unidades por cada tipo, siendo que en los más costosos solo invirtió el 2,93% de los recursos; en general buscó invertir en libros con niveles de alcance y precio intermedio.
            li
              <i class="fas fa-chevron-right" style="color:#FD9827"></i>
              | La inversión global realizada en material bibliográfico ascendió a $3.306.000 en los 50 libros.
            li
              <i class="fas fa-chevron-right" style="color:#FD9827"></i>
              | La media de inversión por libro asciende a $66.120,00 
          .row.align-items-center.BGR3.mb-4
            .col-2.px-0
              img(src="@/assets/curso/temas/img03.png")
            .col.p-4
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p <span style="color:#FD9827">#[strong Catálogo de servicios digitales en las bibliotecas]</span>.
                  p.text-white Amplíe su saber en lo relacionado con análisis de tablas con agrupación de datos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_1_CatalogoDeServiciosDigitalesBibliotecas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .col-lg-5.col-10.d-none.d-lg-flex.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img31.png")
    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
