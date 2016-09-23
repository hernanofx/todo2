const EVENTS = [{
    id: 1,
    title: 'Realizar el trabajo',
    category: 'Trabajo',
    fechafutura: '2017-10-30T22:00:00.000Z',
    dueDate: '2016-08-06T22:00:00.000Z'
}, {
    id: 2,
    title: 'Ensayo en palermo',
    category: 'Banda',
    fechafutura: '2018-07-16T16:30:00.000Z',
    dueDate: '2016-06-16T23:00:00.000Z'
}, {
    id: 3,
    title: 'Partido de padel',
    category: 'Deporte',
    fechafutura: '2019-02-03T08:00:00.000Z',
    dueDate: '2016-10-31T00:00:00.000Z'
}, {
    id: 4,
    title: 'Juntada con amigos',
    category: 'Sociales',
    fechafutura: '2020-01-31T23:30:00.000Z',
    dueDate: '2016-03-23T01:00:00.000Z'
}, {
    id: 5,
    title: 'Reunion con el jefe',
    category: 'Trabajo',
    fechafutura: '2021-08-28T05:05:00.000Z',
    dueDate: '2016-01-28T02:00:00.000Z'
}, {
    id: 6,
    title: 'Partido de futbol',
    category: 'Deporte',
    fechafutura: '2022-06-24T19:23:00.000Z',
    dueDate: '2016-04-14T03:00:00.000Z'
}, {
    id: 7,
    title: 'Reunion amigos del colegio',
    category: 'Sociales',
    fechafutura: '2023-11-18T11:10:00.000Z',
    dueDate: '2016-03-20T04:00:00.000Z'
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
    <tr class ="">
            <td class="agenda-date" class="active" rowspan="1">
            <div class="dayofmonth w3-text-blue-grey">${fdiaDelMes} </div>
            <div class="shortdate text-muted w3-text-blue-grey">${fmeses}, ${año2}</div>
            <div class="dayofweek w3-text-blue-grey">${fdiasDeSemana}</div>
            </td>

            <td class="agenda-time w3-center w3-text-blue-grey">
            ${horas2}:${minutos2}:${segundos2}
            </td>

            <td class="agenda-type">
            <div class="agenda-event w3-text-black">
              <i class="glyphicon glyphicon-list-alt text-muted" title="Repeating event"></i>
              ${description}
            </div>
            </td>

            <td class="agenda-events">
            <div class="agenda-event w3-text-black">
              <i class="glyphicon glyphicon-tag text-muted" title="Repeating event"></i>
              <i>${category}</i>
              </div>
              </td>

            <td class="agenda-date" class="active" rowspan="1">
            <div class="dayofmonth w3-text-grey">${pdayOfMonth} </div>
            <div class="shortdate w3-text-grey text-muted">${pMonth}, ${year}</div>
            <div class="dayofweek w3-text-grey">${pdayOfWeek}</div>
            </td>

            <td class="agenda-time w3-center w3-text-grey">
              ${hours}:${minutes}:${seconds}
          </td>
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
