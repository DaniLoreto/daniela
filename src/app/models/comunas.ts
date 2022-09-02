export interface ComunasI {
    type?: string
    id?: string
    attributes?:[
        name: string,
        urlName: string,
        ineCode: string,
        cityId: number,
        region: {
            id: number,
            name: string,
            urlName: string,
            ineCode: string,
            position: number
        },
        province: {
            id: number,
            name: string,
            urlName: string,
            ineCode: string
        }

    ];
}
