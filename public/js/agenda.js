const EVENTS = [{
    id: 1,
    title: 'evento de ejemplo 1',
    category: 'Trabajo',
    fechafutura: '2017-10-30T22:00:00.000Z',
    dueDate: '2016-10-30T22:00:00.000Z'
}, {
    id: 2,
    title: 'evento de ejemplo 2',
    category: 'Banda',
    fechafutura: '2018-10-30T22:00:00.000Z',
    dueDate: '2016-10-30T23:00:00.000Z'
}, {
    id: 3,
    title: 'evento de ejemplo 3',
    category: 'Deporte',
    fechafutura: '2019-10-30T22:00:00.000Z',
    dueDate: '2016-10-31T00:00:00.000Z'
}, {
    id: 4,
    title: 'evento de ejemplo 4',
    category: 'Sociales',
    fechafutura: '2020-10-30T22:00:00.000Z',
    dueDate: '2016-10-31T01:00:00.000Z'
}, {
    id: 5,
    title: 'evento de ejemplo 5',
    category: 'Trabajo',
    fechafutura: '2021-10-30T22:00:00.000Z',
    dueDate: '2016-10-31T02:00:00.000Z'
}, {
    id: 6,
    title: 'evento de ejemplo 6',
    category: 'Deporte',
    fechafutura: '2022-10-30T22:00:00.000Z',
    dueDate: '2016-10-31T03:00:00.000Z'
}, {
    id: 7,
    title: 'evento de ejemplo 7',
    category: 'Sociales',
    fechafutura: '2023-10-30T22:00:00.000Z',
    dueDate: '2016-10-31T04:00:00.000Z'
}, ];

function addEventToAgenda(description, dueDate, category, fechafutura ) {
    var dayOfMonth = dueDate.getUTCDate();
    var monthNumber =  dueDate.getUTCMonth();
    var year = dueDate.getUTCFullYear();
    var dayOfWeek = dueDate.getUTCDay();
    var hours = dueDate.getUTCHours();
    var minutes = dueDate.getUTCMinutes();
    var seconds = dueDate.getUTCSeconds();
    var week = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    var pdayOfWeek = week[dayOfWeek];
    var pdayOfMonth = dayOfMonth;
    var month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var pMonth = month[monthNumber];

    var diaDelMes = new Date(fechafutura);
    var diaDelMes2 = diaDelMes.getUTCDate();
    var numeroMes =  new Date(fechafutura);
    var numeroMes = numeroMes.getUTCMonth();
    var año = new Date(fechafutura);
    var año2 = año.getUTCFullYear();
    var diaDeSemana = new Date(fechafutura);
    var diaDeSemana2 = diaDeSemana.getUTCDay();
    var horas = new Date(fechafutura);
    var horas2 = horas.getUTCHours();
    var minutos = new Date(fechafutura);
    var minutos2 = minutos.getUTCMinutes();
    var segundos = new Date(fechafutura);
    var segundos2 = segundos.getUTCSeconds();
    var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    var fdiasDeSemana = semana[diaDeSemana2];
    var fdiaDelMes = diaDelMes2;
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var fmeses = meses[numeroMes];





    jQuery('tbody').append(`
    <tr>
          <td class="agenda-date" class="active" rowspan="1">
          <div class="dayofmonth">${pdayOfMonth} </div>
          <div class="shortdate text-muted">${pMonth}, ${year}</div>
          <div class="dayofweek">${pdayOfWeek}</div>

      </td>
      <td class="agenda-time">
          ${hours}:${minutes}:${seconds}
      </td>
      <td class="agenda-type">
          <div class="agenda-event">
              <i class="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
              ${description}
          </div>
      </td>
      <td class="agenda-events">
          <div class="agenda-event">
              <i class="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
              ${category}
          </div>
      </td>
          <td class="agenda-date" class="active" rowspan="1">
          <div class="dayofmonth">${fdiaDelMes} </div>
          <div class="shortdate text-muted">${fmeses}, ${año2}</div>
          <div class="dayofweek">${fdiasDeSemana}</div>

      </td>
      <td class="agenda-time">
      ${horas2}:${minutos2}:${segundos2}


    </tr>
  `);
}


jQuery('#add').on('click', function() {
    var value_evento = jQuery('#inputevento').val();
    var value_categoria = jQuery('#inputeventocategoria').val();
    var value_fechafutura = jQuery('#fechafutura').val();

    addEventToAgenda(value_evento, new Date ( ), value_categoria, value_fechafutura);
});


EVENTS.forEach(function(event) {

    var d = new Date(event.dueDate);
    addEventToAgenda(event.title, d, event.category, event.fechafutura);

});
