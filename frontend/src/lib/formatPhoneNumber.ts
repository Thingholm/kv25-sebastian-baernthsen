export function formatPhoneNumber(phoneNumber: string | undefined) {
    if (phoneNumber === undefined) return;
    
    return phoneNumber.replace(/(..)/g, '$1 ').trim();
}