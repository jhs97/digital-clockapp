// 디지털 시계앱 과제

$(function(){
    setInterval(function(){
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let amPm = d.getHours();
        let Month = d.getMonth();
        let date = d.getDate();
        let Day = d.getDay();

        // console.log(h,m,s,amPm,Month,date,Day);

        // 시간
        if(h<12) { amPm = 'AM'; }
        if(h>=12) { amPm = 'PM'; }
        if(h<10) { h = '0'+ h; }
        if(m<10) { m = '0'+ m; }
        if(s<10) { s = '0'+ s; }
        // 요일
        if(Day==0) { Day = 'sun'; }
        if(Day==1) { Day = 'mon'; }
        if(Day==2) { Day = 'tue'; }
        if(Day==3) { Day = 'wed'; }
        if(Day==4) { Day = 'thu'; }
        if(Day==5) { Day = 'fri'; }
        if(Day==6) { Day = 'sat'; }

        // 표시
        $('.month').html(Month+1);
        $('.date').html(date);
        $('.day').html(Day);
        $('.amPm').html(amPm);
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);

    },1000);
});



