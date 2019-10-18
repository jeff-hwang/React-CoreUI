import React, { useState, useEffect } from 'react';
//import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Bar, Line } from 'react-chartjs-2';
import {
    //    Badge,
    //    Button,
    ButtonDropdown,
    //    ButtonGroup,
    //    ButtonToolbar,
    Card,
    CardBody,
    //    CardFooter,
    //    CardHeader,
    //   CardTitle,
    //    Col,
    //    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    //    Progress,
    Row,
    //    Table,
} from 'reactstrap';

import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import axios from 'axios';
import { setState } from 'expect/build/jestMatchersObject';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Artiference() {
    const [state, setState] = useState({
        data1: [],
        data2: [],
        data3: [],
        elements: 27,
    });


    for (var i = 0; i <= state.elements; i++) {
        state.data1.push(random(50, 200));
        state.data2.push(random(80, 100));
        state.data3.push(65);
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
                data: state.data1,
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'transparent',
                borderColor: brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: state.data2,
            },
            {
                label: 'My Third dataset',
                backgroundColor: 'transparent',
                borderColor: brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: state.data3,
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
        const res = await axios.get("http://192.168.2.154:32353/lotto/815").then(res => {
            var jsonData = res.data;
            console.log(jsonData);
            setValue(jsonData.test);
        })
        //setValue(res);
    };

    // DidMount
    useEffect(() => {
        getAxios();
    }, [value]);

    return (
        <ul>
            <Row>
                <Card>
                    {value}
                    <CardBody>
                        <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                            <Line data={mainChart} options={mainChartOpts} height={300} />
                        </div>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card>
                    <ButtonDropdown className="mr-1" isOpen="true">
                        <DropdownToggle caret color="primary">
                            Button
                </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action Disabled</DropdownItem>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </Card>
            </Row>
        </ul>
    );
}
export default Artiference;

