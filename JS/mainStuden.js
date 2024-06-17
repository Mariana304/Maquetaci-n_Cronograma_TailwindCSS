     //Dropdowm actividad
     function toggleInfo(event, agendaActivity) {
        const info = agendaActivity.querySelector('.agendaActivity-info');
        const hoverInfo = agendaActivity.querySelector('.activity__border-text');
        const hoverContent = agendaActivity.querySelector('.activity__content');
        const icon = agendaActivity.querySelector('.container__icons--showMore i');


        if (agendaActivity.classList.contains('active')) {
            agendaActivity.classList.remove('active');
            // info.style.height = '0';
            hoverInfo.style.display = 'flex'; // Muestra el hover-info nuevamente
            hoverContent.style.padding = '';
            icon.classList.remove('fa-angles-up');
            icon.classList.add('fa-angles-down');

            info.style.height = info.scrollHeight + 'px';



        } else {
            closeAllAgendaActivities(); // Cierra todas las otras agenda activities 
            agendaActivity.classList.add('active');
            info.style.height = info.scrollHeight + 'px';
            hoverContent.style.padding = '0';
            hoverInfo.style.display = 'none'; // Oculta el hover-info
            icon.classList.remove('fa-angles-down');
            icon.classList.add('fa-angles-up');
        }


        event.stopPropagation(); // Evita que el clic se propague al document
    }

    function closeAllAgendaActivities() {
        const allAgendaActivities = document.querySelectorAll('.agendaActivity');
        allAgendaActivities.forEach(agendaActivity => {
            const info = agendaActivity.querySelector('.agendaActivity-info');
            const hoverInfo = agendaActivity.querySelector('.activity__border-text');
            const hoverContent = agendaActivity.querySelector('.activity__content');
            const icon = agendaActivity.querySelector('.container__icons--showMore i');

            agendaActivity.classList.remove('no-hover');
            agendaActivity.classList.remove('active');
            info.style.height = '0';
            hoverContent.style.padding = '';
            hoverInfo.style.display = 'flex'; // Asegura que el hover-info esté visible
            icon.classList.remove('fa-angles-up');
            icon.classList.add('fa-angles-down');
        });
    }

    document.addEventListener('click', (event) => {
        const isClickInsideAgendaActivity = event.target.closest('.agendaActivity');
        if (isClickInsideAgendaActivity) {
            toggleInfo(event, isClickInsideAgendaActivity);
        } else {
            closeAllAgendaActivities();
        }
    });



    //Porcentaje de avance
    // Definir la variable porcent
    let porcent = 78;

    // elementos del DOM
    let circle = document.getElementById('progress-indicator');
    let circleMobile = document.getElementById('progress-indicator-mobile');

    let text = document.getElementById('progress-text');
    let textMobile = document.getElementById('progress-text-mobile');

    // Actualizar el texto del porcentaje
    text.textContent = porcent + '%';
    textMobile.textContent = porcent + '%';

    // Calcular el desplazamiento del dash para el círculo
    let radius = circle.r.baseVal.value;
    let circumference = 2 * Math.PI * radius;
    let offset = circumference - (porcent / 100 * circumference);

    circle.style.strokeDashoffset = offset;
    circleMobile.style.strokeDashoffset = offset;

    // Establecer el color del borde de progreso dependiendo del porcentaje
    if (porcent <= 25) {
        circle.style.stroke = '#E27085';
        circleMobile.style.stroke = '#E27085';
    } else if (porcent <= 50) {
        circle.style.stroke = '#FF9B52';
        circleMobile.style.stroke = '#FF9B52';
    } else if (porcent <= 99) {
        circle.style.stroke = '#FFB950';
        circleMobile.style.stroke = '#FFB950';
    } else if (porcent >= 100) {
        circle.style.stroke = '#50B447';
        circleMobile.style.stroke = '#50B447';
    }
