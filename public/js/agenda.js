const EVENTS = [{
    id: 1,
    title: 'evento de ejemplo 1',
    description: 'la la la',
    dueDate: '2016-10-30T22:00:00.000Z'
}, {
    id: 2,
    title: 'evento de ejemplo 2',
    description: 'la la la',
    dueDate: '2016-10-30T23:00:00.000Z'
}, {
    id: 3,
    title: 'evento de ejemplo 3',
    description: 'la la la',
    dueDate: '2016-10-31T00:00:00.000Z'
}, {
    id: 4,
    title: 'evento de ejemplo 4',
    description: 'la la la',
    dueDate: '2016-10-31T01:00:00.000Z'
}, {
    id: 5,
    title: 'evento de ejemplo 5',
    description: 'la la la',
    dueDate: '2016-10-31T02:00:00.000Z'
}, {
    id: 6,
    title: 'evento de ejemplo 6',
    description: 'la la la',
    dueDate: '2016-10-31T03:00:00.000Z'
}, {
    id: 7,
    title: 'evento de ejemplo 7',
    description: 'la la la',
    dueDate: '2016-10-31T04:00:00.000Z'
}, ];

function addEventToAgenda(title, dueDate, description) {
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
              ${title}
          </div>
      </td>
      <td class="agenda-events">
          <div class="agenda-event">
              <i class="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
              ${title}
          </div>
      </td>
    </tr>
  `);
}


jQuery('#add').on('click', function() {
    var value = jQuery('#inputtarea').val();
    addEventToAgenda(value, new Date ( ));
});


EVENTS.forEach(function(event) {

    var d = new Date(event.dueDate);
    addEventToAgenda(event.title, d);

});
