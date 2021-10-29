$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    $(function () {
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
      });
    });
  }
  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Tequisquiapan",
        subtit: "El destino para olvidarse de la rutina.",
        date:
          "Publicado el día " +
          moment().format("DD") +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "El Pueblo Mágico de Tequisquiapan se localiza en el Estado de Querétaro muy cerca de la ciudad de Santiago de Querétaro. Este mágico lugar es muy conocido por ser un poblado pequeño y por encontrarse en una zona de aguas termales. <br><br> Si estás pensando visitar este lugar, te encontrarás con un entorno de completa tranquilidad, ideal para salir de la rutina y respirar el aire puro, así como admirar sus bellos cielos azules y su clima casi perfecto.",
          img: "img/tequi1.jpg",
          content2:
          "Tequis, como es conocido por los lugareños y visitantes, cuenta con un gran corredor de Parques Acuáticos, tiendas de artesanías y vuelos en globo aerostático. Además, Tequisquiapan forma parte de la región del vino en el estado de Querétaro, por lo que aquí también podrás degustar buen vino mexicano gracias a las catas y degustaciones que se realizan en las vinícolas de la zona.",
          button: "https://www.visitmexico.com/queretaro/tequisquiapan",
      },
      {
        title: "Pueblos Mágicos",
        subtit: "Descubre México y enamórate de sus Pueblos Mágicos.",
        date:
          "Publicado el día " +
          moment().format("DD") +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "El valor cultural, histórico, arquitectónico y gastronómico de los destinos de México es tan grande como su territorio. La designación de Pueblo Mágico se otorga a aquellas comunidades que a través del tiempo han mantenido su arquitectura original, tradiciones, historia y cultura. Y que han sido de gran relevancia para la historia del país.",
          img: "img/pm1.jpg",
          content2:
          "Los Pueblos Mágicos se definen como lugares con grandes simbolismos y leyendas, son poblados cuya importancia histórica ha sido fundamental para el desarrollo de la historia y que enaltecen la identidad nacional en cada uno de sus rincones. Estos lugares tienen una magia especial que conecta al visitante con nuestras raíces y costumbres. De belleza excepcional son destinos que simplemente enamoran. <br><br>Actualmente a lo largo del territorio se encuentran 132 Pueblos Mágicos, cuyos atractivos generan gran admiración entre los turistas, no solo nacionales sino del mundo entero.",
          button: "https://www.visitmexico.com/tipos-de-turismo/pueblos-magicos",
      },
    ];
    console.log(posts);

    // Recorrer el JSON para enviar al index.HTML
    posts.forEach((item) => {
      var post = `<br><br><hr><br><br>
                  <article class="post">
                    <h2>${item.title}</h2>
                    <h3>${item.subtit}</h3>
                    <br>
                    
                    <p>
                        ${item.content}
                    </p>
                    <div style="text-align: center;">
                      <img src=${item.img}  class="rounded" width="800px">
                      </div>
                    <p>
                        ${item.content2}
                    </p>
                    <span class="date">${item.date}</span>
                    <br>
                    <div style="text-align: center;">
                      <a href=${item.button}>
                        <button class="boton_personalizado2">Artículo completo</button>
                      </a>
                    </div>
                </article>`;
      //console.log(post);
      $("#posts").append(post);
    });
  }
  //Selector de tema
  var theme = $("#theme");

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
    alert("La página ha cambiado de tema");
  });

  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
    alert("La página ha cambiado de tema");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
    alert("La página ha cambiado de tema");
  });

  //Login LocalStorage

  $("#login form").submit(function () {
    let form_name = $("#form_name").val();
    //alert(form_name);
    // console.log(form_name);
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "unfined") {
    let about_parrafo = $("#about p");
    $("#about p").html("<b>Bienvenido " + form_name + "</b>");
    about_parrafo.append("<br><a href = '#' id = 'logout'>Cerrar Sesión</a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  //Activar Jquery validator
  if(window.location.href.indexOf("contacto")>-1){
    $.validate({
      lang: "es",
    });
  }
});