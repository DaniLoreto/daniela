export interface OfertasI {

    offerId?: string;
    deductible?: string;
    service?: string;
    quoteId?: string;
    priceUf?: string;
    monthlyPriceCLP?: number
    monthlyPriceFixedPerKmCLP?: number;
    monthlyPricePerKmCLP?: number;
    uf?: number;
    type?: string;
    limit?: {
      km?: number;
      price?: string
    };
    pricePerKm?: string;
    slug?: string;
    product?: {
      id?: string;
      name?:string;
      code?: string;
      active?: boolean
      enabled?: boolean;
      partner?: boolean;
      slug?: string;
      division?: {
        name?: string;
        code?: string;
        logo?:string;
		description?: string;
        company?: {
          name?: string
        }
      };
      productAttributes:
      {
        value: string,
        enabled: false,
        extraDescription: string,
        entityCode: string,
        entityLabel: string,
        entityExtraDescription: string
      };
    }
    resultsUrl?: string;
    offerDetails?: string;

}

