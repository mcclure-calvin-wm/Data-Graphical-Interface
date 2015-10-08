/**
 * Created by session1 on 10/8/15.
 */

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        [' ', 'Police Cases 9/23/2015',],
        ['Arrest', 35],
        ['No Arrest', 65],
    ]);

    var options = {
        title: 'Police Cases 9/23/2015',
        chartArea: {width: '50%'},
        hAxis: {
            title: '# of arrests',
            minValue: 0
        },
        vAxis: {
            title: 'Arrest or no arrest'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}