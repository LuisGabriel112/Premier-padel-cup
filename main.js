        // Contador
        const countdown = () => {
            const countDate = new Date("Apr 11, 2025 07:00:00").getTime();
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const textDay = Math.floor(gap / day);
            const textHour = Math.floor((gap % day) / hour);
            const textMinute = Math.floor((gap % hour) / minute);
            const textSecond = Math.floor((gap % minute) / second);

            document.getElementById('countdown').innerHTML = `${textDay}d ${textHour}h ${textMinute}m ${textSecond}s`;
        };

        setInterval(countdown, 1000);