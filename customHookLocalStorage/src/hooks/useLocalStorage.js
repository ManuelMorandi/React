export const useLocalStorage = key => {

    const setLocalStorage = value => {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            alert("Algo salió mal");
        }
    }
    const getLocalStorage = () => {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            alert("Algo salió mal");
        }
    }
    const removeLocalStorage = () => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            alert("Algo salió mal");
        }
    }
 
    return { getLocalStorage, setLocalStorage, removeLocalStorage };
}
