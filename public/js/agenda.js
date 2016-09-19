const EVENTS = [{
    id: 1,
    title: 'evento de ejemplo 1',
    description: '',
    dueDate: '2016-10-30T22:00:00.000Z'
}, {
    id: 2,
    title: 'evento de ejemplo 2',
    description: '',
    dueDate: '2016-10-30T23:00:00.000Z'
}, {
    id: 3,
    title: 'evento de ejemplo 3',
    description: '',
    dueDate: '2016-10-31T00:00:00.000Z'
}, {
    id: 4,
    title: 'evento de ejemplo 4',
    description: '',
    dueDate: '2016-10-31T01:00:00.000Z'
}, {
    id: 5,
    title: 'evento de ejemplo 5',
    description: '',
    dueDate: '2016-10-31T02:00:00.000Z'
}, {
    id: 6,
    title: 'evento de ejemplo 6',
    description: '',
    dueDate: '2016-10-31T03:00:00.000Z'
}, {
    id: 7,
    title: 'evento de ejemplo 7',
    description: '',
    dueDate: '2016-10-31T04:00:00.000Z'
}, ];

function addEventToAgenda(title, dueDate) {
    var dayOfMonth = dueDate.getUTCDate();
    var monthNumber =  dueDate.getUTCMonth();
    var year = dueDate.getUTCFullYear();
    var dayOfWeek = dueDate.getUTCDay();
    var hours = dueDate.getUTCHours();
    var minutes = dueDate.getUTCMinutes();
    var seconds = dueDate.getUTCSeconds();

    var pdayOfMonth = document.getElementById('dayOfMonth');
    var pmonthNumber = document.getElementById('monthNumber');
    var pdayOfWeek = document.getElementById('dayOfWeek');

    var week = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

    pdayOfWeek.textContent = week[dayOfWeek];

    pdayOfMonth.textContent = dayOfMonth;

    var month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    pMonth.textContent = month[monthNumber];



    jQuery('tbody').append(`
    <tr>
      <td class="agenda-date" class="active" rowspan="1">
          <div id="dayOfMonth" class="dayofmonth">${dayOfMonth} </div>
          <div id="dayOfWeek" class="dayofweek">${dayOfWeek}</div>
          <div id="monthNumber" class="shortdate text-muted">${monthNumber + 1}, ${year}</div>
      </td>
      <td class="agenda-time">
          ${hours}:${minutes}:${seconds}
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
    const value = jQuery('#textInput').val();
    addEventToAgenda(value, new Date ( ));
});

EVENTS.forEach(function(event) {

    const d = new Date(event.dueDate);

    addEventToAgenda(event.title, d);
});
