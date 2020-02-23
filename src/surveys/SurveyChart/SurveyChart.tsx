import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import horizontalBar from '../../chartsResolver';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { withRouter } from 'react-router-dom';


// const HorizontalBar = require('react-chartjs-2').HorizontalBar;
// const Line = require('react-chartjs-2').Line;
const Bar = require('react-chartjs-2').Bar;
const Chart = require('react-chartjs-2').Chart;

type Props = ConnectedProps<typeof connector>
const mapState = (state: RootState, OwnProps: any): any =>
    ({
        surveys: state.surveys,
        currentSurvey: state.surveys.list
            .filter(survey => survey.surveyId === parseInt(OwnProps.match.params.id))
            .reduce((prev: any, curr: any) => curr, 0)
    })
const connector = connect(mapState)
type State = {};

Chart.defaults.global.defaultFontColor = 'white';  // global text color
Chart.defaults.global.defaultFontSize = '15';  // global text color

Chart.plugins.register(ChartDataLabels);


class SurveyChart extends React.Component<Props, State>  {

    plugins = () => ([{
        id: 333,
        beforeInit: (chart: Chart) => {
            console.log(chart);
        },
        beforeDraw: (chart: Chart) => {
            var ctx: CanvasRenderingContext2D | null = chart.ctx;  // getting instance
            ctx!.fillStyle = '#343a40'; // setting background color
            ctx!.fillRect(0, 0, chart.width!, chart.height!); // background size
        }

    }]);

    options = () => ({
        responsiveAnimationDuration: 2000, // animation
        maintainAspectRatio: false, // making a bit more responsive,
        responsive: true,
        plugins: {
            datalabels: {
                color: 'white',
                display: function (context: any) {
                    return context.dataset.data[context.dataIndex] > 5;
                },
                font: {
                    weight: 'bold'
                },
                formatter: Math.round
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },
        scales: {
            ticks: {
                callback: function (value: any, index: any, values: any) {
                    console.log(value)
                    return null;
                }
            },
            xAxes: [{
                stacked: true,
                fontColor: 'red'
            }],
            yAxes: [{
                stacked: true,
                fontColor: 'red'
            }]
        },
        tooltips: {
            titleSpacing: 3,
            titleMarginBottom: 20,
            xPadding: 15,
            yPadding: 15,
            titleFontSize: 20,
            bodyFontColor: 'white',
            borderColor: 'wheat',
            borderWidth: 1,
            bodySpacing: 4,
            callbacks: {
                label: function (tooltipItems: any, data: any) {
                    return `      ${tooltipItems.yLabel} - ${tooltipItems.xLabel}`;
                },
                afterLabel: function (tooltipItems: any, data: any) {
                    return `      ${tooltipItems.yLabel} - ${tooltipItems.xLabel}`;
                }
            }
        },
        title: {
            display: true,
            text: this.props.currentSurvey.title,
            fontColor: 'wheat',
            fontSize: '30'
        },
        layout: {
            padding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            }
        },
        animation: {
            duration: 1300
        },
    })

    data = (canvas: HTMLCanvasElement) => {
        const response = horizontalBar(this.props.currentSurvey.questions)  // getting formatted data
        return response
    }

    render = () => (
        <div className="row">
            <div className="col-6 col-md-4 text-center mt-5 mb-5">
                <button className="list-group-item list-group-item-action bg-dark text-wheat shadow-sm border border-secondary" onClick={() => this.props.history.push('/')}> Back to Surveys </button>
            </div>
            <div className="col-6 offset-md-4 col-md-4 text-center mt-5 mb-5">
                <button className="list-group-item list-group-item-action bg-dark text-wheat shadow-sm border border-secondary" onClick={() => this.props.history.push(`/${this.props.currentSurvey.surveyId}/details`)}> Go to Details </button>
            </div>
            <div className="col-12">
                {this.props.currentSurvey &&
                    <div className="card border border-dark bg-dark p-1"> {<Bar {... { data: this.data, plugins: this.plugins(), options: this.options() }} width={300} height={600} redraw />} </div>
                }
            </div>

        </div>
    )
}

export default withRouter(connector(SurveyChart));





