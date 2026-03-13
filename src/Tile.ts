export interface Tile
{
    type: 'number' | 'dragon' | 'wind';
    value: string;
    display: string;
}

export const defaultTiles: Tile[] = [
    { type: 'number', value: '1', display: '🀇' },
    { type: 'number', value: '2', display: '🀈' },
    { type: 'number', value: '3', display: '🀉' },
    { type: 'number', value: '4', display: '🀊' },
    { type: 'number', value: '5', display: '🀋' },
    { type: 'number', value: '6', display: '🀌' },
    { type: 'number', value: '7', display: '🀍' },
    { type: 'number', value: '8', display: '🀎' },
    { type: 'number', value: '9', display: '🀏' },

    { type: 'dragon', value: 'Red', display: '🀄' },
    { type: 'dragon', value: 'Green', display: '🀅' },
    { type: 'dragon', value: 'White', display: '🀆' },

    { type: 'wind', value: 'East', display: '🀀' },
    { type: 'wind', value: 'South', display: '🀁' },
    { type: 'wind', value: 'West', display: '🀂' },
    { type: 'wind', value: 'North', display: '🀃' }
]

export function makeASet(tiles: Tile[], setNumber: number): Tile[]
{
    const newTiles: Tile[] = [];

    tiles.forEach((tile) =>
    {
        for (let i = 0; i < setNumber; i++)
        {
            newTiles.push({ ...tile });
        }
    });

    return newTiles;
}