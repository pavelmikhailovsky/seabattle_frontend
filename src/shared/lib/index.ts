export const createArrayNumbers = (start: number, stop: number, step: number) =>
    Array.from({length: (stop - start) / step + 1}, (v, i) => start + i * step);