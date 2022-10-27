<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gráficas y tipos de gráficas
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Se denomina gráfica a toda representación visual que permite evidenciar el comportamiento e interpretación de los datos de una variable, generalmente numérica.
        .row.align-items-center.BG07
          .col-1.px-0
            img(src="@/assets/curso/temas/img02.png")
          .col-11.p-3
            p.mb-0 Las gráficas, como formas de representación visual, sirven complementariamente para comprender, de manera sintetizada, los datos de una variable objeto de estudio y son un complemento a las tablas de tabulación de información, frecuencias, entre otros.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.png")
    
    p Se invita a visualizar con atención el video que se muestra enseguida e identificar los principales tipos de gráficas usadas para la presentación de informes estadísticos en las bibliotecas y demás organizaciones y proyectos.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Pvu5kSuaO5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.BGR3.mb-4
      .col-lg-1.col-2.px-0
        img(src="@/assets/curso/temas/img03.png")
      .col.p-4
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            p.text-white Profundice en los tipos de gráficas y su utilización en procesos estadísticos, visitando el contenido del siguiente enlace:
          .col-sm-auto
            a.boton.color-acento-botones(href="https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html" target="_blank")
              span Ir al sitio
              i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
