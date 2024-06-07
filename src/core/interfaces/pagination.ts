export interface IPagination<T> {
    count:    number;
    next:     string;
    previous: null;
    results:  T[];
}