export interface CotizacionI {
    modelId?: number,
    brandId?: number,
    year?: number,
    carOwner?: number,
    nationalId?: string,
    firstName?: string,
    lastName?: string,
    birthdate?: string,
    countyId?: number,
    phone?:string,
    email?:string,
    carDealerData?: {
      name?: string,
      agentIdentificationNumber?:string,
    },
    car?: {
      brandName?: string
      modelName?: string
      modelYear?: number
    },
    contactType?: number,
    id?: string,
}
