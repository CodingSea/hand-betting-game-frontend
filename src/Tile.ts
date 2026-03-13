export interface Tile
{
    type: 'number' | 'dragon' | 'wind';
    value: string;
}

export const defaultTiles: Tile[] = [
    { type: 'number', value: '1' }, { type: 'number', value: '2' }, { type: 'number', value: '3' }, { type: 'number', value: '4' },
    { type: 'number', value: '5' }, { type: 'number', value: '6' }, { type: 'number', value: '7' }, { type: 'number', value: '8' },
    { type: 'number', value: '9' },

    { type: 'dragon', value: 'East' }, { type: 'dragon', value: 'West' }, { type: 'dragon', value: 'South' },
    { type: 'dragon', value: 'North' }, { type: 'dragon', value: 'Center' },

    { type: 'wind', value: 'East Wind' }, { type: 'wind', value: 'South Wind' }, { type: 'wind', value: 'West Wind' },
    { type: 'wind', value: 'North Wind' }
]