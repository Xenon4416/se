import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'reactstrap';
const chartColor = '#FFFFFF';

const data = (canvas) => {
    let ctx = canvas.getContext("2d");


    let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Active Users",
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f96332",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,

            data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
    }
};
const options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        bodySpacing: 4,
        mode:"nearest",
        intersect: 0,
        position:"nearest",
        xPadding:10,
        yPadding:10,
        caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
            display:0,
            ticks: {
                display: false
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }],
        xAxes: [{
            display:0,
            ticks: {
                display: false
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }]
    },
    layout:{
        padding:{left:15,right:15,top:10,bottom:15},
    },
    border:{
        backgroundColor: "#2a2438"
    }
};

export class LineCharts extends React.Component{
    render(){
        return(

            <Card style={{backgroundColor: '#272a3d', padding:'10px', width:'1030px',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                <Line style={{ borderColor: '#272a3d' }} data={data} options={options} />
            </Card>
        );
    }
}