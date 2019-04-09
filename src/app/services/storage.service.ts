import { empty } from '../libraries/utils/empty';

export class LocalStorage {
    public static getString(key: string, defValue: string): string {
        const value = localStorage.getItem(key);
        return empty(value) ? defValue : value;
    }

    public static setString(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public static getNumber(key: string, defValue: number): number {
        const value = parseInt(LocalStorage.getString(key, String(defValue)));
        return isNaN(value) ? defValue : value;
    }

    public static setNumber(key: string, value: number): void {
        LocalStorage.setString(key, String(value));
    }

    public static getBool(key: string, defValue: boolean): boolean {
        switch (LocalStorage.getString(key, String(defValue)).toLowerCase()) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                return defValue;
        }
    }

    public static setBool(key: string, value: boolean): void {
        LocalStorage.setString(key, String(value));
    }

    public static getJSON<T>(key: string, defValue: T): T {
        return JSON.parse(LocalStorage.getString(key, JSON.stringify(defValue)));
    }

    public static setJSON<T>(key: string, value: T): void {
        LocalStorage.setString(key, JSON.stringify(value));
    }
}