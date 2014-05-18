if (Pictures.find().count() === 0) {
  Pictures.insert({
    title: 'Windsurf paradise',
    author: 'Sacha Greif',
    url: 'http://www.pasaporteblog.com/wp-content/uploads/2012/08/tarifa-windsurf-y-kitesurf.jpg',
    text: 'some nice place in the world'
  });
  
  Pictures.insert({
    title: 'Jump',
    author: 'Tom Coleman',
    url: 'http://www.viajejet.com/wp-content/viajes/windsurf-chipre.JPG',
    text: 'My big jump'
  });

  Pictures.insert({
    title: 'Wave',
    author: 'Tom Coleman',
    url: 'http://dwn.emule.com/fondo-de-escritorio-windsurf/fondo-de-escritorio-windsurf.jpg',
    text: 'It s fake!!'
  });

}
