import React, { useState, useEffect } from 'react';
//import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Bar, Line } from 'react-chartjs-2';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
} from 'reactstrap';

import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import axios from 'axios';
import { setState } from 'expect/build/jestMatchersObject';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Artiference() {
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var elements = 27;

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50, 200));
        data2.push(random(80, 100));
        data3.push(65);
    }
    const brandPrimary = getStyle('--primary')
    const brandSuccess = getStyle('--success')
    const brandInfo = getStyle('--info')
    const brandWarning = getStyle('--warning')
    const brandDanger = getStyle('--danger')

    const mainChart = {
        // x labels
        //labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        labels: [],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: hexToRgba(brandInfo, 10),
                borderColor: brandInfo,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data1,
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'transparent',
                borderColor: brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data2,
            },
            {
                label: 'My Third dataset',
                backgroundColor: 'transparent',
                borderColor: brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: data3,
            },
        ],
    };
    const mainChartOpts = {
        tooltips: {
            enabled: false,
            custom: CustomTooltips,
            intersect: true,
            mode: 'index',
            position: 'nearest',
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
                }
            }
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        max: 250,
                    },
                }],
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            },
        },
    };

    const [value, setValue] = useState('');
    // getData from Backend
    async function getAxios(commentId) {
        const res = await axios.get("http://192.168.2.154:32353")
        setValue(res.data);
    };

    // DidMount
    useEffect(() => {
        getAxios();
    }, []);

    return (
        <>
            <Row>
                <CardBody>
                    <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                        <Line data={mainChart} options={mainChartOpts} height={300} />
                    </div>
                </CardBody>
                {value}
            </Row>
        </>
    );
}
export default Artiference;

