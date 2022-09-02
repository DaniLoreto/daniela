export interface ModelosI {
         type :  string ,
         id :  string ,
         links : {
           self :  string 
        },
         attributes : {
           name :  string ,
           baseName :  string ,
           active : boolean,
           subState :  string ,
           urlName :  string ,
           logo :  string,
           urlized :  string ,
           countryCode :  string ,
           vehicleType : {
             id : string,
             name :  string, 
          }
        },
         relationships : {
           brand : {
             links : {
               self :  string ,
               related :  string 
            }
          }
        }
      
}
