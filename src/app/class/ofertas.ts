interface producto{
    value: string;
    enabled: boolean;
    extraDescription: null;
    entityCode: string;
    entityLabel: string;
    entityExtraDescription: null
  }
  
  export class Ofertas {
  
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
        productAttributes: producto[]
      };
      resultsUrl?: string;
      offerDetails?: string;
  
     constructor(o:Ofertas = {}){
     
  
        this.offerId					= o.offerId
      this.deductible					= o.deductible					
      this.service                   	= o.service                   
      this.quoteId                   	= o.quoteId                   
      this.priceUf                   	= o.priceUf                                         
      this.monthlyPriceCLP          	= o.monthlyPriceCLP           
      this.monthlyPriceFixedPerKmCLP 	= o.monthlyPriceFixedPerKmCLP 
      this.monthlyPricePerKmCLP      	= o.monthlyPricePerKmCLP
        this.uf                        	= o.uf                        
      this.type                      	= o.type
        this.limit				          		= o.limit                                    
      this.pricePerKm                	= o.pricePerKm                
      this.slug                      	= o.slug                      
      this.product					          =o.product 	    
      this.resultsUrl                	= o.resultsUrl                
      this.offerDetails              	= o.offerDetails              
  
      }
  }
