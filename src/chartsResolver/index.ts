import { Question, AnswerOption } from "../store/survey/interfaces";
import { BarType, BarDataset } from "./chart.interface";

export default (data: Question[]): any => {
    let chartLines: BarDataset[] = [];
    let result: BarType = {
        labels: [],
        datasets: []
    };
    data.forEach((question: Question) => {

        result.labels.push(question.questionTitle); // populate labels

        question.answerOptions.forEach((answerOption: AnswerOption, i: number) => {
            /* initialization */
            if (!chartLines[i]) chartLines[i] = { label: '' };
            if (!chartLines[i].label) chartLines[i].label = '';
            if (!chartLines[i].data) chartLines[i].data = [];
            /*          */
            chartLines[i].label = answerOption.text;
            chartLines[i].data!.push(answerOption.selectedByRespondents)
            chartLines[i].backgroundColor = getBackgroundColor(answerOption.text);
            chartLines[i].borderColor = getBorderColor(answerOption.text);
            chartLines[i].hoverBackgroundColor = getHoverBackgroundColor(answerOption.text);
            chartLines[i].hoverBorderColor = getHoverBorderColor(answerOption.text);
            chartLines[i].borderWidth = 1;
        })
    })
    result.datasets = chartLines;
    return result;

}

/* picks color based on the answer selected */
const getBackgroundColor = (text: string): string => {
    switch (text) {
        case 'Strongly disagree':
            return '#75260A';
        case 'Disagree':
            return '#EB4B13';
        case 'Neither agree nor disagree':
            return '#B5C2C4'
        case 'Agree':
            return '#11A323'
        case 'Strongly agree':
            return '#046D10'
        default:
            return 'white' // in case new option added we get white color
    }
}
/* picks color based on the answer selected */

const getBorderColor = (text: string): string => {
    switch (text) {
        case 'Strongly disagree':
            return '#581C07';
        case 'Disagree':
            return '#CE4211';
        case 'Neither agree nor disagree':
            return '#9BA6A8'
        case 'Agree':
            return '#0E8B1E'
        case 'Strongly agree':
            return '#03570D'
        default:
            return 'white' // in case new option added we get white color
    }
}

/* picks color based on the answer selected */
const getHoverBackgroundColor = (text: string): string => {
    switch (text) {
        case 'Strongly disagree':
            return '#3B1305';
        case 'Disagree':
            return '#B0380E';
        case 'Neither agree nor disagree':
            return '#818B8C'
        case 'Agree':
            return '#0C7419'
        case 'Strongly agree':
            return '#02420A'
        default:
            return 'white' // in case new option added we get white color
    }
}
/* picks color based on the answer selected */

const getHoverBorderColor = (text: string): string => {
    switch (text) {
        case 'Strongly disagree':
            return '#1D0902';
        case 'Disagree':
            return '#932F0C';
        case 'Neither agree nor disagree':
            return '#686F70'
        case 'Agree':
            return '#0A5D14'
        case 'Strongly agree':
            return '#02401D'
        default:
            return 'white' // in case new option added we get white color
    }
}
