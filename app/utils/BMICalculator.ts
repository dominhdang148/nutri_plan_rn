export const BMICalculator = (weight: number, height: number): number => {
    return Number((weight / ((height / 100) ** 2)).toFixed(2));
}