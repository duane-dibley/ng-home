let timer;

export function debounceFn(delay: number, callback: Function, args: any = null): void {
    clearTimeout(timer);
    timer = setTimeout(done, delay);

    function done() {
        callback(args);
    }
}
