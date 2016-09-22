const EVENTS = [{
    id: 1,
    title: 'evento de ejemplo 1',
    category: 'la la la',
    dueDate: '2016-10-30T22:00:00.000Z'
}, {
    id: 2,
    title: 'evento de ejemplo 2',
    category: 'la la la',
    dueDate: '2016-10-30T23:00:00.000Z'
}, {
    id: 3,
    title: 'evento de ejemplo 3',
    category: 'la la la',
    dueDate: '2016-10-31T00:00:00.000Z'
}, {
    id: 4,
    title: 'evento de ejemplo 4',
    category: 'la la la',
    dueDate: '2016-10-31T01:00:00.000Z'
}, {
    id: 5,
    title: 'evento de ejemplo 5',
    category: 'la la la',
    dueDate: '2016-10-31T02:00:00.000Z'
}, {
    id: 6,
    title: 'evento de ejemplo 6',
    category: 'la la la',
    dueDate: '2016-10-31T03:00:00.000Z'
}, {
    id: 7,
    title: 'evento de ejemplo 7',
    category: 'la la la',
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
      <td class="agenda-fechafutura">
          <div class="agenda-event">
              <i class="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
              ${fechafutura}
          </div>
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
    addEventToAgenda(event.title, d, event.category);

});
