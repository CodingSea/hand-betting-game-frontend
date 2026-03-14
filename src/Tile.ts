export interface Tile
{
    type: "number" | "dragon" | "wind";
    value: string;
    display: string;
    currentValue: number;
}

export const defaultTiles: Tile[] = [
    { type: 'number', value: '1', display: '🀇', currentValue: 1 },
    { type: 'number', value: '2', display: '🀈', currentValue: 2 },
    { type: 'number', value: '3', display: '🀉', currentValue: 3 },
    { type: 'number', value: '4', display: '🀊', currentValue: 4 },
    { type: 'number', value: '5', display: '🀋', currentValue: 5 },
    { type: 'number', value: '6', display: '🀌', currentValue: 6 },
    { type: 'number', value: '7', display: '🀍', currentValue: 7 },
    { type: 'number', value: '8', display: '🀎', currentValue: 8 },
    { type: 'number', value: '9', display: '🀏', currentValue: 9 },

    { type: 'dragon', value: 'Red', display: '🀄', currentValue: 5 },
    { type: 'dragon', value: 'Green', display: '🀅', currentValue: 5 },
    { type: 'dragon', value: 'White', display: '🀆', currentValue: 5 },

    { type: 'wind', value: 'East Wind', display: '🀀', currentValue: 5 },
    { type: 'wind', value: 'South Wind', display: '🀁', currentValue: 5 },
    { type: 'wind', value: 'West Wind', display: '🀂', currentValue: 5 },
    { type: 'wind', value: 'North Wind', display: '🀃', currentValue: 5 }
];

export function getASet(setNumber: number): Tile[]
{
    const newTiles: Tile[] = [];
    let tiles: Tile[] = [...defaultTiles];

    tiles.forEach((tile) =>
    {
        for (let i = 0; i < setNumber; i++)
        {
            newTiles.push({ ...tile });
        }
    });

    return newTiles;
}