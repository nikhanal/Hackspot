const priceFormatter = (amount:number):string=>{
    const formatted =  new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0,
    currencyDisplay:'code'
    }).format(amount);

    return formatted.replace("NPR", "Rs.");
}

export default priceFormatter