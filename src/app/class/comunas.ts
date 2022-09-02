interface comunas {
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
}

export class Comunas {
    
    type?: string
    id?: string
    attributes?: comunas[];
    

    constructor(c:Comunas = {}) {
        this.type = c.type
        this.id = c.id
        this.attributes = c.attributes

    }
}
