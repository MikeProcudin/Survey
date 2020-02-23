
export interface BarType {
    labels: string[],
    datasets: BarDataset[]
}

export interface BarDataset {
    label: string,
    backgroundColor?: string,
    borderColor?: string,
    borderWidth?: number,
    hoverBackgroundColor?: string,
    hoverBorderColor?: string,
    data?: number[]
}









