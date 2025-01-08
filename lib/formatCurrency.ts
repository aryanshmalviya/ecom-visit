export function formatCurrency(
    amount: number,
    currencyCodes: string = "USD"
) : string{
    try {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: currencyCodes.toUpperCase(),
        }).format(amount);
    } catch (error) {
        console.log("Invalid currency code:", currencyCodes, error);
        return `${currencyCodes.toUpperCase()} ${amount.toFixed(2)}`;
    }
}