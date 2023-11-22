function showCalendar(){
    let myEvents = [];
    axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`).then(res=>{
        res.data.forEach(item => {
            let color;
            if (item.type==1) {
                color = "Green";
            }else{
                color="Red";
            }
            myEvents.push({

                title: item.amount,
                start: item.date,
                allDay: true,
                backgroundColor: color,
                borderColor: color,
            })
        });
    });

    setTimeout(()=>{

        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        },
        initialDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        dayMaxEvents: true, // allow "more" link when too many events
        events: myEvents
        });
        
        calendar.render();
    }, 100);
}
