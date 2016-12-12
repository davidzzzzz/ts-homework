export function findLowest(input:Array<number>) {
    return input.reduce( (lowest, current) => {
        return lowest < current ? lowest : current;
    }, Number.MAX_VALUE);
}