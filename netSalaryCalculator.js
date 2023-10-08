//function that calculates net salary
function calculateNetSalary(basicSalary, benefits) {
//define the rates as per the links provided  
    const taxRate = 0.25;
    const nhifRate = 0.02;
    const nssfRate = 0.12;
//calculate the gross salary
    const grossSalary = basicSalary + benefits;
//calculate the tax,nssf and nhif deductions
    const tax = grossSalary * taxRate;
    const nhif = grossSalary * nhifRate;
    const nssf = grossSalary * nssfRate;
//calculate the net salary
    const netSalary = grossSalary - (tax + nhif +nssf);
//display the calculations
    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}