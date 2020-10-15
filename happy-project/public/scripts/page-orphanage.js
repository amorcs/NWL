const options ={
  dragging: false,
  toutchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
  
}
//create map
const map = L.map("mapid", options).setView([-1.4522878, -48.4949849], 16);
//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});
 

//create ans add mar
L.marker([-1.4522878, -48.4949849], { icon: icon })
  .addTo(map);


  // image gallery

  function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    console.log(buttons);

    buttons.forEach((button)=>{
        button.classList.remove('active');
    });
    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');
    console.log('image: '+image)
    console.log('image container '+imageContainer)

    //atualizar o container 
    imageContainer.src= image.src;
    //adicionar a class .active para o botão clicado
    button.classList.add("active");
  }