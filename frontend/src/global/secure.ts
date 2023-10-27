function setItem(key: string, value: any) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Error setting data in local storage:', e);
    }
}
function getItem(key: string) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error getting data from local storage:', e);
        return null;
    }
}
async function removeItem(key: string) {
    try {
        await localStorage.removeItem(key);
        console.log("item removed")
    } catch (e) {
        console.error('Error removing data from local storage:', e);
    }
}
function clearStorage() {
    try {
        localStorage.clear();
    } catch (e) {
        console.error('Error clearing local storage:', e);
    }
}


export default { setItem, removeItem, clearStorage, getItem }